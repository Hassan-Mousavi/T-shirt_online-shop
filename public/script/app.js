// Dark mode
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const subMenuBtn = document.querySelector(".sort-btn");
const subMenuList = document.querySelector(".sub-menu-list");
const menuMobileChevron = document.querySelector(".menu-mobile-chevron");
const menuCloseX = document.querySelector(".mobile-menu-x");
const menuOpen = document.querySelector(".bars-open");
const mobileMenu = document.querySelector(".mobile-menu");
// dark mode
toggleThemeBtns.forEach((btns) => {
  btns.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
// sub menu list
subMenuBtn.addEventListener("click", () => {
  subMenuList.classList.toggle("hidden");
  menuMobileChevron.classList.toggle("rotate-180");
});
// mobile menu
menuCloseX.addEventListener("click", function () {
  mobileMenu.classList.remove("right-0");
  mobileMenu.classList.add("-right-64");
});
menuOpen.addEventListener("click", function () {
  mobileMenu.classList.add("right-0");
  mobileMenu.classList.remove("-right-64");
});
// ////////////////////////////////////////////////////////////////
// products page
const filterBtn = document.querySelectorAll(".filter-btn");
const filterList = document.querySelector(".filter-list");
const sideChevron = document.querySelector(".side-chevron");
const btn = function () {
  addEventListener("click", function () {
    filterList.classList.toggle("max-h-72");
    sideChevron.classList.toggle("rotate-180");
  });
};
filterBtn.forEach((btns) => {
  btns.addEventListener("click", btn);
});
// forEach(() => {
//   filterBtn.addEventListener("click", function () {
//     filterList.classList.toggle("max-h-72");
//     sideChevron.classList.toggle("rotate-180");
//   });
// });
