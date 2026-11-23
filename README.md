<div align="center">

# Novium Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.58-10b981?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011%20x64-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](https://noviumecosystem.vercel.app/download)

Public Windows binary distribution and differential auto-updater feed for **Novium Horizon**.

[**Go to Latest Release (v0.3.58)**](https://github.com/novaozone187/novium-releases/releases/latest) • [**Browse All Releases**](https://github.com/novaozone187/novium-releases/releases) • [**Website Downloads**](https://noviumecosystem.vercel.app/download) • [**Main Source Repository**](https://github.com/novaozone187/Novium)

</div>

---

## How to Get to the Releases Page & Download

If you are looking at the repository file list above, the Windows installer binaries live under **GitHub Releases** — not in the Git source tree:

1. **Direct shortcut:** Open [**Latest Release (v0.3.58)**](https://github.com/novaozone187/novium-releases/releases/latest) or [**All Releases**](https://github.com/novaozone187/novium-releases/releases).
2. **From the GitHub repository page:** Look at the **Releases** section in the right-hand sidebar of [`novaozone187/novium-releases`](https://github.com/novaozone187/novium-releases) and click the release marked **Latest**.
3. **Download the installer:** Scroll to the **Assets** section at the bottom of the release notes and download `Novium-Horizon-Setup-0.3.58.exe`.
4. **Automatic updates:** Once installed, Horizon checks this repository automatically via `electron-updater` (`latest.yml` + `.blockmap`).

> **Availability:** Only **Novium Horizon for Windows (x64)** is currently published. macOS, Linux, Novium Pulsar, and Novium BlackEye are currently unavailable.

> [!IMPORTANT]
> **Early Development Status:** Novium Horizon is in active early development and is not 100% stable. Hardware hooks, system APIs, and desktop overlays are subject to rapid iteration.

> [!NOTE]
> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen or your browser may prompt on unsigned `.exe` files. Click **"More info"** → **"Run anyway"** (or **"Keep anyway"** in your browser) to proceed.

---

## Latest Release: Novium Horizon v0.3.58

- **Release Page:** [Novium Horizon v0.3.58](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.58)
- **Published:** `2026-11-23`
- **Target:** Windows 10 / 11 (x64)
- **Installer SHA-512 (`latest.yml`):** `pmrrKFQ83DmsDeOwGfi/zKHvsh4qg5fEvqnqOmXRwxt6IUpd8AQieStR9Wka3chtclXpXHoNmTdiTuREIqh7ZA==`

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Horizon-Setup-0.3.58.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/Novium-Horizon-Setup-0.3.58.exe) | 81.0 MB | `33dcc96b1a8567f23baa9f70a7044b20c25e5883ca1c7de5a96e495a2102fe47` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.Horizon.Setup.0.3.58.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/Novium.Horizon.Setup.0.3.58.exe) | 81.0 MB | `33dcc96b1a8567f23baa9f70a7044b20c25e5883ca1c7de5a96e495a2102fe47` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Horizon-Setup-0.3.58.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/Novium-Horizon-Setup-0.3.58.exe.blockmap) | 86.5 KB | `dd33ebdeb98d75f4cde2ed99f16e3b132dada80a6d9784cc83df4606689d4b5d` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/latest.yml) | 359 B | `af5464ea13687f6dbcd975da7fd1aac13650cca576189ac6a28deeb22e7c2c34` |

### Release Notes (v0.3.58)

### Fixes
- **Process Explorer:** Removed the redundant horizontal overflow container on narrow windows so columns adapt cleanly down to Horizon's minimum window width and the vertical scrollbar stays visible on the right edge.

---

## Recent Releases

| Tag | Published | Installer (.exe) |
|---|---|---|
| [v0.3.58](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.58) | 2026-11-23 | [Novium-Horizon-Setup-0.3.58.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.58/Novium-Horizon-Setup-0.3.58.exe) (81.0 MB) |
| [v0.3.57](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.57) | 2026-11-23 | [Novium-Horizon-Setup-0.3.57.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/Novium-Horizon-Setup-0.3.57.exe) (81.0 MB) |
| [v0.3.56](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.56) | 2026-11-19 | [Novium-Horizon-Setup-0.3.56.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.56/Novium-Horizon-Setup-0.3.56.exe) (81.0 MB) |
| [v0.3.55](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.55) | 2026-11-19 | [Novium-Horizon-Setup-0.3.55.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.55/Novium-Horizon-Setup-0.3.55.exe) (81.0 MB) |
| [v0.3.54](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.54) | 2026-11-19 | [Novium-Horizon-Setup-0.3.54.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.54/Novium-Horizon-Setup-0.3.54.exe) (80.9 MB) |

Full archive: [`novaozone187/novium-releases/releases`](https://github.com/novaozone187/novium-releases/releases)

---

## Verify Integrity (PowerShell)

```powershell
Get-FileHash -Path "Novium-Horizon-Setup-0.3.58.exe" -Algorithm SHA256
```

Compare the output with the SHA-256 value listed in the **Latest Release** table or in the GitHub Release asset metadata.
