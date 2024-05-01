$(document).ready(function () {
    $('.hotspot').click(function () {
        $(this).toggleClass('clicked');
    });
});

window.addEventListener("scroll", runOnScroll);

function runOnScroll(){
    $('html,body').animate({scrollTop: 0},1000);
    window.removeEventListener("scroll", runOnScroll);
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}