'use strict';

var tabSwitch = document.querySelector('.tabs__list');
var tabSwitches = document.querySelectorAll('.tabs__switch');
var tabBlocks = document.querySelectorAll('.tabs__container');
var tabnow = document.querySelector('.tabs__block-2');

var switcher = 'tabs__switch';
var active = 'tabs__switch--active';


var Tabs = function() {  
  this.switchTab = this.switchTab.bind(this);  
  this.start = this.start(this);  
};

Tabs.prototype.start = function() {
  this.loadEvent();  
};

Tabs.prototype.loadEvent = function() {
  tabSwitch.addEventListener('click', this.switchTab);
};

Tabs.prototype.removeActive = function() {
  var findActiveSwitch = document.querySelector('.tabs__switch--active');
  var findActiveBlock = document.querySelector('.tabs__block--active');
  
  findActiveSwitch.classList.remove('tabs__switch--active');
  findActiveBlock.classList.remove('tabs__block--active');
};

Tabs.prototype.switchTab = function(evt) {
  this.tabNumber = evt.target.id.slice(-1);
  this.currentBlock = '.tabs__block-' + this.tabNumber;  
  
  if (evt.target.classList.contains(switcher)) { 
    this.removeActive();
    evt.target.classList.add(active);        
    var tabBlock = document.querySelector(this.currentBlock);
    tabBlock.classList.add('tabs__block--active');
    
  }
};


export default new Tabs();