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
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })), "Transporte Pegasus")), __jsx("div", {
    className: "block lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  })))), __jsx("div", {
    id: "menu",
    className: "w-full block flex-grow  lg:flex lg:items-center lg:w-auto hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "text-sm lg:flex-grow justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 69,
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
      lineNumber: 79,
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
      lineNumber: 89,
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
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Galer\xEDa"), __jsx("a", {
    href: "",
    className: "block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Servicios")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Login")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.94db1240efacc196fd42.hot-update.js.map