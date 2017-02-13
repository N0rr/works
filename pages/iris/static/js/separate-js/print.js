'use strict';

var whyPItemAll = document.querySelectorAll('.whyP__item');
var whyPItems = document.querySelector('.whyP__items');
var whyOwlContainer;

var whySlider = function() {    
  var itemD = whyPItemAll;
  var itemsD = whyPItems; 
  var removeSlider = document.getElementById('whyP__slider').querySelector('.owl-stage-outer');  
  
  if (itemsD.classList.contains('slider__carousel')) {   
    whyOwlContainer = removeSlider;       
  }
  
  if (window.innerWidth < 768) {    
    if (!itemsD.classList.contains('slider__carousel')) { 
      whyPItems.classList.add('slider__carousel', 'owl-theme', 'owl-loaded', 'owl-carousel');  
      if (whyOwlContainer != null) {        
        itemsD.appendChild(whyOwlContainer);  
        var owlItem = document.getElementById('whyP__slider').querySelectorAll('.owl-item'); 
        for (var i=0; i < itemD.length; i++) {
          owlItem[i].appendChild(itemD[i]);          
        } 
      }      
      $(".whyP__prev").click(function () {
      owl.trigger("prev.owl");
        });
      $(".whyP__next").click(function () {
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
          mouseDrag: true          
        });       
      });
    }   
  } else if (itemsD.classList.contains('slider__carousel')) {
      itemsD.classList.remove('slider__carousel', 'owl-carousel', 'owl-theme', 'owl-loaded'); 
      itemsD.removeChild(removeSlider);                   
      Array.prototype.forEach.call(itemD, function(item) {
        itemsD.appendChild(item);
    });    
  }
};

window.addEventListener('load', whySlider);
window.addEventListener('resize', whySlider);