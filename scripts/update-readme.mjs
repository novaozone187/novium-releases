import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = 'novaozone187/novium-releases';
const SOURCE_REPO = 'novaozone187/Novium';
const DOWNLOAD_PAGE_URL = 'https://noviumecosystem.vercel.app/download';
const LATEST_RELEASE_URL = `https://github.com/${REPO}/releases/latest`;
const ALL_RELEASES_URL = `https://github.com/${REPO}/releases`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const README_PATH = path.resolve(__dirname, '..', 'README.md');
const PULSAR_FEED_PATH = path.resolve(__dirname, '..', 'feed', 'pulsar.yml');

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const waitForAssets = process.env.WAIT_FOR_ASSETS === '1';

function githubHeaders(accept = 'application/vnd.github+json') {
  const headers = {
    Accept: accept,
    'User-Agent': 'novium-releases-readme-updater',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: githubHeaders(),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status} for ${url}`);
  }
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

function parseLatestYamlSha512(yamlText) {
  if (!yamlText) return '';
  const match = yamlText.match(/^sha512:\s*([^\r\n]+)/m);
  return match ? match[1].trim() : '';
}

function formatBytes(bytes) {
  if (!bytes || typeof bytes !== 'number') return '—';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function selectInstallers(assets) {
  const list = Array.isArray(assets) ? assets : [];
  const primary =
    list.find((a) => /^Novium-Horizon-Setup-.+\.exe$/i.test(a.name ?? '')) ??
    list.find((a) => /\.exe$/i.test(a.name ?? ''));
  const secondary = list.find(
    (a) => /^Novium\.Horizon\.Setup\..+\.exe$/i.test(a.name ?? '') && a.name !== primary?.name,
  );
  const blockmap = list.find(
    (a) => primary && a.name === `${primary.name}.blockmap`,
  );
  const latestYml = list.find((a) => a.name === 'latest.yml');
  return { primary, secondary, blockmap, latestYml };
}

function cleanReleaseBody(body) {
  if (!body) return '';
  // Strip duplicated standard disclaimer block since README already highlights it at the top.
  return body
    .replace(
      />\s*\[!IMPORTANT\]\s*\r?\n(?:>\s*.*\r?\n?)*/i,
      '',
    )
    .trim();
}

async function getReleasesWithRetry() {
  const maxAttempts = waitForAssets ? 5 : 1;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const releases = await fetchJson(
      `https://api.github.com/repos/${REPO}/releases?per_page=20`,
    );
    const published = releases.filter((r) => !r.draft && !r.prerelease);
    const horizonReleases = published.filter((r) => !String(r.tag_name || '').startsWith('pulsar-'));
    const pulsarReleases = published.filter((r) => String(r.tag_name || '').startsWith('pulsar-'));
    const latestHorizon = horizonReleases[0];
    if (!latestHorizon) {
      throw new Error('No published non-draft Horizon releases found.');
    }

    const { primary, latestYml } = selectInstallers(latestHorizon.assets);
    if ((primary && latestYml) || attempt === maxAttempts) {
      return { horizonReleases, pulsarReleases };
    }

    console.log(
      `Attempt ${attempt}/${maxAttempts}: waiting 15s for installer assets on ${latestHorizon.tag_name}...`,
    );
    await new Promise((resolve) => setTimeout(resolve, 15000));
  }
  return { horizonReleases: [], pulsarReleases: [] };
}

function selectPulsarAssets(assets) {
  const list = Array.isArray(assets) ? assets : [];
  const primary =
    list.find((a) => /^Novium-Pulsar-Setup-.+\.exe$/i.test(a.name ?? '')) ??
    list.find((a) => /\.exe$/i.test(a.name ?? ''));
  const blockmap = list.find(
    (a) => primary && a.name === `${primary.name}.blockmap`,
  );
  const pulsarYml = list.find((a) => a.name === 'pulsar.yml');
  return { primary, blockmap, pulsarYml };
}

function rewritePulsarFeedYaml(yamlText, downloadUrl) {
  if (!yamlText || !downloadUrl) return '';
  let out = yamlText.replace(/^(\s*-\s*url:\s*)([^\r\n]+)/m, `$1${downloadUrl}`);
  out = out.replace(/^(path:\s*)([^\r\n]+)/m, `$1${downloadUrl}`);
  return out.endsWith('\n') ? out : `${out}\n`;
}

