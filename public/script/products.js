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