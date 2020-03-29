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


const tab1 = document.querySelector('#tab1')
const tab2 = document.querySelector('#tab2')
const tab3 = document.querySelector('#tab3')

const tab1H3 = "Bookmark in one click"
const tab2H3 = "Intelligent search"
const tab3H3 = "Share your bookmarks"

const tab1P = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."

const tab2P = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."

const tab3P = "Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button."

tab1.addEventListener('click', changeTab1);
tab2.addEventListener('click', changeTab2);
tab3.addEventListener('click', changeTab3);


function changeTab1() {
    document.querySelector('.tab-image').src = "./images/illustration-features-tab-1.svg"
    
    document.getElementById('h3-text').innerHTML = tab1H3
    document.getElementById('p-text').innerHTML = tab1P
    document.getElementById('tab1').style.borderBottom = "5px solid red"
    document.getElementById('tab2').style.borderBottom = ""
    document.getElementById('tab3').style.borderBottom = ""
    
}



function changeTab2() {
    document.querySelector('.tab-image').src = "./images/illustration-features-tab-2.svg"
    document.getElementById('h3-text').innerHTML = tab2H3
    document.getElementById('p-text').innerHTML = tab2P
    document.getElementById('tab2').style.borderBottom = "5px solid red"
    document.getElementById('tab1').style.borderBottom = ""
    document.getElementById('tab3').style.borderBottom = ""
}

function changeTab3() {
    document.querySelector('.tab-image').src = "./images/illustration-features-tab-3.svg"
    document.getElementById('h3-text').innerHTML = tab3H3
    document.getElementById('p-text').innerHTML = tab3P
    document.getElementById('tab3').style.borderBottom = "5px solid red"
    document.getElementById('tab1').style.borderBottom = ""
    document.getElementById('tab2').style.borderBottom = ""
}




/* 
const openArrow = document.querySelector('.open-arrow');

function reveal() {
    document.querySelector('.p-reveal').style.display = "block"
    document.querySelector('.open-arrow').style.transform = "rotate(180deg)"
}

openArrow.addEventListener('click', reveal);
 */
/* 
 const questions = document.querySelectorAll('.q-a')
 const openArrows = document.querySelectorAll('.open-arrow')

 function toggleOpen() {
     this.classList.toggle('.open')
     console.log("hi")
 }

 openArrows.forEach(openArrow => openArrow.addEventListener('click', toggleOpen))
 */

/* 
 const arrows = document.querySelectorAll(".open-arrow");
 const paragraphs = document.querySelector(".p-reveal")
 
 function toggleMenu() {
     if(paragraphs.classList.contains("open")) {
         paragraphs.classList.remove("open");
         document.querySelector('.open-arrow').style.transform = "rotate(0deg)"
     } else {
         paragraphs.classList.add("open");
         document.querySelector('.open-arrow').style.transform = "rotate(180deg)"
     }
 }
 
//  arrows.addEventListener('click', toggleMenu)

 arrows.forEach(arrow => arrow.addEventListener('click', toggleMenu))
 */

 
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}