$port = 3000
$path = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "==============================" -ForegroundColor Cyan
Write-Host "  شواطئ المغرب - خادم التطوير" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Try Python first, then Node
$python = Get-Command python -ErrorAction SilentlyContinue
$node = Get-Command node -ErrorAction SilentlyContinue

if ($python) {
    Write-Host "▶  تشغيل الخادم على: http://localhost:$port" -ForegroundColor Green
    Write-Host "▶  اضغط Ctrl+C للإيقاف" -ForegroundColor Yellow
    Write-Host ""
    Set-Location -LiteralPath $path
    python -m http.server $port --bind 127.0.0.1
}
elseif ($node) {
    Set-Location -LiteralPath $path
    npx http-server -p $port -a 127.0.0.1 -o
}
else {
    Write-Host "✘ لم يتم العثور على Python أو Node.js!" -ForegroundColor Red
    Write-Host "قم بتثبيت Python أو Node.js لتشغيل الخادم المحلي" -ForegroundColor Yellow
}
