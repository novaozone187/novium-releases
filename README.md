<div align="center">

# Novium Official Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.1-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011-818cf8?style=for-the-badge&labelColor=050608)](#)
[![Zero Mock Data](https://img.shields.io/badge/TELEMETRY-ZERO%20MOCK%20DATA-10b981?style=for-the-badge&labelColor=050608)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-f59e0b?style=for-the-badge&labelColor=050608)](#)

### The official distribution repository, binary mirror, and differential auto-updater feed for the Novium desktop ecosystem.

[Download Latest (v0.3.1)](#direct-downloads) • [Release Notes](#release-matrix--changelog) • [Featured Products](#featured-products) • [Main Monorepo](https://github.com/novaozone187/Novium)

</div>

> [!IMPORTANT]
> **Early Development Notice**: Novium Horizon is currently in active early development and is **not 100% stable**. You may encounter bugs, visual glitches, or unexpected behavior as hardware hooks, system APIs, and desktop overlays are actively developed and refined. Please report any issues on GitHub or in the Discord community.

---

## Direct Downloads

| Product | Target Platform | Latest Version | Direct Installer | SHA-512 Blockmap |
| :--- | :--- | :--- | :--- | :--- |
| **Novium Horizon** | Windows 10/11 (x64) | `v0.3.1` | [**Novium.Horizon.Setup.0.3.1.exe**](https://github.com/novaozone187/novium-releases/releases/download/v0.3.1/Novium.Horizon.Setup.0.3.1.exe) | [`.blockmap`](https://github.com/novaozone187/novium-releases/releases/download/v0.3.1/Novium.Horizon.Setup.0.3.1.exe.blockmap) |

> [!TIP]
> **Differential Auto-Updates Active**: Once installed, Novium Horizon automatically checks for new releases on launch. Using Electron's `latest.yml` differential feed and blockmaps, updates download silently in the background and only transfer changed binary chunks.

---

## Featured Products

### Novium Horizon
Desktop System Intelligence, Dynamic Island Capsule HUD, live hardware telemetry, media bridge, and differential auto-updater.

- **Optical Centering Polish**: Fixed play triangle icon alignment inside transport control buttons across the capsule HUD and player decks.
- **Updater Lifecycle & Clean Exit**: Resolved premature "Restart & Apply" display by re-architecting updater states. Resolved overlay close interceptor issue that prevented Horizon from quitting during installation, ensuring clean binary replacement.
- **Automatic Stale Cache Purge**: Cleans up leftover installer packages in the local pending directory on startup to prevent stale cached versions from falsely indicating ready updates.
- **Dynamic Island Split Emergence**: Detached secondary bubble physically buds and slides out from inside the main bar when a concurrent background task (high utilization alert, file beam, or software update) begins, and liquidly retracts back inside when dismissed.
- **Fluid Dynamic Island Exit Animation**: Apple HIG quintic spring deceleration (580ms duration with cubic-bezier(0.22, 1, 0.36, 1)) and synchronized opacity fade so the capsule smoothly glides behind the physical display bezel.
- **Dynamic Discord-Style Guided Tour**: Interactive ambient dark spotlight cutout with direct arrow notches and pulsating radar beacons anchored to mission elements (sidebar deck, 60fps seismograph, Dynamic Island toggle, invariant alerts, and operator profile).
- **Dynamic Island HUD (Novium Capsule)**: Smooth hardware-accelerated floating capsule at the top screen edge with interactive spring physics, tactile controls, and contextual expansion.
- **Live Hardware Audio Visualizer**: Real-time WASAPI loopback FFT analyzer with Adaptive Gain Control and organic acoustic harmonic engine for authentic, continuous equalizer motion.
- **Reliable Deck Expansion**: Restored full manual expansion on Capsule and chevron clicks, distinguishing between maximized windows and true borderless fullscreen games/videos.
- **Clean Media Presentation**: Single unified pill in media mode by default; detached secondary bubble is strictly reserved for high utilization alerts, active file beams, and software updates.
- **Zero Windows Toasts**: All noisy OS Action Center notifications are removed. Alerts and update notices route purely through the Dynamic Island.
- **Fullscreen Video Lock**: Strict auto-expansion suppression when watching YouTube, Netflix, VLC, or browser video in fullscreen mode.
- **Media Control Protection**: Expanded media controls are protected from being hijacked or overridden by background notifications.
- **Zero Mock Data Directive**: Operating system telemetry, process lists, CPU/RAM/GPU loads, network metrics, and media controls query real Windows APIs with genuine data.
- **Decentralized Synapse Bus**: Seamless IPC and UDP loopback message passing between Horizon, Pulsar, BlackEye, and system agents.

---

## Release Matrix & Changelog

| Version | Release Date | Highlights & Changes | Assets |
| :--- | :--- | :--- | :--- |
| **v0.3.1** | 2026-11-07 | Fixed optical centering of the play triangle icon inside the circular transport controls on both collapsed capsule and player deck. | [Setup (v0.3.1)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.1) |
| **v0.3.0** | 2026-11-07 | Fixed premature "Restart & Apply" updater state bug; corrected overlay window close interception so autoUpdater.quitAndInstall cleanly quits the process; added startup pending cache purge and strict semver validation. | [Setup (v0.3.0)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.0) |
| **v0.2.9** | 2026-11-07 | Dynamic Island split emergence dynamics (bubble physically buds and slides out of main bar on secondary task start, liquidly retracts and merges back inside on dismissal), synchronized scale/transform spring ballistics, and multi-layered depth. | [Setup (v0.2.9)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.9) |
| **v0.2.8** | 2026-11-07 | Fluid Dynamic Island exit animation (580ms Apple HIG spring curve cubic-bezier(0.22, 1, 0.36, 1)), synchronized opacity fade with 60ms delay, relaxed 480ms retreat buffer, and smooth close dismissal. | [Setup (v0.2.8)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.8) |
| **v0.2.7** | 2026-11-07 | Dynamic Discord-style guided onboarding tour with ambient SVG spotlight cutout, directional arrow callout notches, pulsating radar beacons, and in-tour interactive controls. | [Setup (v0.2.7)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.7) |
| **v0.2.6** | 2026-11-07 | Live hardware audio visualizer with Adaptive Gain Control and harmonic fallback; restored Dynamic Island deck expansion; single unified pill by default in media mode (secondary bubble only emerges on high utilization / alerts). | [Setup (v0.2.6)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.6) |
| **v0.2.5** | 2026-11-07 | Fixed premature update "Ready" signaling; separated in-progress download notices from verified installation; added quitAndInstall guard and verifying state. | [Setup (v0.2.5)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.5) |
| **v0.2.4** | 2026-11-07 | Native Windows OS notifications removed; all alerts, telemetry warnings, and update notices route exclusively through Horizon's Dynamic Island HUD. | [Setup (v0.2.4)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.4) |
| **v0.2.3** | 2026-11-07 | Fullscreen video expansion suppression (YouTube, Netflix, browser videos lock bar from expanding and tuck into bezel), zero-jitter song transition grace manager, and live WASAPI loopback spectrum. | [Setup (v0.2.3)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.3) |
| **v0.2.2** | 2026-11-07 | Dynamic Island notification isolation, media control protection, in-drawer alert toasts, and embedded transport controls in banners. | [Setup (v0.2.2)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.2) |
| **v0.2.1** | 2026-11-07 | Split-Island presentation for concurrent background activities (Pulsar Beam transfers, hardware alerts), standalone circular bubble. | [Setup (v0.2.1)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.1) |
| **v0.2.0** | 2026-11-07 | Real-time hardware system audio visualizer powered by Windows loopback audio spectrum FFT analysis (Bass/Mid/Treble). | [Setup (v0.2.0)](https://github.com/novaozone187/novium-releases/releases/tag/v0.2.0) |
| **v0.1.9** | 2026-11-07 | Dynamic Island Apple-style cardless media deck, sliding cover art slot, zero-jitter song transitions, and hover-off top bezel retreat. | [Setup (v0.1.9)](https://github.com/novaozone187/novium-releases/releases/tag/v0.1.9) |

---

<div align="center">
<sub>Designed and built with precision in the Obsidian Tactile Standard. © 2026 Novium.</sub>
</div>
