
// console.log("hello world")
// var hello = prompt("what is your name:");
// console.log(hello);

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

$(".card").click(function () {
  $(".card").removeClass("active");
  $(this).addClass("active");
});