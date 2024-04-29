let element = document.getElementByID("welcome");
let opacity = 0;
let fadeIn = setInterval(() => {
    element.style.opacity = opacity;
    opacity += 0.01;
}, 2s);

if (opacity >= 1) {
    clearInterval(fadeIn);
}