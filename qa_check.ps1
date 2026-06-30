$results = @{}

# 1. H1 Typography
$h1Css = Get-Content d:\vered\css\style.css | Select-String -Pattern 'h1 \{(?s).*?\}' -AllMatches
$results["H1_CSS"] = Get-Content d:\vered\css\style.css | Select-String -Context 0,10 -Pattern 'h1, \.h1 \{' | Out-String
$results["H1_Mobile"] = Get-Content d:\vered\css\responsive.css | Select-String -Context 0,5 -Pattern 'h1, \.h1 \{' | Out-String

# 2. Section Spacing
$results["Section_Desktop"] = Get-Content d:\vered\css\style.css | Select-String -Context 0,5 -Pattern '\.section \{' | Out-String
$results["Section_Mobile"] = Get-Content d:\vered\css\responsive.css | Select-String -Context 0,5 -Pattern '\.section \{' | Out-String

# 3. Logo clearspace
$results["Logo_Nav"] = Get-Content d:\vered\css\style.css | Select-String -Context 0,5 -Pattern '\.nav__logo img \{' | Out-String

# 4. Footer Disclaimer
$results["Footer_Disclaimer"] = Get-Content d:\vered\index.html | Select-String -Pattern 'footer__disclaimer' | Out-String

# 6. Home page statistics
$results["Home_Stats"] = Get-Content d:\vered\index.html | Select-String -Pattern 'stat-bar__item' -Context 0,3 | Out-String

# 7. CTA buttons
$results["CTAs"] = Get-ChildItem -Path d:\vered -Filter *.html | ForEach-Object { Get-Content $_.FullName | Select-String -Pattern '<a[^>]*class="[^"]*btn' } | Out-String

# 8. Colors and 9. Fonts
$results["Hardcoded_Colors"] = Get-Content d:\vered\css\style.css | Select-String -Pattern 'color: #[0-9A-Fa-f]{3,6}|background: #[0-9A-Fa-f]{3,6}|background-color: #[0-9A-Fa-f]{3,6}' | Out-String
$results["Hardcoded_Fonts"] = Get-Content d:\vered\css\style.css | Select-String -Pattern 'font-family: (?!var)' | Out-String

# 10. Images
$results["Images"] = Get-ChildItem -Path d:\vered -Filter *.html | ForEach-Object { Get-Content $_.FullName | Select-String -Pattern '<img' } | Out-String

$results | ConvertTo-Json
