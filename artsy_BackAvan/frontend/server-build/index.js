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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get(\"/\", function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", function (err, data) {\n    if (err) {\n      console.error(\"Something went wrong:\", err);\n      return res.status(500).send(\"Oops, better luck next time!\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(\"./build\"));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/navbar */ \"./src/views/navbar.js\");\n/* harmony import */ var _views_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/main */ \"./src/views/main.js\");\n/* harmony import */ var _views_lojas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/lojas */ \"./src/views/lojas.js\");\n/* harmony import */ var _views_produtos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/produtos */ \"./src/views/produtos.js\");\n/* harmony import */ var _views_contato__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/contato */ \"./src/views/contato.js\");\n/* harmony import */ var _views_footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/footer.js */ \"./src/views/footer.js\");\n//import './css/App.css';\n\n\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"StaticRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _views_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/produtos\",\n    component: _views_produtos__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/lojas\",\n    component: _views_lojas__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/contato\",\n    component: _views_contato__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_footer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/views/contato.js":
/*!******************************!*\
  !*** ./src/views/contato.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Contato = /*#__PURE__*/function (_React$Component) {\n  _inherits(Contato, _React$Component);\n\n  var _super = _createSuper(Contato);\n\n  function Contato() {\n    var _this;\n\n    _classCallCheck(this, Contato);\n\n    _this = _super.call(this);\n    _this.state = {\n      email: \"\",\n      nome: \"\",\n      mensagem: \"\"\n    };\n    _this.handleEmailChange = _this.handleChange.bind(_assertThisInitialized(_this), 'email');\n    _this.handleNomeChange = _this.handleChange.bind(_assertThisInitialized(_this), 'nome');\n    _this.handleMsgChange = _this.handleChange.bind(_assertThisInitialized(_this), 'mensagem');\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Contato, [{\n    key: \"handleChange\",\n    value: function handleChange(keyName, e) {\n      this.setState(_defineProperty({}, keyName, e.target.value));\n    }\n    /*  \r\n        handleSubmit(event) {\r\n            let query = \"http://localhost/react/src/backend/contato.php?nome=\" + this.state.nome;\r\n            query += \"&email=\" + this.state.email;\r\n            query += \"&msg=\" + this.state.mensagem;\r\n            console.log(query)\r\n            axios.post(query).then(response => {alert(response.data)});\r\n            event.preventDefault();\r\n        };\r\n    */\n\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      console.log(\"handleSubmit\");\n      var data = {\n        nome: this.state.nome,\n        email: this.state.email,\n        msg: this.state.mensagem\n      };\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:1337/api/contato', {}, {\n        headers: {\n          'Content-Type': 'application/json',\n          'Access-Control-Allow-Origin': '*'\n        },\n        params: data\n      }).then(function (response) {\n        alert(response.data.message);\n        window.location.reload();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: // <form action=\"http://localhost:1337/api/contato\" method=\"POST\" >\n    function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n        class: \"central-de-atendimento\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        class: \"container-fluid d-flex flex-wrap justify-content-center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        class: \"col-xs-12 col-sm-10 col-md-8\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, \" Central de Atendimento\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        class: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        class: \"form-row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        class: \"col\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n        for: \"emailField\"\n      }, \"E-mail\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n        type: \"text\",\n        class: \"form-control\",\n        name: \"emailField\",\n        id: \"emailField\",\n        \"aria-describedby\": \"emailHelp\",\n        placeholder: \"Digite seu e-mail\",\n        onChange: this.handleEmailChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"small\", {\n        id: \"emailHelp\",\n        class: \"form-text text-muted\"\n      }, \"Digite o mesmo e-mail de login que voc\\xEA usa na ARTsy\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        class: \"col\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n        for: \"nomeCompletoField\"\n      }, \"Nome completo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n        type: \"text-area\",\n        class: \"form-control\",\n        name: \"nomeCompletoField\",\n        id: \"nomeCompletoField\",\n        placeholder: \"Nome completo\",\n        onChange: this.handleNomeChange\n      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        class: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n        for: \"mensagemField\"\n      }, \"Como podemos te ajudar?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"textarea\", {\n        class: \"form-control\",\n        name: \"mensagemField\",\n        id: \"mensagemField\",\n        rows: \"3\",\n        onChange: this.handleMsgChange\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n        type: \"submit\",\n        class: \"btn btn-dark\"\n      }, \"Enviar\")))));\n    }\n  }]);\n\n  return Contato;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contato);\n\n//# sourceURL=webpack:///./src/views/contato.js?");

/***/ }),

/***/ "./src/views/footer.js":
/*!*****************************!*\
  !*** ./src/views/footer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    class: \"artsy-footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Sobre a Artsy\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Somos apaixonados por arte e estamos comprometidos com todos que querem fazer arte.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Segue a gente\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fab fa-twitter\"\n  }), \" @ARTsy\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fab fa-instagram-square\"\n  }), \" @ARTsy\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fab fa-facebook\"\n  }), \" Loja ARTsy\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Ajuda\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Reembolso\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Troca ou Devolu\\xE7\\xE3o\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Como comprar no site\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Prazo de entrega\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Contato\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fas fa-envelope-open-text\"\n  }), \" atendimento@artsy.com\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Central de Atendimento\"))));\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/views/footer.js?");

/***/ }),

/***/ "./src/views/lojas.js":
/*!****************************!*\
  !*** ./src/views/lojas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Lojas() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    class: \"nossas-lojas\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container-fluid justify-content-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Rio de Janeiro\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" Rua Rio de Janeiro, n\\xBA 150\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fas fa-phone\"\n  }), \" 2222-2222\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"S\\xE3o Paulo\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" Rua S\\xE3o Paulo, n\\xBA 150\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fas fa-phone\"\n  }), \" 2322-2222\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Florian\\xF3polis\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" Rua Florian\\xF3polis, n\\xBA 150\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fas fa-phone\"\n  }), \" 2422-2222\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Belo Horizonte\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" Rua Belo Horizonte, n\\xBA 150\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fas fa-phone\"\n  }), \" 2522-2222\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lojas);\n\n//# sourceURL=webpack:///./src/views/lojas.js?");

/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\n //import '../css/index.css'\n\nfunction Main() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    class: \"artsy-main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, null)));\n}\n\nfunction C() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"].Item, {\n    interval: 2000\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"d-block w-100\",\n    src: \"img/img1.jpg\",\n    alt: \"First slide\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"].Item, {\n    interval: 2000\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"d-block w-100\",\n    src: \"img/img2.jpg\",\n    alt: \"Second slide\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"].Item, {\n    interval: 2000\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"d-block w-100\",\n    src: \"img/img3.jpg\",\n    alt: \"Third slide\"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/views/main.js?");

/***/ }),

