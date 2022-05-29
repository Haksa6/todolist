/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 100%;\n  overflow-x: hidden; }\n  @media (max-width: 1000px) {\n    html {\n      font-size: 90%; } }\n  @media (max-width: 800px) {\n    html {\n      font-size: 80%; } }\n  @media (max-width: 650px) {\n    html {\n      font-size: 70%; } }\n  @media (max-width: 400px) {\n    html {\n      font-size: 60%; } }\n\nbody {\n  display: grid;\n  grid-template-columns: 20rem 1fr;\n  grid-template-rows: 5rem 1fr;\n  width: 100vw;\n  height: 100vh;\n  font-family: Overpass, sans-serif;\n  color: #f5f5f5; }\n  @media (max-width: 1000px) {\n    body {\n      grid-template-columns: 17rem 1fr; } }\n  @media (max-width: 800px) {\n    body {\n      grid-template-columns: 13rem 1fr; } }\n  @media (max-width: 650px) {\n    body {\n      grid-template-columns: 10rem 1fr; } }\n  @media (max-width: 475px) {\n    body {\n      grid-template-columns: 1fr; } }\n\n.header {\n  background-color: #8EE4AF;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  font-family: Impact, Overpass, sans-serif;\n  transition: all 0.5s ease;\n  font-size: 3.5rem;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center; }\n\n.sidebar {\n  background-color: #379683;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 2rem; }\n  @media (max-width: 800px) {\n    .sidebar {\n      padding: 2rem; } }\n  @media (max-width: 650px) {\n    .sidebar {\n      padding: 1.25rem; } }\n\n.main {\n  background-color: #5CDB95;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  padding: 2rem; }\n  @media (max-width: 475px) {\n    .main {\n      grid-column: 1 / 3; } }\n\nbutton {\n  cursor: pointer;\n  border: solid 2px #55d1b6;\n  background: #f5f5f5;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 4px;\n  color: #0b0b0f; }\n\nbutton:hover {\n  cursor: pointer;\n  color: #f5f5f5; }\n\n.header-container {\n  display: flex; }\n\n.menu {\n  list-style: none; }\n  .menu-item {\n    cursor: pointer;\n    padding: 1rem;\n    transition: all 0.5s ease; }\n    .menu-item:hover {\n      color: #05386B;\n      font-weight: 700;\n      transform: translateX(0.5rem); }\n\n.sidebar-button-new {\n  height: 5rem;\n  width: 5rem;\n  font-size: 3rem;\n  border-radius: 50%;\n  align-self: center; }\n  .sidebar-button-new:hover {\n    transition: ease-in 0.7s;\n    box-shadow: inset 5rem 0 0 0 #55d1b6; }\n\n.todos {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 1rem;\n  border-radius: 4px;\n  background-color: #379683;\n  background-image: linear-gradient(315deg, #379683 0%, #5aff15 74%);\n  margin-bottom: 0.5rem; }\n  .todos-text {\n    margin-right: 2rem;\n    margin-right: auto;\n    font-size: 1.4rem; }\n    .todos-text-done {\n      text-decoration: line-through; }\n  .todos-check {\n    margin-right: 1rem;\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 6px;\n    border: 2px solid;\n    cursor: pointer; }\n    .todos-check:hover {\n      color: #379683; }\n  .todos-date {\n    margin-right: 2rem; }\n  .todos-edit {\n    margin-right: 2rem;\n    height: 2.5rem;\n    width: 4rem; }\n    .todos-edit:hover {\n      transition: ease-in 0.7s;\n      box-shadow: inset 5rem 0 0 0 #55d1b6; }\n  .todos-delete {\n    height: 2.5rem;\n    width: 4rem; }\n    .todos-delete:hover {\n      transition: ease-in 0.7s;\n      box-shadow: inset 5rem 0 0 0 red; }\n\n.popup-new {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  transition: all 0.3s ease;\n  background-color: rgba(0, 0, 0, 0.8);\n  top: 0;\n  left: 0; }\n  .popup-new-hidden {\n    display: none; }\n\n.make-new {\n  height: 13rem;\n  width: 40rem;\n  background-color: #017d7d;\n  border-radius: 5px;\n  box-shadow: 15px 15px rgba(0, 0, 0, 0.3); }\n  .make-new-header-container {\n    background-color: #379683;\n    align-items: center;\n    border-radius: 5px;\n    display: flex;\n    padding: 0.2rem;\n    box-shadow: 1px 1px rgba(0, 0, 0, 0.3); }\n    .make-new-header-container-xButton {\n      color: #f81f1f;\n      font-size: 2rem;\n      margin-right: 0.7rem;\n      cursor: pointer;\n      font-weight: 900; }\n    .make-new-header-container-theheader {\n      font-size: 2rem;\n      flex: auto; }\n  .make-new-info-container {\n    display: flex;\n    padding: 0.2rem;\n    flex-direction: column; }\n    .make-new-info-container-input-title {\n      background-color: transparent;\n      color: #f5f5f5;\n      border: none;\n      font-size: 1.25rem;\n      border-bottom: 1px solid #f5f5f5;\n      margin: 0.25rem 0rem; }\n      .make-new-info-container-input-title::placeholder {\n        color: #cac7c7; }\n      .make-new-info-container-input-title:focus {\n        outline: none; }\n    .make-new-info-container-date-container {\n      display: flex;\n      align-items: center;\n      margin: 0.5rem 0 2.2rem 0; }\n      .make-new-info-container-date-container-para {\n        font-size: 1.25rem;\n        margin-right: 0.2rem; }\n      .make-new-info-container-date-container-input-date {\n        border-radius: 5px;\n        border: 2px solid #55d1b6;\n        padding: 0.5rem;\n        margin-left: 0.7rem; }\n    .make-new-info-container-button {\n      height: 2rem;\n      width: 7rem;\n      align-self: end;\n      margin-right: 0.5rem; }\n", "",{"version":3,"sources":["webpack://./src/sass/_layout.scss","webpack://./src/sass/_colors.scss","webpack://./src/sass/_input.scss","webpack://./src/sass/_sidebar.scss","webpack://./src/sass/_todos.scss","webpack://./src/sass/_popups.scss"],"names":[],"mappings":"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","sourcesContent":["*,*::after, *::before{\r\n  margin:0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n//change fonts when the screen get smaller\r\nhtml{\r\n  font-size: 100%;\r\n  //overflow-x hidden so when the screen goes really small theres no scrollbar\r\n  overflow-x: hidden;\r\n  @media (max-width: 1000px){\r\n    font-size: 90%;\r\n  }\r\n  @media (max-width: 800px){\r\n    font-size: 80%;\r\n  }\r\n  @media (max-width: 650px){\r\n    font-size: 70%;\r\n  }\r\n  @media (max-width: 400px){\r\n    font-size: 60%;\r\n  }\r\n\r\n}\r\n\r\n\r\n//change screen layout according to the size\r\nbody {\r\n  display: grid;\r\n  grid-template-columns: 20rem 1fr;\r\n  grid-template-rows: 5rem 1fr;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  font-family: $font-stack;\r\n  color: $white;\r\n  @media (max-width: 1000px){\r\n    grid-template-columns: 17rem 1fr;\r\n  }\r\n\r\n  @media (max-width: 800px){\r\n    grid-template-columns: 13rem 1fr;\r\n  }\r\n  @media (max-width: 650px){\r\n    grid-template-columns: 10rem 1fr;\r\n  }\r\n  @media (max-width: 475px){\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n\r\n.header{\r\n  background-color: $green-light;\r\n  grid-column: 1 / 3;\r\n  grid-row: 1 / 2 ;\r\n  display: flex;\r\n  font-family:Impact,$font-stack;\r\n  transition: all 0.5s ease;\r\n  font-size: 3.5rem;\r\n  font-weight: 500;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.sidebar{\r\n  background-color: $green-blue;\r\n  grid-column: 1 / 2;\r\n  grid-row: 2 / 3;\r\n  padding: 3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  font-size: 2rem;\r\n\r\n  @media (max-width: 800px){\r\n    padding: 2rem;\r\n  }\r\n  @media (max-width: 650px){\r\n    padding: 1.25rem;\r\n  }\r\n\r\n}\r\n\r\n.main{\r\n  background-color: $green-bright;\r\n  grid-column: 2 / 3;\r\n  grid-row: 2 / 3;\r\n  padding: 2rem;\r\n  @media (max-width: 475px){\r\n    grid-column: 1 / 3;\r\n  }\r\n}\r\n\r\nbutton{\r\n  cursor: pointer;\r\n  border: solid 2px $blue-light;\r\n  background: $white;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  border-radius: 4px;\r\n  color: rgb(11, 11, 15);\r\n  \r\n}\r\nbutton:hover {\r\n  //transition: ease-in 0.7s;\r\n  //box-shadow: inset 10rem 0 0 0 $blue-light;\r\n  cursor: pointer;\r\n  color: $white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap');\r\n\r\n\r\n$font-stack: Overpass, sans-serif;\r\n$blue-dark: #05386B;\r\n$green-blue: #379683;\r\n$green-bright: #5CDB95;\r\n$green-light: #8EE4AF;\r\n$white: #f5f5f5;\r\n$green-neon: #5aff15;\r\n$blue: rgb(1, 125, 125);\r\n$red: rgb(248, 31, 31);\r\n$grey: #cac7c7;\r\n$blue-light: rgb(85, 209, 182);",".header-container {\r\n  display: flex;\r\n}\r\n\r\n","//sidebar styles\r\n.menu{\r\n  list-style: none;\r\n  &-item{\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    transition: all 0.5s ease;\r\n\r\n  \r\n  &:hover{\r\n    color: $blue-dark;\r\n    font-weight: 700;\r\n    transform: translateX(.5rem);\r\n  }\r\n  }\r\n}\r\n\r\n.sidebar-button-new{\r\n  height: 5rem;\r\n  width: 5rem;\r\n  font-size: 3rem;\r\n  border-radius: 50%;\r\n  align-self: center;\r\n  &:hover{\r\n    transition: ease-in 0.7s;\r\n    box-shadow: inset 5rem 0 0 0 $blue-light;\r\n  }\r\n}","\r\n//all the code for the details in the main container\r\n.todos {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  padding: 1rem;\r\n  border-radius: 4px;\r\n  background-color: $green-blue;\r\n  background-image: linear-gradient(315deg, $green-blue 0%, $green-neon 74%);\r\n  margin-bottom: 0.5rem;\r\n  &-text {\r\n    margin-right: 2rem;\r\n    margin-right: auto;\r\n    font-size: 1.4rem;\r\n    &-done{\r\n      text-decoration:line-through;\r\n\r\n    }\r\n  }\r\n\r\n  //custom checkmark when todolist is done\r\n  &-check{\r\n    margin-right: 1rem;\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    border-radius: 6px;\r\n    border: 2px solid;\r\n    cursor: pointer;\r\n    &:hover{\r\n      color: $green-blue;\r\n    }\r\n  }\r\n  &-date{\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  &-edit{\r\n    margin-right: 2rem;\r\n    height: 2.5rem;\r\n    width: 4rem;\r\n    &:hover{\r\n      transition: ease-in 0.7s;\r\n      box-shadow: inset 5rem 0 0 0 $blue-light;\r\n    }\r\n  }\r\n  &-delete{\r\n    height: 2.5rem;\r\n    width: 4rem;\r\n    &:hover{\r\n      transition: ease-in 0.7s;\r\n      box-shadow: inset 5rem 0 0 0 red;\r\n    }\r\n  }\r\n}",".popup-new{\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1;\r\n  transition: all 0.3s ease;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  top: 0;\r\n  left: 0;\r\n\r\n  &-hidden{\r\n    display: none;\r\n  }\r\n}\r\n\r\n//pop up form to add a new one\r\n.make-new{\r\n  height: 13rem;\r\n  width: 40rem;\r\n  background-color: $blue;\r\n  border-radius: 5px;\r\n  box-shadow: 15px 15px rgba(0,0,0,0.3);\r\n  &-header-container{\r\n    background-color: $green-blue;\r\n    align-items: center;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    padding: 0.2rem;\r\n    box-shadow: 1px 1px rgba(0,0,0,0.3);\r\n    //button to close the popup\r\n    &-xButton{\r\n      color: $red;\r\n      font-size: 2rem;\r\n      margin-right: 0.7rem;\r\n      cursor: pointer;\r\n      font-weight: 900;\r\n    }\r\n    &-theheader{\r\n      font-size: 2rem;\r\n      flex: auto;\r\n    }\r\n  }\r\n  &-info-container{\r\n    display: flex;\r\n    padding: 0.2rem;\r\n    flex-direction: column;\r\n    &-input-title{\r\n      background-color: transparent;\r\n      color: $white;\r\n      border: none;\r\n      font-size: 1.25rem;\r\n      border-bottom: 1px solid $white;\r\n      margin: 0.25rem 0rem;\r\n      &::placeholder{\r\n        color: $grey;\r\n      }\r\n      &:focus{\r\n        outline: none;\r\n      }\r\n    }\r\n    &-date-container{\r\n      display: flex;\r\n      align-items: center;\r\n      margin: 0.5rem 0 2.2rem 0;\r\n      &-para{\r\n        font-size: 1.25rem;\r\n        margin-right: 0.2rem;\r\n      }\r\n      &-input-date{\r\n        border-radius: 5px;\r\n        border: 2px solid $blue-light;\r\n        padding: 0.5rem;\r\n        margin-left: 0.7rem;\r\n      }\r\n    }\r\n    &-button{\r\n      height: 2rem;\r\n      width: 7rem;\r\n      align-self: end;\r\n      margin-right: 0.5rem;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");

const getTodos = () => {
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdIQUF3SCxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNwSztBQUNBLGtFQUFrRSxjQUFjLGVBQWUsNkJBQTZCLFVBQVUsb0JBQW9CLHlCQUF5QixnQ0FBZ0MsWUFBWSwyQkFBMkIsK0JBQStCLFlBQVksMkJBQTJCLCtCQUErQixZQUFZLDJCQUEyQiwrQkFBK0IsWUFBWSwyQkFBMkIsVUFBVSxrQkFBa0IscUNBQXFDLGlDQUFpQyxpQkFBaUIsa0JBQWtCLHNDQUFzQyxxQkFBcUIsZ0NBQWdDLFlBQVksNkNBQTZDLCtCQUErQixZQUFZLDZDQUE2QywrQkFBK0IsWUFBWSw2Q0FBNkMsK0JBQStCLFlBQVksdUNBQXVDLGFBQWEsOEJBQThCLHVCQUF1QixvQkFBb0Isa0JBQWtCLDhDQUE4Qyw4QkFBOEIsc0JBQXNCLHFCQUFxQix3QkFBd0IsOEJBQThCLGNBQWMsOEJBQThCLHVCQUF1QixvQkFBb0Isa0JBQWtCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLHNCQUFzQiwrQkFBK0IsZ0JBQWdCLDBCQUEwQiwrQkFBK0IsZ0JBQWdCLDZCQUE2QixXQUFXLDhCQUE4Qix1QkFBdUIsb0JBQW9CLG9CQUFvQiwrQkFBK0IsYUFBYSwrQkFBK0IsWUFBWSxvQkFBb0IsOEJBQThCLHdCQUF3Qix1QkFBdUIsc0JBQXNCLHVCQUF1QixxQkFBcUIsa0JBQWtCLG9CQUFvQixxQkFBcUIsdUJBQXVCLG9CQUFvQixXQUFXLHVCQUF1QixnQkFBZ0Isc0JBQXNCLG9CQUFvQixrQ0FBa0Msd0JBQXdCLHVCQUF1Qix5QkFBeUIsd0NBQXdDLHlCQUF5QixpQkFBaUIsZ0JBQWdCLG9CQUFvQix1QkFBdUIseUJBQXlCLCtCQUErQiwrQkFBK0IsNkNBQTZDLFlBQVksa0JBQWtCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLHVCQUF1Qiw4QkFBOEIsdUVBQXVFLDRCQUE0QixpQkFBaUIseUJBQXlCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLHdDQUF3QyxrQkFBa0IseUJBQXlCLHFCQUFxQixvQkFBb0IseUJBQXlCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHlCQUF5QixpQkFBaUIsMkJBQTJCLGlCQUFpQix5QkFBeUIscUJBQXFCLG9CQUFvQix5QkFBeUIsaUNBQWlDLCtDQUErQyxtQkFBbUIscUJBQXFCLG9CQUFvQiwyQkFBMkIsaUNBQWlDLDJDQUEyQyxnQkFBZ0Isb0JBQW9CLGtCQUFrQixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSw4QkFBOEIseUNBQXlDLFdBQVcsY0FBYyx1QkFBdUIsc0JBQXNCLGVBQWUsa0JBQWtCLGlCQUFpQiw4QkFBOEIsdUJBQXVCLCtDQUErQyxnQ0FBZ0MsZ0NBQWdDLDBCQUEwQix5QkFBeUIsb0JBQW9CLHNCQUFzQiwrQ0FBK0MsMENBQTBDLHVCQUF1Qix3QkFBd0IsNkJBQTZCLHdCQUF3QiwyQkFBMkIsNENBQTRDLHdCQUF3QixxQkFBcUIsOEJBQThCLG9CQUFvQixzQkFBc0IsK0JBQStCLDRDQUE0QyxzQ0FBc0MsdUJBQXVCLHFCQUFxQiwyQkFBMkIseUNBQXlDLCtCQUErQiwyREFBMkQsMkJBQTJCLG9EQUFvRCwwQkFBMEIsK0NBQStDLHNCQUFzQiw0QkFBNEIsb0NBQW9DLHNEQUFzRCw2QkFBNkIsaUNBQWlDLDREQUE0RCw2QkFBNkIsb0NBQW9DLDBCQUEwQixnQ0FBZ0MsdUNBQXVDLHFCQUFxQixvQkFBb0Isd0JBQXdCLCtCQUErQixTQUFTLDJRQUEyUSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxLQUFLLHFCQUFxQixLQUFLLEtBQUsscUJBQXFCLEtBQUssS0FBSyxxQkFBcUIsS0FBSyxLQUFLLHNCQUFzQixLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLGtCQUFrQixNQUFNLEtBQUssdUJBQXVCLEtBQUssS0FBSyx1QkFBdUIsS0FBSyxLQUFLLHdCQUF3QixLQUFLLE1BQU0seUJBQXlCLEtBQUssYUFBYSxjQUFjLFlBQVksV0FBVyxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sYUFBYSxjQUFjLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxLQUFLLHFCQUFxQixLQUFLLEtBQUssd0JBQXdCLEtBQUssYUFBYSxjQUFjLFdBQVcsZUFBZSxLQUFLLEtBQUssd0JBQXdCLEtBQUssVUFBVSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsS0FBSyxnQkFBZ0IsS0FBSyxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLE1BQU0sZ0JBQWdCLE9BQU8saUJBQWlCLE1BQU0sWUFBWSxXQUFXLGVBQWUsS0FBSyxZQUFZLG1CQUFtQixPQUFPLFVBQVUsZUFBZSxLQUFLLFlBQVksbUJBQW1CLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxlQUFlLEtBQUssZ0JBQWdCLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxhQUFhLGNBQWMsYUFBYSxXQUFXLFVBQVUsaUJBQWlCLE1BQU0sWUFBWSxZQUFZLFlBQVksV0FBVyxpQkFBaUIsTUFBTSxVQUFVLGVBQWUsS0FBSyxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sWUFBWSxZQUFZLFdBQVcsWUFBWSxhQUFhLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLGVBQWUsTUFBTSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGNBQWMsWUFBWSxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsVUFBVSwyREFBMkQsZUFBZSxpQkFBaUIsNkJBQTZCLEtBQUssdURBQXVELHNCQUFzQiwyR0FBMkcsaUNBQWlDLHVCQUF1QixPQUFPLGdDQUFnQyx1QkFBdUIsT0FBTyxnQ0FBZ0MsdUJBQXVCLE9BQU8sZ0NBQWdDLHVCQUF1QixPQUFPLFNBQVMsa0VBQWtFLG9CQUFvQix1Q0FBdUMsbUNBQW1DLG1CQUFtQixvQkFBb0IsK0JBQStCLG9CQUFvQixpQ0FBaUMseUNBQXlDLE9BQU8sb0NBQW9DLHlDQUF5QyxPQUFPLGdDQUFnQyx5Q0FBeUMsT0FBTyxnQ0FBZ0MsbUNBQW1DLE9BQU8sS0FBSyxvQkFBb0IscUNBQXFDLHlCQUF5Qix1QkFBdUIsb0JBQW9CLHFDQUFxQyxnQ0FBZ0Msd0JBQXdCLHVCQUF1QiwwQkFBMEIsOEJBQThCLEtBQUssaUJBQWlCLG9DQUFvQyx5QkFBeUIsc0JBQXNCLG9CQUFvQixvQkFBb0IsNkJBQTZCLHFDQUFxQyxzQkFBc0Isb0NBQW9DLHNCQUFzQixPQUFPLGdDQUFnQyx5QkFBeUIsT0FBTyxTQUFTLGNBQWMsc0NBQXNDLHlCQUF5QixzQkFBc0Isb0JBQW9CLGdDQUFnQywyQkFBMkIsT0FBTyxLQUFLLGVBQWUsc0JBQXNCLG9DQUFvQyx5QkFBeUIseUJBQXlCLHdCQUF3Qix5QkFBeUIsNkJBQTZCLFdBQVcsa0JBQWtCLGlDQUFpQyxrREFBa0Qsc0JBQXNCLG9CQUFvQixLQUFLLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQiw4Q0FBOEMsd0JBQXdCLHlCQUF5QiwyQkFBMkIsMEJBQTBCLG9CQUFvQix5QkFBeUIsNEJBQTRCLDJCQUEyQixtQkFBbUIsbUNBQW1DLHNCQUFzQixvQkFBb0IsS0FBSyxxQ0FBcUMsdUJBQXVCLGFBQWEsd0JBQXdCLHNCQUFzQixrQ0FBa0Msd0JBQXdCLDBCQUEwQix5QkFBeUIscUNBQXFDLE9BQU8sT0FBTyxLQUFLLDRCQUE0QixtQkFBbUIsa0JBQWtCLHNCQUFzQix5QkFBeUIseUJBQXlCLGNBQWMsaUNBQWlDLGlEQUFpRCxPQUFPLEtBQUssdUVBQXVFLG9CQUFvQiwwQkFBMEIsMEJBQTBCLG9CQUFvQix5QkFBeUIsb0NBQW9DLGlGQUFpRiw0QkFBNEIsY0FBYywyQkFBMkIsMkJBQTJCLDBCQUEwQixlQUFlLHVDQUF1QyxhQUFhLE9BQU8sZ0VBQWdFLDJCQUEyQix1QkFBdUIsc0JBQXNCLDJCQUEyQiwwQkFBMEIsd0JBQXdCLGdCQUFnQiw2QkFBNkIsU0FBUyxPQUFPLGFBQWEsMkJBQTJCLE9BQU8saUJBQWlCLDJCQUEyQix1QkFBdUIsb0JBQW9CLGdCQUFnQixtQ0FBbUMsbURBQW1ELFNBQVMsT0FBTyxlQUFlLHVCQUF1QixvQkFBb0IsZ0JBQWdCLG1DQUFtQywyQ0FBMkMsU0FBUyxPQUFPLEtBQUssY0FBYyxzQkFBc0Isb0JBQW9CLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQixpQkFBaUIsZ0NBQWdDLDJDQUEyQyxhQUFhLGNBQWMsbUJBQW1CLHNCQUFzQixPQUFPLEtBQUssb0RBQW9ELG9CQUFvQixtQkFBbUIsOEJBQThCLHlCQUF5Qiw0Q0FBNEMseUJBQXlCLHNDQUFzQyw0QkFBNEIsMkJBQTJCLHNCQUFzQix3QkFBd0IsNENBQTRDLHFEQUFxRCxzQkFBc0IsMEJBQTBCLCtCQUErQiwwQkFBMEIsMkJBQTJCLFNBQVMsb0JBQW9CLDBCQUEwQixxQkFBcUIsU0FBUyxPQUFPLHVCQUF1QixzQkFBc0Isd0JBQXdCLCtCQUErQixzQkFBc0Isd0NBQXdDLHdCQUF3Qix1QkFBdUIsNkJBQTZCLDBDQUEwQywrQkFBK0IseUJBQXlCLHlCQUF5QixXQUFXLGtCQUFrQiwwQkFBMEIsV0FBVyxTQUFTLHlCQUF5Qix3QkFBd0IsOEJBQThCLG9DQUFvQyxpQkFBaUIsK0JBQStCLGlDQUFpQyxXQUFXLHVCQUF1QiwrQkFBK0IsMENBQTBDLDRCQUE0QixnQ0FBZ0MsV0FBVyxTQUFTLGlCQUFpQix1QkFBdUIsc0JBQXNCLDBCQUEwQiwrQkFBK0IsU0FBUyxPQUFPLEtBQUssK0JBQStCO0FBQ3Q5YztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWlKO0FBQ2pKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJMkY7QUFDbkgsT0FBTyxpRUFBZSwySEFBTyxJQUFJLGtJQUFjLEdBQUcsa0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Iiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU92ZXJwYXNzOml0YWwsd2dodEAwLDMwMDswLDUwMDswLDcwMDsxLDMwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1zaXplOiA5MCU7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgIGZvbnQtc2l6ZTogODAlOyB9IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICBodG1sIHtcXG4gICAgICBmb250LXNpemU6IDcwJTsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1zaXplOiA2MCU7IH0gfVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogT3ZlcnBhc3MsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Y1ZjVmNTsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3cmVtIDFmcjsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxM3JlbSAxZnI7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTByZW0gMWZyOyB9IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NzVweCkge1xcbiAgICBib2R5IHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSB9XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVFNEFGO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIE92ZXJwYXNzLCBzYW5zLXNlcmlmO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzk2ODM7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDJyZW07IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgcGFkZGluZzogMnJlbTsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgLnNpZGViYXIge1xcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW07IH0gfVxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0RCOTU7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBwYWRkaW5nOiAycmVtOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDc1cHgpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMzsgfSB9XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgMnB4ICM1NWQxYjY7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogIzBiMGIwZjsgfVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2Y1ZjVmNTsgfVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAubWVudS1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlOyB9XFxuICAgIC5tZW51LWl0ZW06aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMDUzODZCO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNXJlbSk7IH1cXG5cXG4uc2lkZWJhci1idXR0b24tbmV3IHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuICAuc2lkZWJhci1idXR0b24tbmV3OmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjdzO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCA1cmVtIDAgMCAwICM1NWQxYjY7IH1cXG5cXG4udG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzk2ODM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMzc5NjgzIDAlLCAjNWFmZjE1IDc0JSk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IH1cXG4gIC50b2Rvcy10ZXh0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtOyB9XFxuICAgIC50b2Rvcy10ZXh0LWRvbmUge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyB9XFxuICAudG9kb3MtY2hlY2sge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnRvZG9zLWNoZWNrOmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzM3OTY4MzsgfVxcbiAgLnRvZG9zLWRhdGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07IH1cXG4gIC50b2Rvcy1lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDRyZW07IH1cXG4gICAgLnRvZG9zLWVkaXQ6aG92ZXIge1xcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC43cztcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCA1cmVtIDAgMCAwICM1NWQxYjY7IH1cXG4gIC50b2Rvcy1kZWxldGUge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDRyZW07IH1cXG4gICAgLnRvZG9zLWRlbGV0ZTpob3ZlciB7XFxuICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjdzO1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDVyZW0gMCAwIDAgcmVkOyB9XFxuXFxuLnBvcHVwLW5ldyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDsgfVxcbiAgLnBvcHVwLW5ldy1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLm1ha2UtbmV3IHtcXG4gIGhlaWdodDogMTNyZW07XFxuICB3aWR0aDogNDByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3ZDdkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMTVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxcbiAgLm1ha2UtbmV3LWhlYWRlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5NjgzO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cXG4gICAgLm1ha2UtbmV3LWhlYWRlci1jb250YWluZXIteEJ1dHRvbiB7XFxuICAgICAgY29sb3I6ICNmODFmMWY7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBmb250LXdlaWdodDogOTAwOyB9XFxuICAgIC5tYWtlLW5ldy1oZWFkZXItY29udGFpbmVyLXRoZWhlYWRlciB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIGZsZXg6IGF1dG87IH1cXG4gIC5tYWtlLW5ldy1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAubWFrZS1uZXctaW5mby1jb250YWluZXItaW5wdXQtdGl0bGUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XFxuICAgICAgbWFyZ2luOiAwLjI1cmVtIDByZW07IH1cXG4gICAgICAubWFrZS1uZXctaW5mby1jb250YWluZXItaW5wdXQtdGl0bGU6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgIGNvbG9yOiAjY2FjN2M3OyB9XFxuICAgICAgLm1ha2UtbmV3LWluZm8tY29udGFpbmVyLWlucHV0LXRpdGxlOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLm1ha2UtbmV3LWluZm8tY29udGFpbmVyLWRhdGUtY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luOiAwLjVyZW0gMCAyLjJyZW0gMDsgfVxcbiAgICAgIC5tYWtlLW5ldy1pbmZvLWNvbnRhaW5lci1kYXRlLWNvbnRhaW5lci1wYXJhIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4ycmVtOyB9XFxuICAgICAgLm1ha2UtbmV3LWluZm8tY29udGFpbmVyLWRhdGUtY29udGFpbmVyLWlucHV0LWRhdGUge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzU1ZDFiNjtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07IH1cXG4gICAgLm1ha2UtbmV3LWluZm8tY29udGFpbmVyLWJ1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9faW5wdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3NpZGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3RvZG9zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19wb3B1cHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVE7RUFDUixVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUVmLGtCQUFrQixFQUFBO0VBQ2xCO0lBSkY7TUFLSSxjQUFjLEVBQUEsRUFZakI7RUFWQztJQVBGO01BUUksY0FBYyxFQUFBLEVBU2pCO0VBUEM7SUFWRjtNQVdJLGNBQWMsRUFBQSxFQU1qQjtFQUpDO0lBYkY7TUFjSSxjQUFjLEVBQUEsRUFHakI7O0FBSUQ7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQzlCK0I7RUQrQi9CLGNDMUJhLEVBQUE7RUQyQmI7SUFSRjtNQVNJLGdDQUFnQyxFQUFBLEVBWW5DO0VBVEM7SUFaRjtNQWFJLGdDQUFnQyxFQUFBLEVBUW5DO0VBTkM7SUFmRjtNQWdCSSxnQ0FBZ0MsRUFB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QUE7TUFOckI7UUFRRyxjSjdDTSxFQUFBO01JcUNUO1FBV0csYUFBYSxFQUFBO0lBR2pCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix5QkFBeUIsRUFBQTtNQUN6QjtRQUNFLGtCQUFrQjtRQUNsQixvQkFBb0IsRUFBQTtNQUV0QjtRQUNFLGtCQUFrQjtRQUNsQix5Qko1RHNCO1FJNkR0QixlQUFlO1FBQ2YsbUJBQW1CLEVBQUE7SUFHdkI7TUFDRSxZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixvQkFBb0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCo6OmFmdGVyLCAqOjpiZWZvcmV7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vL2NoYW5nZSBmb250cyB3aGVuIHRoZSBzY3JlZW4gZ2V0IHNtYWxsZXJcXHJcXG5odG1se1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgLy9vdmVyZmxvdy14IGhpZGRlbiBzbyB3aGVuIHRoZSBzY3JlZW4gZ29lcyByZWFsbHkgc21hbGwgdGhlcmVzIG5vIHNjcm9sbGJhclxcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XFxyXFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcXHJcXG4gICAgZm9udC1zaXplOiA4MCU7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xcclxcbiAgICBmb250LXNpemU6IDcwJTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCl7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjAlO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vL2NoYW5nZSBzY3JlZW4gbGF5b3V0IGFjY29yZGluZyB0byB0aGUgc2l6ZVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtc3RhY2s7XFxyXFxuICBjb2xvcjogJHdoaXRlO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTdyZW0gMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxM3JlbSAxZnI7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIDFmcjtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NzVweCl7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0O1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyIDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LWZhbWlseTpJbXBhY3QsJGZvbnQtc3RhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbiAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1ibHVlO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCl7XFxyXFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tYWlue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWJyaWdodDtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDc1cHgpe1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4ICRibHVlLWxpZ2h0O1xcclxcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjb2xvcjogcmdiKDExLCAxMSwgMTUpO1xcclxcbiAgXFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAvL3RyYW5zaXRpb246IGVhc2UtaW4gMC43cztcXHJcXG4gIC8vYm94LXNoYWRvdzogaW5zZXQgMTByZW0gMCAwIDAgJGJsdWUtbGlnaHQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogJHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU92ZXJwYXNzOml0YWwsd2dodEAwLDMwMDswLDUwMDswLDcwMDsxLDMwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG4kZm9udC1zdGFjazogT3ZlcnBhc3MsIHNhbnMtc2VyaWY7XFxyXFxuJGJsdWUtZGFyazogIzA1Mzg2QjtcXHJcXG4kZ3JlZW4tYmx1ZTogIzM3OTY4MztcXHJcXG4kZ3JlZW4tYnJpZ2h0OiAjNUNEQjk1O1xcclxcbiRncmVlbi1saWdodDogIzhFRTRBRjtcXHJcXG4kd2hpdGU6ICNmNWY1ZjU7XFxyXFxuJGdyZWVuLW5lb246ICM1YWZmMTU7XFxyXFxuJGJsdWU6IHJnYigxLCAxMjUsIDEyNSk7XFxyXFxuJHJlZDogcmdiKDI0OCwgMzEsIDMxKTtcXHJcXG4kZ3JleTogI2NhYzdjNztcXHJcXG4kYmx1ZS1saWdodDogcmdiKDg1LCAyMDksIDE4Mik7XCIsXCIuaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5cIixcIi8vc2lkZWJhciBzdHlsZXNcXHJcXG4ubWVudXtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAmLWl0ZW17XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXHJcXG5cXHJcXG4gIFxcclxcbiAgJjpob3ZlcntcXHJcXG4gICAgY29sb3I6ICRibHVlLWRhcms7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguNXJlbSk7XFxyXFxuICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWJ1dHRvbi1uZXd7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICY6aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC43cztcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXJlbSAwIDAgMCAkYmx1ZS1saWdodDtcXHJcXG4gIH1cXHJcXG59XCIsXCJcXHJcXG4vL2FsbCB0aGUgY29kZSBmb3IgdGhlIGRldGFpbHMgaW4gdGhlIG1haW4gY29udGFpbmVyXFxyXFxuLnRvZG9zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tYmx1ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICRncmVlbi1ibHVlIDAlLCAkZ3JlZW4tbmVvbiA3NCUpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgJi10ZXh0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAmLWRvbmV7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy9jdXN0b20gY2hlY2ttYXJrIHdoZW4gdG9kb2xpc3QgaXMgZG9uZVxcclxcbiAgJi1jaGVja3tcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgIGNvbG9yOiAkZ3JlZW4tYmx1ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJi1kYXRle1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLWVkaXR7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiA0cmVtO1xcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC43cztcXHJcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCA1cmVtIDAgMCAwICRibHVlLWxpZ2h0O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLWRlbGV0ZXtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiA0cmVtO1xcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC43cztcXHJcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCA1cmVtIDAgMCAwIHJlZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIixcIi5wb3B1cC1uZXd7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG5cXHJcXG4gICYtaGlkZGVue1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vL3BvcCB1cCBmb3JtIHRvIGFkZCBhIG5ldyBvbmVcXHJcXG4ubWFrZS1uZXd7XFxyXFxuICBoZWlnaHQ6IDEzcmVtO1xcclxcbiAgd2lkdGg6IDQwcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAxNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgJi1oZWFkZXItY29udGFpbmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tYmx1ZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgICAvL2J1dHRvbiB0byBjbG9zZSB0aGUgcG9wdXBcXHJcXG4gICAgJi14QnV0dG9ue1xcclxcbiAgICAgIGNvbG9yOiAkcmVkO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgfVxcclxcbiAgICAmLXRoZWhlYWRlcntcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgZmxleDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJi1pbmZvLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAmLWlucHV0LXRpdGxle1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHdoaXRlO1xcclxcbiAgICAgIG1hcmdpbjogMC4yNXJlbSAwcmVtO1xcclxcbiAgICAgICY6OnBsYWNlaG9sZGVye1xcclxcbiAgICAgICAgY29sb3I6ICRncmV5O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOmZvY3Vze1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJi1kYXRlLWNvbnRhaW5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgbWFyZ2luOiAwLjVyZW0gMCAyLjJyZW0gMDtcXHJcXG4gICAgICAmLXBhcmF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJi1pbnB1dC1kYXRle1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWUtbGlnaHQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmLWJ1dHRvbntcXHJcXG4gICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgd2lkdGg6IDdyZW07XFxyXFxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJztcclxuY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB7XHJcbiAgbGV0IHRvZG9zO1xyXG4gIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgPT09IG51bGwpe1xyXG4gICAgdG9kb3MgPSBbXTtcclxuICB9ZWxzZXtcclxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XHJcbiAgfVxyXG4gIHRvZG9zLmZvckVhY2hcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==