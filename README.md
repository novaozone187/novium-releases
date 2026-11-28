<div align="center">

# Novium Releases

[![Latest Horizon](https://img.shields.io/badge/HORIZON-v0.3.63-10b981?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Latest Pulsar](https://img.shields.io/badge/PULSAR-v0.1.4-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-v0.1.4)
[![Latest BlackEye](https://img.shields.io/badge/BLACKEYE-v0.1.1-ef4444?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/tag/blackeye-v0.1.1)
[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](https://noviumecosystem.vercel.app/download)

Unified binary distribution, auto-updater feeds (`feeds/`), and daemon bundles for **Novium Horizon**, **Novium Pulsar**, **Novium BlackEye**, **pulsar-daemon**, and **blackeye-daemon**.

[**Latest Horizon (v0.3.63)**](https://github.com/novaozone187/novium-releases/releases/latest) • [**All Releases**](https://github.com/novaozone187/novium-releases/releases) • [**Index Manifest (`manifest.json`)**](https://raw.githubusercontent.com/novaozone187/novium-releases/main/manifest.json) • [**Source Repository**](https://github.com/novaozone187/Novium)

</div>

---

## Release Matrix (3 Apps + 2 Daemons)

| Component | Latest Tag | Platforms | Update Feed |
|---|---|---|---|
| **Novium Horizon** | `v0.3.63` | Windows x64 | [`feeds/horizon/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/horizon/latest.yml) |
| **Novium Pulsar** | `pulsar-v0.1.4` | Windows x64 | [`feeds/pulsar/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/pulsar/latest.yml) |
| **Novium BlackEye** | `blackeye-v0.1.1` | Windows x64 | [`feeds/blackeye/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/blackeye/latest.yml) |
| **Pulsar Daemon** | `pulsar-daemon-v0.1.1` | Win x64 / Linux x64 | [`feeds/daemons/pulsar-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/pulsar-daemon.json) |
| **BlackEye Daemon** | `blackeye-daemon-v0.1.1` | Win x64 / Linux x64 | [`feeds/daemons/blackeye-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/blackeye-daemon.json) |

> [!NOTE]
> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen may prompt on unsigned `.exe` installers. Click **"More info"** → **"Run anyway"** to proceed.

---

## Latest Release: Novium Horizon v0.3.63

- **Release Page:** [Novium Horizon v0.3.63](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.63)
- **Published:** `2026-11-28`
- **Updater Feed:** [`feeds/horizon/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/horizon/latest.yml)
- **Installer SHA-512:** `yqCOdNXN3yP7mmHUWce/TuIy3+n+UHDQB1i1HBWANmulA73annLdXsIwNPVYqnsq2bDpencPk+FaVtEWqG10yw==`

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Horizon-Setup-0.3.63.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.63/Novium-Horizon-Setup-0.3.63.exe) | 81.0 MB | `e1df62168552bd23fd664dba2d02712a366d41b93ae8b55f1a868477dd28cd4f` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.Horizon.Setup.0.3.63.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.63/Novium.Horizon.Setup.0.3.63.exe) | 81.0 MB | `e1df62168552bd23fd664dba2d02712a366d41b93ae8b55f1a868477dd28cd4f` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Horizon-Setup-0.3.63.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/v0.3.63/Novium-Horizon-Setup-0.3.63.exe.blockmap) | 86.7 KB | `d1cbbbd58f2a2157eeb81516c67d325a181b9bbd8e5e3df79f54e0225312794f` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/v0.3.63/latest.yml) | 359 B | `572b74f181afba3e46764f4cafab11d94749eeec9e8862eba459c716ad9fda09` |

### Release Notes (v0.3.63)

### Highlights in v0.3.63
- **Refined Matte Craft & Simple/Advanced Modes:** Cleaned up visual hierarchy across Overview, Hardware, Running Apps, Activity, and Companion Hub with synced Simple & Advanced terminology.
- **Unified Ecosystem Integration:** Official Horizon, Pulsar, and BlackEye logos everywhere, unified BlackEye baseline state sharing, and ask-first SHA-256 verified companion app installation.
- **Aggressive Memory Optimization:** Lazy-loaded secondary views, V8 heap bounds, and disabled spare Chromium renderers to keep full-stack RAM usage lightweight.

---

## Latest Release: Novium Pulsar (`pulsar-v0.1.4`)

- **Release Page:** [Novium Pulsar v0.1.4](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-v0.1.4)
- **Published:** `2026-11-28`
- **Updater Feed:** [`feeds/pulsar/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/pulsar/latest.yml)

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Pulsar-Setup-0.1.4.exe](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.4/Novium-Pulsar-Setup-0.1.4.exe) | 98.2 MB | `90a736dbadbddb84c372d3028cf0ce5c02c8490606783bcdf3c42534bbfa61d8` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.Pulsar.Setup.0.1.4.exe](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.4/Novium.Pulsar.Setup.0.1.4.exe) | 98.2 MB | `90a736dbadbddb84c372d3028cf0ce5c02c8490606783bcdf3c42534bbfa61d8` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Pulsar-Setup-0.1.4.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.4/Novium-Pulsar-Setup-0.1.4.exe.blockmap) | 105.1 KB | `0b09e4100fadfe261daf418c6ad035b396e43bb62cfc92e38bac2de14ee4bd3f` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.4/latest.yml) | 355 B | `5d5989aa2aa57023bd74f2ad63ffee32ae842477b9ec2dbb6063a4b9420ef6ef` |

---

## Latest Release: Novium BlackEye (`blackeye-v0.1.1`)

- **Release Page:** [Novium BlackEye v0.1.1](https://github.com/novaozone187/novium-releases/releases/tag/blackeye-v0.1.1)
- **Published:** `2026-11-28`
- **Updater Feed:** [`feeds/blackeye/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/blackeye/latest.yml)

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-BlackEye-Setup-0.1.1.exe](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.1/Novium-BlackEye-Setup-0.1.1.exe) | 80.7 MB | `4e21475b2f7f76471d1d61c56b5829a124b1d80372a9c1b2cc45ca8396a7f6f4` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.BlackEye.Setup.0.1.1.exe](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.1/Novium.BlackEye.Setup.0.1.1.exe) | 80.7 MB | `4e21475b2f7f76471d1d61c56b5829a124b1d80372a9c1b2cc45ca8396a7f6f4` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-BlackEye-Setup-0.1.1.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.1/Novium-BlackEye-Setup-0.1.1.exe.blockmap) | 86.1 KB | `bf0b7ab7095487e7c18e764df9bee7c456897e827f5b87305ac5b2f4adcb462f` |
| Auto-Updater | Electron Updater Feed | [blackeye.yml](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.1/blackeye.yml) | 358 B | `cd610c071b8887b309a66675e58015a0d9110036fa9c18400b2fc778ae0b4cf6` |

