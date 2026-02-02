// Dark mode
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
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
const subMenuList = document.querySelector(".sub-menu-list");
const subMenuBtn = document.querySelector(".sort-btn");
const menuMobileChevron = document.querySelector(".menu-mobile-chevron");
subMenuBtn.addEventListener("click", () => {
  subMenuList.classList.toggle("hidden");
  menuMobileChevron.classList.toggle("rotate-180");
});
// mobile menu
const menuCloseX = document.querySelector(".mobile-menu-x");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".bars-open");
menuCloseX.addEventListener("click", function () {
  mobileMenu.classList.remove("right-0");
  mobileMenu.classList.add("-right-64");
});
menuOpen.addEventListener("click", function () {
  mobileMenu.classList.add("right-0");
  mobileMenu.classList.remove("-right-64");
});
// ////////////////////////////////////////////////////////////////
// number of products
const counter = document.getElementById("cart_counter");
const addToBasket = document.querySelectorAll(".add_to_basket");
let count = 0;
addToBasket.forEach((btns) => {
  btns.addEventListener("click", function () {
    count++;
    counter.textContent = count;
  });
});
// timer of Takhfifat products

const timerDay = document.querySelector(".label_days");
const timerHour = document.querySelector(".label_hours");
const timerMinute = document.querySelector(".label_minutes");
const timerSecond = document.querySelector(".label_seconds");
timerDay.textContent = `${0} روز`;
timerHour.textContent = `${0} ساعت`;
timerMinute.textContent = `${0} دقیقه`;
timerSecond.textContent = `${0} ثانیه`;
let time = 10000;
const tick = function () {
  const day = Math.floor(time / 86400);
  const hour = Math.trunc(Math.floor(time % 86400) / 3600);
  const min = Math.trunc(Math.floor(time % 3600) / 60);
  const sec = time % 60;
  timerDay.textContent = `${day} روز`;
  timerHour.textContent = `${hour} ساعت`;
  timerMinute.textContent = `${min} دقیقه`;
  timerSecond.textContent = `${sec} ثانیه`;
  // time--;
  time === 0 ? clearInterval(tick) : time--;
};
setInterval(tick,1000);
