<div align="center">

# Novium Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.59-10b981?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011%20x64-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](https://noviumecosystem.vercel.app/download)

Public Windows binary distribution and differential auto-updater feed for **Novium Horizon**.

[**Go to Latest Release (v0.3.59)**](https://github.com/novaozone187/novium-releases/releases/latest) • [**Browse All Releases**](https://github.com/novaozone187/novium-releases/releases) • [**Website Downloads**](https://noviumecosystem.vercel.app/download) • [**Main Source Repository**](https://github.com/novaozone187/Novium)

</div>

---

## How to Get to the Releases Page & Download

If you are looking at the repository file list above, the Windows installer binaries live under **GitHub Releases** — not in the Git source tree:

1. **Direct shortcut:** Open [**Latest Release (v0.3.59)**](https://github.com/novaozone187/novium-releases/releases/latest) or [**All Releases**](https://github.com/novaozone187/novium-releases/releases).
2. **From the GitHub repository page:** Look at the **Releases** section in the right-hand sidebar of [`novaozone187/novium-releases`](https://github.com/novaozone187/novium-releases) and click the release marked **Latest**.
3. **Download the installer:** Scroll to the **Assets** section at the bottom of the release notes and download `Novium-Horizon-Setup-0.3.59.exe`.
4. **Automatic updates:** Once installed, Horizon checks this repository automatically via `electron-updater` (`latest.yml` + `.blockmap`).

> **Availability:** **Novium Horizon** and **Novium Pulsar** for Windows (x64) are published here. macOS, Linux, and Novium BlackEye are currently unavailable.

> [!IMPORTANT]
> **Early Development Status:** Novium Horizon is in active early development and is not 100% stable. Hardware hooks, system APIs, and desktop overlays are subject to rapid iteration.

> [!NOTE]
> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen or your browser may prompt on unsigned `.exe` files. Click **"More info"** → **"Run anyway"** (or **"Keep anyway"** in your browser) to proceed.

---

## Latest Release: Novium Horizon v0.3.59

- **Release Page:** [Novium Horizon v0.3.59](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.59)
- **Published:** `2026-11-23`
- **Target:** Windows 10 / 11 (x64)
- **Installer SHA-512 (`latest.yml`):** `Ox4F9vJfcc0lk7gXJtidar5GooHtIX+AhjpCBZFBaXBQW/xONnUkO+4ztGMZuaPXEVv8g5BrN2BDVeZ8zbkBJg==`

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Horizon-Setup-0.3.59.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.59/Novium-Horizon-Setup-0.3.59.exe) | 81.0 MB | `0c642db0b4f60072fb2e6622e9e19bbced80c196d2e5702a6abdf420574633af` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.Horizon.Setup.0.3.59.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.59/Novium.Horizon.Setup.0.3.59.exe) | 81.0 MB | `0c642db0b4f60072fb2e6622e9e19bbced80c196d2e5702a6abdf420574633af` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Horizon-Setup-0.3.59.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/v0.3.59/Novium-Horizon-Setup-0.3.59.exe.blockmap) | 86.4 KB | `ccaf5d623e850c82f5160e1b2540e29a7dd34ea41111d1fa8b6e11d492899f83` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/v0.3.59/latest.yml) | 359 B | `3e0de163e63d1e1147748816c7c35e7d7d41d2bcfec52feb05dff2fe3b56e6f1` |

### Release Notes (v0.3.59)

### Improvements & Fixes
- **Fullscreen & Shooter Suppression (Capsule):** Upgraded `novium-fullscreen.exe` to detect hidden or confined game cursors (`GetCursorInfo` / `GetClipCursor`) and borderless fullscreen games. While a fullscreen app or shooter camera lock is active, top-edge hover reveal, mouse capture, and unsolicited popups (alerts and track changes) are suppressed so looking up in games never drops the Capsule down.
- **Settings:** Added **Suppress in fullscreen games** under Capsule Settings (enabled by default; still toggleable anytime via hotkey).

---

## Latest Release: Novium Pulsar v0.1.1 (`pulsar-v0.1.1`)

- **Release Page:** [Novium Pulsar v0.1.1](https://github.com/novaozone187/novium-releases/releases/tag/pulsar-v0.1.1)
- **Published:** `2026-11-26`
- **Target:** Windows 10 / 11 (x64)
- **Updater Feed:** [`feed/pulsar.yml`](https://raw.githubusercontent.com/novaozone187/novium-releases/main/feed/pulsar.yml)

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Auto-Updater | Electron Updater Feed | [pulsar.yml](https://github.com/novaozone187/novium-releases/releases/download/pulsar-v0.1.1/pulsar.yml) | 355 B | `6e5074771e2c65a90fd3d15f4e4a23bb0448b6a58fadf17a081619c10d3c9e42` |

---

## Recent Releases

| Tag | Published | Installer (.exe) |
|---|---|---|
| [v0.3.59](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.59) | 2026-11-23 | [Novium-Horizon-Setup-0.3.59.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.59/Novium-Horizon-Setup-0.3.59.exe) (81.0 MB) |
| [v0.3.58](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.58) | 2026-11-23 | [Novium-Horizon-Setup-0.3.58.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/Novium-Horizon-Setup-0.3.58.exe) (81.0 MB) |
| [v0.3.57](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.57) | 2026-11-23 | [Novium-Horizon-Setup-0.3.57.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/Novium-Horizon-Setup-0.3.57.exe) (81.0 MB) |
| [v0.3.56](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.56) | 2026-11-19 | [Novium-Horizon-Setup-0.3.56.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.56/Novium-Horizon-Setup-0.3.56.exe) (81.0 MB) |
| [v0.3.55](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.55) | 2026-11-19 | [Novium-Horizon-Setup-0.3.55.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.55/Novium-Horizon-Setup-0.3.55.exe) (81.0 MB) |

Full archive: [`novaozone187/novium-releases/releases`](https://github.com/novaozone187/novium-releases/releases)

---

## Verify Integrity (PowerShell)

```powershell
Get-FileHash -Path "Novium-Horizon-Setup-0.3.59.exe" -Algorithm SHA256
```

Compare the output with the SHA-256 value listed in the **Latest Release** table or in the GitHub Release asset metadata.
