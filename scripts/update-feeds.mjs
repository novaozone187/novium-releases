import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = 'novaozone187/novium-releases';
const SOURCE_REPO = 'novaozone187/Novium';
const DOWNLOAD_PAGE_URL = 'https://noviumecosystem.vercel.app/download';
const LATEST_RELEASE_URL = `https://github.com/${REPO}/releases/latest`;
const ALL_RELEASES_URL = `https://github.com/${REPO}/releases`;
const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/main`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const README_PATH = path.join(ROOT, 'README.md');
const MANIFEST_PATH = path.join(ROOT, 'manifest.json');
const LEGACY_PULSAR_FEED_PATH = path.join(ROOT, 'feed', 'pulsar.yml');

const FEEDS = {
  horizon: path.join(ROOT, 'feeds', 'horizon', 'latest.yml'),
  pulsar: path.join(ROOT, 'feeds', 'pulsar', 'latest.yml'),
  blackeye: path.join(ROOT, 'feeds', 'blackeye', 'latest.yml'),
  pulsarDaemon: path.join(ROOT, 'feeds', 'daemons', 'pulsar-daemon.json'),
  blackeyeDaemon: path.join(ROOT, 'feeds', 'daemons', 'blackeye-daemon.json'),
};

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const waitForAssets = process.env.WAIT_FOR_ASSETS === '1';

function githubHeaders(accept = 'application/vnd.github+json') {
  const headers = {
    Accept: accept,
    'User-Agent': 'novium-releases-feed-updater',
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: githubHeaders(),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${url}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: githubHeaders('application/octet-stream'),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) return '';
  return res.text();
}

function parseYamlSha512(yamlText) {
  if (!yamlText) return '';
  const match = yamlText.match(/^sha512:\s*([^\r\n]+)/m);
  return match ? match[1].trim() : '';
}

function rewriteGenericFeedYaml(yamlText, downloadUrl) {
  if (!yamlText || !downloadUrl) return '';
  let out = yamlText.replace(/^(\s*-\s*url:\s*)([^\r\n]+)/m, `$1${downloadUrl}`);
  out = out.replace(/^(path:\s*)([^\r\n]+)/m, `$1${downloadUrl}`);
  return out.endsWith('\n') ? out : `${out}\n`;
}

function formatBytes(bytes) {
  if (!bytes || typeof bytes !== 'number') return '—';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function selectAppAssets(assets, exePrefix, feedNames) {
  const list = Array.isArray(assets) ? assets : [];
  const primary =
    list.find((a) => new RegExp(`^${exePrefix}-.+\\.exe$`, 'i').test(a.name ?? '')) ??
    list.find((a) => /\.exe$/i.test(a.name ?? ''));
  const secondary = list.find(
    (a) => /\.exe$/i.test(a.name ?? '') && a.name !== primary?.name,
  );
  const blockmap = list.find((a) => primary && a.name === `${primary.name}.blockmap`);
  const feedYml = list.find((a) => feedNames.includes(a.name));
  return { primary, secondary, blockmap, feedYml };
}

function selectDaemonAssets(assets, daemonName) {
  const list = Array.isArray(assets) ? assets : [];
  const winZip = list.find((a) => /-win32-x64\.zip$/i.test(a.name ?? ''));
  const linuxTgz = list.find((a) => /-linux-x64\.tar\.gz$/i.test(a.name ?? ''));
  const armTgz = list.find((a) => /-linux-arm64\.tar\.gz$/i.test(a.name ?? ''));
  const metaJson = list.find((a) => a.name === `${daemonName}.json` || a.name === 'bundle-meta.json');
  return { winZip, linuxTgz, armTgz, metaJson };
}

function cleanReleaseBody(body) {
  if (!body) return '';
  return body
    .replace(/>\s*\[!IMPORTANT\]\s*\r?\n(?:>\s*.*\r?\n?)*/i, '')
    .trim();
}

function classifyReleases(releases) {
  const published = releases.filter((r) => !r.draft && !r.prerelease);
  const pulsarDaemonReleases = published.filter((r) => String(r.tag_name || '').startsWith('pulsar-daemon-'));
  const blackeyeDaemonReleases = published.filter((r) => String(r.tag_name || '').startsWith('blackeye-daemon-'));
  const pulsarReleases = published.filter(
    (r) => String(r.tag_name || '').startsWith('pulsar-') && !String(r.tag_name || '').startsWith('pulsar-daemon-'),
  );
  const blackeyeReleases = published.filter(
    (r) => String(r.tag_name || '').startsWith('blackeye-') && !String(r.tag_name || '').startsWith('blackeye-daemon-'),
  );
  const horizonReleases = published.filter((r) => {
    const t = String(r.tag_name || '');
    return (
      !t.startsWith('pulsar-') &&
      !t.startsWith('blackeye-') &&
      (t.startsWith('v') || t.startsWith('horizon-'))
    );
  });
  return {
    horizonReleases,
    pulsarReleases,
    blackeyeReleases,
    pulsarDaemonReleases,
    blackeyeDaemonReleases,
  };
}

async function getReleasesWithRetry() {
  const maxAttempts = waitForAssets ? 5 : 1;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const releases = await fetchJson(`https://api.github.com/repos/${REPO}/releases?per_page=30`);
    const classified = classifyReleases(releases);
    const latestHorizon = classified.horizonReleases[0];
    if (!latestHorizon) throw new Error('No published Horizon releases found.');

    const { primary, feedYml } = selectAppAssets(latestHorizon.assets, 'Novium-Horizon-Setup', ['latest.yml']);
    if ((primary && feedYml) || attempt === maxAttempts) {
      return classified;
    }

    console.log(`Attempt ${attempt}/${maxAttempts}: waiting 15s for assets on ${latestHorizon.tag_name}...`);
    await new Promise((resolve) => setTimeout(resolve, 15000));
  }
  return classifyReleases([]);
}

