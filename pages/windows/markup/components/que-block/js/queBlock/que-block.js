'use strict';

var startWindow = document.querySelector('.start-window');
var queFirstBlock = document.querySelector('.que-block__item--que1');
var queBlockItemAll = document.querySelectorAll('.que-block__item');
var queBlockLast = document.querySelector('.que-block__item--que-last');
var moreInfoAll = document.querySelectorAll('.more-info');
var sideBarDiscont = document.querySelector('.side-bar__discont-value');
var lastPageDiscont = document.querySelector('.que-block__last-discont-value');
var sideBar = document.querySelector('.side-bar');

var buttonNextQue = document.querySelector('.que-block__btn-next');

var queBlockActive = 'que-block__item--active';
var startWindowActive = 'start-window__active';
var moreInfoActive = 'more-info__active';

var QueBlock = function() {       
  this.checkNextque = this.checkNextque.bind(this);  
  this.start = this.start.bind(this);
};

QueBlock.prototype.start = function(evt) {
  evt.preventDefault();
  this.variables();
  this.firstQue();
  this.addListener();  
};
// Переменные
QueBlock.prototype.variables = function() {
  this.checkedInput;
  this.currentQueNumber = 0;
  this.discont = 0;
  this.skipQue = [];  
  this.activeQue;  
  this.dataSkip = [];
  this.skipNextPage;
  this.skipPage;  
};
// Start first question
QueBlock.prototype.firstQue = function() {
  startWindow.classList.remove(startWindowActive);
  queFirstBlock.classList.add(queBlockActive);
  buttonNextQue.classList.add('que-block__btn-next--active');  
  sideBar.style.display = 'block';
  this.getActiveQue();
  this.removeDisabled();
  this.getCurrentAnswers();
  this.getPageNumber();  
};
// Start listeners
QueBlock.prototype.addListener = function() {  
  buttonNextQue.addEventListener('click', this.checkNextque);
};
// Get active checkbox
QueBlock.prototype.getCurrentAnswers = function() {    
  this.checkedInput = this.activeQue.querySelector('.que-block__input:checked');
  this.checkedInputAll = this.activeQue.querySelectorAll('.que-block__input:checked');
  return this.checkedInput;  
};
// remove disabled 
QueBlock.prototype.removeDisabled = function() {
  this.inputs = this.activeQue.querySelectorAll('.que-block__input');
  Array.prototype.forEach.call(this.inputs, function(item) {
    item.disabled = false;
  }); 
};
// Get number of question
QueBlock.prototype.getPageNumber = function() {  
  this.getCurrentQueNumber = this.activeQue.querySelector('.que-block__current-nbr');
  this.currentQueNumber = this.currentQueNumber + 1;
  this.getCurrentQueNumber.innerHTML = this.currentQueNumber;  
};
// Delete active class
QueBlock.prototype.removeActive = function(_arr, _active) {
  Array.prototype.forEach.call(_arr, function(item) {
    item.classList.remove(_active);
  });
};
// Get active block with question
QueBlock.prototype.getActiveQue = function() {
  this.activeQue = document.querySelector('.que-block__item--active');
  return this.activeQue;
};
// Get next question
QueBlock.prototype.getNextQue = function() {
  this.nextQueName = this.checkedInput.getAttribute('data-next');
  this.nextQue = document.querySelector('.' + this.nextQueName);
};
// Show block more-info
QueBlock.prototype.showMoreInfo = function(evt) {
  evt.preventDefault();  
  
  if (evt.target.classList.contains('que-block__more-info-btn')) {       
    this.currentMoreInfoBlock = this.activeQue.querySelector('.more-info');    
    this.currentMoreInfoBlock.classList.add(moreInfoActive);   
  } 
};
// hide block more-info
QueBlock.prototype.hideMoreInfo = function() {
  this.removeActive(moreInfoAll, moreInfoActive);  
};
// hide block more-info with esc
QueBlock.prototype.hideMoreInfoEsc = function(evt) {
  if (evt.keyCode === 27) {
    this.removeActive(moreInfoAll, moreInfoActive);  
  }  
};
// get buttons for more-info
QueBlock.prototype.getMoreInfoBtns = function() {
  this.getActiveQue();
  
  this.openMoreInfo = this.activeQue.querySelector('.que-block__more-info-btn'); 
  this.closeMoreInfo = this.activeQue.querySelector('.more-info__close');
};
// Get discont value
QueBlock.prototype.getDiscont = function() {  
  this.discountValue = parseInt(this.activeQue.getAttribute('data-discount'));
  this.discont = this.discont + this.discountValue;
  sideBarDiscont.innerHTML = this.discont;
  lastPageDiscont.innerHTML = this.discont;
};

// check next question
QueBlock.prototype.checkNextque = function(evt) {  
  evt.preventDefault();   
  this.getActiveQue();
  
  this.getCurrentAnswers();
   
  if (this.checkedInput) {
    this.getDiscont();
    this.getNextQue();
    this.removeActive(queBlockItemAll, queBlockActive);    
    
    this.nextQue.classList.add(queBlockActive);
    
    this.getMoreInfoBtns();    
    if (this.openMoreInfo && this.closeMoreInfo) {
      this.openMoreInfo.addEventListener('click', this.showMoreInfo.bind(this));
      this.closeMoreInfo.addEventListener('click', this.hideMoreInfo.bind(this));
      window.addEventListener('keydown', this.hideMoreInfoEsc.bind(this));
    }
    if (queBlockLast.classList.contains(queBlockActive)) {
      buttonNextQue.classList.remove('que-block__btn-next--active');
    } else {
      this.getActiveQue();
      this.removeDisabled();
      this.getPageNumber();
      this.activeQue.classList.add('que-block__item--selected');
    }
  }
};
// Пролистывание страниц с отсутствием выбраных чекбоксов
//else if (!this.checkedInput) {
//    this.defaultNextName = this.nextQue.getAttribute('data-next-default');
//    this.defaultNext = document.querySelector('.' + this.defaultNextName);
//    this.removeActive(queBlockItemAll, queBlockActive);
//    this.defaultNext.classList.add(queBlockActive);
//  }

export default new QueBlock();