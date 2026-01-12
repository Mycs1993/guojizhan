$zipName = "deploy.zip"
$sourceFiles = @(
    ".next",
    "public",
    "messages",
    "package.json",
    "next.config.ts",
    ".env.local"
)

# Remove existing zip if it exists
if (Test-Path $zipName) {
    Remove-Item $zipName
}

Write-Host "Compressing files into $zipName..."
Compress-Archive -Path $sourceFiles -DestinationPath $zipName -Force

Write-Host "Done! You can find $zipName in the current directory."
