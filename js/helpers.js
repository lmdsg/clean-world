// on DOM Content Loaded
function onDomLoad(eventFunction) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", eventFunction);
  } else {  // `DOMContentLoaded` already fired
    eventFunction();
  }
}

// set window variables for later use and resize handling

var resizeTimeout;
window.addEventListener('resize', function () {
  // throttle resize for performance
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    setIsMobile();
  }, 100);
})

// check if current user uses a mobile computer
var isMobile = false;
function setIsMobile() {
  if (/Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 992) {
    isMobile = true;
  }
}
setIsMobile();




// check if browser is ie
function isIE() {
  ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}

// easy addEventListener
function addELM(elements, event, callback) {
  if(Array.isArray(elements)) {
    elements.forEach(function (item) {
      addEL(item, event, callback);
    })
  } else {
    addEL(elements, event, callback);
  }
}
// add Eventlistener function
function addEL(nodes, event, callback, fn) {
  if(NodeList.prototype.isPrototypeOf(nodes)) {
    // nodes.forEach(function (el) {
    //   el.addEventListener(event, callback);
    // })
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener(event, callback);
      if(typeof fn === 'function') fn(nodes[i]);
    }
  } else if (nodes instanceof Element) {
    nodes.addEventListener(event, callback);
  } else {
    console.log('addEL --> !!ERRROR!! given element is not a dom NODE');
  }
}

function searchFor(el, search) {
  return el.search(search) >= 0;
}

function addClass(el, className) {
  el.classList.add(className);
}
function removeClass(el, className) {
  el.classList.remove(className);
}
function toggleClass(el, className) {
  el.classList.toggle(className);
}



// scroll TO stuff

function scrollTo(element, to, duration) {
var start = element.scrollTop,
  change = to - start,
  currentTime = 0,
  increment = 20;

var animateScroll = function(){
  currentTime += increment;
  var val = Math.easeInOutQuad(currentTime, start, change, duration);
  element.scrollTop = val;
  if(currentTime < duration) {
    setTimeout(animateScroll, increment);
  }
};
animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

function timeoutClass(elements, className, timeout, type, i) {
  i = i || 0;
  switch (type) {
    case 'remove':
      removeClass(elements[i], className);
      break;
    default:
      addClass(elements[i], className);
  }

  i++;
  if(i < elements.length) {
    setTimeout(function () {
      timeoutClass(elements, className, timeout,type, i);
    }, timeout);
  }
}
