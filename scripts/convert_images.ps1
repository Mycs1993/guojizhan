
# Load System.Drawing assembly
Add-Type -AssemblyName System.Drawing

$imgDir = "public/images/products"
$dataFile = "src/data/products.ts"
$quality = 85

# Get list of PNG files
$pngFiles = Get-ChildItem -Path $imgDir -Filter "*.png"

if ($pngFiles.Count -eq 0) {
    Write-Host "No PNG files found to convert."
    exit
}

$tsContent = Get-Content $dataFile -Raw

foreach ($file in $pngFiles) {
    $pngPath = $file.FullName
    $jpgName = $file.BaseName + ".jpg"
    $jpgPath = Join-Path $imgDir $jpgName

    Write-Host "Converting $($file.Name) to $jpgName..."

    try {
        $img = [System.Drawing.Image]::FromFile($pngPath)
        
        # Encoder parameter for quality
        $encoder = [System.Drawing.Imaging.Encoder]::Quality
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, $quality)
        
        # Get JPG codec info
        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }

        # Save as JPG
        $img.Save($jpgPath, $jpegCodec, $encoderParams)
        $img.Dispose()

        # Update TS file content
        # We replace the filename.png with filename.jpg globally
        # Escape . for regex
        $pattern = [Regex]::Escape($file.Name)
        if ($tsContent -match $pattern) {
            $tsContent = $tsContent -replace $pattern, $jpgName
            Write-Host "  Updated reference in products.ts"
        }

        # Remove original PNG
        Remove-Item $pngPath
        Write-Host "  Deleted original PNG"

    } catch {
        Write-Error "Failed to convert $($file.Name): $_"
    }
}

# Save updated TS file
Set-Content -Path $dataFile -Value $tsContent -Encoding UTF8
Write-Host "All conversions complete and products.ts updated."
