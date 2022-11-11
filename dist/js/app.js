/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfoio-vanilla-js/./src/index.css?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_Dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Dashboard.js */ \"./src/views/Dashboard.js\");\n/* harmony import */ var _views_Posts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Posts.js */ \"./src/views/Posts.js\");\n/* harmony import */ var _views_PostView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/PostView.js */ \"./src/views/PostView.js\");\n/* harmony import */ var _views_Settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/Settings.js */ \"./src/views/Settings.js\");\n\n\n\n\n\nconst pathToRegex = (path) =>\n    new RegExp(\"^\" + path.replace(/\\//g, \"\\\\/\").replace(/:\\w+/g, \"(.+)\") + \"$\");\n\nconst getParams = (match) => {\n    const values = match.result.slice(1);\n    const keys = Array.from(match.route.path.matchAll(/:(\\w+)/g)).map(\n        (result) => result[1]\n    );\n\n    return Object.fromEntries(\n        keys.map((key, i) => {\n            return [key, values[i]];\n        })\n    );\n};\n\nconst navigateTo = (url) => {\n    history.pushState(null, null, url);\n    router();\n};\n\nconst router = async () => {\n    const routes = [\n        { path: \"/\", view: _views_Dashboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] },\n        { path: \"/posts\", view: _views_Posts_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] },\n        { path: \"/posts/:id\", view: _views_PostView_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] },\n        { path: \"/settings\", view: _views_Settings_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] },\n    ];\n\n    // Test each route for potential match\n    const potentialMatches = routes.map((route) => {\n        return {\n            route: route,\n            result: location.pathname.match(pathToRegex(route.path)),\n        };\n    });\n\n    let match = potentialMatches.find(\n        (potentialMatch) => potentialMatch.result !== null\n    );\n\n    if (!match) {\n        match = {\n            route: routes[0],\n            result: [location.pathname],\n        };\n    }\n\n    const view = new match.route.view(getParams(match));\n\n    document.querySelector(\"#app\").innerHTML = await view.getHtml();\n};\n\nwindow.addEventListener(\"popstate\", router);\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    document.body.addEventListener(\"click\", (e) => {\n        if (e.target.matches(\"[data-link]\")) {\n            e.preventDefault();\n            navigateTo(e.target.href);\n        }\n    });\n\n    router();\n});\n\n\n//# sourceURL=webpack://portfoio-vanilla-js/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\n\n//# sourceURL=webpack://portfoio-vanilla-js/./src/index.js?");

/***/ }),

/***/ "./src/views/AbstractView.js":
/*!***********************************!*\
  !*** ./src/views/AbstractView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n    constructor(params) {\n        this.params = params;\n    }\n\n    setTitle(title) {\n        document.title = title;\n    }\n\n    async getHtml() {\n        return \"\";\n    }\n});\n\n//# sourceURL=webpack://portfoio-vanilla-js/./src/views/AbstractView.js?");

/***/ }),

/***/ "./src/views/Dashboard.js":
/*!********************************!*\
  !*** ./src/views/Dashboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./src/views/AbstractView.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(params) {\n        super(params);\n        this.setTitle(\"Dashboard\");\n    }\n\n    async getHtml() {\n        return `\n            <h1>Welcome back, Dom</h1>\n            <p>\n                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.\n            </p>\n            <p>\n                <a href=\"/posts\" data-link>View recent posts</a>.\n            </p>\n        `;\n    }\n});\n\n//# sourceURL=webpack://portfoio-vanilla-js/./src/views/Dashboard.js?");

/***/ }),

/***/ "./src/views/PostView.js":
/*!*******************************!*\
  !*** ./src/views/PostView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./src/views/AbstractView.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor(params) {\n\t\tsuper(params);\n\t\tthis.setTitle(\"Viewing Post\");\n\t}\n\n\tasync getHtml() {\n\t\treturn `\n            <h1>Posts</h1>\n            <p>You are viewing the posts hhhhh!</p>\n        `;\n\t}\n});\n\n\n//# sourceURL=webpack://portfoio-vanilla-js/./src/views/PostView.js?");

/***/ }),

/***/ "./src/views/Posts.js":
/*!****************************!*\
  !*** ./src/views/Posts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./src/views/AbstractView.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(params) {\n        super(params);\n        this.setTitle(\"Posts\");\n    }\n\n    async getHtml() {\n        return `\n            <h1>Posts</h1>\n            <p>You are viewing the posts!</p>\n        `;\n    }\n});\n\n//# sourceURL=webpack://portfoio-vanilla-js/./src/views/Posts.js?");

/***/ }),

/***/ "./src/views/Settings.js":
/*!*******************************!*\
  !*** ./src/views/Settings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./src/views/AbstractView.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(params) {\n        super(params);\n        this.setTitle(\"Settings\");\n    }\n\n    async getHtml() {\n        return `\n            <h1>Settings</h1>\n            <p>Manage your privacy and configuration.</p>\n        `;\n    }\n});\n\n//# sourceURL=webpack://portfoio-vanilla-js/./src/views/Settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;