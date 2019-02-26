import '@babel/polyfill';
import {
  onDomLoad, isIE, isMobile,
  removeClass, toggleClass, addClass
} from './src/helpers';
import dontGo from 'dont-go';
import Rellax from 'rellax';
import AOS from 'aos';

function initLibraryStuff() {
  AOS.init({
    useClassNames: true,
    disable: 'mobile',
  });
  if(!isMobile && document.querySelector('.rellax'))
    var rellax = new Rellax('.rellax',{
      center: true,
    });
  if(!isMobile && document.querySelector('.rellax-nc'))
    var rellax = new Rellax('.rellax-nc');
}

function checkCookie() {
  var popup = document.querySelector('.cookie__popup');
  var close = document.querySelector('.cookie__close');

  if(!localStorage.getItem('cookie-message')) {
    addClass(popup, 'visible');
  }
  close.addEventListener('click', function () {
    localStorage.setItem('cookie-message', true);
    removeClass(popup, 'visible');
  })
}

function handleLoader() {
  let body = document.body;
  setTimeout(function () {
    addClass(body, 'handle-loader');
  }, 200);
}

function addBodyClasses(timeout) {
  let body = document.body;
  addClass(body, 'is-loaded');
  setTimeout(function () {
    addClass(body, 'after-loaded');
  }, timeout || 500);
}


onDomLoad(function () {
  let body = document.body;
  checkCookie();
  if(isIE()) {
    addClass(body, 'is-ie');
  }
  initLibraryStuff();

  handleLoader();
  addBodyClasses(600);


  initLinks();

  var navButton = document.querySelector('.nav-button');
  var nav = document.querySelector('nav');

  navButton.addEventListener('click', function (e) {
    toggleClass(navButton, 'open');
    toggleClass(nav, 'open');
    toggleClass(header, 'open');
    toggleClass(body, 'noscroll');
  });

  window.addEventListener('scroll', function (e) {
    var wScroll = window.scrollY || window.pageYOffset;
    handleHeader(wScroll);
  })


  var header = document.querySelector('header');
  var aboveHeader = document.querySelector('.above-header');
  var ht;
  var htTimeout = 0;
  function handleHeader(wScroll) {
    clearTimeout(ht);
    ht = setTimeout(function () {
      console.log(wScroll);
      if(wScroll > 0) {
        addClass(header, 'fixed');
        htTimeout = 100;
      } else {
        removeClass(header, 'fixed');
        htTimeout = 0;
      }
    }, htTimeout);
  }
  handleHeader(window.scrollY);
  triggerAnimation();
  // handleArrows();
})


function initLinks() {
  var links = document.querySelectorAll('a');
  for(var i; i < links.length; i++) {
    links[i].addEventListener('click', handleLink(link));
  }
}

function handleLink(el) {
  return function (e) {
    var href = el.getAttribute('href');

    if(searchFor(href, 'tel:') || searchFor(href, 'mailto:') || searchFor(href, '#') || searchFor(href, '.pdf')) {
      return;
    }
    e.preventDefault();

    body.classList.remove('loader-finished');
    setTimeout(function () {
      window.location.href = href;
    }, 650);
  }
}


function triggerAnimation(){
  if(!isMobile) {
    window.addEventListener('scroll', handleScrollStuff);
  } else {
    window.removeEventListener('scroll', handleScrollStuff);
  }
}

function handleScrollStuff() {
  var wScroll = window.scrollY;
  // handleHeroParallax(wScroll);
}


const handleHeroParallax = () => {
  var heroVid = document.querySelector('.hero-vid__container');
  var heroSlider = document.querySelector('.slides');

  return (wScroll) => {
    // callback every position change
    var el = heroVid || heroSlider;
    if(!el) return;
    if (wScroll< window.innerHeight) {
      var speed = 0.5;
      var scaleBy = 1 + (wScroll * (speed * 0.0008));

      el.style.cssText = "transform: translate3d(0px, "+wScroll+"px, 0px) scale("+scaleBy+"); opacity: "+ (1 - wScroll *(speed * 0.003));
    }
  }
}


function handleArrows() {
  var arrows = document.querySelectorAll('.arrow');
  if (arrows.length === 0)  return;
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function () {
      var target = document.querySelector('#' + this.dataset.scroll);
      target.scrollIntoView({behavior: "smooth"})
    })
  }
}
