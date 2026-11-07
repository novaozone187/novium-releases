<div align="center">

# Novium Official Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.4-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011-818cf8?style=for-the-badge&labelColor=050608)](#)
[![Zero Mock Data](https://img.shields.io/badge/TELEMETRY-ZERO%20MOCK%20DATA-10b981?style=for-the-badge&labelColor=050608)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-f59e0b?style=for-the-badge&labelColor=050608)](#)

### The official distribution repository, binary mirror, and differential auto-updater feed for the Novium desktop ecosystem.

[Download Latest (v0.3.4)](#direct-downloads) • [Release Notes](#release-matrix--changelog) • [Featured Products](#featured-products) • [Main Monorepo](https://github.com/novaozone187/Novium)

</div>

> [!IMPORTANT]
> **Early Development Notice**: Novium Horizon is currently in active early development and is **not 100% stable**. You may encounter bugs, visual glitches, or unexpected behavior as hardware hooks, system APIs, and desktop overlays are actively developed and refined. Please report any issues on GitHub or in the Discord community.

---

## Direct Downloads

| Product | Target Platform | Latest Version | Direct Installer | SHA-512 Blockmap |
| :--- | :--- | :--- | :--- | :--- |
| **Novium Horizon** | Windows 10/11 (x64) | `v0.3.4` | [**Novium.Horizon.Setup.0.3.4.exe**](https://github.com/novaozone187/novium-releases/releases/download/v0.3.4/Novium.Horizon.Setup.0.3.4.exe) | [`.blockmap`](https://github.com/novaozone187/novium-releases/releases/download/v0.3.4/Novium.Horizon.Setup.0.3.4.exe.blockmap) |

> [!TIP]
> **Differential Auto-Updates Active**: Once installed, Novium Horizon automatically checks for new releases on launch. Using Electron's `latest.yml` differential feed and blockmaps, updates download silently in the background and only transfer changed binary chunks.

---

## Featured Products

### Novium Horizon
Desktop System Intelligence, Dynamic Island Capsule HUD, live hardware telemetry, media bridge, and differential auto-updater.

- **Dynamic Island Alert Lifecycle & Retraction Architecture**: All system alerts, hardware threshold breaches (CPU > 85%, RAM > 90%), LAN sentry guard events, and software updates emerge immediately as full descriptive notice banners in the Dynamic Island. When the banner duration concludes, if the alert condition remains unresolved, the island smoothly retracts the banner into a detached minimal secondary bubble that persists alongside the capsule until resolved.
- **Fluid Re-Merge on Resolution**: Once the underlying alert resolves, the bubble organically animates back into the main capsule and merges away without UI interruption.
- **Interactive Bubble Inspection**: Clicking the unresolved alert bubble expands directly to the alert or update drawer for diagnostic telemetry and one-click resolution.
- **Auto-Emergence for Updates and Alerts**: Software updates (downloading/downloaded) and critical alerts now unconditionally reveal the capsule from the top bezel, regardless of auto-hide or prior peeking state.
- **Unsuppressed Critical Peeking**: High-priority alerts and update notifications bypass fullscreen video suppression so critical system events are never dropped silently.
- **Optical Transport Centering**: Calibrated play and pause transport controls within circular buttons across all HUD views, eliminating asymmetrical bounding-box offsets with sub-pixel precision.
- **Centerline Audio Spectrum**: Aligned the live WASAPI loopback FFT analyzer to the vertical centerline of the control group with symmetrical height dilation.
- **Fluid Sliding Cover Art**: Media cover art smoothly expands and collapses without layout jitter or empty placeholder boxes when artwork cannot be grabbed.
- **Demand-Driven Process Telemetry**: Win32 process metrics are polled exclusively when overview or process tabs are displayed, eliminating background CPU overhead when hidden or viewing other views.
- **Adaptive GPU Query Throttling**: Scaled GPU metrics query cache TTL dynamically according to window visibility, completely preventing sub-process storms.
- **Direct Overlay Mount**: Decoupled overlay rendering from workstation history buffers and state machines, eliminating redundant re-renders.
- **Off-Screen Telemetry Buffering**: Metrics ticks arriving while tucked into the top bezel are buffered in a ref without triggering DOM re-renders until revealed.
- **Unified Apple Fluid Spring Physics**: Every state transition across the Dynamic Island utilizes Apple's signature quintic spring curve cubic-bezier(0.16, 1, 0.3, 1) over a synchronized 420ms duration.
- **Organic Secondary Bubble Emergence**: Secondary bubble physically buds and slides out from inside the right cap of the capsule while smoothly enlarging from scale 0.25 to 1.0.
- **Symmetrical Top-Center Placement**: Split multi-activity presentation is mathematically calibrated so the combined cluster remains centered around the screen midpoint with zero pixel drift.
- **Zero Windows Toasts**: All noisy OS Action Center notifications are removed. Alerts and update notices route purely through the Dynamic Island.
- **Zero Mock Data Directive**: Operating system telemetry, process lists, CPU/RAM/GPU loads, network metrics, and media controls query real Windows APIs with genuine data.
- **Decentralized Synapse Bus**: Seamless IPC and UDP loopback message passing between Horizon, Pulsar, BlackEye, and system agents.

---

## Release Matrix & Changelog

| Version | Release Date | Highlights & Changes | Assets |
| :--- | :--- | :--- | :--- |
| **v0.3.4** | 2026-11-07 | Dynamic Island alert lifecycle (full banner notice retracts to detached secondary bubble until condition resolved); guaranteed top-bezel emergence on updates and notifications; interactive bubble inspection; optical play icon centering calibration; fluid sliding cover art. | [Setup (v0.3.4)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.4) |
| **v0.3.3** | 2026-11-07 | Symmetrical optical play icon centering inside circular button; vertical audio visualizer centerline alignment; uniform 8px control spacing; demand-driven Win32 process polling; adaptive GPU telemetry throttling; direct overlay window mount; off-screen telemetry buffering. | [Setup (v0.3.3)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.3) |
| **v0.3.2** | 2026-11-07 | Unified Apple fluid spring physics across all Dynamic Island states; organic secondary bubble emergence and liquid retraction; mathematically centered split placement; dynamic squircle corner radius interpolation; calibrated top-bezel exit. | [Setup (v0.3.2)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.2) |
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
