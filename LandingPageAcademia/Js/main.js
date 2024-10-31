function menuAparecer() {
    let menuMobile = document.querySelector('.mobile__menu');
    let menuIcon = document.querySelector('.icon');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIcon.src = "./Assets/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        menuIcon.src = "./Assets/close_white_36dp.svg";
    }
}

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

const botao = document.querySelector('.botao__hello');
botao.addEventListener("click", facaAlgo);

function facaAlgo() {
    alert('Hello World!');
}