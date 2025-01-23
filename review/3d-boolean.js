let isDarkMode = false
let username = ""
let isUserLoggedIn = false
let isDashboardOn = false
console.log(`Is dark mode enabled: ${isDarkMode}`)    // Interpolation

isUserLoggedIn = "true"
username = "Anna"
isDashboardOn = isUserLoggedIn && username
console.log(isDashboardOn)