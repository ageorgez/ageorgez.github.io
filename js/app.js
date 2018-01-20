"use strict"

// SELFIES

const overlayNav = document.querySelector('#myNav');
const openNav = document.querySelector('a#burger-link'); 
const hamMenu = document.querySelector('div#nav-icon3'); //get ham icon

// hamburger toggle animation init
hamMenu.addEventListener('click', toggleMenuIcon);
function toggleMenuIcon() {
    hamMenu.classList.toggle('open');
}

// overlay toggle init
openNav.addEventListener('click', toggleOverlay);
function toggleOverlay() {
    overlayNav.style.transition = 'width 1s';
    document.querySelector('.overlay-hidden').classList.toggle('overlay-visible');
}

// close overlay on link click

function toggleStuff() {
	toggleOverlay();
    toggleMenuIcon();
}


//loop through links
(function () { 
    for (let item of document.querySelectorAll(".overlay-content a")) {
        item.addEventListener("click", toggleStuff);     
    }
})();



// PLUGINS

//materialize tabs init
// var elemTabs = document.querySelector('.tabs');
// var instanceTabs = M.Tabs.init(elemTabs, {

// });

//parallax init
// var elemParallax = document.querySelectorAll('.parallax');
// var instanceParallax = M.Parallax.init(elemParallax, {
//   responsiveThreshold: 500,
// });



// slider init
var elemSlider = document.querySelector('.slider');
var instanceSlider = M.Slider.init(elemSlider, {
    indicators: false,
});

// carousel init

var elemCarousel = document.querySelector('.carousel');
var instanceCarousel = M.Carousel.init(elemCarousel, {
    fullWidth: true,
    indicators: true,
    duration: 50,
});

// date picker init

var elemDatePicker = document.querySelector('.datepicker');
var instanceDatePicker = M.Datepicker.init(elemDatePicker, {

});

//time picker init

var elemTimePicker = document.querySelector('.timepicker');
var instanceTimePicker = M.Timepicker.init(elemTimePicker, {

});

// zenscroll settings

var defaultDuration = 4000; // ms
var edgeOffset = 0; // px
zenscroll.setup(defaultDuration, edgeOffset);


//ON SCROLL EVENTS for icons


const cocktailNames = document.querySelector('.cocktail-names');
const cocktailIcon = document.getElementById('cocktail-fire');

window.addEventListener('scroll', doThisStuffOnScroll);

// get viewport
const isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// check if element is in viewport
function doThisStuffOnScroll() {
    if (isInViewport(cocktailNames)) {
        cocktailIcon.classList.add("scale-big");
        //console.log('is in viewport');
    }
}

//ON SCROLL EVENT for menu tabs

const navbarMenu = document.querySelector('#navbar-menu');
const getContentMenu = document.querySelector('.content-menu-one'); // grabed for adding padding for smooth menu docking
const topOfNav = navbarMenu.offsetTop + window.innerHeight; // where fixed tabs starts
const menuBottom = document.querySelector('#gallery-events');
const bottomOfMenu = menuBottom.offsetTop + window.innerHeight; // where fixed tabs ends


function fixNav() {
    if(window.scrollY >= topOfNav && window.scrollY < bottomOfMenu) {
        getContentMenu.style.paddingTop = navbarMenu.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
        hamMenu.style.display = 'none';
    } else if(window.scrollY >= bottomOfMenu) {
        document.body.classList.remove('fixed-nav');
        getContentMenu.style.paddingTop = 0;
        hamMenu.style.display = 'block';
    } else {
        document.body.classList.remove('fixed-nav');
        getContentMenu.style.paddingTop = 0;
        hamMenu.style.display = 'block';
    }
}

window.addEventListener('scroll', fixNav);

// click events for menu tabs


const tabsUl = document.querySelector('#cocktail-tabs');
const orangeIndicator = document.querySelector('.orange-indicator');
const menu1 = document.querySelector('#menu-one');
const menu2 = document.querySelector('#menu-two');
const menu3 = document.querySelector('#menu-three');



tabsUl.addEventListener('click', slideContent);

function slideContent(element) {

    if(element.target.matches('#first-tab')) {
      orangeIndicator.style = `width: 33%; left: 0%`;
      menu1.style.display = 'block';
      menu2.style.display = 'none';
      menu3.style.display = 'none';
    } else if (element.target.matches('#second-tab')) {
      orangeIndicator.style = `width: 33%; left: 36%`;
      menu1.style.display = 'none';
      menu2.style.display = 'block';
      menu3.style.display = 'none';
    } else if (element.target.matches('#third-tab')) {
      orangeIndicator.style = `width: 33%; left: 67%`;
      menu1.style.display = 'none';
      menu2.style.display = 'none';
      menu3.style.display = 'block';
    }
    element.preventDefault();
}


// gallery backgrounds from array

var galleryImagesArray = [
    'url(res/gallery1.jpg)',
    'url(res/gallery2.jpg)',
    'url(res/gallery3.jpg)',
    'url(res/gallery4.jpg)',
    'url(res/gallery5.jpg)',
    'url(res/gallery6.jpg)'
];


const imageContainers = document.getElementsByClassName('container-for-image');

 (function () { 
    for (let i = 0; i < galleryImagesArray.length; i++) {
    //console.log(i);
    imageContainers[i].style.backgroundImage = galleryImagesArray[i];
} 
 })();
