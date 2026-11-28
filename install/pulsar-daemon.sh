#!/usr/bin/env sh
set -eu

DAEMON_NAME="pulsar-daemon"
INSTALL_ROOT="/opt/novium/${DAEMON_NAME}"
FEED_URL="https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/${DAEMON_NAME}.json"
SERVICE_FILE="/etc/systemd/system/novium-pulsar.service"

if [ "$(id -u)" -ne 0 ]; then
  echo "Run as root (sudo sh)." >&2
  exit 1
fi

command -v node >/dev/null 2>&1 || { echo "Node.js 20+ is required." >&2; exit 1; }
command -v curl >/dev/null 2>&1 || { echo "curl is required." >&2; exit 1; }

ARCH="$(uname -m)"
case "$ARCH" in
  x86_64|amd64) PLAT="linux-x64" ;;
  aarch64|arm64) PLAT="linux-arm64" ;;
  *) echo "Unsupported architecture: $ARCH" >&2; exit 1 ;;
esac

mkdir -p "${INSTALL_ROOT}/releases" "${INSTALL_ROOT}/staging"
MANIFEST_JSON="$(curl -fsSL "$FEED_URL")"
VERSION="$(printf '%s' "$MANIFEST_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync(0,'utf8'));console.log(d.version)")"
URL="$(printf '%s' "$MANIFEST_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync(0,'utf8'));const a=d.artifacts['$PLAT']||d.artifacts['linux-x64'];if(!a)process.exit(1);console.log(a.url)")"
SHA256="$(printf '%s' "$MANIFEST_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync(0,'utf8'));const a=d.artifacts['$PLAT']||d.artifacts['linux-x64'];console.log(a.sha256)")"

ARCHIVE="${INSTALL_ROOT}/staging/${DAEMON_NAME}-${VERSION}.tar.gz"
curl -fsSL "$URL" -o "$ARCHIVE"
ACTUAL_SHA="$(sha256sum "$ARCHIVE" | awk '{print $1}')"
if [ -n "$SHA256" ] && [ "$ACTUAL_SHA" != "$SHA256" ]; then
  rm -rf "${INSTALL_ROOT}/staging/*"
  echo "SHA-256 verification failed: expected $SHA256, got $ACTUAL_SHA" >&2
  exit 1
fi

TARGET="${INSTALL_ROOT}/releases/${VERSION}"
rm -rf "$TARGET"
mkdir -p "$TARGET"
tar -xzf "$ARCHIVE" -C "$TARGET"
rm -f "$ARCHIVE"
ln -sfn "$TARGET" "${INSTALL_ROOT}/current"

cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=Novium Pulsar Headless Mesh Daemon
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=${INSTALL_ROOT}/current/bin/${DAEMON_NAME}
Environment=PULSAR_MODE=headless
Restart=on-failure
RestartSec=3
AmbientCapabilities=CAP_NET_ADMIN

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now novium-pulsar.service
echo "Installed ${DAEMON_NAME} v${VERSION} (${INSTALL_ROOT}/current)."
