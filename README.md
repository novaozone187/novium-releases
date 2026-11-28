<div align="center">

# Novium Releases

[![Latest Horizon](https://img.shields.io/badge/HORIZON-v0.3.62-10b981?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Latest Pulsar](https://img.shields.io/badge/PULSAR-v0.1.3-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-v0.1.3)
[![Latest BlackEye](https://img.shields.io/badge/BLACKEYE-v0.1.0-ef4444?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/tag/blackeye-v0.1.0)
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
| **Novium BlackEye** | `blackeye-v0.1.0` | Windows x64 | [`feeds/blackeye/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/blackeye/latest.yml) |
| **Pulsar Daemon** | `pulsar-daemon-v0.1.0` | Win x64 / Linux x64 | [`feeds/daemons/pulsar-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/pulsar-daemon.json) |
| **BlackEye Daemon** | `blackeye-daemon-v0.1.0` | Win x64 / Linux x64 | [`feeds/daemons/blackeye-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/blackeye-daemon.json) |

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

## Latest Release: Novium BlackEye (`blackeye-v0.1.0`)

- **Release Page:** [Novium BlackEye v0.1.0](https://github.com/novaozone187/novium-releases/releases/tag/blackeye-v0.1.0)
- **Published:** `2026-11-28`
- **Updater Feed:** [`feeds/blackeye/latest.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/blackeye/latest.yml)

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-BlackEye-Setup-0.1.0.exe](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.0/Novium-BlackEye-Setup-0.1.0.exe) | 80.7 MB | `4c3384635d575f7ab40e35e428d895cb600b9ad329515515551160af50f48425` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.BlackEye.Setup.0.1.0.exe](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.0/Novium.BlackEye.Setup.0.1.0.exe) | 80.7 MB | `4c3384635d575f7ab40e35e428d895cb600b9ad329515515551160af50f48425` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-BlackEye-Setup-0.1.0.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.0/Novium-BlackEye-Setup-0.1.0.exe.blockmap) | 86.1 KB | `69a8908982d20c722553a12a1996b45efa53d14b26bbeaf606616d22f45c74c1` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/blackeye-v0.1.0/latest.yml) | 358 B | `85c560a3071016f6e5b5fffc2e2d252f8574a6725009df468581db6a047fedd2` |

---

## Daemon Feed: pulsar-daemon (`pulsar-daemon-v0.1.0`)

- **Release Page:** [pulsar-daemon v0.1.0](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-daemon-v0.1.0)
- **Published:** `2026-11-28`
- **Daemon Feed:** [`feeds/daemons/pulsar-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/pulsar-daemon.json)

| Platform | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| `win32-x64` | Daemon Bundle | [pulsar-daemon-0.1.0-win32-x64.zip](https://github.com/novaozone187/novium-releases/releases/download/pulsar-daemon-v0.1.0/pulsar-daemon-0.1.0-win32-x64.zip) | 5.0 MB | `f8cd59681d01437480468115021258735b653ac03338b66607eeffc1b6258ea9` |
| `linux-x64` | Daemon Bundle | [pulsar-daemon-0.1.0-linux-x64.tar.gz](https://github.com/novaozone187/novium-releases/releases/download/pulsar-daemon-v0.1.0/pulsar-daemon-0.1.0-linux-x64.tar.gz) | 4.8 MB | `e07192be6fe8aa6849d91aead74eea492c59dfd7ce634db03074f9a3c09f7ec2` |

---

## Daemon Feed: blackeye-daemon (`blackeye-daemon-v0.1.0`)

- **Release Page:** [blackeye-daemon v0.1.0](https://github.com/novaozone187/novium-releases/releases/tag/blackeye-daemon-v0.1.0)
- **Published:** `2026-11-28`
- **Daemon Feed:** [`feeds/daemons/blackeye-daemon.json`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/blackeye-daemon.json)

| Platform | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| `win32-x64` | Daemon Bundle | [blackeye-daemon-0.1.0-win32-x64.zip](https://github.com/novaozone187/novium-releases/releases/download/blackeye-daemon-v0.1.0/blackeye-daemon-0.1.0-win32-x64.zip) | 5.0 MB | `b8e0e4d1624e618adbebe7611ab99c78cc21e418221e8691868621061ede721b` |
| `linux-x64` | Daemon Bundle | [blackeye-daemon-0.1.0-linux-x64.tar.gz](https://github.com/novaozone187/novium-releases/releases/download/blackeye-daemon-v0.1.0/blackeye-daemon-0.1.0-linux-x64.tar.gz) | 4.8 MB | `b49df0a1aa7892a853cbbf80bd24f2904f5725587ebe694d8b3637b31895fbc8` |

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
