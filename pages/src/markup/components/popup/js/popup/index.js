'use strict';

var btnOpenLogin = document.querySelector('.header__login');
import popup from'./popup';

btnOpenLogin.addEventListener('click', popup.start);