const themeButton = document.getElementById("themeBtn");
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (themeButton) {
    themeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        themeButton.textContent = isDark ? "☀" : "☾";
        themeButton.setAttribute("aria-pressed", String(isDark));
        themeButton.setAttribute(
            "aria-label",
            isDark ? "Gunakan tema terang" : "Gunakan tema gelap"
        );
    });
}
