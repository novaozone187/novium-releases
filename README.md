<div align="center">

# Novium Official Releases

[![Latest Release](https://img.shields.io/badge/LATEST%20RELEASE-v0.3.11-38bdf8?style=for-the-badge&labelColor=050608)](https://github.com/novaozone187/novium-releases/releases/latest)
[![Platform](https://img.shields.io/badge/PLATFORM-WINDOWS%2010%20%7C%2011-818cf8?style=for-the-badge&labelColor=050608)](#)
[![Zero Mock Data](https://img.shields.io/badge/TELEMETRY-ZERO%20MOCK%20DATA-10b981?style=for-the-badge&labelColor=050608)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-f59e0b?style=for-the-badge&labelColor=050608)](#)

### The official distribution repository, binary mirror, and differential auto-updater feed for the Novium desktop ecosystem.

[Download Latest (v0.3.11)](#direct-downloads) • [Release Notes](#release-matrix--changelog) • [Featured Products](#featured-products) • [Main Monorepo](https://github.com/novaozone187/Novium)

</div>

> [!IMPORTANT]
> **Early Development Notice**: Novium Horizon is currently in active early development and is **not 100% stable**. You may encounter bugs, visual glitches, or unexpected behavior as hardware hooks, system APIs, and desktop overlays are actively developed and refined. Please report any issues on GitHub or in the Discord community.

> [!NOTE]
> **Windows SmartScreen / Browser Notice**: Because Novium is a non-commercial open-source project created by an independent minor developer under German law (§§ 106–112 BGB), the releases are not signed with a paid corporate Extended Validation (EV) certificate. Windows SmartScreen or web browsers may show an unrecognized application prompt (e.g., *"Windows protected your PC"* or *"This file might be harmful"*). This is completely normal and expected for unsigned open-source binaries. Simply click **"More info"** and then **"Run anyway"** (or **"Keep anyway"**) to continue.

---

## Direct Downloads

### Novium Horizon (v0.3.11)
Central hardware hub, tactile Dynamic Island desktop capsule, live audio visualizer, real-time system telemetry, and companion mesh director.

| Architecture | Package | Download Link | Checksum (SHA-512) |
|---|---|---|---|
| **Windows x64** | One-Click Installer (.exe) | [Novium-Horizon-Setup-0.3.11.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.11/Novium-Horizon-Setup-0.3.11.exe) | `9/3AUk2NSx6uPCDfc3mrr2lbvtS/YsJvejrriCq4bT30zHPPbNBTKdPrVwCI6Lr/pvuD890RjOjqHE0ea4Z60g==` |
| **Windows x64** | Standard Installer (.exe) | [Novium.Horizon.Setup.0.3.11.exe](https://github.com/novaozone187/novium-releases/releases/download/v0.3.11/Novium%20Horizon%20Setup%200.3.11.exe) | `9/3AUk2NSx6uPCDfc3mrr2lbvtS/YsJvejrriCq4bT30zHPPbNBTKdPrVwCI6Lr/pvuD890RjOjqHE0ea4Z60g==` |

---

## Release Matrix & Changelog

### v0.3.11 (Latest)
- **Sanitized Error Reporting**: Updater error handler cleanly catches network timeouts (504 Gateway Timeout), mirror synchronization states (404), and offline states, translating them into human-readable messages instead of raw HTTP headers and HTML dumps.
- **Protected UI Clamping**: Settings telemetry card wraps and defensively clamps update errors to prevent interface disruption.
- **Synchronized Resting Widths**: Segmented width controls in Settings now accurately match pixel dimensions of the resting Dynamic Island capsule (Compact: 360px, Standard: 420px, Wide: 520px).
- **Full-Display Canvas Geometry**: Overlay window bounds span the full primary display width without OS-level window moves or flicker when switching between Top Center, Top Right, and Top Left positions.

### v0.3.10
- **Unstacked Alert Pipeline**: Eliminated nested in-drawer alert toasts.
- **Apple 28px Squircle Radius**: Calibrated outer capsule corner radius from 36px to 28px squircle.
- **Concentric Corner Spacing**: Upgraded horizontal header and drawer paddings to 20px (px-5).

---

## Verification & Integrity

All release assets are accompanied by cryptographic SHA-512 blockmaps and hashes to verify binary integrity.

To manually verify the download on Windows PowerShell:
```powershell
Get-FileHash -Path "Novium-Horizon-Setup-0.3.11.exe" -Algorithm SHA512
```

---

<div align="center">
Novium Ecosystem • Zero Mock Data Standard
</div>
