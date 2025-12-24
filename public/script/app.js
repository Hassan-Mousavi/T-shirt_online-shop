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
filterBtn.forEach((btns) => {
  btns.addEventListener("click", function () {
    const list = btns.nextElementSibling;
    const chevron = btns.querySelector(".side-chevron");

    list.classList.toggle("max-h-96");
    chevron.classList.toggle("rotate-180");
  });
});
// basket page codes
////////////////////////////////////////////////////////////////////////
// change picture of the basket picture
const chevronRight = document.querySelector(".chevron_right");
const mainPic = document.querySelector(".main_pic");
const pictures = [
  "./public/images/card1.png",
  "./public/images/card2.png",
  "./public/images/card3.png",
  "./public/images/card5.png",
  "./public/images/card4.png",
];
let index = 0;
function nextPic() {
  index++;
  if (index >= pictures.length) {
    index = 0;
  }
  mainPic.src = pictures[index];
}
chevronRight.addEventListener("click", nextPic);
// add to favoriates part
const heartIcon = document.querySelector(".heart_icon");
heartIcon.addEventListener("click",function(){
  
})
