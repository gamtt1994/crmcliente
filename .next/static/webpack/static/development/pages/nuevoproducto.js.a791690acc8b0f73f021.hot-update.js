webpackHotUpdate("static\\development\\pages\\nuevoproducto.js",{

/***/ "./components/Layout.js":
false,

/***/ "./pages/nuevoproducto.js":
/*!********************************!*\
  !*** ./pages/nuevoproducto.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);





var _this = undefined,
    _jsxFileName = "D:\\Descargas\\Crmcliente\\Crmcliente\\pages\\nuevoproducto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query obtenerProductos {\n    obtenerProductos {\n      id\n      nombre\n      precio\n      existencia\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation nuevoProducto($input: ProductoInput) {\n    nuevoProducto(input: $input) {\n      id\n      nombre\n      existencia\n      precio\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var NUEVO_PRODUCTO = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject());
var OBTENER_PRODUCTOS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject2());

var NuevoProducto = function NuevoProducto() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(NUEVO_PRODUCTO, {
    update: function update(cache, _ref) {
      var nuevoProducto = _ref.data.nuevoProducto;

      var _cache$readQuery = cache.readQuery({
        query: OBTENER_PRODUCTOS
      }),
          obtenerProductos = _cache$readQuery.obtenerProductos;

      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(obtenerProductos), [nuevoProducto])
        }
      });
    }
  }),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      nuevoProducto = _useMutation2[0];

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormik"])({
    initialValues: {
      nombre: "",
      existencia: "",
      precio: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__["object"]({
      nombre: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("El nombre del producto es obligatorio"),
      existencia: yup__WEBPACK_IMPORTED_MODULE_7__["number"]().required("Agrega la cantidad disponible").positive("No se aceptan números negativos").integer("La existencia deben ser números enteros"),
      precio: yup__WEBPACK_IMPORTED_MODULE_7__["number"]().required("El precio es obligatorio").positive("No se aceptan números negativos")
    }),
    onSubmit: function onSubmit(valores) {
      var nombre, existencia, precio, _await$nuevoProducto, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onSubmit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nombre = valores.nombre, existencia = valores.existencia, precio = valores.precio;
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(nuevoProducto({
                variables: {
                  input: {
                    nombre: nombre,
                    existencia: existencia,
                    precio: precio
                  }
                }
              }));

            case 4:
              _await$nuevoProducto = _context.sent;
              data = _await$nuevoProducto.data;
              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Creado", "Se creó el producto correctamente", "success");
              router.push("/productos");
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
    }
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "Crear Nuevo Producto"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "bg-white shadow-md px-8 pt-6 pb-8 mb-4",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "Nombre"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "nombre",
    type: "text",
    placeholder: "Nombre Producto",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.nombre,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  })), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, formik.errors.nombre)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "existencia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, "Cantidad Disponible"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "existencia",
    type: "number",
    placeholder: "Cantidad Disponible",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.existencia,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  })), formik.touched.existencia && formik.errors.existencia ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, formik.errors.existencia)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "precio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, "Precio"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "precio",
    type: "number",
    placeholder: "Precio Producto",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  })), formik.touched.precio && formik.errors.precio ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, formik.errors.precio)) : null, __jsx("input", {
    type: "submit",
    className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
    value: "Agregar Nuevo Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NuevoProducto);

/***/ })

})
//# sourceMappingURL=nuevoproducto.js.a791690acc8b0f73f021.hot-update.js.map