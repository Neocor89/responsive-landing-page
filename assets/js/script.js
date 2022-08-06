"use strict";

/********
:: Navbar
*/

const menuToggle = document.querySelector('[data-navbar-toggle-btn]');
const navBar = document.querySelector('[data-navbar]');



/******** 
: Back Top
*/

const funcToggleEleemnt = function (element) { 
  element.classList.toggle('active'); 
}

menuToggle.addEventListener("click", function () { funcToggleEleemnt(navBar); })



const gotop = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
  if(this.window.scrollY > 500) {
    gotop.classList.add('active');
  } else {
    gotop.classList.remove('active');
  }
});