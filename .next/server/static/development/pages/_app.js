module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/localeProvider.js":
/*!************************************!*\
  !*** ./contexts/localeProvider.js ***!
  \************************************/
/*! exports provided: default, useLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocale", function() { return useLocale; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yiyi/projects/just-heard/contexts/localeProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getCityName(slug) {
  if (!slug) {
    return null;
  }

  const words = slug.split('-');
  const capitalizedWords = words.map(word => {
    return capitalizeFirstLetter(word);
  });
  return capitalizedWords.join(' ');
}

const LocaleContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  citySlug: null,
  cityName: null,
  cityBrand: null
});
function LocaleProvider({
  children
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    slug
  } = router.query;
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    citySlug: slug,
    cityName: getCityName(slug),
    cityBrand: `Example ${getCityName(slug)}`
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (slug) {
      setValue({
        citySlug: slug,
        cityName: getCityName(slug),
        cityBrand: `Example ${getCityName(slug)}`
      });
    }
  }, [slug]);
  return __jsx(LocaleContext.Provider, {
    value: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children);
}
const useLocale = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LocaleContext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_server_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-server-context */ "next-server-context");
/* harmony import */ var next_server_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_server_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _contexts_localeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/localeProvider */ "./contexts/localeProvider.js");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../site */ "./site.js");
var _jsxFileName = "/Users/yiyi/projects/just-heard/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []); // useEffect(() => {
  //   const handleRouteChange = () => {
  //     gtag('config', 'G-21CHQCQEL3', {'page_path': location.pathname})
  //   }
  //
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [])

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, _site__WEBPACK_IMPORTED_MODULE_9__["BRAND_NAME"]), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@600&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(_contexts_localeProvider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_server_context__WEBPACK_IMPORTED_MODULE_4__["withServerContext"])(MyApp));
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./site.js":
/*!*****************!*\
  !*** ./site.js ***!
  \*****************/
