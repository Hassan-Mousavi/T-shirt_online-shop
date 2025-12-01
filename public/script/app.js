// Dark mode
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const html = document.querySelector(".html");
const lightLogo = document.querySelector(".light-logo");
const darkLogo = document.querySelector(".dark-logo");
sun.addEventListener("click", function () {
  html.classList.toggle("dark");
  sun.classList.add("hidden");
  moon.classList.remove("hidden");
  darkLogo.classList.add("hidden");
  lightLogo.classList.remove("hidden");
});
moon.addEventListener("click", function () {
  html.classList.toggle("dark");
  sun.classList.remove("hidden");
  moon.classList.add("hidden");
  lightLogo.classList.add("hidden");
  darkLogo.classList.remove("hidden");
});
