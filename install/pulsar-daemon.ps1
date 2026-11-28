param(
  [string]$Daemon = "pulsar-daemon"
)

$ErrorActionPreference = "Stop"
$FeedUrl = "https://raw.githubusercontent.com/novaozone187/novium-releases/main/feeds/daemons/$Daemon.json"
$BaseDir = Join-Path $env:ProgramData "Novium\$Daemon"
$Staging = Join-Path $BaseDir "staging"
$Releases = Join-Path $BaseDir "releases"

New-Item -ItemType Directory -Force -Path $Staging, $Releases | Out-Null
$Manifest = Invoke-RestMethod -Uri $FeedUrl
$Artifact = $Manifest.artifacts."win32-x64"
if (-not $Artifact) { throw "No win32-x64 artifact published for $Daemon." }

$Archive = Join-Path $Staging "$Daemon-$($Manifest.version).zip"
Invoke-WebRequest -Uri $Artifact.url -OutFile $Archive
$Hash = (Get-FileHash -Path $Archive -Algorithm SHA256).Hash.ToLower()
if ($Artifact.sha256 -and ($Hash -ne $Artifact.sha256.ToLower())) {
  Remove-Item -Force $Archive
  throw "SHA-256 mismatch for $Daemon: expected $($Artifact.sha256), got $Hash"
}

$TargetDir = Join-Path $Releases $Manifest.version
if (Test-Path $TargetDir) { Remove-Item -Recurse -Force $TargetDir }
Expand-Archive -Path $Archive -DestinationPath $TargetDir -Force
Remove-Item -Force $Archive

$CurrentLink = Join-Path $BaseDir "current"
if (Test-Path $CurrentLink) { Remove-Item -Recurse -Force $CurrentLink }
New-Item -ItemType Junction -Path $CurrentLink -Target $TargetDir | Out-Null

Write-Output "Staged $Daemon v$($Manifest.version) at $CurrentLink"
