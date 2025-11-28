const newAcount = document.querySelector(".new_acount");
const loginContent = document.querySelector(".login_content");
const loginImage = document.querySelector(".login_img");
const signIn = document.querySelector(".sign_in");
const goLogin = document.querySelector(".go_login");
newAcount.addEventListener("click", function () {
  signIn.classList.remove("hidden");
  signIn.classList.add("-translate-x-full");
  loginContent.classList.add("hidden");
  loginImage.classList.add("translate-x-full");
});
goLogin.addEventListener("click", function () {
  signIn.classList.add("hidden");
  loginContent.classList.remove("hidden");
  loginImage.classList.remove("translate-x-full");
});
