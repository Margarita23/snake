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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./src/index.html?./node_modules/file-loader/dist/cjs.js?name=%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__extends\", function() { return __extends; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__assign\", function() { return __assign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__rest\", function() { return __rest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__decorate\", function() { return __decorate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__param\", function() { return __param; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__metadata\", function() { return __metadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__awaiter\", function() { return __awaiter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__generator\", function() { return __generator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__exportStar\", function() { return __exportStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__values\", function() { return __values; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__read\", function() { return __read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__spread\", function() { return __spread; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__await\", function() { return __await; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncGenerator\", function() { return __asyncGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncDelegator\", function() { return __asyncDelegator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncValues\", function() { return __asyncValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__makeTemplateObject\", function() { return __makeTemplateObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importStar\", function() { return __importStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importDefault\", function() { return __importDefault; });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\r\n            t[p[i]] = s[p[i]];\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\r\n    if (m) return m.call(o);\r\n    return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*\\.mp3$":
/*!***************************************!*\
  !*** ./src/assets sync ^\.\/.*\.mp3$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./eating.mp3\": \"./src/assets/eating.mp3\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync recursive ^\\\\.\\\\/.*\\\\.mp3$\";\n\n//# sourceURL=webpack:///./src/assets_sync_^\\.\\/.*\\.mp3$?");

/***/ }),

/***/ "./src/assets/carbon.jpg":
/*!*******************************!*\
  !*** ./src/assets/carbon.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/carbon.jpg\";\n\n//# sourceURL=webpack:///./src/assets/carbon.jpg?");

/***/ }),

/***/ "./src/assets/eating.mp3":
/*!*******************************!*\
  !*** ./src/assets/eating.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/eating.mp3\";\n\n//# sourceURL=webpack:///./src/assets/eating.mp3?");

/***/ }),

/***/ "./src/ts/Food.ts":
/*!************************!*\
  !*** ./src/ts/Food.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\"), __webpack_require__(/*! ./block */ \"./src/ts/block.ts\"), __webpack_require__(/*! ./parametrs */ \"./src/ts/parametrs.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, block_1, parametrs_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Food = /** @class */ (function (_super) {\n        tslib_1.__extends(Food, _super);\n        function Food(x, y) {\n            if (x === void 0) { x = -1; }\n            if (y === void 0) { y = -1; }\n            return _super.call(this, x, y) || this;\n        }\n        Food.prototype.goOnField = function () {\n            var x = Math.floor(Math.random() * parametrs_1.Parametrs.fieldWidth);\n            var y = Math.floor(Math.random() * parametrs_1.Parametrs.fieldWidth);\n            this.x = x;\n            this.y = y;\n            return this;\n        };\n        return Food;\n    }(block_1.Block));\n    exports.Food = Food;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/Food.ts?");

/***/ }),

/***/ "./src/ts/block.ts":
/*!*************************!*\
  !*** ./src/ts/block.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Block = /** @class */ (function () {\n        function Block(x, y) {\n            this.x = x;\n            this.y = y;\n        }\n        return Block;\n    }());\n    exports.Block = Block;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/block.ts?");

/***/ }),

