const hamburger = document.querySelector(".menu-hamburger");
const menu = document.querySelector("nav")

function toggleMenu() {
    if(menu.classList.contains("open")) {
        menu.classList.remove("open");
        hamburger.querySelector('img').src = "./images/icon-hamburger.svg";
    } else {
        menu.classList.add("open");
        hamburger.querySelector('img').src = "./images/icon-close.svg"
    }
}

hamburger.addEventListener('click', toggleMenu)