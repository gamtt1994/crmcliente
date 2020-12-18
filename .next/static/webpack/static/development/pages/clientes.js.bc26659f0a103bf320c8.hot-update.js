webpackHotUpdate("static\\development\\pages\\clientes.js",{

/***/ "./components/cliente.js":
/*!*******************************!*\
  !*** ./components/cliente.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




var _this = undefined,
    _jsxFileName = "D:\\Descargas\\Crmcliente\\Crmcliente\\components\\cliente.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query obtenerClientesVendedor {\n    obtenerClientesVendedor {\n      id\n      dni\n      nombre\n      apellido\n      empresa\n      email\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation eliminarCliente($id: ID!) {\n    eliminarCliente(id: $id)\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ELIMINAR_CLIENTE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());
var OBTENER_CLIENTES_USUARIOS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject2());

var Cliente = function Cliente(_ref) {
  var cliente = _ref.cliente,
      index = _ref.index;
  var nombre = cliente.nombre,
      apellido = cliente.apellido,
      empresa = cliente.empresa,
      email = cliente.email,
      id = cliente.id;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(ELIMINAR_CLIENTE, {
    update: function update(cache) {
      //obtener una copia del objeto del cache
      var _cache$readQuery = cache.readQuery({
        query: OBTENER_CLIENTES_USUARIOS
      }),
          obtenerClientesVendedor = _cache$readQuery.obtenerClientesVendedor;

      cache.writeQuery({
        query: OBTENER_CLIENTES_USUARIOS,
        data: {
          obtenerClientesVendedor: obtenerClientesVendedor.filter(function (clienteActual) {
            return clienteActual.id !== id;
          })
        }
      });
    }
  }),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      eliminarCliente = _useMutation2[0];

  var confirmarEliminarCliente = function confirmarEliminarCliente(id) {
    console.log(id);
    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
      title: "Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(function _callee(result) {
      var _await$eliminarClient, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!result.isConfirmed) {
                _context.next = 12;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(eliminarCliente({
                variables: {
                  id: id
                }
              }));

            case 4:
              _await$eliminarClient = _context.sent;
              data = _await$eliminarClient.data;
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Eliminado!", data.eliminarCliente, "success");
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 9]], Promise);
    });
  };

  var editarCliente = function editarCliente(id) {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
      pathname: "/editarcliente/[id]",
      query: {
        id: id
      }
    });
  };

  return __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx("td", {
    className: "border px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, " ", index), __jsx("td", {
    className: "border px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, nombre, " ", apellido), __jsx("td", {
    className: "border px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, " ", empresa), __jsx("td", {
    className: "border px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, " ", email), __jsx("td", {
    className: "border px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: "flex justify-center items-center bg-blue-800 text-white rounded shadow-box px-4 py-2",
    onClick: function onClick() {
      return editarCliente(id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }))), __jsx("button", {
    type: "button",
    className: "flex justify-center items-center bg-red-800 text-white rounded shadow-box  px-4 py-2 ml-5",
    onClick: function onClick() {
      return confirmarEliminarCliente(id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cliente);

/***/ })

})
//# sourceMappingURL=clientes.js.bc26659f0a103bf320c8.hot-update.js.map