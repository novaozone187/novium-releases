<div align="center">

# Novium Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.57-10b981?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011%20x64-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Downloads Page](https://img.shields.io/badge/WEBSITE-DOWNLOADS-f4f4f5?style=for-the-badge&labelColor=050608)](https://noviumecosystem.vercel.app/download)

Public Windows binary distribution and differential auto-updater feed for **Novium Horizon**.

[**Go to Latest Release (v0.3.57)**](https://github.com/novaozone187/novium-releases/releases/latest) • [**Browse All Releases**](https://github.com/novaozone187/novium-releases/releases) • [**Website Downloads**](https://noviumecosystem.vercel.app/download) • [**Main Source Repository**](https://github.com/novaozone187/Novium)

</div>

---

## How to Get to the Releases Page & Download

If you are looking at the repository file list above, the Windows installer binaries live under **GitHub Releases** — not in the Git source tree:

1. **Direct shortcut:** Open [**Latest Release (v0.3.57)**](https://github.com/novaozone187/novium-releases/releases/latest) or [**All Releases**](https://github.com/novaozone187/novium-releases/releases).
2. **From the GitHub repository page:** Look at the **Releases** section in the right-hand sidebar of [`novaozone187/novium-releases`](https://github.com/novaozone187/novium-releases) and click the release marked **Latest**.
3. **Download the installer:** Scroll to the **Assets** section at the bottom of the release notes and download `Novium-Horizon-Setup-0.3.57.exe`.
4. **Automatic updates:** Once installed, Horizon checks this repository automatically via `electron-updater` (`latest.yml` + `.blockmap`).

> **Availability:** Only **Novium Horizon for Windows (x64)** is currently published. macOS, Linux, Novium Pulsar, and Novium BlackEye are currently unavailable.

> [!IMPORTANT]
> **Early Development Status:** Novium Horizon is in active early development and is not 100% stable. Hardware hooks, system APIs, and desktop overlays are subject to rapid iteration.

> [!NOTE]
> **Windows SmartScreen Notice:** Because Novium is a free, non-commercial open-source project without a commercial EV code-signing certificate (§§ 106–112 BGB), Windows SmartScreen or your browser may prompt on unsigned `.exe` files. Click **"More info"** → **"Run anyway"** (or **"Keep anyway"** in your browser) to proceed.

---

## Latest Release: Novium Horizon v0.3.57

- **Release Page:** [Novium Horizon v0.3.57](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.57)
- **Published:** `2026-11-23`
- **Target:** Windows 10 / 11 (x64)
- **Installer SHA-512 (`latest.yml`):** `4jsbIcTofV6M/U2zUD4cWfaiXRnpbpbAbHxbLfzrEc/4qKpD6VLaoWp6WBwZoGqKR3zCU9ChMJOZTSRYKxGz8A==`

| Target | Package | File | Size | SHA-256 |
|---|---|---|---|---|
| Windows 10/11 x64 | One-Click NSIS Installer (.exe) | [Novium-Horizon-Setup-0.3.57.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/Novium-Horizon-Setup-0.3.57.exe) | 81.0 MB | `0b4808bb02fa2294fd58e09e8460dce5cd5ebba90d092a4873f65b576063b6f7` |
| Windows 10/11 x64 | Compatibility Alias (.exe) | [Novium.Horizon.Setup.0.3.57.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/Novium.Horizon.Setup.0.3.57.exe) | 81.0 MB | `0b4808bb02fa2294fd58e09e8460dce5cd5ebba90d092a4873f65b576063b6f7` |
| Windows 10/11 x64 | Differential Blockmap | [Novium-Horizon-Setup-0.3.57.exe.blockmap](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/Novium-Horizon-Setup-0.3.57.exe.blockmap) | 86.6 KB | `d68309e6af5d084455472ab35a6d46114d0a6278cc03fd464c034f080936650f` |
| Auto-Updater | Electron Updater Feed | [latest.yml](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/latest.yml) | 359 B | `294f18961e4177130581459689bbc38881646fb7ba014e6471ef916c7c5dd343` |

### Release Notes (v0.3.57)

### Improvements
- **Process Explorer:** Dynamically adapts the process list height to the current Horizon window scale and fullscreen resolution instead of capping at a fixed height, removing wasted bottom whitespace.

---

## Recent Releases

| Tag | Published | Installer (.exe) |
|---|---|---|
| [v0.3.57](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.57) | 2026-11-23 | [Novium-Horizon-Setup-0.3.57.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.57/Novium-Horizon-Setup-0.3.57.exe) (81.0 MB) |
| [v0.3.56](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.56) | 2026-11-19 | [Novium-Horizon-Setup-0.3.56.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.56/Novium-Horizon-Setup-0.3.56.exe) (81.0 MB) |
| [v0.3.55](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.55) | 2026-11-19 | [Novium-Horizon-Setup-0.3.55.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.55/Novium-Horizon-Setup-0.3.55.exe) (81.0 MB) |
| [v0.3.54](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.54) | 2026-11-19 | [Novium-Horizon-Setup-0.3.54.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.54/Novium-Horizon-Setup-0.3.54.exe) (80.9 MB) |
| [v0.3.53](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.53) | 2026-11-19 | [Novium-Horizon-Setup-0.3.53.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.53/Novium-Horizon-Setup-0.3.53.exe) (80.9 MB) |

Full archive: [`novaozone187/novium-releases/releases`](https://github.com/novaozone187/novium-releases/releases)

---

## Verify Integrity (PowerShell)

```powershell
Get-FileHash -Path "Novium-Horizon-Setup-0.3.57.exe" -Algorithm SHA256
```

Compare the output with the SHA-256 value listed in the **Latest Release** table or in the GitHub Release asset metadata.
