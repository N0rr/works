'use strict';

var checkWidth = function () {
  var clientsSliderItems;
  if (window.innerWidth < 768) {     
    clientsSliderItems = 1;
  } else {      
    clientsSliderItems = 4;
  }  
  $(".clients__prev").click(function () {
      owl.trigger("prev.owl");
    });
  $(".clients__next").click(function () {
    owl.trigger("next.owl");
  });
  var owl = $(".clients__slider-items");    
    owl.owlCarousel({        
      items: clientsSliderItems,
      margin: 0,
      pagination: false,    
      mouseDrag: true,
      pullDrag: true,    
      loop: true 
    });
};

window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);

var btnMenu = document.querySelector('.header__menu-btn');
var menuList = document.querySelector('.header__items');
var menuOpen = 'header__menu-open';  


var checkMenu = function() {  
  if (!menuList.classList.contains(menuOpen)) {    
    menuList.classList.add(menuOpen);    
  } else {
    menuList.classList.remove(menuOpen); 
  }  
}

var checkSize = function() {
  if (window.innerWidth > 767) {
    menuList.classList.add(menuOpen);
  } else {
    menuList.classList.remove(menuOpen);
  }
}

btnMenu.addEventListener('click', checkMenu);
window.addEventListener('load', checkSize);
window.addEventListener('resize', checkSize);







