<div align="center">

# Novium Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.62-10b981?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011%20x64-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](https://noviumecosystem.vercel.app/download)

Public Windows binary distribution and differential auto-updater feed for **Novium Horizon**.

[**Go to Latest Release (v0.3.62)**](https://github.com/novaozone187/novium-releases/releases/latest) • [**Browse All Releases**](https://github.com/novaozone187/novium-releases/releases) • [**Website Downloads**](https://noviumecosystem.vercel.app/download) • [**Main Source Repository**](https://github.com/novaozone187/Novium)

</div>

---

## How to Get to the Releases Page & Download

If you are looking at the repository file list above, the Windows installer binaries live under **GitHub Releases** — not in the Git source tree:

1. **Direct shortcut:** Open [**Latest Release (v0.3.62)**](https://github.com/novaozone187/novium-releases/releases/latest) or [**All Releases**](https://github.com/novaozone187/novium-releases/releases).
2. **From the GitHub repository page:** Look at the **Releases** section in the right-hand sidebar of [`novaozone187/novium-releases`](https://github.com/novaozone187/novium-releases) and click the release marked **Latest**.
3. **Download the installer:** Scroll to the **Assets** section at the bottom of the release notes and download `Novium-Horizon-Setup-0.3.62.exe`.
4. **Automatic updates:** Once installed, Horizon checks this repository automatically via `electron-updater` (`latest.yml` + `.blockmap`).

> **Availability:** **Novium Horizon** and **Novium Pulsar** for Windows (x64) are published here. macOS, Linux, and Novium BlackEye are currently unavailable.

> [!IMPORTANT]
> **Early Development Status:** Novium Horizon is in active early development and is not 100% stable. Hardware hooks, system APIs, and desktop overlays are subject to rapid iteration.

> [!NOTE]
> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen or your browser may prompt on unsigned `.exe` files. Click **"More info"** → **"Run anyway"** (or **"Keep anyway"** in your browser) to proceed.

---

## Latest Release: Novium Horizon v0.3.62

- **Release Page:** [Novium Horizon v0.3.62](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.62)
- **Published:** `2026-11-26`
- **Target:** Windows 10 / 11 (x64)
- **Installer SHA-512 (`latest.yml`):** `yPsALPqKO9qJcU6lDw4defRaTTDY4BPg0VoSs1YgjYQ6Q9dAtw4HjIPdZFcmmSzdV6jPqSnWIla5vSWMvgpVAQ==`

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Horizon-Setup-0.3.62.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/Novium-Horizon-Setup-0.3.62.exe) | 81.0 MB | `d9bc43c916ce8d6b1de29b2c8450a339ddfd50cf6358b7d5ba345534448cd051` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Horizon-Setup-0.3.62.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/Novium-Horizon-Setup-0.3.62.exe.blockmap) | 86.5 KB | `9f4decd4c991e2e72ce84d476cd4248aef8d47a1a99a2f353d9d9e7a75c3d1e0` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/v0.3.62/latest.yml) | 359 B | `f460c58c6842490816ab6e52e08f6349265f44f43594d5b079d87bd3165e4894` |

### Release Notes (v0.3.62)

### Synapse Bus & Capsule Updates
- **Live Update Capsule via Synapse Bus:** Horizon (and Pulsar) update checks, download speed/progress, and verified Restart & Apply actions now flow live over the Synapse Bus directly into the Dynamic Island Capsule.
- **Synapse Bus Performance Overhaul:** Retained `packet_telemetry` snapshots are deduplicated in bus history, `LiveActivityView` batches updates with collapsible payloads, and `SynapseBusVisual` eliminates compositor/SMIL/backdrop-blur thrashing.
- **Live Data Only:** Removed stale localStorage bus history seeding on desktop launch and replaced hardcoded companion versions/metrics with live BlackEye/Pulsar telemetry queries.

---

## Latest Release: Novium Pulsar v0.1.3 (`pulsar-v0.1.3`)

- **Release Page:** [Novium Pulsar v0.1.3](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-v0.1.3)
- **Published:** `2026-11-26`
- **Target:** Windows 10 / 11 (x64)
- **Updater Feed:** [`feed/pulsar.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feed/pulsar.yml)

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Auto-Updater | Electron Updater Feed | [pulsar.yml](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.3/pulsar.yml) | 355 B | `28f3201fba42518e42d9b977f68430c282bcaf65946a7bc384ae34aa84e13ce1` |

---

## Recent Releases

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

Compare the output with the SHA-256 value listed in the **Latest Release** table or in the GitHub Release asset metadata.
