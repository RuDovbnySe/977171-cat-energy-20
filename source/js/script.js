var menu__toogle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");



menu__toogle.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик - Открыть меню");
  menu.classList.add("main-nav--show");
});
