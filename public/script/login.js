const newAcount = document.querySelector(".new_acount");
const loginContent = document.querySelector(".login_content");
const loginImage = document.querySelector(".login_img");
const signIn = document.querySelector(".sign_in");

newAcount.addEventListener("click", function () {
  signIn.classList.remove("hidden");
  signIn.classList.add("-translate-x-full");
  loginContent.classList.add("hidden");
  loginImage.classList.add("translate-x-full");
});
