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