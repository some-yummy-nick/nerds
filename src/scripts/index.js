(function() {
  let toggler = document.querySelector(".menu__toggle");

  toggler.addEventListener("click", function() {
    document.querySelector(".menu__list").classList.toggle("menu__list--hide");
    this.classList.toggle("menu__toggle--close");
  });
})();

(function() {


})();
