let hamburger = document.getElementById("hamburger");
let hamburgerAndLang = document.getElementById('hamburgerAndLang');

hamburger.addEventListener("click", () => {
  document.querySelector(".menu-hamburger").classList.toggle('active')
  hamburgerAndLang.classList.toggle('active')
});