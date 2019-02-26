/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\nvar form = document.querySelector('#contact-form');\nvar textareas = form.querySelectorAll('textarea');\nvar inputs = document.querySelectorAll('.input-container input');\nvar sCheckbox = form.querySelectorAll('.sons-checkbox');\nvar sInputs = form.querySelectorAll('.sons-input');\nvar sOtherCheckbox = form.querySelectorAll('.form-sonstige-container input:not(.sons-input):not(.sons-checkbox)');\nvar msgBox = form.querySelector('.msg-box'); // autosize(textareas);\n\nObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addELM\"])([textareas, inputs], 'focus', handleFocusIn);\nObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addELM\"])([textareas, inputs], 'blur', handleFocusOut);\nObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addELM\"])(sCheckbox, 'click', handleSonstigeCheckbox);\nObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addELM\"])(sInputs, 'blur', handleSonstigeInput);\nObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addELM\"])(sOtherCheckbox, 'click', handlesOtherCheckbox);\n\nfunction handleFocusIn(e) {\n  var container = this.parentNode;\n  container.classList.add('focused');\n}\n\nfunction handleFocusOut(e) {\n  var container = this.parentNode;\n\n  if (!this.value) {\n    //if(typeof e !=='undefined' && !e.srcElement.value)\n    container.classList.remove('focused');\n  }\n}\n\nfunction handleSonstigeCheckbox(e) {\n  var target = document.querySelector(this.getAttribute('data-target'));\n\n  if (!this.checked) {\n    target.setAttribute('disabled', true);\n    target.setAttribute('hidden', true);\n  } else {\n    target.removeAttribute('disabled');\n    target.removeAttribute('hidden');\n  }\n}\n\nfunction handleSonstigeInput(e) {\n  var target = document.querySelector(this.getAttribute('data-target'));\n  target.setAttribute('value', this.value);\n}\n\nfunction handlesOtherCheckbox(e) {\n  var container = this.parentNode.parentNode;\n  var checkbox = container.querySelector('.sons-checkbox');\n  if (checkbox.checked) return;\n  var target = container.querySelector('.sons-input');\n  target.setAttribute('disabled', true);\n  target.setAttribute('hidden', true);\n}\n\nvar scroll = new Bouncer('form', {\n  disableSubmit: true\n});\ndocument.addEventListener('bouncerFormValid', handleSubmit, false);\n\nfunction handleSubmit(e) {\n  if (e.target.id !== 'contact-form') return;\n  grecaptcha.execute().then(function (e) {\n    console.log(e);\n  });\n  var location = {\n    key: 'location',\n    value: loc.getLocation()\n  };\n  axios({\n    method: 'post',\n    url: form.getAttribute('action'),\n    data: serializeForm(form, [location]),\n    config: {\n      headers: {\n        'Content-Type': 'multipart/form-data'\n      }\n    }\n  }).then(function (res) {\n    console.log(res);\n    console.log(res.data);\n    renderMessage(msgBox, 'success', res.data);\n  }).catch(function (err) {\n    console.log(err);\n    renderMessage(msgBox, 'error', 'Es scheint etwas schiefgelaufen zu sein, bitte versuchen Sie es erneut!');\n  });\n}\n\nfunction renderMessage(el, className, msg) {\n  if (className === \"error\") {\n    el.classList.remove('success');\n  } else {\n    el.classList.remove('error');\n  }\n\n  el.classList.add(className);\n  el.innerHTML = '<p>' + msg + '</p>';\n}\n\nfunction serializeForm(form, add) {\n  var formData = new FormData(form);\n\n  if (add) {\n    for (var i = 0; i < add.length; i++) {\n      formData.append(add[i].key, add[i].value);\n    }\n  }\n\n  return formData;\n}\n\n//# sourceURL=webpack:///./src/form.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: onDomLoad, isMobile, isIE, addELM, addEL, searchFor, addClass, removeClass, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDomLoad\", function() { return onDomLoad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIE\", function() { return isIE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addELM\", function() { return addELM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEL\", function() { return addEL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchFor\", function() { return searchFor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClass\", function() { return toggleClass; });\n// on DOM Content Loaded\nfunction onDomLoad(eventFunction) {\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", eventFunction);\n  } else {\n    // `DOMContentLoaded` already fired\n    eventFunction();\n  }\n} // set window variables for later use and resize handling\n\nvar resizeTimeout;\nwindow.addEventListener('resize', function () {\n  // throttle resize for performance\n  clearTimeout(resizeTimeout);\n  resizeTimeout = setTimeout(function () {\n    setIsMobile();\n  }, 100);\n}); // check if current user uses a mobile computer\n\nvar setIsMobile = function setIsMobile() {\n  var isMobile = false;\n\n  if (/Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 992) {\n    isMobile = true;\n  }\n\n  return function () {\n    return isMobile;\n  };\n};\n\nvar isMobile = setIsMobile();\n; // check if browser is ie\n\nfunction isIE() {\n  var ua = navigator.userAgent;\n  /* MSIE used to detect old browsers and Trident used to newer ones*/\n\n  var is_ie = ua.indexOf(\"MSIE \") > -1 || ua.indexOf(\"Trident/\") > -1;\n  return is_ie;\n} // easy addEventListener\n\nfunction addELM(elements, event, callback) {\n  if (Array.isArray(elements)) {\n    elements.forEach(function (item) {\n      addEL(item, event, callback);\n    });\n  } else {\n    addEL(elements, event, callback);\n  }\n} // add Eventlistener function\n\nfunction addEL(nodes, event, callback, fn) {\n  if (NodeList.prototype.isPrototypeOf(nodes)) {\n    // nodes.forEach(function (el) {\n    //   el.addEventListener(event, callback);\n    // })\n    for (var i = 0; i < nodes.length; i++) {\n      nodes[i].addEventListener(event, callback);\n      if (typeof fn === 'function') fn(nodes[i]);\n    }\n  } else if (nodes instanceof Element) {\n    nodes.addEventListener(event, callback);\n  } else {\n    console.log('addEL --> !!ERRROR!! given element is not a dom NODE');\n  }\n}\nfunction searchFor(el, search) {\n  return el.search(search) >= 0;\n}\nfunction addClass(el, className) {\n  el.classList.add(className);\n}\nfunction removeClass(el, className) {\n  el.classList.remove(className);\n}\nfunction toggleClass(el, className) {\n  el.classList.toggle(className);\n}\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ })

/******/ });