document.querySelectorAll(".title>svg").forEach(function (val) {
  val.addEventListener("click", function (e) {
    let _p = e.target.parentElement.nextElementSibling;
    _p.classList.toggle("acc");
    e.target.classList.toggle("svgRotate");
  });
});
