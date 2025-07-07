"use strict";

function handleClick() {
    this.classList.toggle('clicked');
}  

const ourButton = document.querySelector('button');
if (ourButton) {
        ourButton.addEventListener('click', handleClick);
    } 
