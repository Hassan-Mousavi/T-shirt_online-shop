// basket page codes
////////////////////////////////////////////////////////////////////////
// change picture of the basket picture
const chevronRight = document.querySelectorAll(".chevron_right");
const mainPic = document.querySelectorAll(".main_pic");
const subImage = document.querySelectorAll(".sub_image");
const codeProducts = document.querySelectorAll(".code_product");
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
chevronRight.forEach((btn) => {
  btn.addEventListener("click", nextPic);
});
// selection picture
subImage.forEach(function (pic, i) {
  pic.addEventListener("click", function () {
    mainPic[0].src = pictures[i];
  });
});
// add to favoriates part
const heartIcon = document.querySelectorAll(".heart_icon");
heartIcon.forEach((btns) => {
  btns.addEventListener("click", function () {
    btns.classList.toggle("fill-red-500");
    btns.classList.toggle("fill-white");
    btns.classList.toggle("stroke-black");
  });
});
// number of product price
let pricePerItem = 750000;
function updatePrice() {
  let count = document.getElementById("count").value;

  if (count < 1 || count === "") {
    count = 1;
    document.getElementById("count").value = 1;
  }
  let total = count * pricePerItem;
  document.getElementById("product_price").innerText = total.toLocaleString();
}
// code of products
codeProducts.forEach(function (code, i) {
  code.textContent = `${(i += 1)}`.padStart(3, 0);
});