/***/ "./src/ts/game.ts":
/*!************************!*\
  !*** ./src/ts/game.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./grid */ \"./src/ts/grid.ts\"), __webpack_require__(/*! ./snake */ \"./src/ts/snake.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, grid_1, snake_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Game = /** @class */ (function () {\n        function Game() {\n            this.level = 500;\n            this.changeLevel = -1;\n            this.snake = new snake_1.Snake();\n            this.grid = new grid_1.Grid(this);\n        }\n        Game.prototype.run = function () {\n            var _this_1 = this;\n            this.level = 500;\n            var _this = this;\n            setTimeout(function request() {\n                if (_this.snake.kill) {\n                    _this.end();\n                    alert(\"Game OVER!\");\n                }\n                else {\n                    _this.snake.putFoodOnField();\n                    _this.snake.move();\n                    _this.grid.draw();\n                    _this.showScore();\n                    if (_this.snake.blocks.length % 10 === 0 && _this.changeLevel === -1) {\n                        _this.changeLevel = _this.snake.blocks.length;\n                        _this.level = _this.level - 50;\n                    }\n                    if (_this.snake.blocks.length % 10 != 0) {\n                        _this.changeLevel = -1;\n                    }\n                }\n                setTimeout(request, _this.level);\n            }, this.level);\n            document.addEventListener('keydown', function (event) {\n                if (event.keyCode === 38 || event.keyCode === 40 ||\n                    event.keyCode === 37 || event.keyCode === 39) {\n                    _this_1.snake.vector = event.keyCode;\n                }\n            });\n        };\n        Game.prototype.end = function () {\n            this.grid = null;\n            this.snake.kill = true;\n            this.refresh();\n        };\n        Game.prototype.refresh = function () {\n            this.snake = new snake_1.Snake();\n            this.grid = new grid_1.Grid(this);\n        };\n        Game.prototype.showScore = function () {\n            var score = document.getElementById('score');\n            score.innerHTML = String(this.snake.blocks.length);\n        };\n        return Game;\n    }());\n    exports.Game = Game;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/game.ts?");

/***/ }),

/***/ "./src/ts/grid.ts":
/*!************************!*\
  !*** ./src/ts/grid.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./parametrs */ \"./src/ts/parametrs.ts\"), __webpack_require__(/*! ./vector */ \"./src/ts/vector.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parametrs_1, vector_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Grid = /** @class */ (function () {\n        function Grid(game) {\n            this.totalHeight = document.getElementById('arena').offsetHeight;\n            this.totalWidth = document.getElementById('arena').offsetWidth;\n            this.gameSize = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;\n            this.cellSize = this.gameSize / parametrs_1.Parametrs.fieldWidth;\n            this.fieldFon = new Image();\n            this.canvas = document.getElementById('canvas');\n            this.canvas.width = this.gameSize;\n            this.canvas.height = this.gameSize;\n            this.ctx = this.canvas.getContext(\"2d\");\n            this.game = game;\n            this.snake = game.snake;\n            this.food = game.snake.myFood;\n            this.fieldFon.src = __webpack_require__(/*! ../assets/carbon.jpg */ \"./src/assets/carbon.jpg\");\n        }\n        ;\n        Grid.prototype.draw = function () {\n            this.fon();\n            this.drawFood();\n            this.drawBlocks();\n            this.drawFoodInStomach();\n        };\n        Grid.prototype.fon = function () {\n            this.ctx.clearRect(0, 0, this.totalWidth, this.totalHeight);\n            this.ctx.strokeStyle = (\"rgb(255,255,255)\");\n            this.ctx.lineWidth = 5;\n            this.ctx.strokeRect(0, 0, this.gameSize, this.gameSize);\n        };\n        Grid.prototype.resize = function () {\n            this.totalHeight = document.getElementById('arena').offsetHeight;\n            this.totalWidth = document.getElementById('arena').offsetWidth;\n            this.gameSize = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;\n            this.canvas.width = this.gameSize;\n            this.canvas.height = this.gameSize;\n            this.cellSize = this.gameSize / parametrs_1.Parametrs.fieldWidth;\n            this.ctx.clearRect(0, 0, document.getElementById('game').offsetWidth, document.getElementById('game').offsetHeight);\n        };\n        Grid.prototype.drawBlocks = function () {\n            var _this = this;\n            this.snake.blocks.forEach(function (block) {\n                if (_this.snake.blocks[0] === block) {\n                    _this.drawHeadSnake(block);\n                }\n                else {\n                    _this.ctx.fillStyle = \"rgb(200, 0, 0)\";\n                    _this.ctx.fillRect(block.x * _this.cellSize, block.y * _this.cellSize, _this.cellSize, _this.cellSize);\n                }\n            });\n        };\n        Grid.prototype.drawHeadSnake = function (block) {\n            this.ctx.fillStyle = \"rgb(200, 0, 0)\";\n            this.ctx.beginPath();\n            var x = block.x * this.cellSize;\n            var y = block.y * this.cellSize;\n            this.ctx.moveTo(x, y);\n            switch (this.snake.vector) {\n                case vector_1.Vector.Up:\n                    this.ctx.lineTo(x + this.cellSize / 2, y + this.cellSize / 2);\n                    this.ctx.lineTo(x + this.cellSize, y);\n                    this.ctx.lineTo(x + this.cellSize, y + this.cellSize);\n                    this.ctx.lineTo(x, y + this.cellSize);\n                    break;\n                case vector_1.Vector.Right:\n                    this.ctx.lineTo(x + this.cellSize, y);\n                    this.ctx.lineTo(x + this.cellSize / 2, y + this.cellSize / 2);\n                    this.ctx.lineTo(x + this.cellSize, y + this.cellSize);\n                    this.ctx.lineTo(x, y + this.cellSize);\n                    break;\n                case vector_1.Vector.Down:\n                    this.ctx.lineTo(x + this.cellSize, y);\n                    this.ctx.lineTo(x + this.cellSize, y + this.cellSize);\n                    this.ctx.lineTo(x + this.cellSize / 2, y + this.cellSize / 2);\n                    this.ctx.lineTo(x, y + this.cellSize);\n                    break;\n                case vector_1.Vector.Left:\n                    this.ctx.lineTo(x + this.cellSize, y);\n                    this.ctx.lineTo(x + this.cellSize, y + this.cellSize);\n                    this.ctx.lineTo(x, y + this.cellSize);\n                    this.ctx.lineTo(x + this.cellSize / 2, y + this.cellSize / 2);\n                    break;\n            }\n            this.ctx.fill();\n        };\n        Grid.prototype.drawFoodInStomach = function () {\n            var _this = this;\n            this.snake.foodInStomach.forEach(function (block) {\n                _this.ctx.fillStyle = \"rgb(100, 0, 0)\";\n                _this.ctx.beginPath();\n                _this.ctx.arc(block.x * _this.cellSize + _this.cellSize / 2, block.y * _this.cellSize + _this.cellSize / 2, _this.cellSize / 2, 0, 2 * Math.PI, false);\n                _this.ctx.fill();\n            });\n        };\n        Grid.prototype.drawFood = function () {\n            this.ctx.fillStyle = \"rgb(0, 100, 0)\";\n            this.ctx.beginPath();\n            this.ctx.arc(this.food.x * this.cellSize + this.cellSize / 2, this.food.y * this.cellSize + this.cellSize / 2, this.cellSize / 2, 0, 2 * Math.PI, false);\n            this.ctx.fill();\n        };\n        return Grid;\n    }());\n    exports.Grid = Grid;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/grid.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./game */ \"./src/ts/game.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, game_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    __webpack_require__(/*! file-loader?name=[name].[ext]!../index.html */ \"./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html\");\n    var game = new game_1.Game();\n    game.run();\n    var startGameButton = document.getElementById('startGame');\n    startGameButton.onclick = function () {\n        game.end();\n    };\n    window.onresize = function () {\n        game.grid.resize();\n        game.grid.draw();\n    };\n    var pauseButton = document.getElementById('pauseGame');\n    pauseButton.onclick = function () {\n        alert(\"PAUSE\");\n    };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/parametrs.ts":
