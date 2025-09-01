# PowerShell script to seed production database
param(
    [string]$SeedKey = "default-seed-key-2024"
)

$url = "https://www.balloond.co/api/seed"
$body = @{
    seedKey = $SeedKey
} | ConvertTo-Json

Write-Host "Seeding production database..." -ForegroundColor Green
Write-Host "Target URL: $url" -ForegroundColor Cyan
Write-Host "Using seed key: $SeedKey" -ForegroundColor Yellow

try {
    $response = Invoke-RestMethod -Uri $url -Method POST -Body $body -ContentType "application/json"
    Write-Host "Database seeded successfully!" -ForegroundColor Green
    Write-Host "Response: $($response | ConvertTo-Json -Depth 3)" -ForegroundColor White
} catch {
    Write-Host "Failed to seed database" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response Body: $responseBody" -ForegroundColor Red
    }
}
