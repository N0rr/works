'use strict';

var submitForm = document.querySelector('.popup__submit');
var form = document.querySelector('.popup__form');
// input
var email = document.querySelector('.popup__mail > .popup__input');
var password = document.querySelector('.popup__password > .popup__input');
// errBlocks
var emailError = document.querySelector('.popup__error--mail');
var passwordError = document.querySelector('.popup__error--password');                    
// re
var emailRe = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
var passwordRe = new RegExp(/^.*(?=.{1,}).*$/i);
// message
var emailErrorMessage = 'Пожалуйста, введите адрес электронной почты.';
var passwordErrorMessage = 'Пожалуйста, введите пароль.';



var Form = function() {
  this.checkValidity = this.checkValidity.bind(this);  
  this.checkEmail = this.checkEmail.bind(this);
  this.checkPassword = this.checkPassword.bind(this);  
  this.submitCheck = this.submitCheck.bind(this);  
  this.start = this.start.bind(this);  
};

Form.prototype.start = function() {      
  form.addEventListener('submit', this.submitCheck);   
};

Form.prototype.addListener = function() {    
  email.addEventListener('input', this.checkEmail);
  password.addEventListener('input', this.checkPassword);
};

Form.prototype.checkValidity = function(input, re, message, errBlock) {
  if (!input.value.match(re)) {
    errBlock.style.display = 'block';    
    input.setCustomValidity(message);  
    errBlock.innerHTML = input.validationMessage; 
  }  else if (input.value.match(re)) {
    errBlock.style.display = 'none';
  }
};

Form.prototype.submitCheck = function(evt) {
  evt.preventDefault();
  if (!email.value.match(emailError) || !password.value.match(passwordRe)) {    
      this.checkEmail();  
      this.checkPassword();
      this.addListener();
  } else if (email.value.match(emailError) && password.value.match(passwordRe)) {    
    form.submit();
  }
};

Form.prototype.checkEmail = function() {
  this.checkValidity(email, emailRe, emailErrorMessage, emailError);
};

Form.prototype.checkPassword = function() {
  this.checkValidity(password, passwordRe, passwordErrorMessage, passwordError);
};

export default new Form();
