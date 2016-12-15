'use strict';

var btnOpenLogin = document.querySelector('.header__login');
var popupWindow = document.querySelector('.popup');
var menu = document.querySelector('.header__menu');
var menuBtnClose = document.querySelector('.header__menu-btn');
var inputEmail = document.querySelector('.popup__mail > .popup__input');
var popupCloseBtn = document.querySelector('.popup__close');


var Popup = function() { 
  this.removeListener = this.removeListener.bind(this);
  this.closePopup = this.closePopup.bind(this);
  this.openPopup = this.openPopup.bind(this);  
  this.start = this.start.bind(this);
};

Popup.prototype.start = function(evt) {
  evt.preventDefault();
  popupWindow.classList.add('popup__open');
  this.addListener(); 
};

Popup.prototype.addListener = function() {  
  window.addEventListener('keydown', this.keyClosePopup);  
  popupCloseBtn.addEventListener('click', this.closePopup); 
  popupWindow.addEventListener('load', this.openPopup);  
  this.openPopup();
};

Popup.prototype.openPopup = function() {  
  menu.classList.remove('header__menu--open');
  menuBtnClose.classList.remove('header__menu-btn-close');
  inputEmail.focus();  
};

Popup.prototype.keyClosePopup = function(evt) {  
  if (evt.keyCode === 27 ) {
    popupWindow.classList.remove('popup__open');
    this.removeListener();
  } 
};

Popup.prototype.closePopup = function(evt) {
  evt.preventDefault();  
  popupWindow.classList.remove('popup__open'); 
  this.removeListener();
};

Popup.prototype.removeListener = function() { 
  popupWindow.removeEventListener('keydown', this.keyClosePopup);  
  popupCloseBtn.removeEventListener('click', this.closePopup);
};


export default new Popup();