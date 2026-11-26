<div align="center">

# Novium Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.61-10b981?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011%20x64-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](https://noviumecosystem.vercel.app/download)

Public Windows binary distribution and differential auto-updater feed for **Novium Horizon**.

[**Go to Latest Release (v0.3.61)**](https://github.com/novaozone187/novium-releases/releases/latest) • [**Browse All Releases**](https://github.com/novaozone187/novium-releases/releases) • [**Website Downloads**](https://noviumecosystem.vercel.app/download) • [**Main Source Repository**](https://github.com/novaozone187/Novium)

</div>

---

## How to Get to the Releases Page & Download

If you are looking at the repository file list above, the Windows installer binaries live under **GitHub Releases** — not in the Git source tree:

1. **Direct shortcut:** Open [**Latest Release (v0.3.61)**](https://github.com/novaozone187/novium-releases/releases/latest) or [**All Releases**](https://github.com/novaozone187/novium-releases/releases).
2. **From the GitHub repository page:** Look at the **Releases** section in the right-hand sidebar of [`novaozone187/novium-releases`](https://github.com/novaozone187/novium-releases) and click the release marked **Latest**.
3. **Download the installer:** Scroll to the **Assets** section at the bottom of the release notes and download `Novium-Horizon-Setup-0.3.61.exe`.
4. **Automatic updates:** Once installed, Horizon checks this repository automatically via `electron-updater` (`latest.yml` + `.blockmap`).

> **Availability:** **Novium Horizon** and **Novium Pulsar** for Windows (x64) are published here. macOS, Linux, and Novium BlackEye are currently unavailable.

> [!IMPORTANT]
> **Early Development Status:** Novium Horizon is in active early development and is not 100% stable. Hardware hooks, system APIs, and desktop overlays are subject to rapid iteration.

> [!NOTE]
> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen or your browser may prompt on unsigned `.exe` files. Click **"More info"** → **"Run anyway"** (or **"Keep anyway"** in your browser) to proceed.

---

## Latest Release: Novium Horizon v0.3.61

- **Release Page:** [Novium Horizon v0.3.61](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.61)
- **Published:** `2026-11-26`
- **Target:** Windows 10 / 11 (x64)
- **Installer SHA-512 (`latest.yml`):** `N8rq75FQeBLfjBH+pGCBm+oj8ZQi55JzL/H5QEcElQ5jSsEeTlSoqrylIqkByUckLH8lDlu0tXI2xQVjwhDd+w==`

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Horizon-Setup-0.3.61.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.61/Novium-Horizon-Setup-0.3.61.exe) | 81.0 MB | `e1bfaca7ed6ad6d3f63a5267d71ca975ca2ff9c05b206f0f27778c39e0562862` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.Horizon.Setup.0.3.61.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.61/Novium.Horizon.Setup.0.3.61.exe) | 81.0 MB | `e1bfaca7ed6ad6d3f63a5267d71ca975ca2ff9c05b206f0f27778c39e0562862` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Horizon-Setup-0.3.61.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/v0.3.61/Novium-Horizon-Setup-0.3.61.exe.blockmap) | 86.6 KB | `1aede3762b39673e84153218643d45975dee25be5d8eb94d9bb9093aaf5b8e25` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/v0.3.61/latest.yml) | 359 B | `bbbe8e6244df6579a4bfa6bc4005b002bea8ce46c78ceb915290305ee818a1a5` |

### Release Notes (v0.3.61)

### Synapse Bus & Ecosystem Orchestration
- **Unified Single-Port Synapse Bus (`127.0.0.1:48209`):** Consolidated Horizon's priority-100 hub bus with structured `NoviumBusEvent` streaming, `focus-or-launch-app` command routing, and automatic host handover.
- **Interactive Dynamic Island Quick Actions:** Added CPU/RAM spike detection in Horizon with actionable Quick Actions rendered inline inside the expanded Dynamic Island deck and live Synapse Bus visualizer.

### Autonomous BlackEye Containment
- **In-Process BlackEye Sentry (`127.0.0.1:48205`):** Integrated `@novium/blackeye-daemon` directly inside Horizon so security telemetry, anomaly alerts, and quarantine decisions flow immediately to the Dynamic Island and Pulsar mesh.

---

## Latest Release: Novium Pulsar v0.1.2 (`pulsar-v0.1.2`)

- **Release Page:** [Novium Pulsar v0.1.2](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-v0.1.2)
- **Published:** `2026-11-26`
- **Target:** Windows 10 / 11 (x64)
- **Updater Feed:** [`feed/pulsar.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feed/pulsar.yml)

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Auto-Updater | Electron Updater Feed | [pulsar.yml](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.2/pulsar.yml) | 355 B | `3de859a5829e66823af46c67a53d7eff7c6de8dbc74df1f6423865515412530c` |

---

## Recent Releases

| Tag | Published | Installer (.exe) |
|---|---|---|
| [v0.3.61](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.61) | 2026-11-26 | [Novium-Horizon-Setup-0.3.61.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.61/Novium-Horizon-Setup-0.3.61.exe) (81.0 MB) |
| [v0.3.59](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.59) | 2026-11-23 | [Novium-Horizon-Setup-0.3.59.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.59/Novium-Horizon-Setup-0.3.59.exe) (81.0 MB) |
| [v0.3.58](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.58) | 2026-11-23 | [Novium-Horizon-Setup-0.3.58.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/Novium-Horizon-Setup-0.3.58.exe) (81.0 MB) |
| [v0.3.57](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.57) | 2026-11-23 | [Novium-Horizon-Setup-0.3.57.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/Novium-Horizon-Setup-0.3.57.exe) (81.0 MB) |
| [v0.3.56](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.56) | 2026-11-19 | [Novium-Horizon-Setup-0.3.56.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.56/Novium-Horizon-Setup-0.3.56.exe) (81.0 MB) |

Full archive: [`novaozone187/novium-releases/releases`](https://github.com/novaozone187/novium-releases/releases)

---

## Verify Integrity (PowerShell)

```powershell
Get-FileHash -Path "Novium-Horizon-Setup-0.3.61.exe" -Algorithm SHA256
```

Compare the output with the SHA-256 value listed in the **Latest Release** table or in the GitHub Release asset metadata.