async function syncAppFeed(release, exePrefix, feedNames, targetPaths) {
  if (!release) return { yamlText: '', assets: selectAppAssets([], exePrefix, feedNames) };
  const assets = selectAppAssets(release.assets, exePrefix, feedNames);
  let yamlText = '';
  if (assets.primary?.browser_download_url && assets.feedYml?.browser_download_url) {
    const raw = await fetchText(assets.feedYml.browser_download_url);
    yamlText = rewriteGenericFeedYaml(raw, assets.primary.browser_download_url);
    if (yamlText) {
      for (const outPath of targetPaths) {
        await fs.mkdir(path.dirname(outPath), { recursive: true });
        await fs.writeFile(outPath, yamlText, 'utf8');
      }
    }
  }
  return { yamlText, assets };
}

async function syncDaemonFeed(release, daemonName, outPath, defaultNotes) {
  if (!release) return null;
  const ver = String(release.tag_name).replace(new RegExp(`^${daemonName}-v`), '');
  const { winZip, linuxTgz, armTgz, metaJson } = selectDaemonAssets(release.assets, daemonName);

  let parsedMeta = {};
  if (metaJson?.browser_download_url) {
    try {
      parsedMeta = JSON.parse(await fetchText(metaJson.browser_download_url));
    } catch {}
  }

  const artifacts = {};
  for (const [key, asset, entrypoint] of [
    ['win32-x64', winZip, `bin/${daemonName}.cmd`],
    ['linux-x64', linuxTgz, `bin/${daemonName}`],
    ['linux-arm64', armTgz, `bin/${daemonName}`],
  ]) {
    if (!asset) continue;
    const sha256 =
      asset.digest?.replace(/^sha256:/, '') ||
      parsedMeta?.artifacts?.[key]?.sha256 ||
      '';
    artifacts[key] = {
      url: asset.browser_download_url,
      sha256,
      size: asset.size,
      entrypoint: parsedMeta?.artifacts?.[key]?.entrypoint || entrypoint,
    };
  }

  const manifest = {
    schemaVersion: 1,
    name: daemonName,
    version: ver,
    channel: 'stable',
    protocolVersion: parsedMeta?.protocolVersion || 2,
    minCompatibleVersion: parsedMeta?.minCompatibleVersion || '0.1.0',
    runtime: parsedMeta?.runtime || 'node-bundle',
    publishedAt: release.published_at || release.created_at || new Date().toISOString(),
    releaseNotes: parsedMeta?.releaseNotes || defaultNotes,
    artifacts,
  };

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  return { release, version: ver, manifest, assets: { winZip, linuxTgz, armTgz } };
}

