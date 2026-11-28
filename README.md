<div align="center">

# Novium Releases

[![Latest Horizon](https://img.shields.io/badge/HORIZON-v0.3.62-10b981?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Latest Pulsar](https://img.shields.io/badge/PULSAR-v0.1.3-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-v0.1.3)
[![Latest BlackEye](https://img.shields.io/badge/BLACKEYE-v0.1.1-ef4444?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/tag/blackeye-v0.1.1)
[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](https://noviumecosystem.vercel.app/download)

Unified binary distribution, auto-updater feeds (`feeds/`), and daemon bundles for **Novium Horizon**, **Novium Pulsar**, **Novium BlackEye**, **pulsar-daemon**, and **blackeye-daemon**.

[**Latest Horizon (v0.3.62)**](https://github.com/novaozone187/novium-releases/releases/latest) • [**All Releases**](https://github.com/novaozone187/novium-releases/releases) • [**Index Manifest (`manifest.json`)**](https://raw.githubusercontent.com/novaozone187/novium-releases/main/manifest.json) • [**Source Repository**](https://github.com/novaozone187/Novium)

</div>

---

## Release Matrix (3 Apps + 2 Daemons)

| Component | Latest Tag | Platforms | Update Feed |
|---|---|---|---|
| **Novium Horizon** | `v0.3.62` | Windows x64 | [`feeds/horizon/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/horizon/latest.yml) |
| **Novium Pulsar** | `pulsar-v0.1.3` | Windows x64 | [`feeds/pulsar/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/pulsar/latest.yml) |
| **Novium BlackEye** | `blackeye-v0.1.1` | Windows x64 | [`feeds/blackeye/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/blackeye/latest.yml) |
| **Pulsar Daemon** | `pulsar-daemon-v0.1.1` | Win x64 / Linux x64 | [`feeds/daemons/pulsar-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/pulsar-daemon.json) |
| **BlackEye Daemon** | `blackeye-daemon-v0.1.1` | Win x64 / Linux x64 | [`feeds/daemons/blackeye-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/blackeye-daemon.json) |

> [!NOTE]
> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen may prompt on unsigned `.exe` installers. Click **"More info"** → **"Run anyway"** to proceed.

---

## Latest Release: Novium Horizon v0.3.62

- **Release Page:** [Novium Horizon v0.3.62](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.62)
- **Published:** `2026-11-26`
- **Updater Feed:** [`feeds/horizon/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/horizon/latest.yml)
- **Installer SHA-512:** `yPsALPqKO9qJcU6lDw4defRaTTDY4BPg0VoSs1YgjYQ6Q9dAtw4HjIPdZFcmmSzdV6jPqSnWIla5vSWMvgpVAQ==`

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Horizon-Setup-0.3.62.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/Novium-Horizon-Setup-0.3.62.exe) | 81.0 MB | `d9bc43c916ce8d6b1de29b2c8450a339ddfd50cf6358b7d5ba345534448cd051` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.Horizon.Setup.0.3.62.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/Novium.Horizon.Setup.0.3.62.exe) | 81.0 MB | `d9bc43c916ce8d6b1de29b2c8450a339ddfd50cf6358b7d5ba345534448cd051` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Horizon-Setup-0.3.62.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/Novium-Horizon-Setup-0.3.62.exe.blockmap) | 86.5 KB | `9f4decd4c991e2e72ce84d476cd4248aef8d47a1a99a2f353d9d9e7a75c3d1e0` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/latest.yml) | 359 B | `f460c58c6842490816ab6e52e08f6349265f44f43594d5b079d87bd3165e4894` |

### Release Notes (v0.3.62)

### Synapse Bus & Capsule Updates
- **Live Update Capsule via Synapse Bus:** Horizon (and Pulsar) update checks, download speed/progress, and verified Restart & Apply actions now flow live over the Synapse Bus directly into the Dynamic Island Capsule.
- **Synapse Bus Performance Overhaul:** Retained `packet_telemetry` snapshots are deduplicated in bus history, `LiveActivityView` batches updates with collapsible payloads, and `SynapseBusVisual` eliminates compositor/SMIL/backdrop-blur thrashing.
- **Live Data Only:** Removed stale localStorage bus history seeding on desktop launch and replaced hardcoded companion versions/metrics with live BlackEye/Pulsar telemetry queries.

---

## Latest Release: Novium Pulsar (`pulsar-v0.1.3`)

- **Release Page:** [Novium Pulsar v0.1.3](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-v0.1.3)
- **Published:** `2026-11-26`
- **Updater Feed:** [`feeds/pulsar/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/pulsar/latest.yml)

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Pulsar-Setup-0.1.3.exe](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.3/Novium-Pulsar-Setup-0.1.3.exe) | 98.2 MB | `bd71e3b03d5882ece790b68921f10138edc346ee53dfe43f6840eec65154d02a` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.Pulsar.Setup.0.1.3.exe](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.3/Novium.Pulsar.Setup.0.1.3.exe) | 98.2 MB | `bd71e3b03d5882ece790b68921f10138edc346ee53dfe43f6840eec65154d02a` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Pulsar-Setup-0.1.3.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.3/Novium-Pulsar-Setup-0.1.3.exe.blockmap) | 104.1 KB | `83b4fffe3d7fb5cd0b7da9e1295d961e990d62b1e883911cc2b55fe3657235c6` |
| Auto-Updater | Electron Updater Feed | [pulsar.yml](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.3/pulsar.yml) | 355 B | `28f3201fba42518e42d9b977f68430c282bcaf65946a7bc384ae34aa84e13ce1` |

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
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.1/latest.yml) | 358 B | `cd610c071b8887b309a66675e58015a0d9110036fa9c18400b2fc778ae0b4cf6` |

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
| [v0.3.62](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.62) | 2026-11-26 | [Novium-Horizon-Setup-0.3.62.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/Novium-Horizon-Setup-0.3.62.exe) (81.0 MB) |
| [v0.3.61](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.61) | 2026-11-26 | [Novium-Horizon-Setup-0.3.61.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.61/Novium-Horizon-Setup-0.3.61.exe) (81.0 MB) |
| [v0.3.59](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.59) | 2026-11-23 | [Novium-Horizon-Setup-0.3.59.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.59/Novium-Horizon-Setup-0.3.59.exe) (81.0 MB) |
| [v0.3.58](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.58) | 2026-11-23 | [Novium-Horizon-Setup-0.3.58.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/Novium-Horizon-Setup-0.3.58.exe) (81.0 MB) |
| [v0.3.57](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.57) | 2026-11-23 | [Novium-Horizon-Setup-0.3.57.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/Novium-Horizon-Setup-0.3.57.exe) (81.0 MB) |

Full archive: [`novaozone187/novium-releases/releases`](https://github.com/novaozone187/novium-releases/releases)

---

## Verify Integrity (PowerShell)

```powershell
Get-FileHash -Path "Novium-Horizon-Setup-0.3.62.exe" -Algorithm SHA256
```
