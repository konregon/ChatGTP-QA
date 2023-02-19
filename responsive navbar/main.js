const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("rotate");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-active");
    burger.classList.remove("rotate");
  });
});