function buildAssetRows(assets, primarySha256Override = '') {
  const rows = [];
  if (assets.primary) {
    const digest = primarySha256Override || assets.primary.digest?.replace(/^sha256:/, '') || 'See GitHub release';
    rows.push(
      `| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [${assets.primary.name}](${assets.primary.browser_download_url}) | ${formatBytes(assets.primary.size)} | \`${digest}\` |`,
    );
  }
  if (assets.secondary) {
    rows.push(
      `| Windows 10/11 x64 | Compatibility Alias (.exe) | [${assets.secondary.name}](${assets.secondary.browser_download_url}) | ${formatBytes(assets.secondary.size)} | \`${assets.secondary.digest?.replace(/^sha256:/, '') || 'See GitHub release'}\` |`,
    );
  }
  if (assets.blockmap) {
    rows.push(
      `| Windows 10/11 x64 | Differential Blockmap | [${assets.blockmap.name}](${assets.blockmap.browser_download_url}) | ${formatBytes(assets.blockmap.size)} | \`${assets.blockmap.digest?.replace(/^sha256:/, '') || '—'}\` |`,
    );
  }
  if (assets.feedYml) {
    rows.push(
      `| Auto-Updater | Electron Updater Feed | [${assets.feedYml.name}](${assets.feedYml.browser_download_url}) | ${formatBytes(assets.feedYml.size)} | \`${assets.feedYml.digest?.replace(/^sha256:/, '') || '—'}\` |`,
    );
  }
  return rows;
}

