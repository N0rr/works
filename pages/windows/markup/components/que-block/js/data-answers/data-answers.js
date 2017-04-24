'use strict';

var submit = document.querySelector('.que-block__form');

var QueData = function() {    
  this.start = this.start.bind(this);  
};

QueData.prototype.start = function(evt) {
  evt.preventDefault();  
  this.getInputs();  
  this.dataJson;    
  submit.submit();    
};


QueData.prototype.getInputs = function() {  
  var input = this;
  input.dataInputs = [];
  input.dataInputs.name = [];
  input.dataInputs.name.value = [];
  var selectedBlocks = document.querySelectorAll('.que-block__input:checked');
  Array.prototype.forEach.call(selectedBlocks, function(item) {
    if (item.disabled === false) {
      input.dataInputs.push({name: item.getAttribute('name'),value: item.getAttribute('value')});
    } 
  });
  return this.dataJson = JSON.stringify(input.dataInputs);  
};


export default new QueData();