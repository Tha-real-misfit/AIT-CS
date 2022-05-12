const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function myFunction(event) {
  event.preventDefault();
  alert("Thank you, weve received your message and will be contact.");
  window.scroll({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
  document.getElementById("newForm").reset();
}
