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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/gallery.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.5' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n__webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar sameValue = __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[SEARCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative($search, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/shufflejs/dist/shuffle.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/shufflejs/dist/shuffle.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (typeof call === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction E () {\n  // Keep this empty so it's easier to inherit from\n  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)\n}\n\nE.prototype = {\n  on: function (name, callback, ctx) {\n    var e = this.e || (this.e = {});\n\n    (e[name] || (e[name] = [])).push({\n      fn: callback,\n      ctx: ctx\n    });\n\n    return this;\n  },\n\n  once: function (name, callback, ctx) {\n    var self = this;\n    function listener () {\n      self.off(name, listener);\n      callback.apply(ctx, arguments);\n    }\n    listener._ = callback;\n    return this.on(name, listener, ctx);\n  },\n\n  emit: function (name) {\n    var data = [].slice.call(arguments, 1);\n    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();\n    var i = 0;\n    var len = evtArr.length;\n\n    for (i; i < len; i++) {\n      evtArr[i].fn.apply(evtArr[i].ctx, data);\n    }\n\n    return this;\n  },\n\n  off: function (name, callback) {\n    var e = this.e || (this.e = {});\n    var evts = e[name];\n    var liveEvents = [];\n\n    if (evts && callback) {\n      for (var i = 0, len = evts.length; i < len; i++) {\n        if (evts[i].fn !== callback && evts[i].fn._ !== callback)\n          liveEvents.push(evts[i]);\n      }\n    }\n\n    // Remove event from queue to prevent memory leak\n    // Suggested by https://github.com/lazd\n    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910\n\n    (liveEvents.length)\n      ? e[name] = liveEvents\n      : delete e[name];\n\n    return this;\n  }\n};\n\nvar tinyEmitter = E;\n\nvar proto = typeof Element !== 'undefined' ? Element.prototype : {};\nvar vendor = proto.matches\n  || proto.matchesSelector\n  || proto.webkitMatchesSelector\n  || proto.mozMatchesSelector\n  || proto.msMatchesSelector\n  || proto.oMatchesSelector;\n\nvar matchesSelector = match;\n\n/**\n * Match `el` to `selector`.\n *\n * @param {Element} el\n * @param {String} selector\n * @return {Boolean}\n * @api public\n */\n\nfunction match(el, selector) {\n  if (!el || el.nodeType !== 1) return false;\n  if (vendor) return vendor.call(el, selector);\n  var nodes = el.parentNode.querySelectorAll(selector);\n  for (var i = 0; i < nodes.length; i++) {\n    if (nodes[i] == el) return true;\n  }\n  return false;\n}\n\nvar throttleit = throttle;\n\n/**\n * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.\n *\n * @param {Function} func Function to wrap.\n * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.\n * @return {Function} A new function that wraps the `func` function passed in.\n */\n\nfunction throttle (func, wait) {\n  var ctx, args, rtn, timeoutID; // caching\n  var last = 0;\n\n  return function throttled () {\n    ctx = this;\n    args = arguments;\n    var delta = new Date() - last;\n    if (!timeoutID)\n      if (delta >= wait) call();\n      else timeoutID = setTimeout(call, wait - delta);\n    return rtn;\n  };\n\n  function call () {\n    timeoutID = 0;\n    last = +new Date();\n    rtn = func.apply(ctx, args);\n    ctx = null;\n    args = null;\n  }\n}\n\nvar arrayParallel = function parallel(fns, context, callback) {\n  if (!callback) {\n    if (typeof context === 'function') {\n      callback = context;\n      context = null;\n    } else {\n      callback = noop;\n    }\n  }\n\n  var pending = fns && fns.length;\n  if (!pending) return callback(null, []);\n\n  var finished = false;\n  var results = new Array(pending);\n\n  fns.forEach(context ? function (fn, i) {\n    fn.call(context, maybeDone(i));\n  } : function (fn, i) {\n    fn(maybeDone(i));\n  });\n\n  function maybeDone(i) {\n    return function (err, result) {\n      if (finished) return;\n\n      if (err) {\n        callback(err, results);\n        finished = true;\n        return\n      }\n\n      results[i] = result;\n\n      if (!--pending) callback(null, results);\n    }\n  }\n};\n\nfunction noop() {}\n\n/**\n * Always returns a numeric value, given a value. Logic from jQuery's `isNumeric`.\n * @param {*} value Possibly numeric value.\n * @return {number} `value` or zero if `value` isn't numeric.\n */\nfunction getNumber(value) {\n  return parseFloat(value) || 0;\n}\n\nvar Point =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Represents a coordinate pair.\n   * @param {number} [x=0] X.\n   * @param {number} [y=0] Y.\n   */\n  function Point(x, y) {\n    _classCallCheck(this, Point);\n\n    this.x = getNumber(x);\n    this.y = getNumber(y);\n  }\n  /**\n   * Whether two points are equal.\n   * @param {Point} a Point A.\n   * @param {Point} b Point B.\n   * @return {boolean}\n   */\n\n\n  _createClass(Point, null, [{\n    key: \"equals\",\n    value: function equals(a, b) {\n      return a.x === b.x && a.y === b.y;\n    }\n  }]);\n\n  return Point;\n}();\n\nvar Rect =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Class for representing rectangular regions.\n   * https://github.com/google/closure-library/blob/master/closure/goog/math/rect.js\n   * @param {number} x Left.\n   * @param {number} y Top.\n   * @param {number} w Width.\n   * @param {number} h Height.\n   * @param {number} id Identifier\n   * @constructor\n   */\n  function Rect(x, y, w, h, id) {\n    _classCallCheck(this, Rect);\n\n    this.id = id;\n    /** @type {number} */\n\n    this.left = x;\n    /** @type {number} */\n\n    this.top = y;\n    /** @type {number} */\n\n    this.width = w;\n    /** @type {number} */\n\n    this.height = h;\n  }\n  /**\n   * Returns whether two rectangles intersect.\n   * @param {Rect} a A Rectangle.\n   * @param {Rect} b A Rectangle.\n   * @return {boolean} Whether a and b intersect.\n   */\n\n\n  _createClass(Rect, null, [{\n    key: \"intersects\",\n    value: function intersects(a, b) {\n      return a.left < b.left + b.width && b.left < a.left + a.width && a.top < b.top + b.height && b.top < a.top + a.height;\n    }\n  }]);\n\n  return Rect;\n}();\n\nvar Classes = {\n  BASE: 'shuffle',\n  SHUFFLE_ITEM: 'shuffle-item',\n  VISIBLE: 'shuffle-item--visible',\n  HIDDEN: 'shuffle-item--hidden'\n};\n\nvar id$1 = 0;\n\nvar ShuffleItem =\n/*#__PURE__*/\nfunction () {\n  function ShuffleItem(element) {\n    _classCallCheck(this, ShuffleItem);\n\n    id$1 += 1;\n    this.id = id$1;\n    this.element = element;\n    /**\n     * Used to separate items for layout and shrink.\n     */\n\n    this.isVisible = true;\n    /**\n     * Used to determine if a transition will happen. By the time the _layout\n     * and _shrink methods get the ShuffleItem instances, the `isVisible` value\n     * has already been changed by the separation methods, so this property is\n     * needed to know if the item was visible/hidden before the shrink/layout.\n     */\n\n    this.isHidden = false;\n  }\n\n  _createClass(ShuffleItem, [{\n    key: \"show\",\n    value: function show() {\n      this.isVisible = true;\n      this.element.classList.remove(Classes.HIDDEN);\n      this.element.classList.add(Classes.VISIBLE);\n      this.element.removeAttribute('aria-hidden');\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.isVisible = false;\n      this.element.classList.remove(Classes.VISIBLE);\n      this.element.classList.add(Classes.HIDDEN);\n      this.element.setAttribute('aria-hidden', true);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addClasses([Classes.SHUFFLE_ITEM, Classes.VISIBLE]);\n      this.applyCss(ShuffleItem.Css.INITIAL);\n      this.scale = ShuffleItem.Scale.VISIBLE;\n      this.point = new Point();\n    }\n  }, {\n    key: \"addClasses\",\n    value: function addClasses(classes) {\n      var _this = this;\n\n      classes.forEach(function (className) {\n        _this.element.classList.add(className);\n      });\n    }\n  }, {\n    key: \"removeClasses\",\n    value: function removeClasses(classes) {\n      var _this2 = this;\n\n      classes.forEach(function (className) {\n        _this2.element.classList.remove(className);\n      });\n    }\n  }, {\n    key: \"applyCss\",\n    value: function applyCss(obj) {\n      var _this3 = this;\n\n      Object.keys(obj).forEach(function (key) {\n        _this3.element.style[key] = obj[key];\n      });\n    }\n  }, {\n    key: \"dispose\",\n    value: function dispose() {\n      this.removeClasses([Classes.HIDDEN, Classes.VISIBLE, Classes.SHUFFLE_ITEM]);\n      this.element.removeAttribute('style');\n      this.element = null;\n    }\n  }]);\n\n  return ShuffleItem;\n}();\n\nShuffleItem.Css = {\n  INITIAL: {\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    visibility: 'visible',\n    'will-change': 'transform'\n  },\n  VISIBLE: {\n    before: {\n      opacity: 1,\n      visibility: 'visible'\n    },\n    after: {\n      transitionDelay: ''\n    }\n  },\n  HIDDEN: {\n    before: {\n      opacity: 0\n    },\n    after: {\n      visibility: 'hidden',\n      transitionDelay: ''\n    }\n  }\n};\nShuffleItem.Scale = {\n  VISIBLE: 1,\n  HIDDEN: 0.001\n};\n\nvar value = null;\nvar testComputedSize = (function () {\n  if (value !== null) {\n    return value;\n  }\n\n  var element = document.body || document.documentElement;\n  var e = document.createElement('div');\n  e.style.cssText = 'width:10px;padding:2px;box-sizing:border-box;';\n  element.appendChild(e);\n  value = window.getComputedStyle(e, null).width === '10px';\n  element.removeChild(e);\n  return value;\n});\n\n/**\n * Retrieve the computed style for an element, parsed as a float.\n * @param {Element} element Element to get style for.\n * @param {string} style Style property.\n * @param {CSSStyleDeclaration} [styles] Optionally include clean styles to\n *     use instead of asking for them again.\n * @return {number} The parsed computed value or zero if that fails because IE\n *     will return 'auto' when the element doesn't have margins instead of\n *     the computed style.\n */\n\nfunction getNumberStyle(element, style) {\n  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.getComputedStyle(element, null);\n  var value = getNumber(styles[style]); // Support IE<=11 and W3C spec.\n\n  if (!testComputedSize() && style === 'width') {\n    value += getNumber(styles.paddingLeft) + getNumber(styles.paddingRight) + getNumber(styles.borderLeftWidth) + getNumber(styles.borderRightWidth);\n  } else if (!testComputedSize() && style === 'height') {\n    value += getNumber(styles.paddingTop) + getNumber(styles.paddingBottom) + getNumber(styles.borderTopWidth) + getNumber(styles.borderBottomWidth);\n  }\n\n  return value;\n}\n\n/**\n * Fisher-Yates shuffle.\n * http://stackoverflow.com/a/962890/373422\n * https://bost.ocks.org/mike/shuffle/\n * @param {Array} array Array to shuffle.\n * @return {Array} Randomly sorted array.\n */\nfunction randomize(array) {\n  var n = array.length;\n\n  while (n) {\n    n -= 1;\n    var i = Math.floor(Math.random() * (n + 1));\n    var temp = array[i];\n    array[i] = array[n];\n    array[n] = temp;\n  }\n\n  return array;\n}\n\nvar defaults = {\n  // Use array.reverse() to reverse the results\n  reverse: false,\n  // Sorting function\n  by: null,\n  // Custom sort function\n  compare: null,\n  // If true, this will skip the sorting and return a randomized order in the array\n  randomize: false,\n  // Determines which property of each item in the array is passed to the\n  // sorting method.\n  key: 'element'\n}; // You can return `undefined` from the `by` function to revert to DOM order.\n\nfunction sorter(arr, options) {\n  var opts = Object.assign({}, defaults, options);\n  var original = Array.from(arr);\n  var revert = false;\n\n  if (!arr.length) {\n    return [];\n  }\n\n  if (opts.randomize) {\n    return randomize(arr);\n  } // Sort the elements by the opts.by function.\n  // If we don't have opts.by, default to DOM order\n\n\n  if (typeof opts.by === 'function') {\n    arr.sort(function (a, b) {\n      // Exit early if we already know we want to revert\n      if (revert) {\n        return 0;\n      }\n\n      var valA = opts.by(a[opts.key]);\n      var valB = opts.by(b[opts.key]); // If both values are undefined, use the DOM order\n\n      if (valA === undefined && valB === undefined) {\n        revert = true;\n        return 0;\n      }\n\n      if (valA < valB || valA === 'sortFirst' || valB === 'sortLast') {\n        return -1;\n      }\n\n      if (valA > valB || valA === 'sortLast' || valB === 'sortFirst') {\n        return 1;\n      }\n\n      return 0;\n    });\n  } else if (typeof opts.compare === 'function') {\n    arr.sort(opts.compare);\n  } // Revert to the original array if necessary\n\n\n  if (revert) {\n    return original;\n  }\n\n  if (opts.reverse) {\n    arr.reverse();\n  }\n\n  return arr;\n}\n\nvar transitions = {};\nvar eventName = 'transitionend';\nvar count = 0;\n\nfunction uniqueId() {\n  count += 1;\n  return eventName + count;\n}\n\nfunction cancelTransitionEnd(id) {\n  if (transitions[id]) {\n    transitions[id].element.removeEventListener(eventName, transitions[id].listener);\n    transitions[id] = null;\n    return true;\n  }\n\n  return false;\n}\nfunction onTransitionEnd(element, callback) {\n  var id = uniqueId();\n\n  var listener = function listener(evt) {\n    if (evt.currentTarget === evt.target) {\n      cancelTransitionEnd(id);\n      callback(evt);\n    }\n  };\n\n  element.addEventListener(eventName, listener);\n  transitions[id] = {\n    element: element,\n    listener: listener\n  };\n  return id;\n}\n\nfunction arrayMax(array) {\n  return Math.max.apply(Math, array); // eslint-disable-line prefer-spread\n}\n\nfunction arrayMin(array) {\n  return Math.min.apply(Math, array); // eslint-disable-line prefer-spread\n}\n\n/**\n * Determine the number of columns an items spans.\n * @param {number} itemWidth Width of the item.\n * @param {number} columnWidth Width of the column (includes gutter).\n * @param {number} columns Total number of columns\n * @param {number} threshold A buffer value for the size of the column to fit.\n * @return {number}\n */\n\nfunction getColumnSpan(itemWidth, columnWidth, columns, threshold) {\n  var columnSpan = itemWidth / columnWidth; // If the difference between the rounded column span number and the\n  // calculated column span number is really small, round the number to\n  // make it fit.\n\n  if (Math.abs(Math.round(columnSpan) - columnSpan) < threshold) {\n    // e.g. columnSpan = 4.0089945390298745\n    columnSpan = Math.round(columnSpan);\n  } // Ensure the column span is not more than the amount of columns in the whole layout.\n\n\n  return Math.min(Math.ceil(columnSpan), columns);\n}\n/**\n * Retrieves the column set to use for placement.\n * @param {number} columnSpan The number of columns this current item spans.\n * @param {number} columns The total columns in the grid.\n * @return {Array.<number>} An array of numbers represeting the column set.\n */\n\nfunction getAvailablePositions(positions, columnSpan, columns) {\n  // The item spans only one column.\n  if (columnSpan === 1) {\n    return positions;\n  } // The item spans more than one column, figure out how many different\n  // places it could fit horizontally.\n  // The group count is the number of places within the positions this block\n  // could fit, ignoring the current positions of items.\n  // Imagine a 2 column brick as the second item in a 4 column grid with\n  // 10px height each. Find the places it would fit:\n  // [20, 10, 10, 0]\n  //  |   |   |\n  //  *   *   *\n  //\n  // Then take the places which fit and get the bigger of the two:\n  // max([20, 10]), max([10, 10]), max([10, 0]) = [20, 10, 10]\n  //\n  // Next, find the first smallest number (the short column).\n  // [20, 10, 10]\n  //      |\n  //      *\n  //\n  // And that's where it should be placed!\n  //\n  // Another example where the second column's item extends past the first:\n  // [10, 20, 10, 0] => [20, 20, 10] => 10\n\n\n  var available = []; // For how many possible positions for this item there are.\n\n  for (var i = 0; i <= columns - columnSpan; i++) {\n    // Find the bigger value for each place it could fit.\n    available.push(arrayMax(positions.slice(i, i + columnSpan)));\n  }\n\n  return available;\n}\n/**\n * Find index of short column, the first from the left where this item will go.\n *\n * @param {Array.<number>} positions The array to search for the smallest number.\n * @param {number} buffer Optional buffer which is very useful when the height\n *     is a percentage of the width.\n * @return {number} Index of the short column.\n */\n\nfunction getShortColumn(positions, buffer) {\n  var minPosition = arrayMin(positions);\n\n  for (var i = 0, len = positions.length; i < len; i++) {\n    if (positions[i] >= minPosition - buffer && positions[i] <= minPosition + buffer) {\n      return i;\n    }\n  }\n\n  return 0;\n}\n/**\n * Determine the location of the next item, based on its size.\n * @param {Object} itemSize Object with width and height.\n * @param {Array.<number>} positions Positions of the other current items.\n * @param {number} gridSize The column width or row height.\n * @param {number} total The total number of columns or rows.\n * @param {number} threshold Buffer value for the column to fit.\n * @param {number} buffer Vertical buffer for the height of items.\n * @return {Point}\n */\n\nfunction getItemPosition(_ref) {\n  var itemSize = _ref.itemSize,\n      positions = _ref.positions,\n      gridSize = _ref.gridSize,\n      total = _ref.total,\n      threshold = _ref.threshold,\n      buffer = _ref.buffer;\n  var span = getColumnSpan(itemSize.width, gridSize, total, threshold);\n  var setY = getAvailablePositions(positions, span, total);\n  var shortColumnIndex = getShortColumn(setY, buffer); // Position the item\n\n  var point = new Point(gridSize * shortColumnIndex, setY[shortColumnIndex]); // Update the columns array with the new values for each column.\n  // e.g. before the update the columns could be [250, 0, 0, 0] for an item\n  // which spans 2 columns. After it would be [250, itemHeight, itemHeight, 0].\n\n  var setHeight = setY[shortColumnIndex] + itemSize.height;\n\n  for (var i = 0; i < span; i++) {\n    positions[shortColumnIndex + i] = setHeight;\n  }\n\n  return point;\n}\n/**\n * This method attempts to center items. This method could potentially be slow\n * with a large number of items because it must place items, then check every\n * previous item to ensure there is no overlap.\n * @param {Array.<Rect>} itemRects Item data objects.\n * @param {number} containerWidth Width of the containing element.\n * @return {Array.<Point>}\n */\n\nfunction getCenteredPositions(itemRects, containerWidth) {\n  var rowMap = {}; // Populate rows by their offset because items could jump between rows like:\n  // a   c\n  //  bbb\n\n  itemRects.forEach(function (itemRect) {\n    if (rowMap[itemRect.top]) {\n      // Push the point to the last row array.\n      rowMap[itemRect.top].push(itemRect);\n    } else {\n      // Start of a new row.\n      rowMap[itemRect.top] = [itemRect];\n    }\n  }); // For each row, find the end of the last item, then calculate\n  // the remaining space by dividing it by 2. Then add that\n  // offset to the x position of each point.\n\n  var rects = [];\n  var rows = [];\n  var centeredRows = [];\n  Object.keys(rowMap).forEach(function (key) {\n    var itemRects = rowMap[key];\n    rows.push(itemRects);\n    var lastItem = itemRects[itemRects.length - 1];\n    var end = lastItem.left + lastItem.width;\n    var offset = Math.round((containerWidth - end) / 2);\n    var finalRects = itemRects;\n    var canMove = false;\n\n    if (offset > 0) {\n      var newRects = [];\n      canMove = itemRects.every(function (r) {\n        var newRect = new Rect(r.left + offset, r.top, r.width, r.height, r.id); // Check all current rects to make sure none overlap.\n\n        var noOverlap = !rects.some(function (r) {\n          return Rect.intersects(newRect, r);\n        });\n        newRects.push(newRect);\n        return noOverlap;\n      }); // If none of the rectangles overlapped, the whole group can be centered.\n\n      if (canMove) {\n        finalRects = newRects;\n      }\n    } // If the items are not going to be offset, ensure that the original\n    // placement for this row will not overlap previous rows (row-spanning\n    // elements could be in the way).\n\n\n    if (!canMove) {\n      var intersectingRect;\n      var hasOverlap = itemRects.some(function (itemRect) {\n        return rects.some(function (r) {\n          var intersects = Rect.intersects(itemRect, r);\n\n          if (intersects) {\n            intersectingRect = r;\n          }\n\n          return intersects;\n        });\n      }); // If there is any overlap, replace the overlapping row with the original.\n\n      if (hasOverlap) {\n        var rowIndex = centeredRows.findIndex(function (items) {\n          return items.includes(intersectingRect);\n        });\n        centeredRows.splice(rowIndex, 1, rows[rowIndex]);\n      }\n    }\n\n    rects = rects.concat(finalRects);\n    centeredRows.push(finalRects);\n  }); // Reduce array of arrays to a single array of points.\n  // https://stackoverflow.com/a/10865042/373422\n  // Then reset sort back to how the items were passed to this method.\n  // Remove the wrapper object with index, map to a Point.\n\n  return [].concat.apply([], centeredRows) // eslint-disable-line prefer-spread\n  .sort(function (a, b) {\n    return a.id - b.id;\n  }).map(function (itemRect) {\n    return new Point(itemRect.left, itemRect.top);\n  });\n}\n\n/**\n * Hyphenates a javascript style string to a css one. For example:\n * MozBoxSizing -> -moz-box-sizing.\n * @param {string} str The string to hyphenate.\n * @return {string} The hyphenated string.\n */\nfunction hyphenate(str) {\n  return str.replace(/([A-Z])/g, function (str, m1) {\n    return \"-\".concat(m1.toLowerCase());\n  });\n}\n\nfunction arrayUnique(x) {\n  return Array.from(new Set(x));\n} // Used for unique instance variables\n\n\nvar id$2 = 0;\n\nvar Shuffle =\n/*#__PURE__*/\nfunction (_TinyEmitter) {\n  _inherits(Shuffle, _TinyEmitter);\n\n  /**\n   * Categorize, sort, and filter a responsive grid of items.\n   *\n   * @param {Element} element An element which is the parent container for the grid items.\n   * @param {Object} [options=Shuffle.options] Options object.\n   * @constructor\n   */\n  function Shuffle(element) {\n    var _this;\n\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Shuffle);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shuffle).call(this));\n    _this.options = Object.assign({}, Shuffle.options, options); // Allow misspelling of delimiter since that's how it used to be.\n    // Remove in v6.\n\n    if (_this.options.delimeter) {\n      _this.options.delimiter = _this.options.delimeter;\n    }\n\n    _this.lastSort = {};\n    _this.group = Shuffle.ALL_ITEMS;\n    _this.lastFilter = Shuffle.ALL_ITEMS;\n    _this.isEnabled = true;\n    _this.isDestroyed = false;\n    _this.isInitialized = false;\n    _this._transitions = [];\n    _this.isTransitioning = false;\n    _this._queue = [];\n\n    var el = _this._getElementOption(element);\n\n    if (!el) {\n      throw new TypeError('Shuffle needs to be initialized with an element.');\n    }\n\n    _this.element = el;\n    _this.id = 'shuffle_' + id$2;\n    id$2 += 1;\n\n    _this._init();\n\n    _this.isInitialized = true;\n    return _this;\n  }\n\n  _createClass(Shuffle, [{\n    key: \"_init\",\n    value: function _init() {\n      this.items = this._getItems();\n      this.options.sizer = this._getElementOption(this.options.sizer); // Add class and invalidate styles\n\n      this.element.classList.add(Shuffle.Classes.BASE); // Set initial css for each item\n\n      this._initItems(this.items); // Bind resize events\n\n\n      this._onResize = this._getResizeFunction();\n      window.addEventListener('resize', this._onResize); // If the page has not already emitted the `load` event, call layout on load.\n      // This avoids layout issues caused by images and fonts loading after the\n      // instance has been initialized.\n\n      if (document.readyState !== 'complete') {\n        var layout = this.layout.bind(this);\n        window.addEventListener('load', function onLoad() {\n          window.removeEventListener('load', onLoad);\n          layout();\n        });\n      } // Get container css all in one request. Causes reflow\n\n\n      var containerCss = window.getComputedStyle(this.element, null);\n      var containerWidth = Shuffle.getSize(this.element).width; // Add styles to the container if it doesn't have them.\n\n      this._validateStyles(containerCss); // We already got the container's width above, no need to cause another\n      // reflow getting it again... Calculate the number of columns there will be\n\n\n      this._setColumns(containerWidth); // Kick off!\n\n\n      this.filter(this.options.group, this.options.initialSort); // The shuffle items haven't had transitions set on them yet so the user\n      // doesn't see the first layout. Set them now that the first layout is done.\n      // First, however, a synchronous layout must be caused for the previous\n      // styles to be applied without transitions.\n\n      this.element.offsetWidth; // eslint-disable-line no-unused-expressions\n\n      this.setItemTransitions(this.items);\n      this.element.style.transition = \"height \".concat(this.options.speed, \"ms \").concat(this.options.easing);\n    }\n    /**\n     * Returns a throttled and proxied function for the resize handler.\n     * @return {function}\n     * @private\n     */\n\n  }, {\n    key: \"_getResizeFunction\",\n    value: function _getResizeFunction() {\n      var resizeFunction = this._handleResize.bind(this);\n\n      return this.options.throttle ? this.options.throttle(resizeFunction, this.options.throttleTime) : resizeFunction;\n    }\n    /**\n     * Retrieve an element from an option.\n     * @param {string|jQuery|Element} option The option to check.\n     * @return {?Element} The plain element or null.\n     * @private\n     */\n\n  }, {\n    key: \"_getElementOption\",\n    value: function _getElementOption(option) {\n      // If column width is a string, treat is as a selector and search for the\n      // sizer element within the outermost container\n      if (typeof option === 'string') {\n        return this.element.querySelector(option);\n      } // Check for an element\n\n\n      if (option && option.nodeType && option.nodeType === 1) {\n        return option;\n      } // Check for jQuery object\n\n\n      if (option && option.jquery) {\n        return option[0];\n      }\n\n      return null;\n    }\n    /**\n     * Ensures the shuffle container has the css styles it needs applied to it.\n     * @param {Object} styles Key value pairs for position and overflow.\n     * @private\n     */\n\n  }, {\n    key: \"_validateStyles\",\n    value: function _validateStyles(styles) {\n      // Position cannot be static.\n      if (styles.position === 'static') {\n        this.element.style.position = 'relative';\n      } // Overflow has to be hidden.\n\n\n      if (styles.overflow !== 'hidden') {\n        this.element.style.overflow = 'hidden';\n      }\n    }\n    /**\n     * Filter the elements by a category.\n     * @param {string|string[]|function(Element):boolean} [category] Category to\n     *     filter by. If it's given, the last category will be used to filter the items.\n     * @param {Array} [collection] Optionally filter a collection. Defaults to\n     *     all the items.\n     * @return {{visible: ShuffleItem[], hidden: ShuffleItem[]}}\n     * @private\n     */\n\n  }, {\n    key: \"_filter\",\n    value: function _filter() {\n      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastFilter;\n      var collection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.items;\n\n      var set = this._getFilteredSets(category, collection); // Individually add/remove hidden/visible classes\n\n\n      this._toggleFilterClasses(set); // Save the last filter in case elements are appended.\n\n\n      this.lastFilter = category; // This is saved mainly because providing a filter function (like searching)\n      // will overwrite the `lastFilter` property every time its called.\n\n      if (typeof category === 'string') {\n        this.group = category;\n      }\n\n      return set;\n    }\n    /**\n     * Returns an object containing the visible and hidden elements.\n     * @param {string|string[]|function(Element):boolean} category Category or function to filter by.\n     * @param {ShuffleItem[]} items A collection of items to filter.\n     * @return {{visible: ShuffleItem[], hidden: ShuffleItem[]}}\n     * @private\n     */\n\n  }, {\n    key: \"_getFilteredSets\",\n    value: function _getFilteredSets(category, items) {\n      var _this2 = this;\n\n      var visible = [];\n      var hidden = []; // category === 'all', add visible class to everything\n\n      if (category === Shuffle.ALL_ITEMS) {\n        visible = items; // Loop through each item and use provided function to determine\n        // whether to hide it or not.\n      } else {\n        items.forEach(function (item) {\n          if (_this2._doesPassFilter(category, item.element)) {\n            visible.push(item);\n          } else {\n            hidden.push(item);\n          }\n        });\n      }\n\n      return {\n        visible: visible,\n        hidden: hidden\n      };\n    }\n    /**\n     * Test an item to see if it passes a category.\n     * @param {string|string[]|function():boolean} category Category or function to filter by.\n     * @param {Element} element An element to test.\n     * @return {boolean} Whether it passes the category/filter.\n     * @private\n     */\n\n  }, {\n    key: \"_doesPassFilter\",\n    value: function _doesPassFilter(category, element) {\n      if (typeof category === 'function') {\n        return category.call(element, element, this);\n      } // Check each element's data-groups attribute against the given category.\n\n\n      var attr = element.getAttribute('data-' + Shuffle.FILTER_ATTRIBUTE_KEY);\n      var keys = this.options.delimiter ? attr.split(this.options.delimiter) : JSON.parse(attr);\n\n      function testCategory(category) {\n        return keys.includes(category);\n      }\n\n      if (Array.isArray(category)) {\n        if (this.options.filterMode === Shuffle.FilterMode.ANY) {\n          return category.some(testCategory);\n        }\n\n        return category.every(testCategory);\n      }\n\n      return keys.includes(category);\n    }\n    /**\n     * Toggles the visible and hidden class names.\n     * @param {{visible, hidden}} Object with visible and hidden arrays.\n     * @private\n     */\n\n  }, {\n    key: \"_toggleFilterClasses\",\n    value: function _toggleFilterClasses(_ref) {\n      var visible = _ref.visible,\n          hidden = _ref.hidden;\n      visible.forEach(function (item) {\n        item.show();\n      });\n      hidden.forEach(function (item) {\n        item.hide();\n      });\n    }\n    /**\n     * Set the initial css for each item\n     * @param {ShuffleItem[]} items Set to initialize.\n     * @private\n     */\n\n  }, {\n    key: \"_initItems\",\n    value: function _initItems(items) {\n      items.forEach(function (item) {\n        item.init();\n      });\n    }\n    /**\n     * Remove element reference and styles.\n     * @param {ShuffleItem[]} items Set to dispose.\n     * @private\n     */\n\n  }, {\n    key: \"_disposeItems\",\n    value: function _disposeItems(items) {\n      items.forEach(function (item) {\n        item.dispose();\n      });\n    }\n    /**\n     * Updates the visible item count.\n     * @private\n     */\n\n  }, {\n    key: \"_updateItemCount\",\n    value: function _updateItemCount() {\n      this.visibleItems = this._getFilteredItems().length;\n    }\n    /**\n     * Sets css transform transition on a group of elements. This is not executed\n     * at the same time as `item.init` so that transitions don't occur upon\n     * initialization of a new Shuffle instance.\n     * @param {ShuffleItem[]} items Shuffle items to set transitions on.\n     * @protected\n     */\n\n  }, {\n    key: \"setItemTransitions\",\n    value: function setItemTransitions(items) {\n      var _this$options = this.options,\n          speed = _this$options.speed,\n          easing = _this$options.easing;\n      var positionProps = this.options.useTransforms ? ['transform'] : ['top', 'left']; // Allow users to transtion other properties if they exist in the `before`\n      // css mapping of the shuffle item.\n\n      var cssProps = Object.keys(ShuffleItem.Css.HIDDEN.before).map(function (k) {\n        return hyphenate(k);\n      });\n      var properties = positionProps.concat(cssProps).join();\n      items.forEach(function (item) {\n        item.element.style.transitionDuration = speed + 'ms';\n        item.element.style.transitionTimingFunction = easing;\n        item.element.style.transitionProperty = properties;\n      });\n    }\n  }, {\n    key: \"_getItems\",\n    value: function _getItems() {\n      var _this3 = this;\n\n      return Array.from(this.element.children).filter(function (el) {\n        return matchesSelector(el, _this3.options.itemSelector);\n      }).map(function (el) {\n        return new ShuffleItem(el);\n      });\n    }\n    /**\n     * Combine the current items array with a new one and sort it by DOM order.\n     * @param {ShuffleItem[]} items Items to track.\n     * @return {ShuffleItem[]}\n     */\n\n  }, {\n    key: \"_mergeNewItems\",\n    value: function _mergeNewItems(items) {\n      var children = Array.from(this.element.children);\n      return sorter(this.items.concat(items), {\n        by: function by(element) {\n          return children.indexOf(element);\n        }\n      });\n    }\n  }, {\n    key: \"_getFilteredItems\",\n    value: function _getFilteredItems() {\n      return this.items.filter(function (item) {\n        return item.isVisible;\n      });\n    }\n  }, {\n    key: \"_getConcealedItems\",\n    value: function _getConcealedItems() {\n      return this.items.filter(function (item) {\n        return !item.isVisible;\n      });\n    }\n    /**\n     * Returns the column size, based on column width and sizer options.\n     * @param {number} containerWidth Size of the parent container.\n     * @param {number} gutterSize Size of the gutters.\n     * @return {number}\n     * @private\n     */\n\n  }, {\n    key: \"_getColumnSize\",\n    value: function _getColumnSize(containerWidth, gutterSize) {\n      var size; // If the columnWidth property is a function, then the grid is fluid\n\n      if (typeof this.options.columnWidth === 'function') {\n        size = this.options.columnWidth(containerWidth); // columnWidth option isn't a function, are they using a sizing element?\n      } else if (this.options.sizer) {\n        size = Shuffle.getSize(this.options.sizer).width; // if not, how about the explicitly set option?\n      } else if (this.options.columnWidth) {\n        size = this.options.columnWidth; // or use the size of the first item\n      } else if (this.items.length > 0) {\n        size = Shuffle.getSize(this.items[0].element, true).width; // if there's no items, use size of container\n      } else {\n        size = containerWidth;\n      } // Don't let them set a column width of zero.\n\n\n      if (size === 0) {\n        size = containerWidth;\n      }\n\n      return size + gutterSize;\n    }\n    /**\n     * Returns the gutter size, based on gutter width and sizer options.\n     * @param {number} containerWidth Size of the parent container.\n     * @return {number}\n     * @private\n     */\n\n  }, {\n    key: \"_getGutterSize\",\n    value: function _getGutterSize(containerWidth) {\n      var size;\n\n      if (typeof this.options.gutterWidth === 'function') {\n        size = this.options.gutterWidth(containerWidth);\n      } else if (this.options.sizer) {\n        size = getNumberStyle(this.options.sizer, 'marginLeft');\n      } else {\n        size = this.options.gutterWidth;\n      }\n\n      return size;\n    }\n    /**\n     * Calculate the number of columns to be used. Gets css if using sizer element.\n     * @param {number} [containerWidth] Optionally specify a container width if\n     *    it's already available.\n     */\n\n  }, {\n    key: \"_setColumns\",\n    value: function _setColumns() {\n      var containerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Shuffle.getSize(this.element).width;\n\n      var gutter = this._getGutterSize(containerWidth);\n\n      var columnWidth = this._getColumnSize(containerWidth, gutter);\n\n      var calculatedColumns = (containerWidth + gutter) / columnWidth; // Widths given from getStyles are not precise enough...\n\n      if (Math.abs(Math.round(calculatedColumns) - calculatedColumns) < this.options.columnThreshold) {\n        // e.g. calculatedColumns = 11.998876\n        calculatedColumns = Math.round(calculatedColumns);\n      }\n\n      this.cols = Math.max(Math.floor(calculatedColumns), 1);\n      this.containerWidth = containerWidth;\n      this.colWidth = columnWidth;\n    }\n    /**\n     * Adjust the height of the grid\n     */\n\n  }, {\n    key: \"_setContainerSize\",\n    value: function _setContainerSize() {\n      this.element.style.height = this._getContainerSize() + 'px';\n    }\n    /**\n     * Based on the column heights, it returns the biggest one.\n     * @return {number}\n     * @private\n     */\n\n  }, {\n    key: \"_getContainerSize\",\n    value: function _getContainerSize() {\n      return arrayMax(this.positions);\n    }\n    /**\n     * Get the clamped stagger amount.\n     * @param {number} index Index of the item to be staggered.\n     * @return {number}\n     */\n\n  }, {\n    key: \"_getStaggerAmount\",\n    value: function _getStaggerAmount(index) {\n      return Math.min(index * this.options.staggerAmount, this.options.staggerAmountMax);\n    }\n    /**\n     * Emit an event from this instance.\n     * @param {string} name Event name.\n     * @param {Object} [data={}] Optional object data.\n     */\n\n  }, {\n    key: \"_dispatch\",\n    value: function _dispatch(name) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      if (this.isDestroyed) {\n        return;\n      }\n\n      data.shuffle = this;\n      this.emit(name, data);\n    }\n    /**\n     * Zeros out the y columns array, which is used to determine item placement.\n     * @private\n     */\n\n  }, {\n    key: \"_resetCols\",\n    value: function _resetCols() {\n      var i = this.cols;\n      this.positions = [];\n\n      while (i) {\n        i -= 1;\n        this.positions.push(0);\n      }\n    }\n    /**\n     * Loops through each item that should be shown and calculates the x, y position.\n     * @param {ShuffleItem[]} items Array of items that will be shown/layed\n     *     out in order in their array.\n     */\n\n  }, {\n    key: \"_layout\",\n    value: function _layout(items) {\n      var _this4 = this;\n\n      var itemPositions = this._getNextPositions(items);\n\n      var count = 0;\n      items.forEach(function (item, i) {\n        function callback() {\n          item.applyCss(ShuffleItem.Css.VISIBLE.after);\n        } // If the item will not change its position, do not add it to the render\n        // queue. Transitions don't fire when setting a property to the same value.\n\n\n        if (Point.equals(item.point, itemPositions[i]) && !item.isHidden) {\n          item.applyCss(ShuffleItem.Css.VISIBLE.before);\n          callback();\n          return;\n        }\n\n        item.point = itemPositions[i];\n        item.scale = ShuffleItem.Scale.VISIBLE;\n        item.isHidden = false; // Clone the object so that the `before` object isn't modified when the\n        // transition delay is added.\n\n        var styles = _this4.getStylesForTransition(item, ShuffleItem.Css.VISIBLE.before);\n\n        styles.transitionDelay = _this4._getStaggerAmount(count) + 'ms';\n\n        _this4._queue.push({\n          item: item,\n          styles: styles,\n          callback: callback\n        });\n\n        count += 1;\n      });\n    }\n    /**\n     * Return an array of Point instances representing the future positions of\n     * each item.\n     * @param {ShuffleItem[]} items Array of sorted shuffle items.\n     * @return {Point[]}\n     * @private\n     */\n\n  }, {\n    key: \"_getNextPositions\",\n    value: function _getNextPositions(items) {\n      var _this5 = this;\n\n      // If position data is going to be changed, add the item's size to the\n      // transformer to allow for calculations.\n      if (this.options.isCentered) {\n        var itemsData = items.map(function (item, i) {\n          var itemSize = Shuffle.getSize(item.element, true);\n\n          var point = _this5._getItemPosition(itemSize);\n\n          return new Rect(point.x, point.y, itemSize.width, itemSize.height, i);\n        });\n        return this.getTransformedPositions(itemsData, this.containerWidth);\n      } // If no transforms are going to happen, simply return an array of the\n      // future points of each item.\n\n\n      return items.map(function (item) {\n        return _this5._getItemPosition(Shuffle.getSize(item.element, true));\n      });\n    }\n    /**\n     * Determine the location of the next item, based on its size.\n     * @param {{width: number, height: number}} itemSize Object with width and height.\n     * @return {Point}\n     * @private\n     */\n\n  }, {\n    key: \"_getItemPosition\",\n    value: function _getItemPosition(itemSize) {\n      return getItemPosition({\n        itemSize: itemSize,\n        positions: this.positions,\n        gridSize: this.colWidth,\n        total: this.cols,\n        threshold: this.options.columnThreshold,\n        buffer: this.options.buffer\n      });\n    }\n    /**\n     * Mutate positions before they're applied.\n     * @param {Rect[]} itemRects Item data objects.\n     * @param {number} containerWidth Width of the containing element.\n     * @return {Point[]}\n     * @protected\n     */\n\n  }, {\n    key: \"getTransformedPositions\",\n    value: function getTransformedPositions(itemRects, containerWidth) {\n      return getCenteredPositions(itemRects, containerWidth);\n    }\n    /**\n     * Hides the elements that don't match our filter.\n     * @param {ShuffleItem[]} collection Collection to shrink.\n     * @private\n     */\n\n  }, {\n    key: \"_shrink\",\n    value: function _shrink() {\n      var _this6 = this;\n\n      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getConcealedItems();\n      var count = 0;\n      collection.forEach(function (item) {\n        function callback() {\n          item.applyCss(ShuffleItem.Css.HIDDEN.after);\n        } // Continuing would add a transitionend event listener to the element, but\n        // that listener would not execute because the transform and opacity would\n        // stay the same.\n        // The callback is executed here because it is not guaranteed to be called\n        // after the transitionend event because the transitionend could be\n        // canceled if another animation starts.\n\n\n        if (item.isHidden) {\n          item.applyCss(ShuffleItem.Css.HIDDEN.before);\n          callback();\n          return;\n        }\n\n        item.scale = ShuffleItem.Scale.HIDDEN;\n        item.isHidden = true;\n\n        var styles = _this6.getStylesForTransition(item, ShuffleItem.Css.HIDDEN.before);\n\n        styles.transitionDelay = _this6._getStaggerAmount(count) + 'ms';\n\n        _this6._queue.push({\n          item: item,\n          styles: styles,\n          callback: callback\n        });\n\n        count += 1;\n      });\n    }\n    /**\n     * Resize handler.\n     * @private\n     */\n\n  }, {\n    key: \"_handleResize\",\n    value: function _handleResize() {\n      // If shuffle is disabled, destroyed, don't do anything\n      if (!this.isEnabled || this.isDestroyed) {\n        return;\n      }\n\n      this.update();\n    }\n    /**\n     * Returns styles which will be applied to the an item for a transition.\n     * @param {ShuffleItem} item Item to get styles for. Should have updated\n     *   scale and point properties.\n     * @param {Object} styleObject Extra styles that will be used in the transition.\n     * @return {!Object} Transforms for transitions, left/top for animate.\n     * @protected\n     */\n\n  }, {\n    key: \"getStylesForTransition\",\n    value: function getStylesForTransition(item, styleObject) {\n      // Clone the object to avoid mutating the original.\n      var styles = Object.assign({}, styleObject);\n\n      if (this.options.useTransforms) {\n        var x = this.options.roundTransforms ? Math.round(item.point.x) : item.point.x;\n        var y = this.options.roundTransforms ? Math.round(item.point.y) : item.point.y;\n        styles.transform = \"translate(\".concat(x, \"px, \").concat(y, \"px) scale(\").concat(item.scale, \")\");\n      } else {\n        styles.left = item.point.x + 'px';\n        styles.top = item.point.y + 'px';\n      }\n\n      return styles;\n    }\n    /**\n     * Listen for the transition end on an element and execute the itemCallback\n     * when it finishes.\n     * @param {Element} element Element to listen on.\n     * @param {function} itemCallback Callback for the item.\n     * @param {function} done Callback to notify `parallel` that this one is done.\n     */\n\n  }, {\n    key: \"_whenTransitionDone\",\n    value: function _whenTransitionDone(element, itemCallback, done) {\n      var id = onTransitionEnd(element, function (evt) {\n        itemCallback();\n        done(null, evt);\n      });\n\n      this._transitions.push(id);\n    }\n    /**\n     * Return a function which will set CSS styles and call the `done` function\n     * when (if) the transition finishes.\n     * @param {Object} opts Transition object.\n     * @return {function} A function to be called with a `done` function.\n     */\n\n  }, {\n    key: \"_getTransitionFunction\",\n    value: function _getTransitionFunction(opts) {\n      var _this7 = this;\n\n      return function (done) {\n        opts.item.applyCss(opts.styles);\n\n        _this7._whenTransitionDone(opts.item.element, opts.callback, done);\n      };\n    }\n    /**\n     * Execute the styles gathered in the style queue. This applies styles to elements,\n     * triggering transitions.\n     * @private\n     */\n\n  }, {\n    key: \"_processQueue\",\n    value: function _processQueue() {\n      if (this.isTransitioning) {\n        this._cancelMovement();\n      }\n\n      var hasSpeed = this.options.speed > 0;\n      var hasQueue = this._queue.length > 0;\n\n      if (hasQueue && hasSpeed && this.isInitialized) {\n        this._startTransitions(this._queue);\n      } else if (hasQueue) {\n        this._styleImmediately(this._queue);\n\n        this._dispatch(Shuffle.EventType.LAYOUT); // A call to layout happened, but none of the newly visible items will\n        // change position or the transition duration is zero, which will not trigger\n        // the transitionend event.\n\n      } else {\n        this._dispatch(Shuffle.EventType.LAYOUT);\n      } // Remove everything in the style queue\n\n\n      this._queue.length = 0;\n    }\n    /**\n     * Wait for each transition to finish, the emit the layout event.\n     * @param {Object[]} transitions Array of transition objects.\n     */\n\n  }, {\n    key: \"_startTransitions\",\n    value: function _startTransitions(transitions) {\n      var _this8 = this;\n\n      // Set flag that shuffle is currently in motion.\n      this.isTransitioning = true; // Create an array of functions to be called.\n\n      var callbacks = transitions.map(function (obj) {\n        return _this8._getTransitionFunction(obj);\n      });\n      arrayParallel(callbacks, this._movementFinished.bind(this));\n    }\n  }, {\n    key: \"_cancelMovement\",\n    value: function _cancelMovement() {\n      // Remove the transition end event for each listener.\n      this._transitions.forEach(cancelTransitionEnd); // Reset the array.\n\n\n      this._transitions.length = 0; // Show it's no longer active.\n\n      this.isTransitioning = false;\n    }\n    /**\n     * Apply styles without a transition.\n     * @param {Object[]} objects Array of transition objects.\n     * @private\n     */\n\n  }, {\n    key: \"_styleImmediately\",\n    value: function _styleImmediately(objects) {\n      if (objects.length) {\n        var elements = objects.map(function (obj) {\n          return obj.item.element;\n        });\n\n        Shuffle._skipTransitions(elements, function () {\n          objects.forEach(function (obj) {\n            obj.item.applyCss(obj.styles);\n            obj.callback();\n          });\n        });\n      }\n    }\n  }, {\n    key: \"_movementFinished\",\n    value: function _movementFinished() {\n      this._transitions.length = 0;\n      this.isTransitioning = false;\n\n      this._dispatch(Shuffle.EventType.LAYOUT);\n    }\n    /**\n     * The magic. This is what makes the plugin 'shuffle'\n     * @param {string|string[]|function(Element):boolean} [category] Category to filter by.\n     *     Can be a function, string, or array of strings.\n     * @param {Object} [sortObj] A sort object which can sort the visible set\n     */\n\n  }, {\n    key: \"filter\",\n    value: function filter(category, sortObj) {\n      if (!this.isEnabled) {\n        return;\n      }\n\n      if (!category || category && category.length === 0) {\n        category = Shuffle.ALL_ITEMS; // eslint-disable-line no-param-reassign\n      }\n\n      this._filter(category); // Shrink each hidden item\n\n\n      this._shrink(); // How many visible elements?\n\n\n      this._updateItemCount(); // Update transforms on visible elements so they will animate to their new positions.\n\n\n      this.sort(sortObj);\n    }\n    /**\n     * Gets the visible elements, sorts them, and passes them to layout.\n     * @param {Object} [sortOptions] The options object to pass to `sorter`.\n     */\n\n  }, {\n    key: \"sort\",\n    value: function sort() {\n      var sortOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastSort;\n\n      if (!this.isEnabled) {\n        return;\n      }\n\n      this._resetCols();\n\n      var items = sorter(this._getFilteredItems(), sortOptions);\n\n      this._layout(items); // `_layout` always happens after `_shrink`, so it's safe to process the style\n      // queue here with styles from the shrink method.\n\n\n      this._processQueue(); // Adjust the height of the container.\n\n\n      this._setContainerSize();\n\n      this.lastSort = sortOptions;\n    }\n    /**\n     * Reposition everything.\n     * @param {boolean} [isOnlyLayout=false] If true, column and gutter widths won't be recalculated.\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      var isOnlyLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (this.isEnabled) {\n        if (!isOnlyLayout) {\n          // Get updated colCount\n          this._setColumns();\n        } // Layout items\n\n\n        this.sort();\n      }\n    }\n    /**\n     * Use this instead of `update()` if you don't need the columns and gutters updated\n     * Maybe an image inside `shuffle` loaded (and now has a height), which means calculations\n     * could be off.\n     */\n\n  }, {\n    key: \"layout\",\n    value: function layout() {\n      this.update(true);\n    }\n    /**\n     * New items have been appended to shuffle. Mix them in with the current\n     * filter or sort status.\n     * @param {Element[]} newItems Collection of new items.\n     */\n\n  }, {\n    key: \"add\",\n    value: function add(newItems) {\n      var _this9 = this;\n\n      var items = arrayUnique(newItems).map(function (el) {\n        return new ShuffleItem(el);\n      }); // Add classes and set initial positions.\n\n      this._initItems(items); // Determine which items will go with the current filter.\n\n\n      this._resetCols();\n\n      var allItems = this._mergeNewItems(items);\n\n      var sortedItems = sorter(allItems, this.lastSort);\n\n      var allSortedItemsSet = this._filter(this.lastFilter, sortedItems);\n\n      var isNewItem = function isNewItem(item) {\n        return items.includes(item);\n      };\n\n      var applyHiddenState = function applyHiddenState(item) {\n        item.scale = ShuffleItem.Scale.HIDDEN;\n        item.isHidden = true;\n        item.applyCss(ShuffleItem.Css.HIDDEN.before);\n        item.applyCss(ShuffleItem.Css.HIDDEN.after);\n      }; // Layout all items again so that new items get positions.\n      // Synchonously apply positions.\n\n\n      var itemPositions = this._getNextPositions(allSortedItemsSet.visible);\n\n      allSortedItemsSet.visible.forEach(function (item, i) {\n        if (isNewItem(item)) {\n          item.point = itemPositions[i];\n          applyHiddenState(item);\n          item.applyCss(_this9.getStylesForTransition(item, {}));\n        }\n      });\n      allSortedItemsSet.hidden.forEach(function (item) {\n        if (isNewItem(item)) {\n          applyHiddenState(item);\n        }\n      }); // Cause layout so that the styles above are applied.\n\n      this.element.offsetWidth; // eslint-disable-line no-unused-expressions\n      // Add transition to each item.\n\n      this.setItemTransitions(items); // Update the list of items.\n\n      this.items = this._mergeNewItems(items); // Update layout/visibility of new and old items.\n\n      this.filter(this.lastFilter);\n    }\n    /**\n     * Disables shuffle from updating dimensions and layout on resize\n     */\n\n  }, {\n    key: \"disable\",\n    value: function disable() {\n      this.isEnabled = false;\n    }\n    /**\n     * Enables shuffle again\n     * @param {boolean} [isUpdateLayout=true] if undefined, shuffle will update columns and gutters\n     */\n\n  }, {\n    key: \"enable\",\n    value: function enable() {\n      var isUpdateLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      this.isEnabled = true;\n\n      if (isUpdateLayout) {\n        this.update();\n      }\n    }\n    /**\n     * Remove 1 or more shuffle items.\n     * @param {Element[]} elements An array containing one or more\n     *     elements in shuffle\n     * @return {Shuffle} The shuffle instance.\n     */\n\n  }, {\n    key: \"remove\",\n    value: function remove(elements) {\n      var _this10 = this;\n\n      if (!elements.length) {\n        return;\n      }\n\n      var collection = arrayUnique(elements);\n      var oldItems = collection.map(function (element) {\n        return _this10.getItemByElement(element);\n      }).filter(function (item) {\n        return !!item;\n      });\n\n      var handleLayout = function handleLayout() {\n        _this10._disposeItems(oldItems); // Remove the collection in the callback\n\n\n        collection.forEach(function (element) {\n          element.parentNode.removeChild(element);\n        });\n\n        _this10._dispatch(Shuffle.EventType.REMOVED, {\n          collection: collection\n        });\n      }; // Hide collection first.\n\n\n      this._toggleFilterClasses({\n        visible: [],\n        hidden: oldItems\n      });\n\n      this._shrink(oldItems);\n\n      this.sort(); // Update the list of items here because `remove` could be called again\n      // with an item that is in the process of being removed.\n\n      this.items = this.items.filter(function (item) {\n        return !oldItems.includes(item);\n      });\n\n      this._updateItemCount();\n\n      this.once(Shuffle.EventType.LAYOUT, handleLayout);\n    }\n    /**\n     * Retrieve a shuffle item by its element.\n     * @param {Element} element Element to look for.\n     * @return {?ShuffleItem} A shuffle item or undefined if it's not found.\n     */\n\n  }, {\n    key: \"getItemByElement\",\n    value: function getItemByElement(element) {\n      return this.items.find(function (item) {\n        return item.element === element;\n      });\n    }\n    /**\n     * Dump the elements currently stored and reinitialize all child elements which\n     * match the `itemSelector`.\n     */\n\n  }, {\n    key: \"resetItems\",\n    value: function resetItems() {\n      var _this11 = this;\n\n      // Remove refs to current items.\n      this._disposeItems(this.items);\n\n      this.isInitialized = false; // Find new items in the DOM.\n\n      this.items = this._getItems(); // Set initial styles on the new items.\n\n      this._initItems(this.items);\n\n      this.once(Shuffle.EventType.LAYOUT, function () {\n        // Add transition to each item.\n        _this11.setItemTransitions(_this11.items);\n\n        _this11.isInitialized = true;\n      }); // Lay out all items.\n\n      this.filter(this.lastFilter);\n    }\n    /**\n     * Destroys shuffle, removes events, styles, and classes\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this._cancelMovement();\n\n      window.removeEventListener('resize', this._onResize); // Reset container styles\n\n      this.element.classList.remove('shuffle');\n      this.element.removeAttribute('style'); // Reset individual item styles\n\n      this._disposeItems(this.items);\n\n      this.items.length = 0;\n      this._transitions.length = 0; // Null DOM references\n\n      this.options.sizer = null;\n      this.element = null; // Set a flag so if a debounced resize has been triggered,\n      // it can first check if it is actually isDestroyed and not doing anything\n\n      this.isDestroyed = true;\n      this.isEnabled = false;\n    }\n    /**\n     * Returns the outer width of an element, optionally including its margins.\n     *\n     * There are a few different methods for getting the width of an element, none of\n     * which work perfectly for all Shuffle's use cases.\n     *\n     * 1. getBoundingClientRect() `left` and `right` properties.\n     *   - Accounts for transform scaled elements, making it useless for Shuffle\n     *   elements which have shrunk.\n     * 2. The `offsetWidth` property.\n     *   - This value stays the same regardless of the elements transform property,\n     *   however, it does not return subpixel values.\n     * 3. getComputedStyle()\n     *   - This works great Chrome, Firefox, Safari, but IE<=11 does not include\n     *   padding and border when box-sizing: border-box is set, requiring a feature\n     *   test and extra work to add the padding back for IE and other browsers which\n     *   follow the W3C spec here.\n     *\n     * @param {Element} element The element.\n     * @param {boolean} [includeMargins=false] Whether to include margins.\n     * @return {{width: number, height: number}} The width and height.\n     */\n\n  }], [{\n    key: \"getSize\",\n    value: function getSize(element) {\n      var includeMargins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      // Store the styles so that they can be used by others without asking for it again.\n      var styles = window.getComputedStyle(element, null);\n      var width = getNumberStyle(element, 'width', styles);\n      var height = getNumberStyle(element, 'height', styles);\n\n      if (includeMargins) {\n        var marginLeft = getNumberStyle(element, 'marginLeft', styles);\n        var marginRight = getNumberStyle(element, 'marginRight', styles);\n        var marginTop = getNumberStyle(element, 'marginTop', styles);\n        var marginBottom = getNumberStyle(element, 'marginBottom', styles);\n        width += marginLeft + marginRight;\n        height += marginTop + marginBottom;\n      }\n\n      return {\n        width: width,\n        height: height\n      };\n    }\n    /**\n     * Change a property or execute a function which will not have a transition\n     * @param {Element[]} elements DOM elements that won't be transitioned.\n     * @param {function} callback A function which will be called while transition\n     *     is set to 0ms.\n     * @private\n     */\n\n  }, {\n    key: \"_skipTransitions\",\n    value: function _skipTransitions(elements, callback) {\n      var zero = '0ms'; // Save current duration and delay.\n\n      var data = elements.map(function (element) {\n        var style = element.style;\n        var duration = style.transitionDuration;\n        var delay = style.transitionDelay; // Set the duration to zero so it happens immediately\n\n        style.transitionDuration = zero;\n        style.transitionDelay = zero;\n        return {\n          duration: duration,\n          delay: delay\n        };\n      });\n      callback(); // Cause forced synchronous layout.\n\n      elements[0].offsetWidth; // eslint-disable-line no-unused-expressions\n      // Put the duration back\n\n      elements.forEach(function (element, i) {\n        element.style.transitionDuration = data[i].duration;\n        element.style.transitionDelay = data[i].delay;\n      });\n    }\n  }]);\n\n  return Shuffle;\n}(tinyEmitter);\n\nShuffle.ShuffleItem = ShuffleItem;\nShuffle.ALL_ITEMS = 'all';\nShuffle.FILTER_ATTRIBUTE_KEY = 'groups';\n/** @enum {string} */\n\nShuffle.EventType = {\n  LAYOUT: 'shuffle:layout',\n  REMOVED: 'shuffle:removed'\n};\n/** @enum {string} */\n\nShuffle.Classes = Classes;\n/** @enum {string} */\n\nShuffle.FilterMode = {\n  ANY: 'any',\n  ALL: 'all'\n}; // Overrideable options\n\nShuffle.options = {\n  // Initial filter group.\n  group: Shuffle.ALL_ITEMS,\n  // Transition/animation speed (milliseconds).\n  speed: 250,\n  // CSS easing function to use.\n  easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',\n  // e.g. '.picture-item'.\n  itemSelector: '*',\n  // Element or selector string. Use an element to determine the size of columns\n  // and gutters.\n  sizer: null,\n  // A static number or function that tells the plugin how wide the gutters\n  // between columns are (in pixels).\n  gutterWidth: 0,\n  // A static number or function that returns a number which tells the plugin\n  // how wide the columns are (in pixels).\n  columnWidth: 0,\n  // If your group is not json, and is comma delimeted, you could set delimiter\n  // to ','.\n  delimiter: null,\n  // Useful for percentage based heights when they might not always be exactly\n  // the same (in pixels).\n  buffer: 0,\n  // Reading the width of elements isn't precise enough and can cause columns to\n  // jump between values.\n  columnThreshold: 0.01,\n  // Shuffle can be isInitialized with a sort object. It is the same object\n  // given to the sort method.\n  initialSort: null,\n  // By default, shuffle will throttle resize events. This can be changed or\n  // removed.\n  throttle: throttleit,\n  // How often shuffle can be called on resize (in milliseconds).\n  throttleTime: 300,\n  // Transition delay offset for each item in milliseconds.\n  staggerAmount: 15,\n  // Maximum stagger delay in milliseconds.\n  staggerAmountMax: 150,\n  // Whether to use transforms or absolute positioning.\n  useTransforms: true,\n  // Affects using an array with filter. e.g. `filter(['one', 'two'])`. With \"any\",\n  // the element passes the test if any of its groups are in the array. With \"all\",\n  // the element only passes if all groups are in the array.\n  filterMode: Shuffle.FilterMode.ANY,\n  // Attempt to center grid items in each row.\n  isCentered: false,\n  // Whether to round pixel values used in translate(x, y). This usually avoids\n  // blurriness.\n  roundTransforms: true\n};\nShuffle.Point = Point;\nShuffle.Rect = Rect; // Expose for testing. Hack at your own risk.\n\nShuffle.__sorter = sorter;\nShuffle.__getColumnSpan = getColumnSpan;\nShuffle.__getAvailablePositions = getAvailablePositions;\nShuffle.__getShortColumn = getShortColumn;\nShuffle.__getCenteredPositions = getCenteredPositions;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shuffle);\n//# sourceMappingURL=shuffle.esm.js.map\n\n\n//# sourceURL=webpack:///./node_modules/shufflejs/dist/shuffle.esm.js?");

/***/ }),