---

## Daemon Feed: pulsar-daemon (`pulsar-daemon-v0.1.1`)

- **Release Page:** [pulsar-daemon v0.1.1](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-daemon-v0.1.1)
- **Published:** `2026-11-28`
- **Daemon Feed:** [`feeds/daemons/pulsar-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/pulsar-daemon.json)

| Platform | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| `win32-x64` | Daemon Bundle | [pulsar-daemon-0.1.1-win32-x64.zip](https://github.com/novaozone187/novium-releases/releases/download/pulsar-daemon-v0.1.1/pulsar-daemon-0.1.1-win32-x64.zip) | 5.0 MB | `42a0ceb015fcd46720dcb80877aec379e051225485955781a977eddd03fdf61c` |
| `linux-x64` | Daemon Bundle | [pulsar-daemon-0.1.1-linux-x64.tar.gz](https://github.com/novaozone187/novium-releases/releases/download/pulsar-daemon-v0.1.1/pulsar-daemon-0.1.1-linux-x64.tar.gz) | 4.8 MB | `e46ba24531cd0f7f9b29dd9416646a994c1c18fed2902a3ac0671d295b28c4d2` |

---

## Daemon Feed: blackeye-daemon (`blackeye-daemon-v0.1.1`)

- **Release Page:** [blackeye-daemon v0.1.1](https://github.com/novaozone187/novium-releases/releases/tag/blackeye-daemon-v0.1.1)
- **Published:** `2026-11-28`
- **Daemon Feed:** [`feeds/daemons/blackeye-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/blackeye-daemon.json)

| Platform | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| `win32-x64` | Daemon Bundle | [blackeye-daemon-0.1.1-win32-x64.zip](https://github.com/novaozone187/novium-releases/releases/download/blackeye-daemon-v0.1.1/blackeye-daemon-0.1.1-win32-x64.zip) | 5.0 MB | `a07fd277eec732d4c5dd95b5d4152c79a36f18fe5b1640198cccbad075715f6f` |
| `linux-x64` | Daemon Bundle | [blackeye-daemon-0.1.1-linux-x64.tar.gz](https://github.com/novaozone187/novium-releases/releases/download/blackeye-daemon-v0.1.1/blackeye-daemon-0.1.1-linux-x64.tar.gz) | 4.8 MB | `c6d1d1b4cee03c99b77dd8e0e4fdb109c8d534dfb63ab72e5ee319ed0d6b4045` |

---

## Recent Horizon Releases

| Tag | Published | Installer (.exe) |
|---|---|---|
| [v0.3.63](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.63) | 2026-11-28 | [Novium-Horizon-Setup-0.3.63.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.63/Novium-Horizon-Setup-0.3.63.exe) (81.0 MB) |
| [v0.3.62](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.62) | 2026-11-26 | [Novium-Horizon-Setup-0.3.62.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/Novium-Horizon-Setup-0.3.62.exe) (81.0 MB) |
| [v0.3.61](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.61) | 2026-11-26 | [Novium-Horizon-Setup-0.3.61.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.61/Novium-Horizon-Setup-0.3.61.exe) (81.0 MB) |
| [v0.3.59](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.59) | 2026-11-23 | [Novium-Horizon-Setup-0.3.59.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.59/Novium-Horizon-Setup-0.3.59.exe) (81.0 MB) |
| [v0.3.58](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.58) | 2026-11-23 | [Novium-Horizon-Setup-0.3.58.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/Novium-Horizon-Setup-0.3.58.exe) (81.0 MB) |

Full archive: [`novaozone187/novium-releases/releases`](https://github.com/novaozone187/novium-releases/releases)

---

## Verify Integrity (PowerShell)

```powershell
Get-FileHash -Path "Novium-Horizon-Setup-0.3.63.exe" -Algorithm SHA256
```
