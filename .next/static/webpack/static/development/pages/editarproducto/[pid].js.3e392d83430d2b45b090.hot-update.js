webpackHotUpdate("static\\development\\pages\\editarproducto\\[pid].js",{

/***/ "./components/Layout.js":
false,

/***/ "./pages/editarproducto/[pid].js":
/*!***************************************!*\
  !*** ./pages/editarproducto/[pid].js ***!
  \***************************************/
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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);




var _this = undefined,
    _jsxFileName = "D:\\Descargas\\Crmcliente\\Crmcliente\\pages\\editarproducto\\[pid].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation actualizarProducto($id: ID!, $input: ProductoInput) {\n    actualizarProducto(id: $id, input: $input) {\n      id\n      nombre\n      existencia\n      precio\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query obtenerProducto($id: ID!) {\n    obtenerProducto(id: $id) {\n      nombre\n      precio\n      existencia\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var OBTENER_PRODUCTO = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());
var ACTUALIZAR_PRODUCTO = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject2());

var EditarProducto = function EditarProducto() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(OBTENER_PRODUCTO, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(ACTUALIZAR_PRODUCTO),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      actualizarProducto = _useMutation2[0];

  var schemaValidacion = yup__WEBPACK_IMPORTED_MODULE_8__["object"]({
    nombre: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("El nombre del producto es obligatorio"),
    existencia: yup__WEBPACK_IMPORTED_MODULE_8__["number"]().required("Agrega la cantidad disponible").positive("No se aceptan números negativos").integer("La existencia deben ser números enteros"),
    precio: yup__WEBPACK_IMPORTED_MODULE_8__["number"]().required("El precio es obligatorio").positive("No se aceptan números negativos")
  });

  if (loading) {
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: "text-2xl text-gray-800 font-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, "Editar Producto"), __jsx("div", {
      className: " animate-pulse  flex justify-center mt-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "w-full max-w-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, __jsx("form", {
      className: "bg-white shadow-md px-8 pt-6 pb-8 mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "nombre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
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
        lineNumber: 71,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "cantidad",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "Cantidad Disponible"), __jsx("input", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "cantidad",
      type: "number",
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "empresa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, "Precio"), __jsx("input", {
      className: "h-4 bg-gray-400 rounded w-4/6 m-5shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "empresa",
      type: "text",
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }))), "\xA0")));
  }

  if (!data) {
    return "Acción no permitida";
  }

  var actualizarInfoProducto = function actualizarInfoProducto(valores) {
    var nombre, existencia, precio, _await$actualizarProd, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function actualizarInfoProducto$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nombre = valores.nombre, existencia = valores.existencia, precio = valores.precio;
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(actualizarProducto({
              variables: {
                id: id,
                input: {
                  nombre: nombre,
                  existencia: existencia,
                  precio: precio
                }
              }
            }));

          case 4:
            _await$actualizarProd = _context.sent;
            _data = _await$actualizarProd.data;
            router.push("/productos");
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Correcto", "El producto se actualizó correctamente", "success");
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

  var obtenerProducto = data.obtenerProducto;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, "Editar Producto"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    enableReinitialize: true,
    initialValues: obtenerProducto,
    validationSchema: schemaValidacion,
    onSubmit: function onSubmit(valores) {
      actualizarInfoProducto(valores);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, function (props) {
    return __jsx("form", {
      className: "bg-white shadow-md px-8 pt-6 pb-8 mb-4",
      onSubmit: props.handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 19
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "nombre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 21
      }
    }, "Nombre"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "nombre",
      type: "text",
      placeholder: "Nombre Producto",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.nombre,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }
    })), props.touched.nombre && props.errors.nombre ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 23
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 23
      }
    }, props.errors.nombre)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 19
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "existencia",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }
    }, "Cantidad Disponible"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "existencia",
      type: "number",
      placeholder: "Cantidad Disponible",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.existencia,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }
    })), props.touched.existencia && props.errors.existencia ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 23
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 23
      }
    }, props.errors.existencia)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 19
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "precio",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }
    }, "Precio"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "precio",
      type: "number",
      placeholder: "Precio Producto",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.precio,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 21
      }
    })), props.touched.precio && props.errors.precio ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 23
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 23
      }
    }, props.errors.precio)) : null, __jsx("input", {
      type: "submit",
      className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
      value: "Guardar Cambios",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 19
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditarProducto);

/***/ })

})
//# sourceMappingURL=[pid].js.3e392d83430d2b45b090.hot-update.js.map