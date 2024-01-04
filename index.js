import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

const main = document.getElementById("mainElement");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

