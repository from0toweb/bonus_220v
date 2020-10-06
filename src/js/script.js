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
eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar accordion = function accordion() {\n  var items = document.querySelectorAll('.questions__item');\n\n  _toConsumableArray(items).forEach(function (item) {\n    var button = item.querySelector('.questions__heading');\n    button.addEventListener('click', function (e) {\n      _toConsumableArray(items).forEach(function (item) {\n        if (item.matches('.questions__item--active') && item !== e.target.closest('.questions__item')) {\n          item.classList.remove('questions__item--active');\n        }\n      });\n\n      item.classList.toggle('questions__item--active');\n    });\n  });\n};\n\naccordion();\n\nvar tabs = function tabs() {\n  var buttons = document.querySelectorAll('.spending__button');\n  var contentBlocks = document.querySelectorAll('.spending__line');\n  buttons.forEach(function (item, index) {\n    item.addEventListener('click', function () {\n      contentBlocks.forEach(function (elem, i) {\n        if (index !== i) {\n          elem.classList.remove('spending__line--visible');\n          buttons[i].classList.remove('button--active');\n        } else {\n          elem.classList.add('spending__line--visible');\n          buttons[i].classList.add('button--active');\n        }\n      });\n    });\n  });\n};\n\ntabs();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJhY2NvcmRpb24iLCJpdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibWF0Y2hlcyIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGUiLCJ0YWJzIiwiYnV0dG9ucyIsImNvbnRlbnRCbG9ja3MiLCJpbmRleCIsImVsZW0iLCJpIiwiYWRkIl0sIm1hcHBpbmdzIjoiQUFBYTs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3ZCLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBZDs7QUFFQSxxQkFBS0YsS0FBTCxFQUFhRyxPQUFiLENBQXFCLFVBQUFDLElBQUksRUFBSTtBQUM1QixRQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsYUFBTCxDQUFtQixxQkFBbkIsQ0FBZjtBQUVBRCxVQUFNLENBQUNFLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUFDLENBQUMsRUFBSTtBQUNyQyx5QkFBS1IsS0FBTCxFQUFhRyxPQUFiLENBQXFCLFVBQUFDLElBQUksRUFBSTtBQUM1QixZQUFJQSxJQUFJLENBQUNLLE9BQUwsQ0FBYSwwQkFBYixLQUE0Q0wsSUFBSSxLQUFLSSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixrQkFBakIsQ0FBekQsRUFBK0Y7QUFDOUZQLGNBQUksQ0FBQ1EsU0FBTCxDQUFlQyxNQUFmLENBQXNCLHlCQUF0QjtBQUNBO0FBQ0QsT0FKRDs7QUFNQVQsVUFBSSxDQUFDUSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IseUJBQXRCO0FBQ0EsS0FSRDtBQVNBLEdBWkQ7QUFhQSxDQWhCRDs7QUFpQkFmLFNBQVM7O0FBRVQsSUFBTWdCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEIsTUFBTUMsT0FBTyxHQUFHZixRQUFRLENBQUNDLGdCQUFULENBQTBCLG1CQUExQixDQUFoQjtBQUNBLE1BQU1lLGFBQWEsR0FBR2hCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQXRCO0FBRUFjLFNBQU8sQ0FBQ2IsT0FBUixDQUFnQixVQUFDQyxJQUFELEVBQU9jLEtBQVAsRUFBaUI7QUFDaENkLFFBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNwQ1UsbUJBQWEsQ0FBQ2QsT0FBZCxDQUFzQixVQUFDZ0IsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDbEMsWUFBSUYsS0FBSyxLQUFLRSxDQUFkLEVBQWlCO0FBQ2hCRCxjQUFJLENBQUNQLFNBQUwsQ0FBZUMsTUFBZixDQUFzQix5QkFBdEI7QUFDQUcsaUJBQU8sQ0FBQ0ksQ0FBRCxDQUFQLENBQVdSLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLGdCQUE1QjtBQUNBLFNBSEQsTUFHTztBQUNOTSxjQUFJLENBQUNQLFNBQUwsQ0FBZVMsR0FBZixDQUFtQix5QkFBbkI7QUFDQUwsaUJBQU8sQ0FBQ0ksQ0FBRCxDQUFQLENBQVdSLFNBQVgsQ0FBcUJTLEdBQXJCLENBQXlCLGdCQUF6QjtBQUNBO0FBQ0QsT0FSRDtBQVNBLEtBVkQ7QUFXQSxHQVpEO0FBYUEsQ0FqQkQ7O0FBa0JBTixJQUFJIiwiZmlsZSI6Ii4vc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgYWNjb3JkaW9uID0gKCkgPT4ge1xyXG5cdGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1ZXN0aW9uc19faXRlbScpO1xyXG5cclxuXHRbIC4uLml0ZW1zIF0uZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdGNvbnN0IGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnF1ZXN0aW9uc19faGVhZGluZycpO1xyXG5cclxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHRbIC4uLml0ZW1zIF0uZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbS5tYXRjaGVzKCcucXVlc3Rpb25zX19pdGVtLS1hY3RpdmUnKSAmJiBpdGVtICE9PSBlLnRhcmdldC5jbG9zZXN0KCcucXVlc3Rpb25zX19pdGVtJykpIHtcclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncXVlc3Rpb25zX19pdGVtLS1hY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdxdWVzdGlvbnNfX2l0ZW0tLWFjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcbmFjY29yZGlvbigpO1xyXG5cclxuY29uc3QgdGFicyA9ICgpID0+IHtcclxuXHRjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZW5kaW5nX19idXR0b24nKTtcclxuXHRjb25zdCBjb250ZW50QmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZW5kaW5nX19saW5lJyk7XHJcblxyXG5cdGJ1dHRvbnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnRlbnRCbG9ja3MuZm9yRWFjaCgoZWxlbSwgaSkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbmRleCAhPT0gaSkge1xyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzcGVuZGluZ19fbGluZS0tdmlzaWJsZScpO1xyXG5cdFx0XHRcdFx0YnV0dG9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tLWFjdGl2ZScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoJ3NwZW5kaW5nX19saW5lLS12aXNpYmxlJyk7XHJcblx0XHRcdFx0XHRidXR0b25zW2ldLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0tYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG50YWJzKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });