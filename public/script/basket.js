// basket page codes
////////////////////////////////////////////////////////////////////////
// change picture of the basket picture
const chevronRight = document.querySelectorAll(".chevron_right");
const mainPic1 = document.getElementById("main_pic1");
const mainPic2 = document.getElementById("main_pic2");
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
  mainPic1.src = pictures[index];
  mainPic2.src = pictures[index];
}
chevronRight.forEach((btn) => {
  btn.addEventListener("click", nextPic);
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
codeProducts.forEach(i=>i.textContent++)
