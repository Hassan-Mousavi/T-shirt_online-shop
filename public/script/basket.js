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
heartIcon.addEventListener("click", function () {
  heartIcon.classList.toggle("fill-red-500");
  heartIcon.classList.toggle("fill-white");
  heartIcon.classList.toggle("stroke-black");
});
// number of product part
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