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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar accordion = function accordion() {\n  var items = document.querySelectorAll('.questions__item');\n\n  _toConsumableArray(items).forEach(function (item) {\n    var button = item.querySelector('.questions__heading');\n    button.addEventListener('click', function (e) {\n      _toConsumableArray(items).forEach(function (item) {\n        if (item.matches('.questions__item--active') && item !== e.target.closest('.questions__item')) {\n          item.classList.remove('questions__item--active');\n        }\n      });\n\n      item.classList.toggle('questions__item--active');\n    });\n  });\n};\n\naccordion();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJhY2NvcmRpb24iLCJpdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibWF0Y2hlcyIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJBQUFhOzs7Ozs7Ozs7Ozs7OztBQUViLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdkIsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixDQUFkOztBQUVBLHFCQUFLRixLQUFMLEVBQWFHLE9BQWIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQzVCLFFBQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxhQUFMLENBQW1CLHFCQUFuQixDQUFmO0FBRUFELFVBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3JDLHlCQUFLUixLQUFMLEVBQWFHLE9BQWIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQzVCLFlBQUlBLElBQUksQ0FBQ0ssT0FBTCxDQUFhLDBCQUFiLEtBQTRDTCxJQUFJLEtBQUtJLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxPQUFULENBQWlCLGtCQUFqQixDQUF6RCxFQUErRjtBQUM5RlAsY0FBSSxDQUFDUSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IseUJBQXRCO0FBQ0E7QUFDRCxPQUpEOztBQU1BVCxVQUFJLENBQUNRLFNBQUwsQ0FBZUUsTUFBZixDQUFzQix5QkFBdEI7QUFDQSxLQVJEO0FBU0EsR0FaRDtBQWFBLENBaEJEOztBQWlCQWYsU0FBUyIsImZpbGUiOiIuL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGFjY29yZGlvbiA9ICgpID0+IHtcclxuXHRjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWVzdGlvbnNfX2l0ZW0nKTtcclxuXHJcblx0WyAuLi5pdGVtcyBdLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRjb25zdCBidXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbnNfX2hlYWRpbmcnKTtcclxuXHJcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRcdFx0WyAuLi5pdGVtcyBdLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubWF0Y2hlcygnLnF1ZXN0aW9uc19faXRlbS0tYWN0aXZlJykgJiYgaXRlbSAhPT0gZS50YXJnZXQuY2xvc2VzdCgnLnF1ZXN0aW9uc19faXRlbScpKSB7XHJcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3F1ZXN0aW9uc19faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgncXVlc3Rpb25zX19pdGVtLS1hY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG5hY2NvcmRpb24oKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });