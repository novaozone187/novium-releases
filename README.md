<div align="center">

# Novium Official Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.2.1-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011-818cf8?style=for-the-badge&labelColor=050608)](#)
[![Zero Mock Data](https://img.shields.io/badge/TELEMETRY-ZERO%20MOCK%20DATA-10b981?style=for-the-badge&labelColor=050608)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-f59e0b?style=for-the-badge&labelColor=050608)](#)

### The official distribution repository, binary mirror, and differential auto-updater feed for the Novium desktop ecosystem.

[Download Latest (v0.2.1)](#-direct-downloads) • [Release Notes](#-release-matrix--changelog) • [Featured Products](#-featured-products) • [Main Monorepo](https://github.com/novaozone187/Novium)

---

</div>

## 📦 Direct Downloads

| Product | Target Platform | Latest Version | Direct Installer | SHA-512 Blockmap |
| :--- | :--- | :--- | :--- | :--- |
| **Novium Horizon** | Windows 10/11 (x64) | `v0.2.1` | [📥 **Novium.Horizon.Setup.0.2.1.exe**](https://github.com/novaozone187/novium-releases/releases/download/v0.2.1/Novium.Horizon.Setup.0.2.1.exe) | [📄 `.blockmap`](https://github.com/novaozone187/novium-releases/releases/download/v0.2.1/Novium.Horizon.Setup.0.2.1.exe.blockmap) |

> [!TIP]
> **Existing Users**: If you already have Novium Horizon running, you do not need to manually reinstall. Horizon contains an integrated background differential auto-updater that streams updates automatically and notifies you directly inside the Dynamic Island HUD.

---

## ⚡ Featured Products

### 🏝️ Novium Horizon
**Desktop System Intelligence & Dynamic Island Overlay for Windows.**

Novium Horizon is an industrial-grade telemetry monitor, media controller, and floating desktop HUD built with Electron, React 18, and native Win32/WinRT system hooks.

* **Fluid Dynamic Island (Novium Capsule):** Frameless, hardware-accelerated desktop overlay sitting at the top edge of your screen. Features Apple-grade spring physics (`cubic-bezier(0.16, 1, 0.3, 1)`), smooth hover-retreat collapse into the top bezel, and multi-state expansion.
* **Apple Split Double-View Presentation:** Seamless split presentation with zero-deadzone cluster hit-testing, symmetrical centering math, and live secondary activity bubble (System Activity, Software Updates, or Pulsar Beam transfer).
* **Real-Time System Audio Loopback FFT Visualizer:** Authentic Windows WASAPI audio loopback capture. Computes live frequency spectrum (Bass, Mid, Treble) via Web Audio API `AnalyserNode` with physical spring ballistics. Zero mock animations, zero fake timers.
* **Sliding Album Art & Track Jitter Grace Manager:** WinRT GSMTC media transport controller with smooth sliding cover art expansion. When album art is loading or unavailable, track titles sit cleanly on the left edge. When artwork arrives, the slot smoothly expands and slides metadata over with zero layout twitching.
* **100% Real OS Kernel Telemetry:** Windows Task Manager parity CPU utility, GPU thermals & dedicated VRAM, memory allocation breakdown (active/standby/free), physical disk I/O with virtual mount filtering, and live socket connection monitoring. Strict zero mock data adherence.
* **Native Win32 Fullscreen Game Suppression:** Suppresses intrusive notifications when playing full-screen DirectX/Vulkan games or video playback.
* **Differential Auto-Updater:** Streams chunk-based differential updates via `.blockmap` SHA-512 hashes directly from this repository.

---

## 📋 Release Matrix & Changelog

| Version | Release Date | Key Highlights & Changelog |
| :---: | :---: | :--- |
| **`v0.2.1`** | 2026-11-07 | • **Split Double-View Refinement**: Unified cluster hit-testing eliminating click-through deadzones between pill and bubble<br>• Corrected symmetric coordinate placement math across Top Center, Left, and Right<br>• Continuous live System Activity (CPU load ring & activity needle) in the detached bubble alongside active music playback<br>• Dynamic expanded top header adapting smoothly to whichever task is expanded<br>• Removed artificial width clamping on track titles |
| **`v0.2.0`** | 2026-11-07 | • **Real-Time Audio Visualizer**: Authentic Windows WASAPI loopback capture computing live Bass, Mid, and Treble frequencies<br>• Physical spring ballistics with fast transient attack and smooth exponential decay<br>• Zero React re-renders with direct RAF-driven DOM updates at 60/120/144 FPS<br>• Smart idle sleep engine pausing analysis during silence to guarantee 0% CPU overhead<br>• Dual-band mini visualizer in idle telemetry pill |
| **`v0.1.9`** | 2026-11-07 | • Dynamic sliding cover art slot with 350ms Apple spring physics<br>• 650ms artwork grace manager eliminating song-change layout twitching<br>• Fully decoupled telemetry mode switching even during active audio<br>• Continuous GSMTC thumbnail retry engine<br>• Coordinated hover-off retreat collapse into top bezel |
| **`v0.1.8`** | 2026-11-07 | • Apple-grade fluid spring physics (`damping: 1.0, response: 0.38`)<br>• Smart hover-off auto-retreat into the top bezel with 300ms leave grace<br>• Smooth morphing transitions for internal elements |
| **`v0.1.7`** | 2026-11-07 | • Direct silent background update flow<br>• Native NSIS per-user automated installer path<br>• Single-step execution eliminating interactive dialog screens |
| **`v0.1.6`** | 2026-11-07 | • Dynamic Island Updating Live Activity pill<br>• Real-time download transfer speed in `MB/s` & completion bar<br>• One-click `Restart & Apply` trigger directly from the Capsule HUD |
| **`v0.1.5`** | 2026-11-07 | • Dynamic Island multi-view (Mini Pill + Detached Secondary Bubble)<br>• Independent telemetry HUD & secondary media pill |
| **`v0.1.4`** | 2026-11-07 | • Top-bezel docking geometry and custom resting width presets<br>• Frosted glass and deep OLED solid material toggle |
| **`v0.1.0`** | 2026-11-06 | • Initial public release of Novium Horizon for Windows 10/11<br>• Core telemetry engine, GSMTC media bridge, and Dynamic Island HUD |

---

## 🚀 Installation & First Run

1. **Download:** Grab the latest `Novium.Horizon.Setup.X.X.X.exe` from the [Releases](https://github.com/novaozone187/novium-releases/releases/latest) page.
2. **Execute:** Run the installer. It installs Novium Horizon to your local user profile without requiring administrative privileges (`%LOCALAPPDATA%\Programs\Novium Horizon`).
3. **Launch:** Horizon starts automatically in your Windows system tray, displaying the sleek Dynamic Island HUD pinned to the top of your primary display.
4. **Interact:**
   - **Hover** over the Capsule to expand hardware gauges, live audio spectrum visualizers, and media scrubbers.
   - **Click** the telemetry/activity icon to switch between System HUD and Music Controller.
   - **Right-click** the system tray icon to toggle visibility, open settings, or exit.

---

## 🔒 Verification & Security

Every binary distributed in `novium-releases` is built directly from clean source commits in the primary [Novium Monorepo](https://github.com/novaozone187/Novium).
Integrity hashes (SHA-512) and differential chunk maps are published alongside each release in `latest.yml`.

To verify the integrity of your installer manually via PowerShell:
```powershell
Get-FileHash -Path "Novium.Horizon.Setup.0.2.1.exe" -Algorithm SHA512
```
Compare the output hash against the `sha512` string in [`latest.yml`](https://github.com/novaozone187/novium-releases/releases/download/v0.2.1/latest.yml).

---

## ⚖️ Legal & Compliance

Novium Horizon and its associated binaries are strictly non-commercial and 100% free software.
In compliance with German legal directives (§§ 106–112 BGB):
- Contains zero advertisements, paywalls, or commercial subscriptions.
- Collects zero personal telemetry, cookies, or user tracking data.
- Does not require user registration or external cloud accounts.

For issues, bug reports, and source code development, please visit the [Novium Core Repository](https://github.com/novaozone187/Novium).

---

<div align="center">
<sub>Novium Ecosystem • Engineered by Luca & Contributors • 2026</sub>
</div>
