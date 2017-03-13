'use strict';

var startWindow = document.querySelector('.start-window');
var queFirstBlock = document.querySelector('.que-block__item--que1');
var queBlockItemAll = document.querySelectorAll('.que-block__item');
var queBlockLast = document.querySelector('.que-block__item--que-last');
var moreInfoAll = document.querySelectorAll('.more-info');
var sideBarDiscont = document.querySelector('.side-bar__discont-value');
var lastPageDiscont = document.querySelector('.que-block__last-discont-value');

var buttonNextQue = document.querySelector('.que-block__btn-next');

var queBlockActive = 'que-block__item--active';
var startWindowActive = 'start-window__active';
var moreInfoActive = 'more-info__active';

var QueBlock = function() {     
  this.checkDataSkip = this.checkDataSkip.bind(this);  
  this.checkNextque = this.checkNextque.bind(this);  
  this.start = this.start.bind(this);
};

QueBlock.prototype.start = function(evt) {
  evt.preventDefault();
  this.variables();
  this.firstQue();
  this.addListener();  
};

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
  this.discont = this.discont + 4;
  sideBarDiscont.innerHTML = this.discont;
  lastPageDiscont.innerHTML = this.discont;
};
// Get data skip
QueBlock.prototype.getDataSkip = function() {  
  this.getCurrentAnswers();
  var allInputs = this;
  allInputs.inputs = [];
  if (this.checkedInput.getAttribute('data-skip').length > 2) {
    Array.prototype.forEach.call(this.checkedInputAll, function(item,i) {
      allInputs.inputs[i] = item.getAttribute('data-skip').split(',');
    });
    this.dataSkipItem = allInputs.inputs;
   
    if (this.dataSkip.length == 0) {      
      this.dataSkip = Array.prototype.map.call(this.dataSkipItem, function(item) {        
        return 'que-block__item--' + item;
      });
    } else {    
      this.dataSkipElements = Array.prototype.map.call(this.dataSkipItem, function(item) {        
        return 'que-block__item--' + item;
      });
      Array.prototype.push.apply(this.dataSkip, this.dataSkipElements);
    }    
  } 
};
// Check skip
QueBlock.prototype.checkDataSkip = function(_item) {
  this.getDataSkip();
  for (var i = 0; i < this.dataSkip.length; i++) {
    if (_item.classList.contains(this.dataSkip[i])) {      
      this.skipNextPage = true;
      break;
    } else {
      this.skipNextPage = false;
    }     
  }    
};
// check next question
QueBlock.prototype.checkNextque = function(evt) {  
  evt.preventDefault();   
  this.getActiveQue();
  
  this.getCurrentAnswers();  
  
  this.getNextQue();
  
  this.checkDataSkip(this.nextQue);
  
  if (!this.skipNextPage) {
    this.removeActive(queBlockItemAll, queBlockActive);    
    
    this.nextQue.classList.add(queBlockActive);
    
    this.getMoreInfoBtns();    
    if (this.openMoreInfo && this.closeMoreInfo) {
      this.openMoreInfo.addEventListener('click', this.showMoreInfo.bind(this));
      this.closeMoreInfo.addEventListener('click', this.hideMoreInfo.bind(this));
      window.addEventListener('keydown', this.hideMoreInfoEsc.bind(this));
    }     
  } else {
    this.defaultNextName = this.nextQue.getAttribute('data-next-default');
    this.defaultNext = document.querySelector('.' + this.defaultNextName);
    
    this.checkDataSkip(this.defaultNext);
    
    if (this.skipNextPage) {
      this.nextName = this.defaultNext.getAttribute('data-next-default');
      this.next = document.querySelector('.' + this.nextName);
      this.removeActive(queBlockItemAll, queBlockActive);      
      this.next.classList.add(queBlockActive);
    } else {     
      this.removeActive(queBlockItemAll, queBlockActive);
      this.defaultNext.classList.add(queBlockActive);
    }    
  }  
  if (queBlockLast.classList.contains(queBlockActive)) {
      buttonNextQue.classList.remove('que-block__btn-next--active');
  } else {
    this.getActiveQue();
    this.removeDisabled();
    this.getPageNumber();
    this.activeQue.classList.add('que-block__item--selected');
  }
  this.getDiscont();
};


export default new QueBlock();