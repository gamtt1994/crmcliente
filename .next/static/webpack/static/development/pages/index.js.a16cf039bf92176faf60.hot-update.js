webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/interfas/header/Header.js":
/*!**********************************************!*\
  !*** ./components/interfas/header/Header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\Descargas\\Crmcliente\\Crmcliente\\components\\interfas\\header\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var login = function login() {
    router.push("/login");
  };

  var presionarclick = function presionarclick() {
    menu.classList.toggle("hidden");
  };

  var inicio = function inicio() {
    router.push("/");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: "flex items-center justify-between flex-wrap  p-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex items-center flex-shrink-0 text-white mr-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("svg", {
    className: "fill-current h-8 w-8 mr-2",
    width: "54",
    height: "54",
    viewBox: "0 0 54 54",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx("span", {
    className: "font-semibold text-xl text-green-500 tracking-tight flex flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("svg", {
    className: "w-12 h-8 text-green-600 ",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
    clipRule: "evenodd",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  })), "Pegasus")), __jsx("div", {
    className: "block lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("button", {
    id: "boton",
    onClick: function onClick() {
      return presionarclick();
    },
    className: "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  })))), __jsx("div", {
    id: "menu",
    className: "w-full block flex-grow  lg:flex lg:items-center lg:w-auto hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "text-sm lg:flex-grow justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: function onClick() {
      return inicio();
    },
    to: "inicio",
    smooth: true,
    duration: 1000,
    href: "",
    className: "block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Inicio"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "quienes",
    onClick: function onClick() {
      return inicio();
    },
    smooth: true,
    duration: 1000,
    href: "",
    className: "block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Quienes Somos"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "servicios",
    smooth: true,
    duration: 1000,
    href: "",
    className: "block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Servicios"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "quienes",
    smooth: true,
    duration: 1000,
    href: "",
    className: "block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "Galer\xEDa"), __jsx("a", {
    href: "",
    className: "block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "Servicios")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "",
    onClick: function onClick() {
      return login();
    },
    href: "",
    className: " bg-green-500 inline-block text-sm px-4 py-2 leading-none border\r rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Login")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.a16cf039bf92176faf60.hot-update.js.map