/*!*****************************!*\
  !*** ./src/ts/parametrs.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Parametrs = /** @class */ (function () {\n        function Parametrs() {\n        }\n        Parametrs.fieldWidth = 30;\n        Parametrs.fieldHeight = 30;\n        return Parametrs;\n    }());\n    exports.Parametrs = Parametrs;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/parametrs.ts?");

/***/ }),

/***/ "./src/ts/snake.ts":
/*!*************************!*\
  !*** ./src/ts/snake.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./block */ \"./src/ts/block.ts\"), __webpack_require__(/*! ./vector */ \"./src/ts/vector.ts\"), __webpack_require__(/*! ./parametrs */ \"./src/ts/parametrs.ts\"), __webpack_require__(/*! ./Food */ \"./src/ts/Food.ts\"), __webpack_require__(/*! ./sound */ \"./src/ts/sound.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, block_1, vector_1, parametrs_1, Food_1, sound_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Snake = /** @class */ (function () {\n        function Snake() {\n            this.vector = vector_1.Vector.Up;\n            this.myFood = new Food_1.Food(-1, -1);\n            this.foodInStomach = [];\n            this.kill = false;\n            this.sound = new sound_1.Sound();\n            this.blocks = [];\n            this.blocks.push(new block_1.Block(10, 20));\n            this.kill = false;\n        }\n        Snake.prototype.move = function () {\n            if (this.canSnakeGo()) {\n                this.eat();\n                this.moveBody(this.blocks[0]);\n                switch (this.vector) {\n                    case vector_1.Vector.Up:\n                        this.blocks[0].y = this.blocks[0].y - 1;\n                        break;\n                    case vector_1.Vector.Right:\n                        this.blocks[0].x = this.blocks[0].x + 1;\n                        break;\n                    case vector_1.Vector.Down:\n                        this.blocks[0].y = this.blocks[0].y + 1;\n                        break;\n                    case vector_1.Vector.Left:\n                        this.blocks[0].x = this.blocks[0].x - 1;\n                        break;\n                    default: ;\n                }\n            }\n            else {\n                this.kill = true;\n            }\n        };\n        Snake.prototype.putFoodOnField = function () {\n            if (this.myFood.x == -1 && this.myFood.y == -1) {\n                this.myFood = this.myFood.goOnField();\n            }\n        };\n        Snake.prototype.moveBody = function (head) {\n            for (var i = this.blocks.length - 1; i > 0; i--) {\n                this.blocks[i].x = this.blocks[i - 1].x;\n                this.blocks[i].y = this.blocks[i - 1].y;\n            }\n        };\n        Snake.prototype.eat = function () {\n            var _this = this;\n            var lastBlock = this.blocks[this.blocks.length - 1];\n            if (this.blocks[0].x == this.myFood.x && this.blocks[0].y == this.myFood.y) {\n                this.foodInStomach.push(new block_1.Block(this.myFood.x, this.myFood.y));\n                this.myFood.x = -1;\n                this.myFood.y = -1;\n                this.sound.run(\"eating\");\n            }\n            this.foodInStomach.forEach(function (block, index) {\n                if (block.x == lastBlock.x && block.y == lastBlock.y) {\n                    _this.blocks.push(new block_1.Block(block.x, block.y));\n                    _this.foodInStomach.splice(index, 1);\n                }\n            });\n        };\n        Snake.prototype.canSnakeGo = function () {\n            var isCanGo = true;\n            var block = this.blocks[0];\n            if (block.x < 0 ||\n                block.x >= parametrs_1.Parametrs.fieldWidth ||\n                block.y < 0 ||\n                block.y >= parametrs_1.Parametrs.fieldWidth ||\n                this.headHitTheBody()) {\n                isCanGo = false;\n            }\n            return isCanGo;\n        };\n        Snake.prototype.headHitTheBody = function () {\n            var isHit = false;\n            for (var i = 1; i < this.blocks.length; i++) {\n                if (this.blocks[0].x === this.blocks[i].x &&\n                    this.blocks[0].y === this.blocks[i].y) {\n                    isHit = true;\n                }\n            }\n            return isHit;\n        };\n        return Snake;\n    }());\n    exports.Snake = Snake;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/snake.ts?");

/***/ }),

/***/ "./src/ts/sound.ts":
/*!*************************!*\
  !*** ./src/ts/sound.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Sound = /** @class */ (function () {\n        function Sound() {\n            this.audio = new Audio();\n        }\n        Sound.prototype.run = function (name) {\n            this.audio.src = __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*\\\\.mp3$\")(\"./\" + name + \".mp3\");\n            this.audio.play();\n        };\n        return Sound;\n    }());\n    exports.Sound = Sound;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/sound.ts?");

/***/ }),

/***/ "./src/ts/vector.ts":
/*!**************************!*\
  !*** ./src/ts/vector.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Vector;\n    (function (Vector) {\n        Vector[Vector[\"Up\"] = 38] = \"Up\";\n        Vector[Vector[\"Down\"] = 40] = \"Down\";\n        Vector[Vector[\"Left\"] = 37] = \"Left\";\n        Vector[Vector[\"Right\"] = 39] = \"Right\";\n    })(Vector = exports.Vector || (exports.Vector = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/ts/vector.ts?");

/***/ })

/******/ });