/***/ "./src/views/navbar.js":
/*!*****************************!*\
  !*** ./src/views/navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Navbar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    class: \" navbar navbar-light navbar-expand-lg shadow p-3 mb-5 bg-white rounded bg-white-artsy\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container-artsy d-flex flex-wrap justify-content-end\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"img/logo-small.png\",\n    alt: \"logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    class: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarSupportedContent\",\n    \"aria-controls\": \"navbarSupportedContent\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    class: \"custom-toggler-icon navbar-toggler\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fas fa-bars\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"collapse navbar-collapse\",\n    id: \"navbarSupportedContent\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    class: \"navbar-nav mr-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    class: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"/produtos\"\n  }, \"Produtos\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    class: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"/lojas\"\n  }, \"Nossas Lojas\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    class: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"/contato\"\n  }, \"Fale Conosco\"))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/views/navbar.js?");

/***/ }),

/***/ "./src/views/produtos.js":
/*!*******************************!*\
  !*** ./src/views/produtos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Produtos = /*#__PURE__*/function (_React$Component) {\n  _inherits(Produtos, _React$Component);\n\n  var _super = _createSuper(Produtos);\n\n  function Produtos() {\n    var _this;\n\n    _classCallCheck(this, Produtos);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:1337/api/listprod').then(function (resposta) {\n        _this.setState({\n          produtos: resposta.data.query\n        });\n      });\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:1337/api/geracat').then(function (resposta) {\n        _this.setState({\n          cat: resposta.data.query\n        });\n      });\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:1337/api/listest').then(function (resposta) {\n        _this.setState({\n          est: resposta.data.query\n        });\n      });\n    });\n\n    _this.state = {\n      produtos: [],\n      cat: [],\n      est: [],\n      sCat: \"\",\n      sEst: \"\"\n    };\n    _this.handleCatChange = _this.handleChange.bind(_assertThisInitialized(_this), 'sCat');\n    _this.handleEstChange = _this.handleChange.bind(_assertThisInitialized(_this), 'sEst');\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Produtos, [{\n    key: \"handleChange\",\n    value: function handleChange(keyName, e) {\n      this.setState(_defineProperty({}, keyName, e.target.value));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      var data = {\n        cat: this.state.sCat,\n        est: this.state.sEst\n      };\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:1337/api/getprod', {}, {\n        headers: {\n          'Content-Type': 'application/json',\n          'Access-Control-Allow-Origin': '*'\n        },\n        params: data\n      }).then(function (resposta) {\n        _this2.setState({\n          produtos: resposta.data.query\n        });\n      });\n      /*\r\n      let query = \"http://localhost/react/src/backend/listproducts.php?cat=\" + this.state.sCat;\r\n      query += \"&est=\" + this.state.sEst;\r\n      axios.post(query).then(resposta => { this.setState({produtos:resposta.data})});\r\n      event.preventDefault();\r\n          */\n    }\n  }, {\n    key: \"GeraCat\",\n    value: function GeraCat() {\n      return this.state.cat.map(function (item) {\n        //console.log(item)\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n          value: item.categoria\n        }, item.categoria);\n      });\n    }\n  }, {\n    key: \"GeraCatForm\",\n    value: function GeraCatForm() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"container-fluid d-flex\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"input-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n        name: \"FILTRO\",\n        class: \"custom-select\",\n        onChange: this.handleCatChange\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"\"\n      }, \"Todos\"), this.GeraCat()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"input-group-append\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        class: \"btn-sm btn-outline-dark\",\n        type: \"submit\",\n        value: \"Filtrar\"\n      }, \" Filtrar \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        class: \"fas fa-filter\"\n      }))))));\n    }\n  }, {\n    key: \"GeraEst\",\n    value: function GeraEst() {\n      return this.state.est.map(function (item) {\n        //console.log(item)\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n          value: item.local\n        }, item.local);\n      });\n    }\n  }, {\n    key: \"GeraEstForm\",\n    value: function GeraEstForm() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"container-fluid d-flex\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"input-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n        name: \"FILTRO\",\n        class: \"custom-select\",\n        onChange: this.handleEstChange\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"\"\n      }, \"Todos\"), this.GeraEst()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"input-group-append\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        class: \"btn-sm btn-outline-dark\",\n        type: \"submit\",\n        value: \"Filtrar\"\n      }, \" Filtrar \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        class: \"fas fa-filter\"\n      }))))));\n    }\n  }, {\n    key: \"ProdList\",\n    value: function ProdList() {\n      return this.state.produtos.map(function (item) {\n        //console.log(item)\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          class: \"product-container col-xs-12 col-sm-6 col-md-5 col-lg-3 col-xl-2\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          class: \" container-fluid d-flex flex-wrap product-wrapper\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          class: \"product-wrapper\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          class: \"picture-tag img-fluid img-thumbnail\",\n          src: \"img/\" + item.imagem,\n          alt: item.descricao\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          type: \"button\",\n          class: \"btn btn-outline-dark btn-artsy\"\n        }, \"Comprar\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          class: \"product-tag\"\n        }, item.descricao), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          class: \"pricing\"\n        }, item.preco), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          class: \"current-pricing\"\n        }, item.precofinal))));\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        class: \"products\"\n      }, this.GeraCatForm(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), this.GeraEstForm(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"container-fluid d-flex flex-wrap justify-content-center\"\n      }, this.ProdList()));\n    }\n  }]);\n\n  return Produtos;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Produtos);\n\n//# sourceURL=webpack:///./src/views/produtos.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });