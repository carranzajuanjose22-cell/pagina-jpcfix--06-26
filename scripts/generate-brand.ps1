$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$root = (Get-Location).Path
$logo = [System.Drawing.Image]::FromFile((Join-Path $root 'public/images/jpcfix-oficial.png'))
$icon = New-Object System.Drawing.Bitmap 192,192
$ig = [System.Drawing.Graphics]::FromImage($icon)
$ig.Clear([System.Drawing.Color]::White)
$ig.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$ig.DrawImage($logo, 4, 65, 184, 61)
$icon.Save((Join-Path $root 'public/favicon.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$ig.Dispose()
$icon.Dispose()
$og = New-Object System.Drawing.Bitmap 1200,630
$g = [System.Drawing.Graphics]::FromImage($og)
$g.Clear([System.Drawing.ColorTranslator]::FromHtml('#fafbf9'))
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($logo, 50, 25, 270, 90)
$ink = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#131923'))
$blue = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#1249d8'))
$font = New-Object System.Drawing.Font 'Arial',54,([System.Drawing.FontStyle]::Bold)
$small = New-Object System.Drawing.Font 'Arial',19
$g.DrawString("Tecnología que`nhace crecer",$font,$ink,52,165)
$g.DrawString('tu negocio.',$font,$blue,52,330)
$g.DrawString('Software a medida. Automatización. Herramientas digitales.',$small,$ink,58,500)
$g.FillRectangle($blue,0,600,1200,30)
$og.Save((Join-Path $root 'public/images/jpcfix-social.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$og.Dispose()
$logo.Dispose()
$font.Dispose()
$small.Dispose()
$blue.Dispose()
$ink.Dispose()
# Optimized display variants preserve original proportions and transparency.
$assetNames = @('jpcfix-oficial','club22-transparent','parrilla-sergio-andres-transparent','yofre-transparent','rebueno-transparent','libreria-kolores-transparent','instituto-mixto-secundario')
foreach ($assetName in $assetNames) {
  $source = [System.Drawing.Image]::FromFile((Join-Path $root "public/images/$assetName.png"))
  $limit = if ($assetName -eq 'jpcfix-oficial') { 648 } else { 280 }
  $ratio = [Math]::Min(1.0, $limit / [Math]::Max($source.Width, $source.Height))
  $width = [int][Math]::Round($source.Width * $ratio)
  $height = [int][Math]::Round($source.Height * $ratio)
  $thumb = New-Object System.Drawing.Bitmap $width,$height
  $canvas = [System.Drawing.Graphics]::FromImage($thumb)
  $canvas.Clear([System.Drawing.Color]::Transparent)
  $canvas.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $canvas.DrawImage($source,0,0,$width,$height)
  $thumb.Save((Join-Path $root "public/images/$assetName-web.png"),[System.Drawing.Imaging.ImageFormat]::Png)
  $canvas.Dispose()
  $thumb.Dispose()
  $source.Dispose()
}