/*! exports provided: BRAND_NAME, COOKIE_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAND_NAME", function() { return BRAND_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COOKIE_NAMES", function() { return COOKIE_NAMES; });
const BRAND_NAME = 'Example';
const COOKIE_NAMES = {
  CITY: 'city'
};

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);


const colors = {
  primary: {
    main: '#2ec4b6',
    readable: '#27a599'
  }
}; // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: colors.primary.readable
    },
    secondary: {
      main: '#ff9f1c'
    },
    error: {
      main: '#b81427'
    },
    background: {
      default: '#fff',
      light: '#f8f9fa',
      primary: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(colors.primary.main, 0.1)
    },
    border: {
      light: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])('#eee', 0.6)
    },
    color: {
      tiffanyBlue: colors.primary.main,
      richBlack: '#011627'
    }
  },
  typography: {
    h6: {
      lineHeight: 1.25,
      marginBottom: '5px'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])('#eee', 0.5),
        '&:hover': {
          backgroundColor: '#eee'
        }
      }
    },
    MuiChip: {
      root: {
        color: colors.primary.readable,
        fontWeight: 500,
        backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(colors.primary.main, 0.1),
        '&:focus': {
          backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(colors.primary.main, 0.2)
        },
        '&:hover': {
          backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(colors.primary.main, 0.2)
        }
      },
      deleteIcon: {
        color: colors.primary.main
      },
      deletable: {
        '&:focus': {
          backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(colors.primary.main, 0.2)
        },
        '&:hover': {
          backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(colors.primary.main, 0.2)
        }
      }
    },
    MuiCardActionArea: {
      root: {
        '&:hover': {
          backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(colors.primary.main, 0.03)
        }
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "next-server-context":
/*!**************************************!*\
  !*** external "next-server-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server-context");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvbG9jYWxlUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlLmpzIiwid2VicGFjazovLy8uL3RoZW1lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlcnZlci1jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZ2V0Q2l0eU5hbWUiLCJzbHVnIiwid29yZHMiLCJzcGxpdCIsImNhcGl0YWxpemVkV29yZHMiLCJtYXAiLCJ3b3JkIiwiam9pbiIsIkxvY2FsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY2l0eVNsdWciLCJjaXR5TmFtZSIsImNpdHlCcmFuZCIsIkxvY2FsZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUxvY2FsZSIsInVzZUNvbnRleHQiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiQlJBTkRfTkFNRSIsInRoZW1lIiwid2l0aFNlcnZlckNvbnRleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJDT09LSUVfTkFNRVMiLCJDSVRZIiwiY29sb3JzIiwicHJpbWFyeSIsIm1haW4iLCJyZWFkYWJsZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsImVycm9yIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJsaWdodCIsImZhZGUiLCJib3JkZXIiLCJjb2xvciIsInRpZmZhbnlCbHVlIiwicmljaEJsYWNrIiwidHlwb2dyYXBoeSIsImg2IiwibGluZUhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm92ZXJyaWRlcyIsIk11aUJ1dHRvbiIsImNvbnRhaW5lZCIsImJhY2tncm91bmRDb2xvciIsIk11aUNoaXAiLCJyb290IiwiZm9udFdlaWdodCIsImRlbGV0ZUljb24iLCJkZWxldGFibGUiLCJNdWlDYXJkQWN0aW9uQXJlYSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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SUFEVztFQWpDVjtBQTlCZ0IsQ0FBRCxDQUE1QjtBQXlFZVgsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkEsMEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxufVxuXG5mdW5jdGlvbiBnZXRDaXR5TmFtZShzbHVnKSB7XG4gIGlmICghc2x1Zykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCB3b3JkcyA9IHNsdWcuc3BsaXQoJy0nKVxuICBjb25zdCBjYXBpdGFsaXplZFdvcmRzID0gd29yZHMubWFwKHdvcmQgPT4ge1xuICAgIHJldHVybiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIod29yZClcbiAgfSlcblxuICByZXR1cm4gY2FwaXRhbGl6ZWRXb3Jkcy5qb2luKCcgJylcbn1cblxuY29uc3QgTG9jYWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBjaXR5U2x1ZzogbnVsbCxcbiAgY2l0eU5hbWU6IG51bGwsXG4gIGNpdHlCcmFuZDogbnVsbCxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2FsZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcbiAgICBjaXR5U2x1Zzogc2x1ZyxcbiAgICBjaXR5TmFtZTogZ2V0Q2l0eU5hbWUoc2x1ZyksXG4gICAgY2l0eUJyYW5kOiBgRXhhbXBsZSAke2dldENpdHlOYW1lKHNsdWcpfWAsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2x1Zykge1xuICAgICAgc2V0VmFsdWUoe1xuICAgICAgICBjaXR5U2x1Zzogc2x1ZyxcbiAgICAgICAgY2l0eU5hbWU6IGdldENpdHlOYW1lKHNsdWcpLFxuICAgICAgICBjaXR5QnJhbmQ6IGBFeGFtcGxlICR7Z2V0Q2l0eU5hbWUoc2x1Zyl9YCxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbc2x1Z10pXG5cbiAgcmV0dXJuIChcbiAgICA8TG9jYWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTG9jYWxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlTG9jYWxlID0gKCkgPT4gdXNlQ29udGV4dChMb2NhbGVDb250ZXh0KVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB3aXRoU2VydmVyQ29udGV4dCB9IGZyb20gJ25leHQtc2VydmVyLWNvbnRleHQnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJ1xuaW1wb3J0IExvY2FsZVByb3ZpZGVyIGZyb20gJy4uL2NvbnRleHRzL2xvY2FsZVByb3ZpZGVyJ1xuaW1wb3J0IHsgQlJBTkRfTkFNRSB9IGZyb20gJy4uL3NpdGUnXG5cbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcykge1xuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xuICAvLyAgICAgZ3RhZygnY29uZmlnJywgJ0ctMjFDSFFDUUVMMycsIHsncGFnZV9wYXRoJzogbG9jYXRpb24ucGF0aG5hbWV9KVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gIC8vXG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gIC8vICAgfVxuICAvLyB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+eyBCUkFORF9OQU1FIH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVlhbm9uZStLYWZmZWVzYXR6OndnaHRANjAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxMb2NhbGVQcm92aWRlcj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTG9jYWxlUHJvdmlkZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VydmVyQ29udGV4dChNeUFwcClcblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn0iLCJleHBvcnQgY29uc3QgQlJBTkRfTkFNRSA9ICdFeGFtcGxlJ1xuXG5leHBvcnQgY29uc3QgQ09PS0lFX05BTUVTID0ge1xuXHRDSVRZOiAnY2l0eScsXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCB7IGZhZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcidcblxuY29uc3QgY29sb3JzID0ge1xuICBwcmltYXJ5OiB7XG4gICAgbWFpbjogJyMyZWM0YjYnLFxuICAgIHJlYWRhYmxlOiAnIzI3YTU5OSdcbiAgfVxufVxuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogY29sb3JzLnByaW1hcnkucmVhZGFibGUsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjZmY5ZjFjJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2I4MTQyNycsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgICBsaWdodDogJyNmOGY5ZmEnLFxuICAgICAgcHJpbWFyeTogZmFkZShjb2xvcnMucHJpbWFyeS5tYWluLCAwLjEpXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIGxpZ2h0OiBmYWRlKCcjZWVlJywgMC42KSxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0aWZmYW55Qmx1ZTogY29sb3JzLnByaW1hcnkubWFpbixcbiAgICAgIHJpY2hCbGFjazogJyMwMTE2MjcnLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBoNjoge1xuICAgICAgbGluZUhlaWdodDogMS4yNSxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgfSxcbiAgfSxcbiAgb3ZlcnJpZGVzOiB7XG4gICAgTXVpQnV0dG9uOiB7XG5cdFx0XHRjb250YWluZWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKCcjZWVlJywgMC41KSxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlDaGlwOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMucHJpbWFyeS5yZWFkYWJsZSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLnByaW1hcnkubWFpbiwgMC4xKSxcbiAgICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKGNvbG9ycy5wcmltYXJ5Lm1haW4sIDAuMiksXG4gICAgICAgIH0sXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMucHJpbWFyeS5tYWluLCAwLjIpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUljb246IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5wcmltYXJ5Lm1haW4sXG4gICAgICB9LFxuICAgICAgZGVsZXRhYmxlOiB7XG4gICAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMucHJpbWFyeS5tYWluLCAwLjIpLFxuICAgICAgICB9LFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLnByaW1hcnkubWFpbiwgMC4yKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlDYXJkQWN0aW9uQXJlYToge1xuICAgICAgcm9vdDoge1xuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLnByaW1hcnkubWFpbiwgMC4wMyksXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlcnZlci1jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=