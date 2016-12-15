'use strict';

var menu = document.querySelector('.header__menu');
var menuBtn = document.querySelector('.header__menu-btn');
var active = 'header__menu--open';
var symbolClose = 'header__menu-btn-close';

// number


var Menu = function() {
  this.checkMenu = this.checkMenu.bind(this);
  this.start = this.start(this);  
};

Menu.prototype.start = function() {
  this.onLoadPage();
};

Menu.prototype.onLoadPage = function() {
  window.addEventListener('load', this.removeActive);
  menuBtn.addEventListener('click', this.checkMenu);  
};

Menu.prototype.removeActive = function() {
  menu.classList.remove(active);
  menuBtn.classList.remove(symbolClose);
};

Menu.prototype.addActive = function() {
  menu.classList.add(active);
  menuBtn.classList.add(symbolClose);
};

Menu.prototype.checkMenu = function() {
  if (!menu.classList.contains(active)) {
    this.addActive();
  } else {
    this.removeActive();
  }    
  
};


export default new Menu();