export async function updateAllFeedsAndReadme() {
  const {
    horizonReleases,
    pulsarReleases,
    blackeyeReleases,
    pulsarDaemonReleases,
    blackeyeDaemonReleases,
  } = await getReleasesWithRetry();

  const latestHorizon = horizonReleases[0];
  const latestPulsar = pulsarReleases[0] || null;
  const latestBlackEye = blackeyeReleases[0] || null;

  const horizonSync = await syncAppFeed(latestHorizon, 'Novium-Horizon-Setup', ['latest.yml'], [FEEDS.horizon]);
  const pulsarSync = await syncAppFeed(
    latestPulsar,
    'Novium-Pulsar-Setup',
    ['latest.yml', 'pulsar.yml'],
    [FEEDS.pulsar, LEGACY_PULSAR_FEED_PATH],
  );
  const blackeyeSync = await syncAppFeed(
    latestBlackEye,
    'Novium-BlackEye-Setup',
    ['latest.yml', 'blackeye.yml'],
    [FEEDS.blackeye],
  );

  const pulsarDaemonSync = await syncDaemonFeed(
    pulsarDaemonReleases[0] || null,
    'pulsar-daemon',
    FEEDS.pulsarDaemon,
    'Leaderless SWIM + HLC CRDT gossip, relay shaping, and elected phone dashboard.',
  );
  const blackeyeDaemonSync = await syncDaemonFeed(
    blackeyeDaemonReleases[0] || null,
    'blackeye-daemon',
    FEEDS.blackeyeDaemon,
    'Autonomous dual-mode security sentry with Pulsar-linked inspection and OS fallback.',
  );

  const buildAppManifestEntry = (rel, sync, feedRelPath) => {
    if (!rel) return null;
    const tag = rel.tag_name;
    const version = tag.replace(/^(horizon-|pulsar-|blackeye-)?v/, '');
    const exe = sync.assets.primary;
    return {
      version,
      tag,
      publishedAt: rel.published_at || rel.created_at,
      feedUrl: `${RAW_BASE}/${feedRelPath}`,
      platforms: exe
        ? {
            'win32-x64': {
              url: exe.browser_download_url,
              sha512: parseYamlSha512(sync.yamlText),
              sha256: exe.digest?.replace(/^sha256:/, '') || '',
              size: exe.size,
            },
          }
        : {},
    };
  };

  const rootManifest = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    apps: {
      horizon: buildAppManifestEntry(latestHorizon, horizonSync, 'feeds/horizon/latest.yml'),
      pulsar: buildAppManifestEntry(latestPulsar, pulsarSync, 'feeds/pulsar/latest.yml'),
      blackeye: buildAppManifestEntry(latestBlackEye, blackeyeSync, 'feeds/blackeye/latest.yml'),
    },
    daemons: {
      'pulsar-daemon': pulsarDaemonSync
        ? {
            manifestUrl: `${RAW_BASE}/feeds/daemons/pulsar-daemon.json`,
            version: pulsarDaemonSync.version,
            tag: pulsarDaemonSync.release.tag_name,
          }
        : null,
      'blackeye-daemon': blackeyeDaemonSync
        ? {
            manifestUrl: `${RAW_BASE}/feeds/daemons/blackeye-daemon.json`,
            version: blackeyeDaemonSync.version,
            tag: blackeyeDaemonSync.release.tag_name,
          }
        : null,
    },
  };

  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(rootManifest, null, 2)}\n`, 'utf8');

  // Build README.md covering 3 Apps + 2 Daemons
  const tag = latestHorizon.tag_name;
  const version = tag.replace(/^v/, '');
  const publishedDate = (latestHorizon.published_at || latestHorizon.created_at || '').slice(0, 10);
  const sha512 = parseYamlSha512(horizonSync.yamlText);
  const primaryFileName = horizonSync.assets.primary?.name ?? `Novium-Horizon-Setup-${version}.exe`;
  const releaseNotes = cleanReleaseBody(latestHorizon.body);

  const matrixRows = [
    latestHorizon &&
      `| **Novium Horizon** | \`${latestHorizon.tag_name}\` | Windows x64 | [\`feeds/horizon/latest.yml\`](${RAW_BASE}/feeds/horizon/latest.yml) |`,
    latestPulsar &&
      `| **Novium Pulsar** | \`${latestPulsar.tag_name}\` | Windows x64 | [\`feeds/pulsar/latest.yml\`](${RAW_BASE}/feeds/pulsar/latest.yml) |`,
    latestBlackEye &&
      `| **Novium BlackEye** | \`${latestBlackEye.tag_name}\` | Windows x64 | [\`feeds/blackeye/latest.yml\`](${RAW_BASE}/feeds/blackeye/latest.yml) |`,
    pulsarDaemonSync &&
      `| **Pulsar Daemon** | \`${pulsarDaemonSync.release.tag_name}\` | Win x64 / Linux x64 | [\`feeds/daemons/pulsar-daemon.json\`](${RAW_BASE}/feeds/daemons/pulsar-daemon.json) |`,
    blackeyeDaemonSync &&
      `| **BlackEye Daemon** | \`${blackeyeDaemonSync.release.tag_name}\` | Win x64 / Linux x64 | [\`feeds/daemons/blackeye-daemon.json\`](${RAW_BASE}/feeds/daemons/blackeye-daemon.json) |`,
  ].filter(Boolean);

  const recentRows = horizonReleases.slice(0, 5).map((rel) => {
    const relDate = (rel.published_at || rel.created_at || '').slice(0, 10);
    const { primary: relExe } = selectAppAssets(rel.assets, 'Novium-Horizon-Setup', ['latest.yml']);
    const exeCell = relExe
      ? `[${relExe.name}](${relExe.browser_download_url}) (${formatBytes(relExe.size)})`
      : '—';
    return `| [${rel.tag_name}](${rel.html_url}) | ${relDate} | ${exeCell} |`;
  });

  const renderAppSection = (title, rel, sync, feedRelPath) => {
    if (!rel) return [];
    const rTag = rel.tag_name;
    const rDate = (rel.published_at || rel.created_at || '').slice(0, 10);
    const rows = buildAssetRows(sync.assets);
    return [
      `---`,
      ``,
      `## ${title} (\`${rTag}\`)`,
      ``,
      `- **Release Page:** [${rel.name || title}](${rel.html_url})`,
      `- **Published:** \`${rDate}\``,
      `- **Updater Feed:** [\`${feedRelPath}\`](${RAW_BASE}/${feedRelPath})`,
      ``,
      `| Target | Package | File | Size | SHA-256 |`,
      `|---|---|---|---|---|`,
      ...rows,
      ``,
    ];
  };

  const renderDaemonSection = (title, sync, feedRelPath) => {
    if (!sync) return [];
    const rDate = (sync.release.published_at || sync.release.created_at || '').slice(0, 10);
    const rows = Object.entries(sync.manifest.artifacts).map(([plat, art]) => {
      const name = path.basename(new URL(art.url).pathname);
      return `| \`${plat}\` | Daemon Bundle | [${name}](${art.url}) | ${formatBytes(art.size)} | \`${art.sha256 || '—'}\` |`;
    });
    return [
      `---`,
      ``,
      `## ${title} (\`${sync.release.tag_name}\`)`,
      ``,
      `- **Release Page:** [${sync.release.name || title}](${sync.release.html_url})`,
      `- **Published:** \`${rDate}\``,
      `- **Daemon Feed:** [\`${feedRelPath}\`](${RAW_BASE}/${feedRelPath})`,
      ``,
      `| Platform | Package | File | Size | SHA-256 |`,
      `|---|---|---|---|---|`,
      ...rows,
      ``,
    ];
  };

  const lines = [
    `<div align="center">`,
    ``,
    `# Novium Releases`,
    ``,
    `[![Latest Horizon](https://img.shields.io/badge/HORIZON-${encodeURIComponent(tag)}-10b981?style=for-the-badge&labelColor=050608)](${LATEST_RELEASE_URL})`,
    ...(latestPulsar
      ? [`[![Latest Pulsar](https://img.shields.io/badge/PULSAR-${encodeURIComponent(latestPulsar.tag_name.replace(/^pulsar-/, ''))}-38bdf8?style=for-the-badge&labelColor=050608)](${latestPulsar.html_url})`]
      : []),
    ...(latestBlackEye
      ? [`[![Latest BlackEye](https://img.shields.io/badge/BLACKEYE-${encodeURIComponent(latestBlackEye.tag_name.replace(/^blackeye-/, ''))}-ef4444?style=for-the-badge&labelColor=050608)](${latestBlackEye.html_url})`]
      : []),
    `[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](${DOWNLOAD_PAGE_URL})`,
    ``,
    `Unified binary distribution, auto-updater feeds (\`feeds/\`), and daemon bundles for **Novium Horizon**, **Novium Pulsar**, **Novium BlackEye**, **pulsar-daemon**, and **blackeye-daemon**.`,
    ``,
    `[**Latest Horizon (${tag})**](${LATEST_RELEASE_URL}) • [**All Releases**](${ALL_RELEASES_URL}) • [**Index Manifest (\`manifest.json\`)**](${RAW_BASE}/manifest.json) • [**Source Repository**](https://github.com/${SOURCE_REPO})`,
    ``,
    `</div>`,
    ``,
    `---`,
    ``,
    `## Release Matrix (3 Apps + 2 Daemons)`,
    ``,
    `| Component | Latest Tag | Platforms | Update Feed |`,
    `|---|---|---|---|`,
    ...matrixRows,
    ``,
    `> [!NOTE]`,
    `> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen may prompt on unsigned \`.exe\` installers. Click **"More info"** → **"Run anyway"** to proceed.`,
    ``,
    `---`,
    ``,
    `## Latest Release: Novium Horizon ${tag}`,
    ``,
    `- **Release Page:** [${latestHorizon.name || `Novium Horizon ${tag}`}](${latestHorizon.html_url || LATEST_RELEASE_URL})`,
    `- **Published:** \`${publishedDate}\``,
    `- **Updater Feed:** [\`feeds/horizon/latest.yml\`](${RAW_BASE}/feeds/horizon/latest.yml)`,
    ...(sha512 ? [`- **Installer SHA-512:** \`${sha512}\``] : []),
    ``,
    `| Target | Package | File | Size | SHA-256 |`,
    `|---|---|---|---|---|`,
    ...buildAssetRows(horizonSync.assets),
    ``,
    ...(releaseNotes ? [`### Release Notes (${tag})`, ``, releaseNotes, ``] : []),
    ...renderAppSection('Latest Release: Novium Pulsar', latestPulsar, pulsarSync, 'feeds/pulsar/latest.yml'),
    ...renderAppSection('Latest Release: Novium BlackEye', latestBlackEye, blackeyeSync, 'feeds/blackeye/latest.yml'),
    ...renderDaemonSection('Daemon Feed: pulsar-daemon', pulsarDaemonSync, 'feeds/daemons/pulsar-daemon.json'),
    ...renderDaemonSection('Daemon Feed: blackeye-daemon', blackeyeDaemonSync, 'feeds/daemons/blackeye-daemon.json'),
    `---`,
    ``,
    `## Recent Horizon Releases`,
    ``,
    `| Tag | Published | Installer (.exe) |`,
    `|---|---|---|`,
    ...recentRows,
    ``,
    `Full archive: [\`${REPO}/releases\`](${ALL_RELEASES_URL})`,
    ``,
    `---`,
    ``,
    `## Verify Integrity (PowerShell)`,
    ``,
    `\`\`\`powershell`,
    `Get-FileHash -Path "${primaryFileName}" -Algorithm SHA256`,
    `\`\`\``,
    ``,
  ];

  await fs.writeFile(README_PATH, lines.join('\n'), 'utf8');
  console.log(`Updated manifest.json, feeds/, and README.md (${tag}).`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  updateAllFeedsAndReadme().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
