const toggleButton = document.querySelector("#toggle-button")
let darkMode = localStorage.getItem("theme")

if (darkMode === "dark") enableDarkMode()

toggleButton.addEventListener("click", e => {
    darkMode = localStorage.getItem("theme")
    if (darkMode === "dark") {
        disableDarkMode()
    } else {
        enableDarkMode()
    }
})

function enableDarkMode() {
    document.body.classList.add("dark-mode")
    localStorage.setItem("theme", "dark")
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode")
    localStorage.setItem("theme", "light")
}
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addListener(e => (e.matches ? enableDarkMode() : disableDarkMode()))