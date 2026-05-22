const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");

  mobileMenu.classList.toggle("active");

});

const menuLinks = document.querySelectorAll(".mobile-menu a");

menuLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    hamburger.classList.remove("active");

  });

});
