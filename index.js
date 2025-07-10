"use strict";

function handleClick() {
    paragraph.classList.toggle('clicked');
}  

const ourButton = document.querySelector('button');
const paragraph = document.querySelector('p');
if (ourButton && paragraph) {
        ourButton.addEventListener('click', handleClick);
    } 
