'use strict';

var btnMenu = document.querySelector('.header__menu-btn');
var menuList = document.querySelector('.header__menu');
var menuInfo = document.querySelector('.header__callback');
var btnLine = document.querySelector('.header__menu-btn-line');
var btnLine2 = document.querySelector('.header__menu-btn-line2');
var btnLine3 = document.querySelector('.header__menu-btn-line3');
var btnLineActive = 'header__menu-btn-line--active';
var btnLineActive2 = 'header__menu-btn-line2--active';
var btnLineActive3 = 'header__menu-btn-line3--active';
    
var menuOpen = 'header__menu-open';  


var checkMenu = function() {  
  if (!menuList.classList.contains(menuOpen)) {    
    menuList.classList.add(menuOpen); 
    menuInfo.classList.add(menuOpen); 
    btnLine.classList.add(btnLineActive);
    btnLine2.classList.add(btnLineActive2);
    btnLine3.classList.add(btnLineActive3);
  } else {
    menuList.classList.remove(menuOpen); 
    menuInfo.classList.remove(menuOpen); 
    btnLine.classList.remove(btnLineActive);
    btnLine2.classList.remove(btnLineActive2);
    btnLine3.classList.remove(btnLineActive3);
  }  
}

var checkSize = function() {
  if (window.innerWidth > 767) {
    menuList.classList.add(menuOpen);
    menuInfo.classList.add(menuOpen); 
    btnLine.classList.add(btnLineActive);
    btnLine2.classList.add(btnLineActive2);
    btnLine3.classList.add(btnLineActive3);
  } else if (window.innerWidth < 767) {
    menuInfo.classList.remove(menuOpen); 
    menuList.classList.remove(menuOpen);
    btnLine.classList.remove(btnLineActive);
    btnLine2.classList.remove(btnLineActive2);
    btnLine3.classList.remove(btnLineActive3);
  }
}

btnMenu.addEventListener('click', checkMenu);
window.addEventListener('load', checkSize);
window.addEventListener('resize', checkSize);

var saveItemAll = document.querySelectorAll('.save__item');
var saveItems = document.querySelector('.save__items');
var saveOwlContainer;
var saveID = document.getElementById('save__slider');
var saveDots = document.querySelector('.save__indicators');

var saveSlider = function() {    
  var itemD = saveItemAll;
  var itemsD = saveItems; 
  var id = saveID;  
  var removeSlider = saveID.querySelector('.owl-stage-outer');  
  
  if (itemsD.classList.contains('slider__carousel')) {   
    saveOwlContainer = removeSlider;       
  }
  
  if (window.innerWidth < 768) {    
    if (!itemsD.classList.contains('slider__carousel')) { 
      itemsD.classList.add('slider__carousel');
      itemsD.classList.add('owl-theme');
      itemsD.classList.add('owl-loaded');
      itemsD.classList.add('owl-carousel');                        
      if (saveOwlContainer != null) {        
        itemsD.appendChild(saveOwlContainer);  
        var owlItem = id.querySelectorAll('.owl-item'); 
        for (var i=0; i < itemD.length; i++) {
          owlItem[i].appendChild(itemD[i]);          
        } 
        saveDots.style.display= 'flex';
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
          dotsContainer: '.save__indicators',
          pullDrag: true,
          mouseDrag: true          
        });       
      });
    }   
  } else if (itemsD.classList.contains('slider__carousel') || itemsD.classList.contains('owl-carousel')) {
      itemsD.classList.remove('owl-carousel');
      itemsD.classList.remove('owl-theme');
      itemsD.classList.remove('owl-loaded');
      itemsD.classList.remove('slider__carousel'); 
      itemsD.removeChild(removeSlider);    
      saveDots.style.display= 'none';
      Array.prototype.forEach.call(itemD, function(item) {
        itemsD.appendChild(item);
    });    
  }
};

window.addEventListener('load', saveSlider);
window.addEventListener('resize', saveSlider);

var advgItemAll = document.querySelectorAll('.advgs__item');
var advgItems = document.querySelector('.advgs__items');
var advgOwlContainer;
var advgID = document.getElementById('advgs__slider');

var advgsSlider = function() {    
  var itemD = advgItemAll;
  var itemsD = advgItems; 
  var id = advgID;  
  var owlContainer = advgOwlContainer;
  var removeSlider = id.querySelector('.owl-stage-outer');  
  var advgsDots = document.querySelector('.advgs__indicators');
  
  if (itemsD.classList.contains('slider__carousel')) {   
    advgOwlContainer = removeSlider;   
    
  }
  
  if (window.innerWidth < 768) {    
    if (!itemsD.classList.contains('slider__carousel')) { 
      itemsD.classList.add('slider__carousel');
      itemsD.classList.add('owl-theme');
      itemsD.classList.add('owl-loaded');
      itemsD.classList.add('owl-carousel');   
      advgsDots.style.display= 'flex';
      if (owlContainer != null) {        
        itemsD.appendChild(owlContainer);  
        var owlItem = id.querySelectorAll('.owl-item'); 
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
          dotsContainer: '.advgs__indicators',
          pullDrag: true,
          mouseDrag: true          
        });       
      });
    }   
  } else if (itemsD.classList.contains('slider__carousel') || itemsD.classList.contains('owl-carousel')) {
      itemsD.classList.remove('owl-carousel');
      itemsD.classList.remove('owl-theme');
      itemsD.classList.remove('owl-loaded');
      itemsD.classList.remove('slider__carousel'); 
      itemsD.removeChild(removeSlider);      
      advgsDots.style.display= 'none';
      Array.prototype.forEach.call(itemD, function(item) {
        itemsD.appendChild(item);
    });    
  }
};

window.addEventListener('load', advgsSlider);
window.addEventListener('resize', advgsSlider);

var reviewsItems;
var reviewsSlider = function() {
  $(".reviews__prev").click(function () {
  owl.trigger("prev.owl");
    });
  $(".reviews__next").click(function () {
    owl.trigger("next.owl");
  }); 
  if (window.innerWidth < 768) {
    reviewsItems = 1;
  } else {
    reviewsItems = 3;
  }

  var owl = $(".reviews__items");      
  $(document).ready(function () {  
    owl.owlCarousel({
      items: reviewsItems,
      margin: 0,
      pagination: false,    
      dotsContainer: '.advgs__indicators',
      pullDrag: true,
      mouseDrag: true,
      loop: true
    });       
  });
};

window.addEventListener('load', reviewsSlider);
window.addEventListener('resize', reviewsSlider);










