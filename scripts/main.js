$(document).ready(function () {
    window.addEventListener("scroll", runOnScroll);

    function runOnScroll() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
        window.removeEventListener("scroll", runOnScroll);
    };
/*
    $('.hotspot').click(function () {
        $(this).toggleClass('clicked');
    });
*/
});


document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').style.display = 
    (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
 });