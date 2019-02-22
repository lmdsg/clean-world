// on DOM Content Loaded
export function onDomLoad(eventFunction) {
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
const setIsMobile = () => {
  var isMobile = false;
  if (/Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 992) {
    isMobile = true;
  }
  return () => isMobile;
};
export const isMobile = setIsMobile();;



// check if browser is ie
export function isIE() {
  var ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}

// easy addEventListener
export function addELM(elements, event, callback) {
  if(Array.isArray(elements)) {
    elements.forEach(function (item) {
      addEL(item, event, callback);
    })
  } else {
    addEL(elements, event, callback);
  }
}
// add Eventlistener function
export function addEL(nodes, event, callback, fn) {
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

export function searchFor(el, search) {
  return el.search(search) >= 0;
}

export function addClass(el, className) {
  el.classList.add(className);
}
export function removeClass(el, className) {
  el.classList.remove(className);
}
export function toggleClass(el, className) {
  el.classList.toggle(className);
}