/***/ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-tilt/lib/vanilla-tilt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar classCallCheck = function (instance, Constructor) {\r\n  if (!(instance instanceof Constructor)) {\r\n    throw new TypeError(\"Cannot call a class as a function\");\r\n  }\r\n};\r\n\r\n/**\r\n * Created by Șandor Sergiu (micku7zu) on 1/27/2017.\r\n * Original idea: https://github.com/gijsroge/tilt.js\r\n * MIT License.\r\n * Version 1.6.1\r\n */\r\n\r\nvar VanillaTilt = function () {\r\n  function VanillaTilt(element) {\r\n    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\r\n    classCallCheck(this, VanillaTilt);\r\n\r\n    if (!(element instanceof Node)) {\r\n      throw \"Can't initialize VanillaTilt because \" + element + \" is not a Node.\";\r\n    }\r\n\r\n    this.width = null;\r\n    this.height = null;\r\n    this.left = null;\r\n    this.top = null;\r\n    this.transitionTimeout = null;\r\n    this.updateCall = null;\r\n\r\n    this.updateBind = this.update.bind(this);\r\n    this.resetBind = this.reset.bind(this);\r\n\r\n    this.element = element;\r\n    this.settings = this.extendSettings(settings);\r\n    this.elementListener = this.getElementListener();\r\n\r\n    this.reverse = this.settings.reverse ? -1 : 1;\r\n\r\n    this.glare = this.isSettingTrue(this.settings.glare);\r\n    this.glarePrerender = this.isSettingTrue(this.settings[\"glare-prerender\"]);\r\n    this.gyroscope = this.isSettingTrue(this.settings.gyroscope);\r\n\r\n    if (this.glare) {\r\n      this.prepareGlare();\r\n    }\r\n\r\n    this.addEventListeners();\r\n  }\r\n\r\n  VanillaTilt.prototype.isSettingTrue = function isSettingTrue(setting) {\r\n    return setting === \"\" || setting === true || setting === 1;\r\n  };\r\n\r\n  /**\r\n   * Method returns element what will be listen mouse events\r\n   * @return {Node}\r\n   */\r\n\r\n\r\n  VanillaTilt.prototype.getElementListener = function getElementListener() {\r\n    if (!this.settings || !this.settings[\"mouse-event-element\"]) {\r\n      return this.element;\r\n    }\r\n\r\n    if (typeof this.settings[\"mouse-event-element\"] === \"string\") {\r\n      var mouseEventElement = document.querySelector(this.settings[\"mouse-event-element\"]);\r\n\r\n      if (mouseEventElement) {\r\n        return mouseEventElement;\r\n      }\r\n    }\r\n\r\n    if (this.settings[\"mouse-event-element\"] instanceof Node) {\r\n      return this.settings[\"mouse-event-element\"];\r\n    }\r\n  };\r\n\r\n  /**\r\n   * Method set listen methods for this.elementListener\r\n   * @return {Node}\r\n   */\r\n\r\n\r\n  VanillaTilt.prototype.addEventListeners = function addEventListeners() {\r\n    this.onMouseEnterBind = this.onMouseEnter.bind(this);\r\n    this.onMouseMoveBind = this.onMouseMove.bind(this);\r\n    this.onMouseLeaveBind = this.onMouseLeave.bind(this);\r\n    this.onWindowResizeBind = this.onWindowResize.bind(this);\r\n    this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);\r\n\r\n    this.elementListener.addEventListener(\"mouseenter\", this.onMouseEnterBind);\r\n    this.elementListener.addEventListener(\"mousemove\", this.onMouseMoveBind);\r\n    this.elementListener.addEventListener(\"mouseleave\", this.onMouseLeaveBind);\r\n\r\n    if (this.glare) {\r\n      window.addEventListener(\"resize\", this.onWindowResizeBind);\r\n    }\r\n\r\n    if (this.gyroscope) {\r\n      window.addEventListener(\"deviceorientation\", this.onDeviceOrientationBind);\r\n    }\r\n  };\r\n\r\n  /**\r\n   * Method remove event listeners from current this.elementListener\r\n   */\r\n\r\n\r\n  VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {\r\n    this.elementListener.removeEventListener(\"mouseenter\", this.onMouseEnterBind);\r\n    this.elementListener.removeEventListener(\"mousemove\", this.onMouseMoveBind);\r\n    this.elementListener.removeEventListener(\"mouseleave\", this.onMouseLeaveBind);\r\n\r\n    if (this.gyroscope) {\r\n      window.removeEventListener(\"deviceorientation\", this.onDeviceOrientationBind);\r\n    }\r\n\r\n    if (this.glare) {\r\n      window.removeEventListener(\"resize\", this.onWindowResizeBind);\r\n    }\r\n  };\r\n\r\n  VanillaTilt.prototype.destroy = function destroy() {\r\n    clearTimeout(this.transitionTimeout);\r\n    if (this.updateCall !== null) {\r\n      cancelAnimationFrame(this.updateCall);\r\n    }\r\n\r\n    this.reset();\r\n\r\n    this.removeEventListeners();\r\n    this.element.vanillaTilt = null;\r\n    delete this.element.vanillaTilt;\r\n\r\n    this.element = null;\r\n  };\r\n\r\n  VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {\r\n    if (event.gamma === null || event.beta === null) {\r\n      return;\r\n    }\r\n\r\n    this.updateElementPosition();\r\n\r\n    var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;\r\n    var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;\r\n\r\n    var degreesPerPixelX = totalAngleX / this.width;\r\n    var degreesPerPixelY = totalAngleY / this.height;\r\n\r\n    var angleX = event.gamma - this.settings.gyroscopeMinAngleX;\r\n    var angleY = event.beta - this.settings.gyroscopeMinAngleY;\r\n\r\n    var posX = angleX / degreesPerPixelX;\r\n    var posY = angleY / degreesPerPixelY;\r\n\r\n    if (this.updateCall !== null) {\r\n      cancelAnimationFrame(this.updateCall);\r\n    }\r\n\r\n    this.event = {\r\n      clientX: posX + this.left,\r\n      clientY: posY + this.top\r\n    };\r\n\r\n    this.updateCall = requestAnimationFrame(this.updateBind);\r\n  };\r\n\r\n  VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {\r\n    this.updateElementPosition();\r\n    this.element.style.willChange = \"transform\";\r\n    this.setTransition();\r\n  };\r\n\r\n  VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {\r\n    if (this.updateCall !== null) {\r\n      cancelAnimationFrame(this.updateCall);\r\n    }\r\n\r\n    this.event = event;\r\n    this.updateCall = requestAnimationFrame(this.updateBind);\r\n  };\r\n\r\n  VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {\r\n    this.setTransition();\r\n\r\n    if (this.settings.reset) {\r\n      requestAnimationFrame(this.resetBind);\r\n    }\r\n  };\r\n\r\n  VanillaTilt.prototype.reset = function reset() {\r\n    this.event = {\r\n      pageX: this.left + this.width / 2,\r\n      pageY: this.top + this.height / 2\r\n    };\r\n\r\n    if (this.element && this.element.style) {\r\n      this.element.style.transform = \"perspective(\" + this.settings.perspective + \"px) \" + \"rotateX(0deg) \" + \"rotateY(0deg) \" + \"scale3d(1, 1, 1)\";\r\n    }\r\n\r\n    if (this.glare) {\r\n      this.glareElement.style.transform = \"rotate(180deg) translate(-50%, -50%)\";\r\n      this.glareElement.style.opacity = \"0\";\r\n    }\r\n  };\r\n\r\n  VanillaTilt.prototype.getValues = function getValues() {\r\n    var x = (this.event.clientX - this.left) / this.width;\r\n    var y = (this.event.clientY - this.top) / this.height;\r\n\r\n    x = Math.min(Math.max(x, 0), 1);\r\n    y = Math.min(Math.max(y, 0), 1);\r\n\r\n    var tiltX = (this.reverse * (this.settings.max / 2 - x * this.settings.max)).toFixed(2);\r\n    var tiltY = (this.reverse * (y * this.settings.max - this.settings.max / 2)).toFixed(2);\r\n    var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);\r\n\r\n    return {\r\n      tiltX: tiltX,\r\n      tiltY: tiltY,\r\n      percentageX: x * 100,\r\n      percentageY: y * 100,\r\n      angle: angle\r\n    };\r\n  };\r\n\r\n  VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {\r\n    var rect = this.element.getBoundingClientRect();\r\n\r\n    this.width = this.element.offsetWidth;\r\n    this.height = this.element.offsetHeight;\r\n    this.left = rect.left;\r\n    this.top = rect.top;\r\n  };\r\n\r\n  VanillaTilt.prototype.update = function update() {\r\n    var values = this.getValues();\r\n\r\n    this.element.style.transform = \"perspective(\" + this.settings.perspective + \"px) \" + \"rotateX(\" + (this.settings.axis === \"x\" ? 0 : values.tiltY) + \"deg) \" + \"rotateY(\" + (this.settings.axis === \"y\" ? 0 : values.tiltX) + \"deg) \" + \"scale3d(\" + this.settings.scale + \", \" + this.settings.scale + \", \" + this.settings.scale + \")\";\r\n\r\n    if (this.glare) {\r\n      this.glareElement.style.transform = \"rotate(\" + values.angle + \"deg) translate(-50%, -50%)\";\r\n      this.glareElement.style.opacity = \"\" + values.percentageY * this.settings[\"max-glare\"] / 100;\r\n    }\r\n\r\n    this.element.dispatchEvent(new CustomEvent(\"tiltChange\", {\r\n      \"detail\": values\r\n    }));\r\n\r\n    this.updateCall = null;\r\n  };\r\n\r\n  /**\r\n   * Appends the glare element (if glarePrerender equals false)\r\n   * and sets the default style\r\n   */\r\n\r\n\r\n  VanillaTilt.prototype.prepareGlare = function prepareGlare() {\r\n    // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.\r\n    if (!this.glarePrerender) {\r\n      // Create glare element\r\n      var jsTiltGlare = document.createElement(\"div\");\r\n      jsTiltGlare.classList.add(\"js-tilt-glare\");\r\n\r\n      var jsTiltGlareInner = document.createElement(\"div\");\r\n      jsTiltGlareInner.classList.add(\"js-tilt-glare-inner\");\r\n\r\n      jsTiltGlare.appendChild(jsTiltGlareInner);\r\n      this.element.appendChild(jsTiltGlare);\r\n    }\r\n\r\n    this.glareElementWrapper = this.element.querySelector(\".js-tilt-glare\");\r\n    this.glareElement = this.element.querySelector(\".js-tilt-glare-inner\");\r\n\r\n    if (this.glarePrerender) {\r\n      return;\r\n    }\r\n\r\n    Object.assign(this.glareElementWrapper.style, {\r\n      \"position\": \"absolute\",\r\n      \"top\": \"0\",\r\n      \"left\": \"0\",\r\n      \"width\": \"100%\",\r\n      \"height\": \"100%\",\r\n      \"overflow\": \"hidden\",\r\n      \"pointer-events\": \"none\"\r\n    });\r\n\r\n    Object.assign(this.glareElement.style, {\r\n      \"position\": \"absolute\",\r\n      \"top\": \"50%\",\r\n      \"left\": \"50%\",\r\n      \"pointer-events\": \"none\",\r\n      \"background-image\": \"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)\",\r\n      \"width\": this.element.offsetWidth * 2 + \"px\",\r\n      \"height\": this.element.offsetWidth * 2 + \"px\",\r\n      \"transform\": \"rotate(180deg) translate(-50%, -50%)\",\r\n      \"transform-origin\": \"0% 0%\",\r\n      \"opacity\": \"0\"\r\n    });\r\n  };\r\n\r\n  VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {\r\n    Object.assign(this.glareElement.style, {\r\n      \"width\": \"\" + this.element.offsetWidth * 2,\r\n      \"height\": \"\" + this.element.offsetWidth * 2\r\n    });\r\n  };\r\n\r\n  VanillaTilt.prototype.onWindowResize = function onWindowResize() {\r\n    this.updateGlareSize();\r\n  };\r\n\r\n  VanillaTilt.prototype.setTransition = function setTransition() {\r\n    var _this = this;\r\n\r\n    clearTimeout(this.transitionTimeout);\r\n    this.element.style.transition = this.settings.speed + \"ms \" + this.settings.easing;\r\n    if (this.glare) this.glareElement.style.transition = \"opacity \" + this.settings.speed + \"ms \" + this.settings.easing;\r\n\r\n    this.transitionTimeout = setTimeout(function () {\r\n      _this.element.style.transition = \"\";\r\n      if (_this.glare) {\r\n        _this.glareElement.style.transition = \"\";\r\n      }\r\n    }, this.settings.speed);\r\n  };\r\n\r\n  /**\r\n   * Method return patched settings of instance\r\n   * @param {boolean} settings.reverse - reverse the tilt direction\r\n   * @param {number} settings.max - max tilt rotation (degrees)\r\n   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets\r\n   * @param {string} settings.easing - Easing on enter/exit\r\n   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..\r\n   * @param {number} settings.speed - Speed of the enter/exit transition\r\n   * @param {boolean} settings.transition - Set a transition on enter/exit\r\n   * @param settings.axis - What axis should be disabled. Can be X or Y\r\n   * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y\r\n   * @param {number} settings.max-glare - the maximum \"glare\" opacity (1 = 100%, 0.5 = 50%)\r\n   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise\r\n   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events\r\n   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit\r\n   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events\r\n   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..\r\n   */\r\n\r\n\r\n  VanillaTilt.prototype.extendSettings = function extendSettings(settings) {\r\n    var defaultSettings = {\r\n      reverse: false,\r\n      max: 35,\r\n      perspective: 1000,\r\n      easing: \"cubic-bezier(.03,.98,.52,.99)\",\r\n      scale: 1,\r\n      speed: 300,\r\n      transition: true,\r\n      axis: null,\r\n      glare: false,\r\n      \"max-glare\": 1,\r\n      \"glare-prerender\": false,\r\n      \"mouse-event-element\": null,\r\n      reset: true,\r\n      gyroscope: true,\r\n      gyroscopeMinAngleX: -45,\r\n      gyroscopeMaxAngleX: 45,\r\n      gyroscopeMinAngleY: -45,\r\n      gyroscopeMaxAngleY: 45\r\n    };\r\n\r\n    var newSettings = {};\r\n    for (var property in defaultSettings) {\r\n      if (property in settings) {\r\n        newSettings[property] = settings[property];\r\n      } else if (this.element.hasAttribute(\"data-tilt-\" + property)) {\r\n        var attribute = this.element.getAttribute(\"data-tilt-\" + property);\r\n        try {\r\n          newSettings[property] = JSON.parse(attribute);\r\n        } catch (e) {\r\n          newSettings[property] = attribute;\r\n        }\r\n      } else {\r\n        newSettings[property] = defaultSettings[property];\r\n      }\r\n    }\r\n\r\n    return newSettings;\r\n  };\r\n\r\n  VanillaTilt.init = function init(elements, settings) {\r\n    if (elements instanceof Node) {\r\n      elements = [elements];\r\n    }\r\n\r\n    if (elements instanceof NodeList) {\r\n      elements = [].slice.call(elements);\r\n    }\r\n\r\n    if (!(elements instanceof Array)) {\r\n      return;\r\n    }\r\n\r\n    elements.forEach(function (element) {\r\n      if (!(\"vanillaTilt\" in element)) {\r\n        element.vanillaTilt = new VanillaTilt(element, settings);\r\n      }\r\n    });\r\n  };\r\n\r\n  return VanillaTilt;\r\n}();\r\n\r\nif (typeof document !== \"undefined\") {\r\n  /* expose the class to window */\r\n  window.VanillaTilt = VanillaTilt;\r\n\r\n  /**\r\n   * Auto load\r\n   */\r\n  VanillaTilt.init(document.querySelectorAll(\"[data-tilt]\"));\r\n}\r\n\r\nmodule.exports = VanillaTilt;\r\n\n\n//# sourceURL=webpack:///./node_modules/vanilla-tilt/lib/vanilla-tilt.js?");

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var shufflejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shufflejs */ \"./node_modules/shufflejs/dist/shuffle.esm.js\");\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vanilla-tilt */ \"./node_modules/vanilla-tilt/lib/vanilla-tilt.js\");\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Gallery =\n/*#__PURE__*/\nfunction () {\n  function Gallery(el) {\n    _classCallCheck(this, Gallery);\n\n    this.el = el;\n    this.shuffle = new shufflejs__WEBPACK_IMPORTED_MODULE_3__[\"default\"](el, {\n      itemSelector: '.gallery__item'\n    });\n    this.addShuffleEventListeners();\n    this._activeFilters = [];\n    this.addFilterButtons();\n  }\n\n  _createClass(Gallery, [{\n    key: \"addShuffleEventListeners\",\n    value: function addShuffleEventListeners() {\n      this.shuffle.on(shufflejs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].EventType.LAYOUT, function (data) {\n        console.log('layout. data:', data);\n      });\n      this.shuffle.on(shufflejs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].EventType.REMOVED, function (data) {\n        console.log('removed. data:', data);\n      });\n    }\n  }, {\n    key: \"addFilterButtons\",\n    value: function addFilterButtons() {\n      var options = document.querySelector('.filter-options');\n\n      if (!options) {\n        return;\n      }\n\n      var filterButtons = Array.from(options.children);\n\n      var onClick = this._handleFilterClick.bind(this);\n\n      filterButtons.forEach(function (button) {\n        button.addEventListener('click', onClick, false);\n      });\n    }\n  }, {\n    key: \"_handleFilterClick\",\n    value: function _handleFilterClick(e) {\n      var btn = e.currentTarget;\n      var isActive = btn.classList.contains('active');\n      var btnGroup = btn.getAttribute('data-group');\n\n      this._removeActiveClassFromChildren(btn.parentNode);\n\n      var filterGroup;\n\n      if (isActive) {\n        btn.classList.remove('active');\n        filterGroup = shufflejs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ALL_ITEMS;\n      } else {\n        btn.classList.add('active');\n        filterGroup = btnGroup;\n      }\n\n      this.shuffle.filter(filterGroup);\n    }\n  }, {\n    key: \"_removeActiveClassFromChildren\",\n    value: function _removeActiveClassFromChildren(parent) {\n      var children = parent.children;\n\n      for (var i = children.length - 1; i >= 0; i--) {\n        children[i].classList.remove('active');\n      }\n    }\n  }]);\n\n  return Gallery;\n}();\n\nObject(_helpers__WEBPACK_IMPORTED_MODULE_5__[\"onDomLoad\"])(function () {\n  var el = document.querySelector('.gallery');\n  window.gallery = new Gallery(el);\n  vanilla_tilt__WEBPACK_IMPORTED_MODULE_4___default.a.init(el.querySelectorAll('.gallery__item .img'), {\n    max: 15,\n    perspective: 2000,\n    glare: true\n  });\n});\n\n//# sourceURL=webpack:///./src/gallery.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: onDomLoad, isMobile, isIE, addELM, addEL, searchFor, addClass, removeClass, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDomLoad\", function() { return onDomLoad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIE\", function() { return isIE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addELM\", function() { return addELM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEL\", function() { return addEL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchFor\", function() { return searchFor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClass\", function() { return toggleClass; });\n/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// on DOM Content Loaded\nfunction onDomLoad(eventFunction) {\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", eventFunction);\n  } else {\n    // `DOMContentLoaded` already fired\n    eventFunction();\n  }\n} // set window variables for later use and resize handling\n\nvar resizeTimeout;\nwindow.addEventListener('resize', function () {\n  // throttle resize for performance\n  clearTimeout(resizeTimeout);\n  resizeTimeout = setTimeout(function () {\n    setIsMobile();\n  }, 100);\n}); // check if current user uses a mobile computer\n\nvar setIsMobile = function setIsMobile() {\n  var isMobile = false;\n\n  if (/Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 992) {\n    isMobile = true;\n  }\n\n  return function () {\n    return isMobile;\n  };\n};\n\nvar isMobile = setIsMobile();\n; // check if browser is ie\n\nfunction isIE() {\n  var ua = navigator.userAgent;\n  /* MSIE used to detect old browsers and Trident used to newer ones*/\n\n  var is_ie = ua.indexOf(\"MSIE \") > -1 || ua.indexOf(\"Trident/\") > -1;\n  return is_ie;\n} // easy addEventListener\n\nfunction addELM(elements, event, callback) {\n  if (Array.isArray(elements)) {\n    elements.forEach(function (item) {\n      addEL(item, event, callback);\n    });\n  } else {\n    addEL(elements, event, callback);\n  }\n} // add Eventlistener function\n\nfunction addEL(nodes, event, callback, fn) {\n  if (NodeList.prototype.isPrototypeOf(nodes)) {\n    // nodes.forEach(function (el) {\n    //   el.addEventListener(event, callback);\n    // })\n    for (var i = 0; i < nodes.length; i++) {\n      nodes[i].addEventListener(event, callback);\n      if (typeof fn === 'function') fn(nodes[i]);\n    }\n  } else if (nodes instanceof Element) {\n    nodes.addEventListener(event, callback);\n  } else {\n    console.log('addEL --> !!ERRROR!! given element is not a dom NODE');\n  }\n}\nfunction searchFor(el, search) {\n  return el.search(search) >= 0;\n}\nfunction addClass(el, className) {\n  el.classList.add(className);\n}\nfunction removeClass(el, className) {\n  el.classList.remove(className);\n}\nfunction toggleClass(el, className) {\n  el.classList.toggle(className);\n}\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ })

/******/ });