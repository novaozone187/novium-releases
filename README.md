<div align="center">

# Novium Official Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.2.4-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011-818cf8?style=for-the-badge&labelColor=050608)](#)
[![Zero Mock Data](https://img.shields.io/badge/TELEMETRY-ZERO%20MOCK%20DATA-10b981?style=for-the-badge&labelColor=050608)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-f59e0b?style=for-the-badge&labelColor=050608)](#)

### The official distribution repository, binary mirror, and differential auto-updater feed for the Novium desktop ecosystem.

[Download Latest (v0.2.4)](#direct-downloads) • [Release Notes](#release-matrix--changelog) • [Featured Products](#featured-products) • [Main Monorepo](https://github.com/novaozone187/Novium)

</div>

> [!IMPORTANT]
> **Early Development Notice**: Novium Horizon is currently in active early development and is **not 100% stable**. You may encounter bugs, visual glitches, or unexpected behavior as hardware hooks, system APIs, and desktop overlays are actively developed and refined. Please report any issues on GitHub or in the Discord community.

---

## Direct Downloads

| Product | Target Platform | Latest Version | Direct Installer | SHA-512 Blockmap |
| :--- | :--- | :--- | :--- | :--- |
| **Novium Horizon** | Windows 10/11 (x64) | `v0.2.4` | [**Novium.Horizon.Setup.0.2.4.exe**](https://github.com/novaozone187/novium-releases/releases/download/v0.2.4/Novium.Horizon.Setup.0.2.4.exe) | [`.blockmap`](https://github.com/novaozone187/novium-releases/releases/download/v0.2.4/Novium.Horizon.Setup.0.2.4.exe.blockmap) |

> [!TIP]
> **Differential Auto-Updates Active**: Once installed, Novium Horizon automatically checks for new releases on launch. Using Electron's `latest.yml` differential feed and blockmaps, updates download silently in the background and only transfer changed binary chunks.

---

## Featured Products

### Novium Horizon
Desktop System Intelligence, Dynamic Island Capsule HUD, live hardware telemetry, media bridge, and differential auto-updater.

- **Dynamic Island HUD (Novium Capsule)**: Smooth hardware-accelerated floating capsule at the top screen edge with interactive spring physics, tactile controls, and contextual expansion.
- **Zero Windows Toasts**: All noisy OS Action Center notifications are removed. Alerts and update notices route purely through the Dynamic Island.
- **Fullscreen Video Lock**: Strict expansion suppression when watching YouTube, Netflix, VLC, or browser video in fullscreen mode.
- **Media Control Protection**: Expanded media controls are protected from being hijacked or overridden by background notifications.
- **Zero Mock Data Directive**: Operating system telemetry, process lists, CPU/RAM/GPU loads, network metrics, and media controls query real Windows APIs with genuine data.
- **Decentralized Synapse Bus**: Seamless IPC and UDP loopback message passing between Horizon, Pulsar, BlackEye, and system agents.

---

## Release Matrix & Changelog

| Version | Release Date | Highlights & Changes | Assets |
| :--- | :--- | :--- | :--- |
| **v0.2.4** | 2026-11-07 | Native Windows OS notifications removed; all alerts, telemetry warnings, and update notices route exclusively through Horizon's Dynamic Island HUD. | [Setup (v0.2.4)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.4) |
| **v0.2.3** | 2026-11-07 | Fullscreen video expansion suppression (YouTube, Netflix, browser videos lock bar from expanding and tuck into bezel), zero-jitter song transition grace manager, and live WASAPI loopback spectrum. | [Setup (v0.2.3)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.3) |
| **v0.2.2** | 2026-11-07 | Dynamic Island notification isolation, media control protection, in-drawer alert toasts, and embedded transport controls in banners. | [Setup (v0.2.2)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.2) |
| **v0.2.1** | 2026-11-07 | Split-Island presentation for concurrent background activities (Pulsar Beam transfers, hardware alerts), standalone circular bubble. | [Setup (v0.2.1)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.1) |
| **v0.2.0** | 2026-11-07 | Real-time hardware system audio visualizer powered by Windows loopback audio spectrum FFT analysis (Bass/Mid/Treble). | [Setup (v0.2.0)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.0) |
| **v0.1.9** | 2026-11-07 | Dynamic Island Apple-style cardless media deck, sliding cover art slot, zero-jitter song transitions, and hover-off top bezel retreat. | [Setup (v0.1.9)](https://github.com/novaozone187/novium-releases/releases/tag/v0.1.9) |
| **v0.1.8** | 2026-11-07 | Interactive island mode switching between system telemetry HUD and media player; drawer height memory fix. | [Setup (v0.1.8)](https://github.com/novaozone187/novium-releases/releases/tag/v0.1.8) |
| **v0.1.7** | 2026-11-07 | Dynamic placement & multi-monitor support, resting width options, auto-hide on launch, and non-blocking background updater. | [Setup (v0.1.7)](https://github.com/novaozone187/novium-releases/releases/tag/v0.1.7) |
| **v0.1.6** | 2026-11-07 | Non-intrusive reactive notification pill with automatic retraction and independent dismiss controls. | [Setup (v0.1.6)](https://github.com/novaozone187/novium-releases/releases/tag/v0.1.6) |
| **v0.1.5** | 2026-11-07 | Initial public binary release with differential NSIS installer feed and SHA-512 blockmap generation. | [Setup (v0.1.5)](https://github.com/novaozone187/novium-releases/releases/tag/v0.1.5) |

---

## Verification & Integrity

Every build artifact published to this repository is compiled from source and verified against SHA-512 cryptographic checksums.

To verify your downloaded executable:

```powershell
Get-FileHash -Path "Novium.Horizon.Setup.0.2.4.exe" -Algorithm SHA512
```

Compare the output hash against the hash recorded in `latest.yml` to ensure binary authenticity.

---

## Legal & Compliance

In strict compliance with German civil law (§§ 106-112 BGB) and European privacy mandates:
- Novium is completely non-commercial until 07.10.2028.
- No payment processing, subscriptions, paid hosting plans, or commercial contracts are operated.
- No personal user tracking, cookies, or telemetry harvesting are collected.
- All source code and release builds are distributed freely under the permissive MIT License.

Developed by **Novium Systems** • Principal developer: **Luca (novaozone187)**
