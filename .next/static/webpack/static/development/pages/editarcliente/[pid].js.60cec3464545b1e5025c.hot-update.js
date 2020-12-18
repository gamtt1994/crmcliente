webpackHotUpdate("static\\development\\pages\\editarcliente\\[pid].js",{

/***/ "./pages/editarcliente/[pid].js":
/*!**************************************!*\
  !*** ./pages/editarcliente/[pid].js ***!
  \**************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);




var _this = undefined,
    _jsxFileName = "D:\\Descargas\\Crmcliente\\Crmcliente\\pages\\editarcliente\\[pid].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation actualizarCliente($id: ID!, $input: ClienteInput) {\n    actualizarCliente(id: $id, input: $input) {\n      nombre\n      email\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query obtenerCliente($id: ID!) {\n    obtenerCliente(id: $id) {\n      nombre\n      apellido\n      email\n      telefono\n      empresa\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var OBTENER_CLIENTE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());
var ACTUALIZAR_CLIENTE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject2());

var EditarCliente = function EditarCliente() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(OBTENER_CLIENTE, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(ACTUALIZAR_CLIENTE),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      actualizarCliente = _useMutation2[0];

  var schemaValidacion = yup__WEBPACK_IMPORTED_MODULE_8__["object"]({
    nombre: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("El nombre del cliente es obligatorio"),
    apellido: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("El apellido del cliente es obligatorio"),
    empresa: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("El campo empresa  es obligatorio"),
    email: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().email("Email no válido").required("El email del cliente es obligatorio")
  });

  if (loading) {
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: "text-2xl text-gray-800 font-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, "Editar Cliente"), __jsx("div", {
      className: " animate-pulse  flex justify-center mt-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "w-full max-w-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, __jsx("form", {
      className: "bg-white shadow-md px-8 pt-6 pb-8 mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "nombre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, "Nombre"), __jsx("input", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "nombre",
      type: "text",
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "apellido",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, "Apellido"), __jsx("input", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "apellido",
      type: "text",
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "empresa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, "Empresa"), __jsx("input", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "empresa",
      type: "text",
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, "Email"), __jsx("input", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "email",
      type: "text",
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "telefono",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, "Tel\xE9fono"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "telefono",
      type: "tel",
      placeholder: "Tel\xE9fono Cliente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    })), __jsx("input", {
      type: "submit",
      className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
      value: "Editar Cliente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 15
      }
    })), "\xA0")));
  }

  var obtenerCliente = data.obtenerCliente;

  var actualizarInfoCliente = function actualizarInfoCliente(valores) {
    var nombre, apellido, empresa, email, telefono, _await$actualizarClie, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function actualizarInfoCliente$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nombre = valores.nombre, apellido = valores.apellido, empresa = valores.empresa, email = valores.email, telefono = valores.telefono;
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(actualizarCliente({
              variables: {
                id: id,
                input: {
                  nombre: nombre,
                  apellido: apellido,
                  empresa: empresa,
                  email: email,
                  telefono: telefono
                }
              }
            }));

          case 4:
            _await$actualizarClie = _context.sent;
            _data = _await$actualizarClie.data;
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Actualizado", "El cliente se actualizó correctamente", "success");
            router.push("/clientes");
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 10]], Promise);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, "Editar Cliente"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    validationSchema: schemaValidacion,
    enableReinitialize: true,
    initialValues: obtenerCliente,
    onSubmit: function onSubmit(valores) {
      actualizarInfoCliente(valores);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, function (props) {
    return __jsx("form", {
      className: "bg-white shadow-md px-8 pt-6 pb-8 mb-4",
      onSubmit: props.handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 19
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "nombre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    }, "Nombre"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "nombre",
      type: "text",
      placeholder: "Nombre Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.nombre,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 21
      }
    })), props.touched.nombre && props.errors.nombre ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 23
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 23
      }
    }, props.errors.nombre)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 19
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "apellido",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 21
      }
    }, "Apellido"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "apellido",
      type: "text",
      placeholder: "Apellido Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.apellido,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }
    })), props.touched.apellido && props.errors.apellido ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 23
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 23
      }
    }, props.errors.apellido)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 19
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "empresa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 21
      }
    }, "Empresa"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "empresa",
      type: "text",
      placeholder: "Empresa Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.empresa,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 21
      }
    })), props.touched.empresa && props.errors.empresa ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 23
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 23
      }
    }, props.errors.empresa)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 19
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 21
      }
    }, "Email"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "email",
      type: "email",
      placeholder: "Email Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.email,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 21
      }
    })), props.touched.email && props.errors.email ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 23
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 23
      }
    }, props.errors.email)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 19
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "telefono",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 21
      }
    }, "Tel\xE9fono"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "telefono",
      type: "tel",
      placeholder: "Tel\xE9fono Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.telefono,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 21
      }
    })), __jsx("input", {
      type: "submit",
      className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
      value: "Editar Cliente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 19
      }
    }));
  }), "\xA0")));
};

/* harmony default export */ __webpack_exports__["default"] = (EditarCliente);

/***/ })

})
//# sourceMappingURL=[pid].js.60cec3464545b1e5025c.hot-update.js.map