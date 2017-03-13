'use strict';

var submit = document.querySelector('.que-block__form');

import queData from'./data-answers';

submit.addEventListener('submit', queData.start);