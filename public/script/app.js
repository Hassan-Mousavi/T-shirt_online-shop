// Dark mode
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const html = document.querySelector(".html");
sun.addEventListener("click", function () {
  html.classList.toggle("dark");
  sun.classList.add("hidden");
  moon.classList.remove("hidden");
});
moon.addEventListener("click", function () {
  html.classList.toggle("dark");
  sun.classList.remove("hidden");
  moon.classList.add("hidden");
});