async function main() {
  const { horizonReleases: releases, pulsarReleases } = await getReleasesWithRetry();
  const latest = releases[0];
  const latestPulsar = pulsarReleases[0] || null;

  if (latestPulsar) {
    const { primary: pExe, pulsarYml } = selectPulsarAssets(latestPulsar.assets);
    if (pExe?.browser_download_url && pulsarYml?.browser_download_url) {
      const pYamlText = await fetchText(pulsarYml.browser_download_url);
      const rewritten = rewritePulsarFeedYaml(pYamlText, pExe.browser_download_url);
      if (rewritten) {
        await fs.mkdir(path.dirname(PULSAR_FEED_PATH), { recursive: true });
        await fs.writeFile(PULSAR_FEED_PATH, rewritten, 'utf8');
        console.log(`Updated ${PULSAR_FEED_PATH} for ${latestPulsar.tag_name}.`);
      }
    }
  }
  const tag = latest.tag_name;
  const version = tag.replace(/^v/, '');
  const publishedDate = (latest.published_at || latest.created_at || '').slice(0, 10);

  const { primary, secondary, blockmap, latestYml } = selectInstallers(latest.assets);

  let sha512 = '';
  if (latestYml?.browser_download_url) {
    const yamlText = await fetchText(latestYml.browser_download_url);
    sha512 = parseLatestYamlSha512(yamlText);
  }

  const primaryDigest = primary?.digest?.startsWith('sha256:')
    ? primary.digest.slice(7)
    : '';
  const secondaryDigest = secondary?.digest?.startsWith('sha256:')
    ? secondary.digest.slice(7)
    : '';

  const assetRows = [];
  if (primary) {
    assetRows.push(
      `| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [${primary.name}](${primary.browser_download_url}) | ${formatBytes(primary.size)} | \`${primaryDigest || 'See GitHub release'}\` |`,
    );
  }
  if (secondary) {
    assetRows.push(
      `| Windows 10/11 x64 | Compatibility Alias (.exe) | [${secondary.name}](${secondary.browser_download_url}) | ${formatBytes(secondary.size)} | \`${secondaryDigest || 'See GitHub release'}\` |`,
    );
  }
  if (blockmap) {
    assetRows.push(
      `| Windows 10/11 x64 | Differential Blockmap | [${blockmap.name}](${blockmap.browser_download_url}) | ${formatBytes(blockmap.size)} | \`${blockmap.digest?.replace(/^sha256:/, '') || '—'}\` |`,
    );
  }
  if (latestYml) {
    assetRows.push(
      `| Auto-Updater | Electron Updater Feed | [${latestYml.name}](${latestYml.browser_download_url}) | ${formatBytes(latestYml.size)} | \`${latestYml.digest?.replace(/^sha256:/, '') || '—'}\` |`,
    );
  }

  const recentRows = releases.slice(0, 5).map((rel) => {
    const relDate = (rel.published_at || rel.created_at || '').slice(0, 10);
    const { primary: relExe } = selectInstallers(rel.assets);
    const exeCell = relExe
      ? `[${relExe.name}](${relExe.browser_download_url}) (${formatBytes(relExe.size)})`
      : '—';
    return `| [${rel.tag_name}](${rel.html_url}) | ${relDate} | ${exeCell} |`;
  });

  const releaseNotes = cleanReleaseBody(latest.body);
  const primaryFileName = primary?.name ?? `Novium-Horizon-Setup-${version}.exe`;

  const lines = [
    `<div align="center">`,
    ``,
    `# Novium Releases`,
    ``,
    `[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-${encodeURIComponent(tag)}-10b981?style=for-the-badge&labelColor=050608)](${LATEST_RELEASE_URL})`,
    `[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011%20x64-38bdf8?style=for-the-badge&labelColor=050608)](${LATEST_RELEASE_URL})`,
    `[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](${DOWNLOAD_PAGE_URL})`,
    ``,
    `Public Windows binary distribution and differential auto-updater feed for **Novium Horizon**.`,
    ``,
    `[**Go to Latest Release (${tag})**](${LATEST_RELEASE_URL}) • [**Browse All Releases**](${ALL_RELEASES_URL}) • [**Website Downloads**](${DOWNLOAD_PAGE_URL}) • [**Main Source Repository**](https://github.com/${SOURCE_REPO})`,
    ``,
    `</div>`,
    ``,
    `---`,
    ``,
    `## How to Get to the Releases Page & Download`,
    ``,
    `If you are looking at the repository file list above, the Windows installer binaries live under **GitHub Releases** — not in the Git source tree:`,
    ``,
    `1. **Direct shortcut:** Open [**Latest Release (${tag})**](${LATEST_RELEASE_URL}) or [**All Releases**](${ALL_RELEASES_URL}).`,
    `2. **From the GitHub repository page:** Look at the **Releases** section in the right-hand sidebar of [\`${REPO}\`](https://github.com/${REPO}) and click the release marked **Latest**.`,
    `3. **Download the installer:** Scroll to the **Assets** section at the bottom of the release notes and download \`${primaryFileName}\`.`,
    `4. **Automatic updates:** Once installed, Horizon checks this repository automatically via \`electron-updater\` (\`latest.yml\` + \`.blockmap\`).`,
    ``,
    `> **Availability:** **Novium Horizon** and **Novium Pulsar** for Windows (x64) are published here. macOS, Linux, and Novium BlackEye are currently unavailable.`,
    ``,
    `> [!IMPORTANT]`,
    `> **Early Development Status:** Novium Horizon is in active early development and is not 100% stable. Hardware hooks, system APIs, and desktop overlays are subject to rapid iteration.`,
    ``,
    `> [!NOTE]`,
    `> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen or your browser may prompt on unsigned \`.exe\` files. Click **"More info"** → **"Run anyway"** (or **"Keep anyway"** in your browser) to proceed.`,
    ``,
    `---`,
    ``,
    `## Latest Release: Novium Horizon ${tag}`,
    ``,
    `- **Release Page:** [${latest.name || `Novium Horizon ${tag}`}](${latest.html_url || LATEST_RELEASE_URL})`,
    `- **Published:** \`${publishedDate}\``,
    `- **Target:** Windows 10 / 11 (x64)`,
    ...(sha512 ? [`- **Installer SHA-512 (\`latest.yml\`):** \`${sha512}\``] : []),
    ``,
    `| Target | Package | File | Size | SHA-256 |`,
    `|---|---|---|---|---|`,
    ...(assetRows.length > 0
      ? assetRows
      : [`| Windows 10/11 x64 | Release Page | [Open ${tag} on GitHub](${latest.html_url || LATEST_RELEASE_URL}) | — | — |`]),
    ``,
    ...(releaseNotes
      ? [
          `### Release Notes (${tag})`,
          ``,
          releaseNotes,
          ``,
        ]
      : []),
    ...(latestPulsar
      ? (() => {
          const pTag = latestPulsar.tag_name;
          const pVer = pTag.replace(/^pulsar-v/, '');
          const pDate = (latestPulsar.published_at || latestPulsar.created_at || '').slice(0, 10);
          const { primary: pExe, blockmap: pBlockmap, pulsarYml } = selectPulsarAssets(latestPulsar.assets);
          const pRows = [];
          if (pExe) {
            pRows.push(
              `| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [${pExe.name}](${pExe.browser_download_url}) | ${formatBytes(pExe.size)} | \`${pExe.digest?.replace(/^sha256:/, '') || 'See GitHub release'}\` |`,
            );
          }
          if (pBlockmap) {
            pRows.push(
              `| Windows 10/11 x64 | Differential Blockmap | [${pBlockmap.name}](${pBlockmap.browser_download_url}) | ${formatBytes(pBlockmap.size)} | \`${pBlockmap.digest?.replace(/^sha256:/, '') || '—'}\` |`,
            );
          }
          if (pulsarYml) {
            pRows.push(
              `| Auto-Updater | Electron Updater Feed | [${pulsarYml.name}](${pulsarYml.browser_download_url}) | ${formatBytes(pulsarYml.size)} | \`${pulsarYml.digest?.replace(/^sha256:/, '') || '—'}\` |`,
            );
          }
          return [
            `---`,
            ``,
            `## Latest Release: Novium Pulsar v${pVer} (\`${pTag}\`)`,
            ``,
            `- **Release Page:** [${latestPulsar.name || `Novium Pulsar v${pVer}`}](${latestPulsar.html_url})`,
            `- **Published:** \`${pDate}\``,
            `- **Target:** Windows 10 / 11 (x64)`,
            `- **Updater Feed:** [\`feed/pulsar.yml\`](https://raw.githubusercontent.com/${REPO}/main/feed/pulsar.yml)`,
            ``,
            `| Target | Package | File | Size | SHA-256 |`,
            `|---|---|---|---|---|`,
            ...pRows,
            ``,
          ];
        })()
      : []),
    `---`,
    ``,
    `## Recent Releases`,
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
    `Compare the output with the SHA-256 value listed in the **Latest Release** table or in the GitHub Release asset metadata.`,
    ``,
  ];

  const nextContent = `${lines.join('\n')}`;
  await fs.writeFile(README_PATH, nextContent, 'utf8');
  console.log(`Updated ${README_PATH} for ${tag} (${publishedDate}).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
