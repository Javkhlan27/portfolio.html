let theme = "light";

const themeButton = document.getElementById("theme");

function main() {
  if (theme === "light") {
    theme = "dark";
    const webTheme = document.getElementById("theme-link");
    webTheme.setAttribute("href", "dark-portfolio.css");
  } else {
    theme = "light";
    const webTheme = document.getElementById("theme-link");
    webTheme.setAttribute("href", "light-portfolio.css");
  }
}

themeButton.addEventListener("click", main);
