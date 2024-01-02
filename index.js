const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

const main = document.getElementById("mainElement");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const swiper = new Swiper(".js-review-slider", {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".js-review-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  },
});