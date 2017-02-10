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


var sliderItems = document.querySelector('.price-s__items');
var sliderItem = document.querySelectorAll('.price-s__item');
var owlContainer;

var checkSlider = function() {    
  var itemD = sliderItem;
  var itemsD = sliderItems; 
  var removeSlider = document.getElementById('price-s__slider').querySelector('.owl-stage-outer');  
  
  if (itemsD.classList.contains('slider__carousel')) {   
    owlContainer = removeSlider;       
  }
  
  if (window.innerWidth < 768) {    
    if (!sliderItems.classList.contains('slider__carousel')) { 
      sliderItems.classList.add('slider__carousel', 'owl-theme', 'owl-loaded', 'owl-carousel');  
      if (owlContainer != null) {        
        sliderItems.appendChild(owlContainer);  
        var owlItem = document.getElementById('price-s__slider').querySelectorAll('.owl-item'); 
        for (var i=0; i < sliderItem.length; i++) {
          owlItem[i].appendChild(sliderItem[i]);          
        } 
      }      
      $(".price-s__edit-prev").click(function () {
      owl.trigger("prev.owl");
        });
      $(".price-s__edit-next").click(function () {
        owl.trigger("next.owl");
      }); 
     
      var owl = $(".slider__carousel");      
      $(document).ready(function () {  
        owl.owlCarousel({
          items: 1,
          margin: 0,
          pagination: false,    
          dotsContainer: '.price__indicators',
          pullDrag: true,
          mouseDrag: true,
          onInitialize: function (event) {
            if ($('.price-s__item').length > 1) {
              this.settings.loop = false;
            }
          }
        });       
      });
    }   
  } else if (sliderItems.classList.contains('slider__carousel')) {
      sliderItems.classList.remove('slider__carousel', 'owl-carousel', 'owl-theme', 'owl-loaded'); 
      sliderItems.removeChild(removeSlider);                   
      Array.prototype.forEach.call(sliderItem, function(item) {
        sliderItems.appendChild(item);
    });    
  }
};

window.addEventListener('load', checkSlider);
window.addEventListener('resize', checkSlider);


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







