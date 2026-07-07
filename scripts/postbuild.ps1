$locales = @("fa", "en", "de")
foreach ($locale in $locales) {
    $source = "out/$locale.html"
    $dir = "out/$locale"
    if (Test-Path $source) {
        if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
        Copy-Item -Path $source -Destination "$dir/index.html" -Force
        Write-Host "Created $dir/index.html"
    }
}
