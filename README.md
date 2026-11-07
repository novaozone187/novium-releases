<div align="center">

# Novium Official Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.9-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011-818cf8?style=for-the-badge&labelColor=050608)](#)
[![Zero Mock Data](https://img.shields.io/badge/TELEMETRY-ZERO%20MOCK%20DATA-10b981?style=for-the-badge&labelColor=050608)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-f59e0b?style=for-the-badge&labelColor=050608)](#)

### The official distribution repository, binary mirror, and differential auto-updater feed for the Novium desktop ecosystem.

[Download Latest (v0.3.9)](#direct-downloads) • [Release Notes](#release-matrix--changelog) • [Featured Products](#featured-products) • [Main Monorepo](https://github.com/novaozone187/Novium)

</div>

> [!IMPORTANT]
> **Early Development Notice**: Novium Horizon is currently in active early development and is **not 100% stable**. You may encounter bugs, visual glitches, or unexpected behavior as hardware hooks, system APIs, and desktop overlays are actively developed and refined. Please report any issues on GitHub or in the Discord community.

---

## Direct Downloads

| Product | Target Platform | Latest Version | Direct Installer | SHA-512 Blockmap |
| :--- | :--- | :--- | :--- | :--- |
| **Novium Horizon** | Windows 10/11 (x64) | `v0.3.9` | [**Novium-Horizon-Setup-0.3.9.exe**](https://github.com/novaozone187/novium-releases/releases/download/v0.3.9/Novium-Horizon-Setup-0.3.9.exe) | [`.blockmap`](https://github.com/novaozone187/novium-releases/releases/download/v0.3.9/Novium-Horizon-Setup-0.3.9.exe.blockmap) |

> [!NOTE]
> **Windows SmartScreen & Antivirus Prompt**:
> When downloading or running the installer (`.exe`), Windows Defender SmartScreen or your browser may show a prompt stating that the file is "unrecognized" or "might be harmful".
>
> This occurs purely because Novium is a free, open-source project and does not have an expensive commercial EV code-signing certificate. All binaries are built directly and transparently from the open-source repository with zero spyware, analytics, or background telemetry snooping.
>
> **This warning is expected and should be disregarded:**
> 1. In Windows SmartScreen: Click **"More info"** and then select **"Run anyway"**.
> 2. In Microsoft Edge / Google Chrome: If prompted, click the `...` menu on the download, choose **"Keep"**, and click **"Keep anyway"**.

> [!TIP]
> **Differential Auto-Updates Active**: Once installed, Novium Horizon automatically checks for new releases on launch. Using Electron's `latest.yml` differential feed and blockmaps, updates download silently in the background and only transfer changed binary chunks.

---

## Featured Products

### Novium Horizon
Desktop System Intelligence, Dynamic Island Capsule HUD, live hardware telemetry, media bridge, and differential auto-updater.

- **Dynamic Island Media Deck Height Calibration**: Calibrated expanded capsule height to 254px (and 310px with active in-deck alerts), resolving bottom clipping where transport controls (Previous, Play/Pause, Next) were cut off by the rounded border of the Dynamic Island.
- **Ergonomic Clearance**: Ensured generous 24px bottom clearance inside the rounded capsule geometry, allowing the 48px tactile Play/Pause button and 40px Previous/Next buttons to sit comfortably with balanced spacing.
- **Clean Native Interactions**: Swapped native HTML title attributes on Previous and Next transport buttons to aria-label, eliminating intrusive browser tooltips on hover.
- **Differential Auto-Update Asset Alignment**: Uploaded both hyphenated (`Novium-Horizon-Setup-X.X.X.exe`) and dot-notated installer names across all releases, eliminating 404 download errors in `electron-updater`.
- **Accurate Dynamic Island Update Status**: Fixed notification banner condition to eliminate premature "Restart & Apply" display during active downloads. Live progress is displayed during downloads, and "Restart & Apply" only appears once verified.
- **Persistent GPU Telemetry Display**: Eliminated the artificial `gpu > 15` threshold that caused the GPU usage metric to vanish when system utilization dropped to 15% or below. Real-time GPU load is now consistently displayed alongside CPU and RAM whenever GPU hardware is present.
- **Resilient Hardware Sensor Pipeline**: Hardened `nvidia-smi` subprocess polling by increasing the query timeout to 2000ms and eliminating premature sensor latch-off on transient power-state latencies.
- **Continuous Telemetry Caching**: Retains the last valid GPU telemetry sample across momentary sensor latency spikes, ensuring zero telemetry dropouts or flickers to 0%.
- **Content-Wrapping Dynamic Island Geometry**: Eliminated blank space voids across all expanded states. The telemetry matrix fits snugly within an optimized 228px height and 500px width.
- **Calibrated Optical Centering**: Shifted the right-pointing Play triangle path to optical coordinates (base x=8.75, tip x=18.75), aligning its visual centroid to x=12.08 within the 24x24 viewBox to completely eliminate perceived leftward drift inside circular tactile buttons.
- **Streamlined Dynamic Island Control Architecture**: Removed redundant chevron collapse buttons from the expanded media deck, dashboard header, and update cards. The Island collapses natively via outside clicks, top-bar dismissal, close controls, or Escape, aligning with Apple's minimal aesthetic.
- **Dynamic Island Alert Lifecycle & Retraction Architecture**: All system alerts, hardware threshold breaches (CPU > 85%, RAM > 90%), LAN sentry guard events, and software updates emerge immediately as full descriptive notice banners in the Dynamic Island. When the banner duration concludes, if the alert condition remains unresolved, the island smoothly retracts the banner into a detached minimal secondary bubble that persists alongside the capsule until resolved.
- **Fluid Re-Merge on Resolution**: Once the underlying alert resolves, the bubble organically animates back into the main capsule and merges away without UI interruption.
- **Interactive Bubble Inspection**: Clicking the unresolved alert bubble expands directly to the alert or update drawer for diagnostic telemetry and one-click resolution.
- **Auto-Emergence for Updates and Alerts**: Software updates (downloading/downloaded) and critical alerts now unconditionally reveal the capsule from the top bezel, regardless of auto-hide or prior peeking state.
- **Unsuppressed Critical Peeking**: High-priority alerts and update notifications bypass fullscreen video suppression so critical system events are never dropped silently.
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
| **v0.3.9** | 2026-11-07 | Dynamic Island expanded music deck height calibrated to 254px (310px with deck alert), eliminating clipping of transport controls (Previous, Play/Pause, Next); generous 24px bottom clearance; aria-labels on buttons. | [Setup (v0.3.9)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.9) |
| **v0.3.8** | 2026-11-07 | Multi-name release binary asset mirroring (hyphenated and dot-notated) to resolve 404s in `electron-updater`; accurate Dynamic Island download progress without premature "Restart & Apply" button; synchronized error handling. | [Setup (v0.3.8)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.8) |
| **v0.3.7** | 2026-11-07 | Persistent GPU telemetry display (removed artificial `gpu > 15` threshold; displays load continuously alongside CPU/RAM); resilient `nvidia-smi` sensor pipeline with 2000ms timeout and transient latency caching; eliminated telemetry dropouts. | [Setup (v0.3.7)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.7) |
| **v0.3.6** | 2026-11-07 | Content-wrapping Dynamic Island geometry (telemetry drawer height reduced to 228px, eliminating 77px of blank space void; width tightened to 500px); calibrated optical centering for Play icon (centroid at x=12.08); eliminated intrusive browser tooltip popups with aria-label; streamlined header controls without chevrons. | [Setup (v0.3.6)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.6) |
| **v0.3.5** | 2026-11-07 | Streamlined Dynamic Island control architecture: removed redundant chevron collapse buttons across all expanded headers (media deck, dashboard header, update cards); native outside-click, escape, and dismiss gesture handling. | [Setup (v0.3.5)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.5) |
| **v0.3.4** | 2026-11-07 | Dynamic Island alert lifecycle (full banner notice retracts to detached secondary bubble until condition resolved); guaranteed top-bezel emergence on updates and notifications; interactive bubble inspection; optical play icon centering calibration; fluid sliding cover art. | [Setup (v0.3.4)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.4) |
| **v0.3.3** | 2026-11-07 | Symmetrical optical play icon centering inside circular button; vertical audio visualizer centerline alignment; uniform 8px control spacing; demand-driven Win32 process polling; adaptive GPU telemetry throttling; direct overlay window mount; off-screen telemetry buffering. | [Setup (v0.3.3)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.3) |
| **v0.3.2** | 2026-11-07 | Unified Apple fluid spring physics across all Dynamic Island states; organic secondary bubble emergence and liquid retraction; mathematically centered split placement; dynamic squircle corner radius interpolation; calibrated top-bezel exit. | [Setup (v0.3.2)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.2) |
| **v0.3.1** | 2026-11-07 | Fixed optical centering of the play triangle icon inside the circular transport controls on both collapsed capsule and player deck. | [Setup (v0.3.1)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.1) |
| **v0.3.0** | 2026-11-07 | Robust differential auto-updater state machine; true byte transfer progress and download tracking; fixed premature "Restart & Apply" display before complete package download. | [Setup (v0.3.0)](https://github.com/novaozone187/novium-releases/releases/tag/v0.3.0) |

---

<div align="center">

Novium • Decentralized Autonomous Infrastructure & Tactical System Intelligence

</div>
