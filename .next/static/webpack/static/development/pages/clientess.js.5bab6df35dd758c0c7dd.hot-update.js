webpackHotUpdate("static\\development\\pages\\clientess.js",{

/***/ "./pages/clientess.js":
/*!****************************!*\
  !*** ./pages/clientess.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);




var _this = undefined,
    _jsxFileName = "D:\\Descargas\\Crmcliente\\Crmcliente\\pages\\clientess.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query obtenerClientesVendedor {\n    obtenerClientesVendedor {\n      id\n      nombre\n      apellido\n      empresa\n      email\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation eliminarCliente($id: ID!) {\n    eliminarCliente(id: $id)\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query obtenerClientesVendedor {\n    obtenerClientesVendedor {\n      id\n      nombre\n      apellido\n      empresa\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var OBTENER_CLIENTES_USUARIOS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());
var ELIMINAR_CLIENTE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject2());
var OBTENER_CLIENTES_USUARIO = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject3());

var Clientess = function Clientess() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(OBTENER_CLIENTES_USUARIOS),
      data = _useQuery.data,
      loading = _useQuery.loading,
      client = _useQuery.client;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(ELIMINAR_CLIENTE, {
    update: function update(cache) {
      var _cache$readQuery = cache.readQuery({
        query: OBTENER_CLIENTES_USUARIO
      }),
          obtenerClientesVendedor = _cache$readQuery.obtenerClientesVendedor;

      cache.writeQuery({
        query: OBTENER_CLIENTES_USUARIO,
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

  var confirmarEliminarCliente = function confirmarEliminarCliente(rowData) {
    var id = rowData.id;
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
      title: "¿Deseas eliminar a este cliente?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, Cancelar"
    }).then(function _callee(result) {
      var _await$eliminarClient, _data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!result.value) {
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
              _data = _await$eliminarClient.data;
              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Eliminado!", _data.eliminarCliente, "success");
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

  var editarCliente = function editarCliente(rowData) {
    var id = rowData.id;
    router.push({
      pathname: "/editarcliente/[id]",
      query: {
        id: id
      }
    });
  };

  if (loading) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: "text-2xl text-gray-800 font-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }, "Clientes"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/nuevocliente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, "Nuevo Cliente")), __jsx("table", {
      className: "table-auto shadow-md mt-10 w-full w-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }, __jsx("thead", {
      className: "bg-gray-800",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, __jsx("tr", {
      className: "text-white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, __jsx("th", {
      className: "w-1/5 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, " Nombre"), __jsx("th", {
      className: "w-1/5 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, " Empresa"), __jsx("th", {
      className: "w-1/5 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, " Email"), __jsx("th", {
      className: "w-1/5 py-2",
      colSpan: "2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, "Acci\xF3n"))), __jsx("tbody", {
      className: "border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, __jsx("tr", {
      className: "animate-pulse  space-x-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 19
      }
    }))), __jsx("tr", {
      className: "animate-pulse  space-x-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }))), __jsx("tr", {
      className: "animate-pulse  space-x-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 19
      }
    })))))));
  }

  if (!data.obtenerClientesVendedor) {
    client.clearStore();
    router.push("/");
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 12
      }
    }, "Loading...");
  }

  var editable = JSON.parse(JSON.stringify(data));
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, "Clientes"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/nuevocliente",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, "Nuevo Cliente")), __jsx("div", {
    className: "overflow-x-scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_8___default.a, {
    columns: [{
      title: "Nombre",
      field: "nombre"
    }, {
      title: "Apellido",
      field: "apellido"
    }, {
      title: "Empresa",
      field: "empresa"
    }, {
      title: "Email",
      field: "email"
    }],
    data: editable.obtenerClientesVendedor,
    actions: [function (rowData) {
      return {
        icon: "edit",
        tooltip: "edit User",
        onClick: function onClick() {
          return editarCliente(rowData);
        }
      };
    }, function (rowData) {
      return {
        icon: "delete",
        tooltip: "Delete User",
        onClick: function onClick() {
          return confirmarEliminarCliente(rowData);
        }
      };
    }],
    title: "Clientes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Clientess);

/***/ })

})
//# sourceMappingURL=clientess.js.5bab6df35dd758c0c7dd.hot-update.js.map