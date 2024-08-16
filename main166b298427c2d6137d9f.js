/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* High level */

:root {
    font-family: sans-serif, Arial, 'Times New Roman';
    --main-font-family: sans-serif, Arial, 'Times New Roman';
    --main-font-size: 25px;
    --button-font-size: 20px;
    --button-small-font-size: 12px;
    --title-font-size: 35px;
    --current-temp-font-size: 50px;
    --border-radius: 10px;
    --page-width: 70%;
    --title-margin: 20px;
    --background-color: white;
    --btn-selection-color: #4ade80;
}

html {
    box-sizing: border-box;
}
*,
*::before,
*::after {
    box-sizing: inherit;
}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

body {
    margin: 0px;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}

/* Input header */

.header {
    width: 100%;
    height: 120px;
    background-color: #0c4a6e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    box-shadow: 0 4px 2px -2px rgba(67, 67, 67, 0.5);
}

.user-input {
    font-size: var(--main-font-size);
}

.location-label {
    color: white;
    font-weight: bold;
}

#location-search {
    font-size: var(--main-font-size);
    padding: 5px;
    height: 40px;
    border-radius: var(--border-radius);
}

.submit-location {
    font-size: var(--button-font-size);
    height: 40px;
    margin-left: 20px;
    border-radius: var(--border-radius);
    background-color: #06b6d4;
}

.error-message {
    color: red;
    font-size: var(--button-font-size);
}

.loader-gif {
    width: 100px;
}

/* Current Weather Box */

.current-weather {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: var(--page-width);
    height: 200px;
    border: 1px black solid;
    border-radius: var(--border-radius);
    font-size: var(--main-font-size);
    background-color: var(--background-color);
}

.current-location {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: rgba(67, 67, 67, 0.5);
    padding: 10px;
    border-top-left-radius: calc(10px - 1px);
    border-top-right-radius: calc(10px - 1px);
}

.current-body {
    display: grid;
    grid-template-columns: 1fr .5fr .5fr;
    align-items: center;
    padding: 10px;
    flex: 1 1 auto;
}

.current-weather-information {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.current-temperature {
    font-size: var(--current-temp-font-size);
}

.condition-icon {
    width: 100px;
}

.current-max-min {
    display: flex;
    gap: 20px;
}

/* Buttons */

.forecast-buttons {
    display: flex;
}

.forecast-btn {
    width: 220px;
    height: 40px;
    border-radius: 0px;
    background-color: rgb(198, 198, 198);
    font-size: var(--button-font-size);
}

.forecast-selected {
    background-color: var(--btn-selection-color);
}

.change-temp-scale {
    justify-self:end;
    align-self: start;
}

.temp-scale-button {
    font-size: var(--button-small-font-size);
    width: 80px;
    height: 30px;
}

.selected-temp-scale {
    background-color: var(--btn-selection-color);
}

/* Daily + Hourly Forecast */

.forecast,
.hourly-forecast,
.current-weather-info {
    font-size: var(--main-font-size);
    border: 1px black solid;
    border-radius: var(--border-radius);
    width: var(--page-width);
    padding: 10px;
    background-color: var(--background-color);
}

.daily-forecast-body,
.hourly-forecast-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    margin: 0px;
}

.forecast-day,
.hourly-data {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
}

.forecast-day:not(:last-child)::after,
.hourly-data:not(:last-child)::after {
    content: '';
    width: 100%;
    border-bottom: 1px black solid;
    grid-column: 1 / 4;
}

.daily-forecast-title,
.hourly-forecast-title,
.current-weather-info-title {
    font-size: var(--title-font-size);
    font-weight: bold;
}

/* Daily Only */

.forecast-high-low {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.forecast-condition {
    width: 50px;
}

.daily-forecast-title {
    margin-bottom: var(--title-margin);
}

/* Hourly Only */

.day-title {
    font-size: calc(var(--main-font-size) * 1.25);
    font-weight: bold;
    margin: var(--title-margin) 0px;
}

/* Current Weather Information - Bottom */

.current-weather-data {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0px;
    gap: 20px;
    column-gap: 40px;
    align-items: center;
    min-width: fit-content;
}

.current-weather-info-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    min-width: fit-content;
    gap: 10px;
}

.current-weather-info-item:not(:last-child):not(:nth-child(5))::after {
    content: '';
    width: 100%;
    border-bottom: 1px black solid;
    grid-column: 1 / 3;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* High level */\n\n:root {\n    font-family: sans-serif, Arial, 'Times New Roman';\n    --main-font-family: sans-serif, Arial, 'Times New Roman';\n    --main-font-size: 25px;\n    --button-font-size: 20px;\n    --button-small-font-size: 12px;\n    --title-font-size: 35px;\n    --current-temp-font-size: 50px;\n    --border-radius: 10px;\n    --page-width: 70%;\n    --title-margin: 20px;\n    --background-color: white;\n    --btn-selection-color: #4ade80;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n    box-sizing: inherit;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\nbody {\n    margin: 0px;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n}\n\n/* Input header */\n\n.header {\n    width: 100%;\n    height: 120px;\n    background-color: #0c4a6e;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    box-shadow: 0 4px 2px -2px rgba(67, 67, 67, 0.5);\n}\n\n.user-input {\n    font-size: var(--main-font-size);\n}\n\n.location-label {\n    color: white;\n    font-weight: bold;\n}\n\n#location-search {\n    font-size: var(--main-font-size);\n    padding: 5px;\n    height: 40px;\n    border-radius: var(--border-radius);\n}\n\n.submit-location {\n    font-size: var(--button-font-size);\n    height: 40px;\n    margin-left: 20px;\n    border-radius: var(--border-radius);\n    background-color: #06b6d4;\n}\n\n.error-message {\n    color: red;\n    font-size: var(--button-font-size);\n}\n\n.loader-gif {\n    width: 100px;\n}\n\n/* Current Weather Box */\n\n.current-weather {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: var(--page-width);\n    height: 200px;\n    border: 1px black solid;\n    border-radius: var(--border-radius);\n    font-size: var(--main-font-size);\n    background-color: var(--background-color);\n}\n\n.current-location {\n    display: flex;\n    align-items: center;\n    height: 40px;\n    background-color: rgba(67, 67, 67, 0.5);\n    padding: 10px;\n    border-top-left-radius: calc(10px - 1px);\n    border-top-right-radius: calc(10px - 1px);\n}\n\n.current-body {\n    display: grid;\n    grid-template-columns: 1fr .5fr .5fr;\n    align-items: center;\n    padding: 10px;\n    flex: 1 1 auto;\n}\n\n.current-weather-information {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.current-temperature {\n    font-size: var(--current-temp-font-size);\n}\n\n.condition-icon {\n    width: 100px;\n}\n\n.current-max-min {\n    display: flex;\n    gap: 20px;\n}\n\n/* Buttons */\n\n.forecast-buttons {\n    display: flex;\n}\n\n.forecast-btn {\n    width: 220px;\n    height: 40px;\n    border-radius: 0px;\n    background-color: rgb(198, 198, 198);\n    font-size: var(--button-font-size);\n}\n\n.forecast-selected {\n    background-color: var(--btn-selection-color);\n}\n\n.change-temp-scale {\n    justify-self:end;\n    align-self: start;\n}\n\n.temp-scale-button {\n    font-size: var(--button-small-font-size);\n    width: 80px;\n    height: 30px;\n}\n\n.selected-temp-scale {\n    background-color: var(--btn-selection-color);\n}\n\n/* Daily + Hourly Forecast */\n\n.forecast,\n.hourly-forecast,\n.current-weather-info {\n    font-size: var(--main-font-size);\n    border: 1px black solid;\n    border-radius: var(--border-radius);\n    width: var(--page-width);\n    padding: 10px;\n    background-color: var(--background-color);\n}\n\n.daily-forecast-body,\n.hourly-forecast-body {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0px;\n    margin: 0px;\n}\n\n.forecast-day,\n.hourly-data {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n}\n\n.forecast-day:not(:last-child)::after,\n.hourly-data:not(:last-child)::after {\n    content: '';\n    width: 100%;\n    border-bottom: 1px black solid;\n    grid-column: 1 / 4;\n}\n\n.daily-forecast-title,\n.hourly-forecast-title,\n.current-weather-info-title {\n    font-size: var(--title-font-size);\n    font-weight: bold;\n}\n\n/* Daily Only */\n\n.forecast-high-low {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.forecast-condition {\n    width: 50px;\n}\n\n.daily-forecast-title {\n    margin-bottom: var(--title-margin);\n}\n\n/* Hourly Only */\n\n.day-title {\n    font-size: calc(var(--main-font-size) * 1.25);\n    font-weight: bold;\n    margin: var(--title-margin) 0px;\n}\n\n/* Current Weather Information - Bottom */\n\n.current-weather-data {\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0px;\n    gap: 20px;\n    column-gap: 40px;\n    align-items: center;\n    min-width: fit-content;\n}\n\n.current-weather-info-item {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    min-width: fit-content;\n    gap: 10px;\n}\n\n.current-weather-info-item:not(:last-child):not(:nth-child(5))::after {\n    content: '';\n    width: 100%;\n    border-bottom: 1px black solid;\n    grid-column: 1 / 3;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/DOM/buttons.js":
/*!****************************!*\
  !*** ./src/DOM/buttons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayChangeTempScaleButtons: () => (/* binding */ displayChangeTempScaleButtons),
/* harmony export */   displayForecastButtons: () => (/* binding */ displayForecastButtons)
/* harmony export */ });
/* harmony import */ var _page_control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-control.js */ "./src/DOM/page-control.js");
/* harmony import */ var _temp_scale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temp-scale.js */ "./src/DOM/temp-scale.js");
/* harmony import */ var _logic_settings_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/settings-state.js */ "./src/logic/settings-state.js");





/**** Forecast ****/

// Creates HTML button that displays daily forecast
function createShowDailyButton(weather) {
    const showDailyBtn = document.createElement('button');
    showDailyBtn.classList.add('show-daily-forecast', 'forecast-btn');
    showDailyBtn.textContent = 'Show Daily Data';
    showDailyBtn.addEventListener('click', () => {
        _logic_settings_state_js__WEBPACK_IMPORTED_MODULE_2__["default"].setForecastToDaily();
        (0,_page_control_js__WEBPACK_IMPORTED_MODULE_0__.refreshPage)(weather);   
    })
    return showDailyBtn;
}

// Creates HTML button that displays hourly forecast
function createShowHourlyButton(weather) {
    const showHourlyBtn = document.createElement('button');
    showHourlyBtn.classList.add('show-hourly-forecast', 'forecast-btn');
    showHourlyBtn.textContent = 'Show Hourly Data';
    showHourlyBtn.addEventListener('click', () => {
        _logic_settings_state_js__WEBPACK_IMPORTED_MODULE_2__["default"].setForecastToHourly();
        (0,_page_control_js__WEBPACK_IMPORTED_MODULE_0__.refreshPage)(weather);      
    })
    return showHourlyBtn;
}

// Displays the 2 forecast buttons on webpage
function displayForecastButtons(weather) {
    const container = document.querySelector('#container');
    const btnStorage = document.createElement('div');
    btnStorage.classList.add('forecast-buttons');
    
    const dailyBtn = createShowDailyButton(weather);
    const hourlyBtn = createShowHourlyButton(weather);

    btnStorage.appendChild(dailyBtn);
    btnStorage.appendChild(hourlyBtn);
    
    container.appendChild(btnStorage);
}

/**** Change Temperature Scale (F or C) ****/

// Create HTML button to change all temperature values to Fahrenheit
function createFahrenheitBtn(weather) {
    const btn = document.createElement('button');
    btn.classList.add('set-to-fahrenheit', 'temp-scale-button');
    btn.textContent = 'Fahrenheit';
    btn.addEventListener('click', () => {
        weather.setToFahrenheit();
        (0,_page_control_js__WEBPACK_IMPORTED_MODULE_0__.refreshPage)(weather);
        (0,_temp_scale_js__WEBPACK_IMPORTED_MODULE_1__.selectFahrenheit)();
    })
    return btn;
}

// Create HTML button to change all temperature values to Celsius
function createCelsiusBtn(weather) {
    const btn = document.createElement('button');
    btn.classList.add('set-to-celsius', 'temp-scale-button');
    btn.textContent = 'Celsius';
    btn.addEventListener('click', () => {
        weather.setToCelsius();
        (0,_page_control_js__WEBPACK_IMPORTED_MODULE_0__.refreshPage)(weather);
        (0,_temp_scale_js__WEBPACK_IMPORTED_MODULE_1__.selectCelsius)();
    })
    return btn;
}

// Create container that holds both the Fahrenheit and Celsius button
function createTempScaleButtons(weather) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('change-temp-scale');
    const fahBtn = createFahrenheitBtn(weather);
    const celBtn = createCelsiusBtn(weather);
    btnContainer.appendChild(fahBtn);
    btnContainer.appendChild(celBtn);
    (0,_temp_scale_js__WEBPACK_IMPORTED_MODULE_1__.setSelectedTempScale)(weather, fahBtn, celBtn);
    return btnContainer;
}

// Displays the Fahrenheit and Celsius button
function displayChangeTempScaleButtons(weather) {
    const container = document.querySelector('.current-body');
    container.appendChild(createTempScaleButtons(weather));
}

/***/ }),

/***/ "./src/DOM/current-weather-info-bottom.js":
/*!************************************************!*\
  !*** ./src/DOM/current-weather-info-bottom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateCurrentWeatherInfo: () => (/* binding */ populateCurrentWeatherInfo)
/* harmony export */ });
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");


// Create a box that will contain additional information about the current weather
function buildCurrentWeatherInfo() {
    const container = document.querySelector('#container');
    
    // Level 1
    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('current-weather-info');
    container.appendChild(weatherInfo);

    // Level 2
    const title = document.createElement('div');
    title.classList.add('current-weather-info-title');
    title.textContent = 'Current Weather';
    
    const dataContainer = document.createElement('ul');
    dataContainer.classList.add('current-weather-data');

    (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(weatherInfo, title, dataContainer);
}

// Returns the appropriate title name based on the given object key
function getCurrentWeatherInfoTitle(key) {
    switch(key) {
        case 'feelslike_f':
            return 'Feels Like';
        case 'humidity':
            return 'Humidity';
        case 'uv':
            return 'UV Index';
        case 'visibility':
            return 'Visibility';
        case 'wind_mph':
            return 'Wind';
        case 'pressure_in':
            return 'Pressure';
    }
}

// Create and populate the "Current Weather" box with additional information about the weather
function populateCurrentWeatherInfo(weather) {
    buildCurrentWeatherInfo();
    const weatherContainer = document.querySelector('.current-weather-data');
    const weatherInfo = weather.getCurrentWeatherInfo();

    for (const [key, val] of Object.entries(weatherInfo)) {
        const item = document.createElement('li');
        item.classList.add(key, 'current-weather-info-item');
        const title = document.createElement('div');
        title.classList.add('current-weather-info-key');
        const value = document.createElement('div');
        value.classList.add('current-weather-info-value');

        title.textContent = getCurrentWeatherInfoTitle(key);
        value.textContent = val;

        (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(item, title, value);
        weatherContainer.appendChild(item);
    }
}

/***/ }),

/***/ "./src/DOM/current-weather-top.js":
/*!****************************************!*\
  !*** ./src/DOM/current-weather-top.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateCurrentWeather: () => (/* binding */ populateCurrentWeather)
/* harmony export */ });
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");


// Create a box at the top of page used to store basic current weather information
function buildCurrentWeatherBox() {
    const container = document.querySelector('#container');

    // Level 1 (Top) - Current weather container
    const currentWeather = document.createElement('div');
    currentWeather.classList.add('current-weather');
    container.appendChild(currentWeather);
    
    // Level 2 - Container for current location and time
    const currentLocation = document.createElement('div');
    currentLocation.classList.add('current-location');
    currentWeather.appendChild(currentLocation);

    // Level 3 - Spans that stores the above information
    const regionState = document.createElement('span');
    regionState.classList.add('region-state');
    const localTime = document.createElement('localtime');
    localTime.classList.add('localtime');
    (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(currentLocation, regionState, localTime);

    // Level 2 - Container for current temperature
    const currentBody = document.createElement('div');
    currentBody.classList.add('current-body');
    currentWeather.appendChild(currentBody);

    // Level 3 - Sub-container for just the weather information
    const currentWeatherInfo = document.createElement('div');
    currentWeatherInfo.classList.add('current-weather-information');
    currentBody.appendChild(currentWeatherInfo);

    // Level 4 - Temperature information
    const currentTemp = document.createElement('div');
    currentTemp.classList.add('current-temperature');
    const currentCond = document.createElement('div');
    currentCond.classList.add('current-condition');
    const currentMaxMin = document.createElement('div');
    currentMaxMin.classList.add('current-max-min');
    (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(currentWeatherInfo, currentTemp, currentCond, currentMaxMin);

    // Level 5 - Max Min
    const max = document.createElement('div');
    max.classList.add('current-max-temp');
    const min = document.createElement('div');
    min.classList.add('current-min-temp');
    (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(currentMaxMin, max, min);

    // Level 3 - Container for current weather icon
    const currentConditionIcon = document.createElement('div');
    currentConditionIcon.classList.add('current-condition-icon-container');
    currentBody.appendChild(currentConditionIcon);
}

// Populate the top box with basic information about the current weather
function populateCurrentWeather(weather) {
    buildCurrentWeatherBox();
    const currentRegionState = document.querySelector('.region-state');
    const currentLocalTime = document.querySelector('.localtime');
    const currentTemp = document.querySelector('.current-temperature');
    const currentCondition = document.querySelector('.current-condition');
    const conditionIconContainer = document.querySelector('.current-condition-icon-container')
    const maxTemp = document.querySelector('.current-max-temp');
    const minTemp = document.querySelector('.current-min-temp');
    
    let conditionIcon = document.querySelector('.condition-icon')
    if (!conditionIcon) {
        conditionIcon = document.createElement('img');
        conditionIcon.classList.add('condition-icon');
        conditionIconContainer.appendChild(conditionIcon);
    }
    
    const location = weather.getLocation();
    const condition = weather.getCurrentCondition();
    const range = weather.getMaxMinTempToday();
    const territory = location.region ? location.region : location.country; 

    currentRegionState.textContent = `${territory}, ${location.city}`;
    currentRegionState.innerText += '\u00A0';
    currentLocalTime.textContent = `as of ${location.localTime}`;
    currentTemp.textContent = weather.getCurrentTemperature().fahrenheit;
    currentCondition.textContent = condition.text;
    conditionIcon.src = condition.icon;
    conditionIcon.alt = `${condition.text} icon`;
    maxTemp.textContent = `H: ${range.max}`;
    minTemp.textContent = `L: ${range.min}`;
}

/***/ }),

/***/ "./src/DOM/forecast-daily.js":
/*!***********************************!*\
  !*** ./src/DOM/forecast-daily.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateDailyForecastWeather: () => (/* binding */ populateDailyForecastWeather),
/* harmony export */   selectDailyForecast: () => (/* binding */ selectDailyForecast)
/* harmony export */ });
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");


// Create box used to store 3 day forecast
function build3DayForecast(weather) {
    const container = document.querySelector('#container');

    // Level 1
    const forecast = document.createElement('div');
    forecast.classList.add('forecast');
    container.appendChild(forecast);

    // Level 2
    const threeDayForecast = document.createElement('div');
    threeDayForecast.classList.add('daily-forecast');
    forecast.appendChild(threeDayForecast);

    //Level 3 - Holds values for forecast
    const title = document.createElement('div');
    title.classList.add('daily-forecast-title');
    title.textContent = '3 Day Forecast';

    const body = document.createElement('ul');
    body.classList.add('daily-forecast-body');

    (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(threeDayForecast, title, body);
}

// Create a HTML box and populate it with 3 day forecast data
function populateDailyForecastWeather(weather) {
    build3DayForecast(weather);
    const forecastDays = document.querySelector('.daily-forecast-body');
    const forecast = weather.getForecastDays();
    for (const day of forecast) {
        const item = document.createElement('li');
        item.classList.add('forecast-day');

        const date = document.createElement('div');
        date.classList.add('forecast-date');
        item.appendChild(date);

        const condition = document.createElement('img');
        condition.classList.add('forecast-condition');
        item.appendChild(condition);

        const highLow = document.createElement('div');
        highLow.classList.add('forecast-high-low');
        const high = document.createElement('div');
        high.classList.add('forecast-high');
        const low = document.createElement('div');
        low.classList.add('forecast-low');
        highLow.appendChild(high);
        highLow.appendChild(low);
        item.appendChild(highLow);

        date.textContent = day.date;
        condition.src = day.condition.icon;
        condition.alt = day.condition.text;
        high.textContent = `H: ${day.max}`;
        low.textContent = `L: ${day.min}`;

        forecastDays.appendChild(item);
    }
}

// Add class on "Show Daily Data" button to mark it as currently selected
function selectDailyForecast() {
    const showHourlyButtons = document.querySelectorAll('.show-hourly-forecast');
    const showDailyButtons = document.querySelectorAll('.show-daily-forecast');
    showHourlyButtons.forEach((btn) => btn.classList.remove('forecast-selected'));
    showDailyButtons.forEach((btn) => btn.classList.add('forecast-selected'));
}

/***/ }),

/***/ "./src/DOM/forecast-hourly.js":
/*!************************************!*\
  !*** ./src/DOM/forecast-hourly.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateHourlyForecastWeather: () => (/* binding */ populateHourlyForecastWeather),
/* harmony export */   selectHourlyForecast: () => (/* binding */ selectHourlyForecast)
/* harmony export */ });
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");


// Create box used to store hourly forecast
function buildHourlyForecast(weather) {
    const container = document.querySelector('#container');

    // Level 1
    const hourlyForecast = document.createElement('div');
    hourlyForecast.classList.add('hourly-forecast');
    container.appendChild(hourlyForecast);

    // Level 2
    const title = document.createElement('div');
    title.classList.add('hourly-forecast-title');
    title.textContent = '3 Day Hourly Forecast';
    
    const records = document.createElement('div');
    records.classList.add('hourly-forecast-container');

    (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(hourlyForecast, title, records);
}

// Takes in a day object (from the weather object) and creates a div for each hour data
function populateHourlyRecords(day, dayElem) {
    const hours = day.hours;
    for (let i = 0; i < hours.length; i++) {
        const hour = hours[i];
        const hourElem = document.createElement('li');
        hourElem.classList.add('hourly-data');
        hourElem.setAttribute('index', `${i}`);
        dayElem.appendChild(hourElem);

        const time = document.createElement('div');
        time.classList.add('hourly-time');
        time.textContent = hour.time;

        const conditionIcon = document.createElement('img');
        conditionIcon.classList.add('forecast-condition');
        conditionIcon.src = hour.condition.icon;
        conditionIcon.alt = hour.condition.text;

        const temp = document.createElement('div');
        temp.classList.add('forecast-temperature');
        temp.textContent = hour.temp;

        (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(hourElem, time, conditionIcon, temp);
    }
}

// Create a HTML box and populate it with hourly forecast data
function populateHourlyForecastWeather(weather) {
    buildHourlyForecast(weather);
    const hourlyForecast = document.querySelector('.hourly-forecast-container');
    const forecast = weather.getForecastDays();
    
    for (const day of forecast) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day-hourly',`${day.date}`);
        hourlyForecast.appendChild(dayElement);

        const title = document.createElement('div');
        title.classList.add('day-title', `${day.date}`);
        title.textContent = day.date;

        const hourlyData = document.createElement('ul');
        hourlyData.classList.add('hourly-forecast-body', `${day.date}`);

        (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(dayElement, title, hourlyData);

        populateHourlyRecords(day, hourlyData);
    }
}

// Add class on "Show Hourly Data" button to mark it as currently selected
function selectHourlyForecast() {
    const showDailyButtons = document.querySelectorAll('.show-daily-forecast');
    const showHourlyButtons = document.querySelectorAll('.show-hourly-forecast');
    showDailyButtons.forEach((btn) => btn.classList.remove('forecast-selected'));
    showHourlyButtons.forEach((btn) => btn.classList.add('forecast-selected'));
}

/***/ }),

/***/ "./src/DOM/location-input.js":
/*!***********************************!*\
  !*** ./src/DOM/location-input.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateLocationSearch: () => (/* binding */ populateLocationSearch)
/* harmony export */ });
/* harmony import */ var _logic_weather_API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/weather-API.js */ "./src/logic/weather-API.js");
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");
/* harmony import */ var _page_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-control.js */ "./src/DOM/page-control.js");




// Create a search box for users to input a location
function populateLocationSearch() {
    const container = document.querySelector('#container');
    
    // Level 1
    const header = document.createElement('div');
    header.classList.add('header');
    container.appendChild(header);

    // Level 2
    const userInput = document.createElement('div');
    userInput.classList.add('user-input');
    header.appendChild(userInput);

    // Level 3
    const form = document.createElement('form');
    form.setAttribute('action', '');
    userInput.appendChild(form);

    // Level 4
    const label = document.createElement('label');
    label.setAttribute('for', 'location-search');
    label.classList.add('location-label');
    label.textContent = 'Input city or zip code: ';

    const input = document.createElement('input');
    input.setAttribute('type', 'search');
    input.setAttribute('id', 'location-search');

    const button = document.createElement('button');
    button.classList.add('submit-location');
    button.textContent = 'Submit';

    (0,_reusable_functions_js__WEBPACK_IMPORTED_MODULE_1__.appendChildren)(form, label, input, button);

    activateSubmitButton();
}

// Accepts an error message and displays the error
function addErrorMessage(error) {
    const header = document.querySelector('.header');
    let errorMessage = document.createElement('div');
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        errorMessage = existingError;
        errorMessage.textContent = error;
        return;
    }
    errorMessage.classList.add('error-message');
    errorMessage.textContent = error;
    header.appendChild(errorMessage);
}

// Retrieves the weather information given a location string. Retrieves data through the weather API
async function pushWeatherObjToDOM(location) {
    let weather;
    try {
        (0,_page_control_js__WEBPACK_IMPORTED_MODULE_2__.addLoaderGIF)();
        weather = await (0,_logic_weather_API_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location);
    } catch(err) {
        (0,_page_control_js__WEBPACK_IMPORTED_MODULE_2__.removeLoaderGIF)();
        addErrorMessage(err);
        return;
    }
    
    // For testing purposes
    console.log(weather);
    
    (0,_page_control_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage)(weather);
}

// Adds event listener to the submit button. Sends the text within the search box to retrieve the location's weather data
function activateSubmitButton() {
    const submitButton = document.querySelector('.submit-location');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const searchBar = document.querySelector('#location-search');
        pushWeatherObjToDOM(searchBar.value);
        searchBar.value = null;
    })
}

/***/ }),

/***/ "./src/DOM/page-control.js":
/*!*********************************!*\
  !*** ./src/DOM/page-control.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoaderGIF: () => (/* binding */ addLoaderGIF),
/* harmony export */   clearPage: () => (/* binding */ clearPage),
/* harmony export */   refreshPage: () => (/* binding */ refreshPage),
/* harmony export */   refreshWithDailyForecast: () => (/* binding */ refreshWithDailyForecast),
/* harmony export */   refreshWithHourlyForecast: () => (/* binding */ refreshWithHourlyForecast),
/* harmony export */   removeLoaderGIF: () => (/* binding */ removeLoaderGIF),
/* harmony export */   setBackground: () => (/* binding */ setBackground)
/* harmony export */ });
/* harmony import */ var _location_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-input.js */ "./src/DOM/location-input.js");
/* harmony import */ var _current_weather_top_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-weather-top.js */ "./src/DOM/current-weather-top.js");
/* harmony import */ var _forecast_daily_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast-daily.js */ "./src/DOM/forecast-daily.js");
/* harmony import */ var _forecast_hourly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast-hourly.js */ "./src/DOM/forecast-hourly.js");
/* harmony import */ var _current_weather_info_bottom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-weather-info-bottom.js */ "./src/DOM/current-weather-info-bottom.js");
/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons.js */ "./src/DOM/buttons.js");
/* harmony import */ var _logic_settings_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logic/settings-state.js */ "./src/logic/settings-state.js");
/* harmony import */ var _assets_gif_loading_animation_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/gif/loading-animation.gif */ "./src/assets/gif/loading-animation.gif");
/* harmony import */ var _assets_images_background_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/background-1.jpg */ "./src/assets/images/background-1.jpg");
/* harmony import */ var _assets_images_day_1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/day-1.jpg */ "./src/assets/images/day-1.jpg");
/* harmony import */ var _assets_images_night_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/night-1.jpg */ "./src/assets/images/night-1.jpg");












// Clears all the DOM of the webpage
function clearPage() {
    const container = document.querySelector('#container');
    while (container.lastChild) {
        container.lastChild.remove();
    }
}

// Sets the background of the webpage depending on the weather object's day cycle (day vs. night vs. default)
function setBackground(weather = null) {
    if (!weather) {
        document.body.style.backgroundImage = `url(${_assets_images_background_1_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
        return;
    } else if (weather.isDay()) {
        document.body.style.backgroundImage = `url(${_assets_images_day_1_jpg__WEBPACK_IMPORTED_MODULE_9__})`;
    } else {
        document.body.style.backgroundImage = `url(${_assets_images_night_1_jpg__WEBPACK_IMPORTED_MODULE_10__})`;
    }
}

// Creates the search bar and the current weather box
function populateSearchAndCurrent(weather) {
    setBackground(weather);
    (0,_location_input_js__WEBPACK_IMPORTED_MODULE_0__.populateLocationSearch)();
    
    (0,_current_weather_top_js__WEBPACK_IMPORTED_MODULE_1__.populateCurrentWeather)(weather);
    (0,_buttons_js__WEBPACK_IMPORTED_MODULE_5__.displayChangeTempScaleButtons)(weather);
    (0,_buttons_js__WEBPACK_IMPORTED_MODULE_5__.displayForecastButtons)(weather);
}

// Creates a footer at the end of the webpage. Used to add extra space at the bottom for now
function addFooter() {
    const container = document.querySelector('#container');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    container.appendChild(footer);
}

// Clears webpage and re-populates with Daily forecast data
function refreshWithDailyForecast(weather) {
    clearPage();

    populateSearchAndCurrent(weather);
    
    (0,_forecast_daily_js__WEBPACK_IMPORTED_MODULE_2__.populateDailyForecastWeather)(weather);
    (0,_current_weather_info_bottom_js__WEBPACK_IMPORTED_MODULE_4__.populateCurrentWeatherInfo)(weather);
    (0,_forecast_daily_js__WEBPACK_IMPORTED_MODULE_2__.selectDailyForecast)();
    
    addFooter();
}

// Clears webpage and re-populates with Hourly forecast data
function refreshWithHourlyForecast(weather) {
    clearPage();
    
    populateSearchAndCurrent(weather);

    (0,_forecast_hourly_js__WEBPACK_IMPORTED_MODULE_3__.populateHourlyForecastWeather)(weather);
    (0,_buttons_js__WEBPACK_IMPORTED_MODULE_5__.displayForecastButtons)(weather);
    (0,_forecast_hourly_js__WEBPACK_IMPORTED_MODULE_3__.selectHourlyForecast)();

    addFooter();
}

// Clears and repopulates the webpage depending on whether the user selected hourly or daily forecast
function refreshPage(weather) {
    // const selectedForecast = document.querySelector('.forecast-selected');
    const selectedForecast = _logic_settings_state_js__WEBPACK_IMPORTED_MODULE_6__["default"].getForecast();
    if (selectedForecast === 'daily') {
        refreshWithDailyForecast(weather);
    } else if (selectedForecast === 'hourly') {
        refreshWithHourlyForecast(weather);
    } else {
        throw new Error('No forecast type found at refresh');
    }
}

// Displays a buffering gif while awaiting the API to return the weather data
function addLoaderGIF() {
    // const container = document.querySelector('#container');
    const header = document.querySelector('.header');
    const loader = document.createElement('div');
    loader.classList.add('loader-container');
    header.after(loader);

    const loaderGif = document.createElement('img');
    loaderGif.classList.add('loader-gif');
    loaderGif.src = _assets_gif_loading_animation_gif__WEBPACK_IMPORTED_MODULE_7__;
    loaderGif.alt = 'webpage loader';
    loader.appendChild(loaderGif);
}

// Removes the buffering gif
function removeLoaderGIF() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.remove();
    }
}

/***/ }),

/***/ "./src/DOM/reusable-functions.js":
/*!***************************************!*\
  !*** ./src/DOM/reusable-functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChildren: () => (/* binding */ appendChildren),
/* harmony export */   createMultipleElements: () => (/* binding */ createMultipleElements)
/* harmony export */ });

// Append one or more children element to a parent element
function appendChildren(parent, ...children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

// Create one or more elements of the same defined type
function createMultipleElements(elemType, count) {
    const result = []
    for (let i = 0; i < count; i++) {
        result.push(document.createElement(`${elemType}`));
    }
    return result;
}


/***/ }),

/***/ "./src/DOM/start.js":
/*!**************************!*\
  !*** ./src/DOM/start.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _location_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-input.js */ "./src/DOM/location-input.js");
/* harmony import */ var _page_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-control.js */ "./src/DOM/page-control.js");
/* harmony import */ var _tab_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-icon.js */ "./src/DOM/tab-icon.js");




// Starts the webpage
function start() {
    (0,_tab_icon_js__WEBPACK_IMPORTED_MODULE_2__.addTabIcon)();
    (0,_page_control_js__WEBPACK_IMPORTED_MODULE_1__.setBackground)();
    (0,_location_input_js__WEBPACK_IMPORTED_MODULE_0__.populateLocationSearch)();
}




/***/ }),

/***/ "./src/DOM/tab-icon.js":
/*!*****************************!*\
  !*** ./src/DOM/tab-icon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTabIcon: () => (/* binding */ addTabIcon)
/* harmony export */ });
/* harmony import */ var _assets_images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/cloudy.png */ "./src/assets/images/cloudy.png");


// Adds a img icon to the browser tab
function addTabIcon() {
    const head = document.querySelector('head');
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = _assets_images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__;
    head.appendChild(icon);
}

/***/ }),

/***/ "./src/DOM/temp-scale.js":
/*!*******************************!*\
  !*** ./src/DOM/temp-scale.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectCelsius: () => (/* binding */ selectCelsius),
/* harmony export */   selectFahrenheit: () => (/* binding */ selectFahrenheit),
/* harmony export */   setSelectedTempScale: () => (/* binding */ setSelectedTempScale)
/* harmony export */ });
// Changes the settings-state module to be either Fahrenheit or Celsius
function setSelectedTempScale(weather, FahrenheitBtn, CelsiusBtn) {
    if (weather.getTempScale() === 'fahrenheit') {
        setAsSelectedScale(FahrenheitBtn);
    } else if (weather.getTempScale() === 'celsius') {
        setAsSelectedScale(CelsiusBtn);
    }
}

// Accepts two button elements: the first will receive a class indicating that it is selected, while the second will have it removed
function setAsSelectedScale(selectedBtn, deselectedBtn=null) {
    selectedBtn.classList.add('selected-temp-scale');
    if (deselectedBtn) {
        deselectedBtn.classList.remove('selected-temp-scale');
    }
}

// Changes the settings-state module to be Fahrenheit
function selectFahrenheit() {
    const fahrenheitBtn = document.querySelector('.set-to-fahrenheit');
    const celsiusBtn = document.querySelector('.set-to-celsius');
    setAsSelectedScale(fahrenheitBtn, celsiusBtn);
}

// Changes the settings-state module to be Celsius
function selectCelsius() {
    const celsiusBtn = document.querySelector('.set-to-celsius');
    const fahrenheitBtn = document.querySelector('.set-to-fahrenheit');
    setAsSelectedScale(celsiusBtn, fahrenheitBtn);
}

/***/ }),

/***/ "./src/logic/logic-functions.js":
/*!**************************************!*\
  !*** ./src/logic/logic-functions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTo12HourClock: () => (/* binding */ convertTo12HourClock)
/* harmony export */ });
// Converts a 24 hour time format (ex: 18:42) to a 12 hour format (6:42 pm)
function convertTo12HourClock(time) {
    const timeObj = new Date(time);
    const hour = timeObj.getHours();
    const hours = (hour % 12) || 12;
    let minutes = timeObj.getMinutes();
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    const amOrPm = hour >= 12 ? 'pm' : 'am';

    return `${hours}:${minutes} ${amOrPm}`;
}

/***/ }),

/***/ "./src/logic/settings-state.js":
/*!*************************************!*\
  !*** ./src/logic/settings-state.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module that stores the state of the webpage e.g. Whether to display fahrenheit or celsius data
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    forecast: 'daily',
    tempScale: 'fahrenheit',

    setForecastToDaily() {
        this.forecast  = 'daily';
    },

    setForecastToHourly() {
        this.forecast = 'hourly';
    },

    getForecast() {
        return this.forecast;
    },

    setToFahrenheit() {
        this.tempScale = 'fahrenheit';
    },

    setToCelsius() {
        this.tempScale = 'celsius';
    },

    getTempScale() {
        return this.tempScale;
    }
});

/***/ }),

/***/ "./src/logic/weather-API.js":
/*!**********************************!*\
  !*** ./src/logic/weather-API.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _weather_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-object.js */ "./src/logic/weather-object.js");


// Makes a request to the weather API to retrieve weather object based on location parameter 
async function getWeather(location) {
    //Delete later
    // const wait = () => {
    //     return new Promise ((resolve, reject) => setTimeout(resolve, 5000));
    // }
    // await wait();
    //
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a07423bee1184831ba1224536240806&q=${location}&days=3`, {mode:'cors'});
    const respObj = await response.json();

    console.log('first', respObj);

    checkResponseErrors(respObj);

    const newObj = (0,_weather_object_js__WEBPACK_IMPORTED_MODULE_0__.createWeatherObject)(respObj);

    return newObj;
   
}

// Checks the API response object to see if it has any errors, and if it does it throws that error
function checkResponseErrors(response) {
    if (!response.hasOwnProperty('error')) {
        return;
    } else {
        if (response.error.code === 1003) {
            throw new Error('Please do not submit empty search bar');
        } else if (response.error.code === 1006) {
            throw new Error('No location found matching your search');
        } else {
            throw new Error(response.error.message);
        }
    }
}




/***/ }),

/***/ "./src/logic/weather-object.js":
/*!*************************************!*\
  !*** ./src/logic/weather-object.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWeatherObject: () => (/* binding */ createWeatherObject)
/* harmony export */ });
/* harmony import */ var _logic_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic-functions.js */ "./src/logic/logic-functions.js");
/* harmony import */ var _settings_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-state.js */ "./src/logic/settings-state.js");



// Factory function that returns an object which contains methods used to interact with the weather object retrieved from the API
function createWeatherObjectMethods() {
    
    function turnToDegrees(temp) {
        return `${Math.round(temp)}°`
    }
    
    function getTemp(temp_f, temp_c) {
    // const getTemp = (temp_f, temp_c) => {
        // console.log('test', this.tempScale);
        if (_settings_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTempScale() === 'fahrenheit') {
            return turnToDegrees(temp_f);
        } else if (_settings_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTempScale() === 'celsius') {
            return turnToDegrees(temp_c);
        } else {
            throw new Error('Object is neither set to fahrenheit nor celsius');
        }
    }

    function setToFahrenheit() {
        _settings_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].setToFahrenheit();
    }

    function setToCelsius() {
        _settings_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].setToCelsius();
    }

    function getTempScale() {
        return _settings_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTempScale();
    }

    function getLocation() {
        return {
            city: this.location.name,
            region: this.location.region,
            country: this.location.country,
            localTime: (0,_logic_functions_js__WEBPACK_IMPORTED_MODULE_0__.convertTo12HourClock)(this.location.localtime)
        };
    }

    function getCurrentTemperature() {
        return {
            fahrenheit: getTemp(this.current.temp_f, this.current.temp_c), 
            // celsius: turnToDegrees(this.current.temp_c)
        };
    }

    function getCurrentCondition() {
        return {text: this.current.condition.text, icon: `https:${this.current.condition.icon}`};
    }

    function getCurrentWeatherInfo() {
        return {
            feelslike_f: getTemp(this.current.feelslike_f, this.current.feelslike_c),
            humidity: `${this.current.humidity}%`,
            uv: this.current.uv,
            visibility: `${this.current.vis_miles} mi`,
            wind_mph: `${Math.round(this.current.wind_mph)} mph`,
            pressure_in: `${Math.round(this.current.pressure_in)} in`
        }
    }
    
    function getMaxMinTempToday() {
        return {
            max: getTemp(this.forecast.forecastday[0].day.maxtemp_f, this.forecast.forecastday[0].day.maxtemp_c), 
            min: getTemp(this.forecast.forecastday[0].day.mintemp_f, this.forecast.forecastday[0].day.mintemp_c)
        };
    }

    function getHourlyData(hours, now, self) {
        const result = [];
        
        for (const hour of hours) {
            if (now > hour.time) {
                continue;
            }
            result.push({
                time: (0,_logic_functions_js__WEBPACK_IMPORTED_MODULE_0__.convertTo12HourClock)(hour.time),
                temp: getTemp(hour.temp_f, hour.temp_c),
                condition: {
                    text: hour.condition.text,
                    icon: `https:${hour.condition.icon}`
                }
            })
        }
        return result;
    } 

    function getForecastDays() {
        const result = [];
        for (const forecastDay of this.forecast.forecastday) {
            result.push( {
                date: forecastDay.date,
                max: getTemp(forecastDay.day.maxtemp_f, forecastDay.day.maxtemp_c),
                min: getTemp(forecastDay.day.mintemp_f, forecastDay.day.mintemp_c),
                condition: {
                    text: forecastDay.day.condition.text, 
                    icon: `https:${forecastDay.day.condition.icon}`
                },
                hours: getHourlyData(forecastDay.hour, this.location.localtime, this)
            })
        }
        return result;
    }

    function isDay() {
        return this.current.is_day === 1;
    }

    return {setToFahrenheit, setToCelsius, getTempScale, getLocation, getCurrentTemperature, getCurrentCondition, getCurrentWeatherInfo, getMaxMinTempToday, getForecastDays, isDay};
} 

// Combines the object from the API and the object that holds all the methods (created from "createWeatherObjectMethods()")
function createWeatherObject(responseObj) {
    return Object.assign({}, responseObj, createWeatherObjectMethods());
}

/***/ }),

/***/ "./src/assets/gif/loading-animation.gif":
/*!**********************************************!*\
  !*** ./src/assets/gif/loading-animation.gif ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/loading-animation-970cff009af768f022d4.gif";

/***/ }),

/***/ "./src/assets/images/background-1.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/background-1.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-1-ac96a17c71057d0087aa.jpg";

/***/ }),

/***/ "./src/assets/images/cloudy.png":
/*!**************************************!*\
  !*** ./src/assets/images/cloudy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cloudy-a6d0b7d87d2022baaf47.png";

/***/ }),

/***/ "./src/assets/images/day-1.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/day-1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/day-1-29c45b12c49881a40caa.jpg";

/***/ }),

/***/ "./src/assets/images/night-1.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/night-1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/night-1-d33c2c4b242fbe5785b3.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _DOM_start_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/start.js */ "./src/DOM/start.js");



(0,_DOM_start_js__WEBPACK_IMPORTED_MODULE_1__.start)();
// getWeather('paris');



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbjE2NmIyOTg0MjdjMmQ2MTM3ZDlmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4RkFBOEYsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEs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Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7OztBQ0E0QjtBQUNXOztBQUV2QyxvREFBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS9idXR0b25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS9jdXJyZW50LXdlYXRoZXItaW5mby1ib3R0b20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NL2N1cnJlbnQtd2VhdGhlci10b3AuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NL2ZvcmVjYXN0LWRhaWx5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS9mb3JlY2FzdC1ob3VybHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NL2xvY2F0aW9uLWlucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS9wYWdlLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NL3JldXNhYmxlLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00vc3RhcnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NL3RhYi1pY29uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS90ZW1wLXNjYWxlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvZ2ljL2xvZ2ljLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2dpYy9zZXR0aW5ncy1zdGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2dpYy93ZWF0aGVyLUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2dpYy93ZWF0aGVyLW9iamVjdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBIaWdoIGxldmVsICovXG5cbjpyb290IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgQXJpYWwsICdUaW1lcyBOZXcgUm9tYW4nO1xuICAgIC0tbWFpbi1mb250LWZhbWlseTogc2Fucy1zZXJpZiwgQXJpYWwsICdUaW1lcyBOZXcgUm9tYW4nO1xuICAgIC0tbWFpbi1mb250LXNpemU6IDI1cHg7XG4gICAgLS1idXR0b24tZm9udC1zaXplOiAyMHB4O1xuICAgIC0tYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZTogMTJweDtcbiAgICAtLXRpdGxlLWZvbnQtc2l6ZTogMzVweDtcbiAgICAtLWN1cnJlbnQtdGVtcC1mb250LXNpemU6IDUwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC0tcGFnZS13aWR0aDogNzAlO1xuICAgIC0tdGl0bGUtbWFyZ2luOiAyMHB4O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4tc2VsZWN0aW9uLWNvbG9yOiAjNGFkZTgwO1xufVxuXG5odG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4jY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDUwcHg7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi8qIElucHV0IGhlYWRlciAqL1xuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IHJnYmEoNjcsIDY3LCA2NywgMC41KTtcbn1cblxuLnVzZXItaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xufVxuXG4ubG9jYXRpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2xvY2F0aW9uLXNlYXJjaCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnN1Ym1pdC1sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2YjZkNDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcbn1cblxuLmxvYWRlci1naWYge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLyogQ3VycmVudCBXZWF0aGVyIEJveCAqL1xuXG4uY3VycmVudC13ZWF0aGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5jdXJyZW50LWxvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDY3LCA2NywgMC41KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoMTBweCAtIDFweCk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoMTBweCAtIDFweCk7XG59XG5cbi5jdXJyZW50LWJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgLjVmciAuNWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1pbmZvcm1hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4uY3VycmVudC10ZW1wZXJhdHVyZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1jdXJyZW50LXRlbXAtZm9udC1zaXplKTtcbn1cblxuLmNvbmRpdGlvbi1pY29uIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5jdXJyZW50LW1heC1taW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4vKiBCdXR0b25zICovXG5cbi5mb3JlY2FzdC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9yZWNhc3QtYnRuIHtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAxOTgsIDE5OCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcbn1cblxuLmZvcmVjYXN0LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tc2VsZWN0aW9uLWNvbG9yKTtcbn1cblxuLmNoYW5nZS10ZW1wLXNjYWxlIHtcbiAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG4udGVtcC1zY2FsZS1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSk7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uc2VsZWN0ZWQtdGVtcC1zY2FsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLXNlbGVjdGlvbi1jb2xvcik7XG59XG5cbi8qIERhaWx5ICsgSG91cmx5IEZvcmVjYXN0ICovXG5cbi5mb3JlY2FzdCxcbi5ob3VybHktZm9yZWNhc3QsXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uZGFpbHktZm9yZWNhc3QtYm9keSxcbi5ob3VybHktZm9yZWNhc3QtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmZvcmVjYXN0LWRheSxcbi5ob3VybHktZGF0YSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9yZWNhc3QtZGF5Om5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyLFxuLmhvdXJseS1kYXRhOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xufVxuXG4uZGFpbHktZm9yZWNhc3QtdGl0bGUsXG4uaG91cmx5LWZvcmVjYXN0LXRpdGxlLFxuLmN1cnJlbnQtd2VhdGhlci1pbmZvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRpdGxlLWZvbnQtc2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIERhaWx5IE9ubHkgKi9cblxuLmZvcmVjYXN0LWhpZ2gtbG93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLmZvcmVjYXN0LWNvbmRpdGlvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5kYWlseS1mb3JlY2FzdC10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tdGl0bGUtbWFyZ2luKTtcbn1cblxuLyogSG91cmx5IE9ubHkgKi9cblxuLmRheS10aXRsZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1haW4tZm9udC1zaXplKSAqIDEuMjUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogdmFyKC0tdGl0bGUtbWFyZ2luKSAwcHg7XG59XG5cbi8qIEN1cnJlbnQgV2VhdGhlciBJbmZvcm1hdGlvbiAtIEJvdHRvbSAqL1xuXG4uY3VycmVudC13ZWF0aGVyLWRhdGEge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gICAgY29sdW1uLWdhcDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5jdXJyZW50LXdlYXRoZXItaW5mby1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGdhcDogMTBweDtcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1pbmZvLWl0ZW06bm90KDpsYXN0LWNoaWxkKTpub3QoOm50aC1jaGlsZCg1KSk6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7O0FBRWY7SUFDSSxpREFBaUQ7SUFDakQsd0RBQXdEO0lBQ3hELHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixvQkFB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VCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhpZ2ggbGV2ZWwgKi9cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBBcmlhbCwgJ1RpbWVzIE5ldyBSb21hbic7XFxuICAgIC0tbWFpbi1mb250LWZhbWlseTogc2Fucy1zZXJpZiwgQXJpYWwsICdUaW1lcyBOZXcgUm9tYW4nO1xcbiAgICAtLW1haW4tZm9udC1zaXplOiAyNXB4O1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDIwcHg7XFxuICAgIC0tYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZTogMTJweDtcXG4gICAgLS10aXRsZS1mb250LXNpemU6IDM1cHg7XFxuICAgIC0tY3VycmVudC10ZW1wLWZvbnQtc2l6ZTogNTBweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAtLXBhZ2Utd2lkdGg6IDcwJTtcXG4gICAgLS10aXRsZS1tYXJnaW46IDIwcHg7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC0tYnRuLXNlbGVjdGlvbi1jb2xvcjogIzRhZGU4MDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi8qIElucHV0IGhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggcmdiYSg2NywgNjcsIDY3LCAwLjUpO1xcbn1cXG5cXG4udXNlci1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xcbn1cXG5cXG4ubG9jYXRpb24tbGFiZWwge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbG9jYXRpb24tc2VhcmNoIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLnN1Ym1pdC1sb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiNmQ0O1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5sb2FkZXItZ2lmIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4vKiBDdXJyZW50IFdlYXRoZXIgQm94ICovXFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uY3VycmVudC1sb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NywgNjcsIDY3LCAwLjUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKDEwcHggLSAxcHgpO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYygxMHB4IC0gMXB4KTtcXG59XFxuXFxuLmN1cnJlbnQtYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIC41ZnIgLjVmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWN1cnJlbnQtdGVtcC1mb250LXNpemUpO1xcbn1cXG5cXG4uY29uZGl0aW9uLWljb24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5jdXJyZW50LW1heC1taW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG5cXG4uZm9yZWNhc3QtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mb3JlY2FzdC1idG4ge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5mb3JlY2FzdC1zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1zZWxlY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4uY2hhbmdlLXRlbXAtc2NhbGUge1xcbiAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnRlbXAtc2NhbGUtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tc21hbGwtZm9udC1zaXplKTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRlbXAtc2NhbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tc2VsZWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLyogRGFpbHkgKyBIb3VybHkgRm9yZWNhc3QgKi9cXG5cXG4uZm9yZWNhc3QsXFxuLmhvdXJseS1mb3JlY2FzdCxcXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xcbiAgICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uZGFpbHktZm9yZWNhc3QtYm9keSxcXG4uaG91cmx5LWZvcmVjYXN0LWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSxcXG4uaG91cmx5LWRhdGEge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5Om5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyLFxcbi5ob3VybHktZGF0YTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxufVxcblxcbi5kYWlseS1mb3JlY2FzdC10aXRsZSxcXG4uaG91cmx5LWZvcmVjYXN0LXRpdGxlLFxcbi5jdXJyZW50LXdlYXRoZXItaW5mby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIERhaWx5IE9ubHkgKi9cXG5cXG4uZm9yZWNhc3QtaGlnaC1sb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5mb3JlY2FzdC1jb25kaXRpb24ge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmRhaWx5LWZvcmVjYXN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tdGl0bGUtbWFyZ2luKTtcXG59XFxuXFxuLyogSG91cmx5IE9ubHkgKi9cXG5cXG4uZGF5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1haW4tZm9udC1zaXplKSAqIDEuMjUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiB2YXIoLS10aXRsZS1tYXJnaW4pIDBweDtcXG59XFxuXFxuLyogQ3VycmVudCBXZWF0aGVyIEluZm9ybWF0aW9uIC0gQm90dG9tICovXFxuXFxuLmN1cnJlbnQtd2VhdGhlci1kYXRhIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaW5mby1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pbmZvLWl0ZW06bm90KDpsYXN0LWNoaWxkKTpub3QoOm50aC1jaGlsZCg1KSk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cmVmcmVzaFBhZ2V9IGZyb20gJy4vcGFnZS1jb250cm9sLmpzJztcbmltcG9ydCB7c2VsZWN0RmFocmVuaGVpdCwgc2VsZWN0Q2Vsc2l1c30gZnJvbSAnLi90ZW1wLXNjYWxlLmpzJztcbmltcG9ydCBwYWdlU3RhdGUgZnJvbSAnLi4vbG9naWMvc2V0dGluZ3Mtc3RhdGUuanMnO1xuaW1wb3J0IHtzZXRTZWxlY3RlZFRlbXBTY2FsZX0gZnJvbSAnLi90ZW1wLXNjYWxlLmpzJztcblxuLyoqKiogRm9yZWNhc3QgKioqKi9cblxuLy8gQ3JlYXRlcyBIVE1MIGJ1dHRvbiB0aGF0IGRpc3BsYXlzIGRhaWx5IGZvcmVjYXN0XG5mdW5jdGlvbiBjcmVhdGVTaG93RGFpbHlCdXR0b24od2VhdGhlcikge1xuICAgIGNvbnN0IHNob3dEYWlseUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNob3dEYWlseUJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93LWRhaWx5LWZvcmVjYXN0JywgJ2ZvcmVjYXN0LWJ0bicpO1xuICAgIHNob3dEYWlseUJ0bi50ZXh0Q29udGVudCA9ICdTaG93IERhaWx5IERhdGEnO1xuICAgIHNob3dEYWlseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGFnZVN0YXRlLnNldEZvcmVjYXN0VG9EYWlseSgpO1xuICAgICAgICByZWZyZXNoUGFnZSh3ZWF0aGVyKTsgICBcbiAgICB9KVxuICAgIHJldHVybiBzaG93RGFpbHlCdG47XG59XG5cbi8vIENyZWF0ZXMgSFRNTCBidXR0b24gdGhhdCBkaXNwbGF5cyBob3VybHkgZm9yZWNhc3RcbmZ1bmN0aW9uIGNyZWF0ZVNob3dIb3VybHlCdXR0b24od2VhdGhlcikge1xuICAgIGNvbnN0IHNob3dIb3VybHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzaG93SG91cmx5QnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3ctaG91cmx5LWZvcmVjYXN0JywgJ2ZvcmVjYXN0LWJ0bicpO1xuICAgIHNob3dIb3VybHlCdG4udGV4dENvbnRlbnQgPSAnU2hvdyBIb3VybHkgRGF0YSc7XG4gICAgc2hvd0hvdXJseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGFnZVN0YXRlLnNldEZvcmVjYXN0VG9Ib3VybHkoKTtcbiAgICAgICAgcmVmcmVzaFBhZ2Uod2VhdGhlcik7ICAgICAgXG4gICAgfSlcbiAgICByZXR1cm4gc2hvd0hvdXJseUJ0bjtcbn1cblxuLy8gRGlzcGxheXMgdGhlIDIgZm9yZWNhc3QgYnV0dG9ucyBvbiB3ZWJwYWdlXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvcmVjYXN0QnV0dG9ucyh3ZWF0aGVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJ0blN0b3JhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5TdG9yYWdlLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWJ1dHRvbnMnKTtcbiAgICBcbiAgICBjb25zdCBkYWlseUJ0biA9IGNyZWF0ZVNob3dEYWlseUJ1dHRvbih3ZWF0aGVyKTtcbiAgICBjb25zdCBob3VybHlCdG4gPSBjcmVhdGVTaG93SG91cmx5QnV0dG9uKHdlYXRoZXIpO1xuXG4gICAgYnRuU3RvcmFnZS5hcHBlbmRDaGlsZChkYWlseUJ0bik7XG4gICAgYnRuU3RvcmFnZS5hcHBlbmRDaGlsZChob3VybHlCdG4pO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5TdG9yYWdlKTtcbn1cblxuLyoqKiogQ2hhbmdlIFRlbXBlcmF0dXJlIFNjYWxlIChGIG9yIEMpICoqKiovXG5cbi8vIENyZWF0ZSBIVE1MIGJ1dHRvbiB0byBjaGFuZ2UgYWxsIHRlbXBlcmF0dXJlIHZhbHVlcyB0byBGYWhyZW5oZWl0XG5mdW5jdGlvbiBjcmVhdGVGYWhyZW5oZWl0QnRuKHdlYXRoZXIpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnc2V0LXRvLWZhaHJlbmhlaXQnLCAndGVtcC1zY2FsZS1idXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnRmFocmVuaGVpdCc7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3ZWF0aGVyLnNldFRvRmFocmVuaGVpdCgpO1xuICAgICAgICByZWZyZXNoUGFnZSh3ZWF0aGVyKTtcbiAgICAgICAgc2VsZWN0RmFocmVuaGVpdCgpO1xuICAgIH0pXG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuLy8gQ3JlYXRlIEhUTUwgYnV0dG9uIHRvIGNoYW5nZSBhbGwgdGVtcGVyYXR1cmUgdmFsdWVzIHRvIENlbHNpdXNcbmZ1bmN0aW9uIGNyZWF0ZUNlbHNpdXNCdG4od2VhdGhlcikge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzZXQtdG8tY2Vsc2l1cycsICd0ZW1wLXNjYWxlLWJ1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdDZWxzaXVzJztcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdlYXRoZXIuc2V0VG9DZWxzaXVzKCk7XG4gICAgICAgIHJlZnJlc2hQYWdlKHdlYXRoZXIpO1xuICAgICAgICBzZWxlY3RDZWxzaXVzKCk7XG4gICAgfSlcbiAgICByZXR1cm4gYnRuO1xufVxuXG4vLyBDcmVhdGUgY29udGFpbmVyIHRoYXQgaG9sZHMgYm90aCB0aGUgRmFocmVuaGVpdCBhbmQgQ2Vsc2l1cyBidXR0b25cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBTY2FsZUJ1dHRvbnMod2VhdGhlcikge1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtdGVtcC1zY2FsZScpO1xuICAgIGNvbnN0IGZhaEJ0biA9IGNyZWF0ZUZhaHJlbmhlaXRCdG4od2VhdGhlcik7XG4gICAgY29uc3QgY2VsQnRuID0gY3JlYXRlQ2Vsc2l1c0J0bih3ZWF0aGVyKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZmFoQnRuKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2VsQnRuKTtcbiAgICBzZXRTZWxlY3RlZFRlbXBTY2FsZSh3ZWF0aGVyLCBmYWhCdG4sIGNlbEJ0bik7XG4gICAgcmV0dXJuIGJ0bkNvbnRhaW5lcjtcbn1cblxuLy8gRGlzcGxheXMgdGhlIEZhaHJlbmhlaXQgYW5kIENlbHNpdXMgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNoYW5nZVRlbXBTY2FsZUJ1dHRvbnMod2VhdGhlcikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWJvZHknKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGVtcFNjYWxlQnV0dG9ucyh3ZWF0aGVyKSk7XG59IiwiaW1wb3J0IHthcHBlbmRDaGlsZHJlbn0gZnJvbSAnLi9yZXVzYWJsZS1mdW5jdGlvbnMuanMnO1xuXG4vLyBDcmVhdGUgYSBib3ggdGhhdCB3aWxsIGNvbnRhaW4gYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB3ZWF0aGVyXG5mdW5jdGlvbiBidWlsZEN1cnJlbnRXZWF0aGVySW5mbygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgXG4gICAgLy8gTGV2ZWwgMVxuICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLWluZm8nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckluZm8pO1xuXG4gICAgLy8gTGV2ZWwgMlxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLWluZm8tdGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDdXJyZW50IFdlYXRoZXInO1xuICAgIFxuICAgIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGRhdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLWRhdGEnKTtcblxuICAgIGFwcGVuZENoaWxkcmVuKHdlYXRoZXJJbmZvLCB0aXRsZSwgZGF0YUNvbnRhaW5lcik7XG59XG5cbi8vIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIHRpdGxlIG5hbWUgYmFzZWQgb24gdGhlIGdpdmVuIG9iamVjdCBrZXlcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVySW5mb1RpdGxlKGtleSkge1xuICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgY2FzZSAnZmVlbHNsaWtlX2YnOlxuICAgICAgICAgICAgcmV0dXJuICdGZWVscyBMaWtlJztcbiAgICAgICAgY2FzZSAnaHVtaWRpdHknOlxuICAgICAgICAgICAgcmV0dXJuICdIdW1pZGl0eSc7XG4gICAgICAgIGNhc2UgJ3V2JzpcbiAgICAgICAgICAgIHJldHVybiAnVVYgSW5kZXgnO1xuICAgICAgICBjYXNlICd2aXNpYmlsaXR5JzpcbiAgICAgICAgICAgIHJldHVybiAnVmlzaWJpbGl0eSc7XG4gICAgICAgIGNhc2UgJ3dpbmRfbXBoJzpcbiAgICAgICAgICAgIHJldHVybiAnV2luZCc7XG4gICAgICAgIGNhc2UgJ3ByZXNzdXJlX2luJzpcbiAgICAgICAgICAgIHJldHVybiAnUHJlc3N1cmUnO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIGFuZCBwb3B1bGF0ZSB0aGUgXCJDdXJyZW50IFdlYXRoZXJcIiBib3ggd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3ZWF0aGVyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVDdXJyZW50V2VhdGhlckluZm8od2VhdGhlcikge1xuICAgIGJ1aWxkQ3VycmVudFdlYXRoZXJJbmZvKCk7XG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXItZGF0YScpO1xuICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gd2VhdGhlci5nZXRDdXJyZW50V2VhdGhlckluZm8oKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh3ZWF0aGVySW5mbykpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChrZXksICdjdXJyZW50LXdlYXRoZXItaW5mby1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtd2VhdGhlci1pbmZvLWtleScpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXItaW5mby12YWx1ZScpO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZ2V0Q3VycmVudFdlYXRoZXJJbmZvVGl0bGUoa2V5KTtcbiAgICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSB2YWw7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oaXRlbSwgdGl0bGUsIHZhbHVlKTtcbiAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG59IiwiaW1wb3J0IHthcHBlbmRDaGlsZHJlbn0gZnJvbSAnLi9yZXVzYWJsZS1mdW5jdGlvbnMuanMnO1xuXG4vLyBDcmVhdGUgYSBib3ggYXQgdGhlIHRvcCBvZiBwYWdlIHVzZWQgdG8gc3RvcmUgYmFzaWMgY3VycmVudCB3ZWF0aGVyIGluZm9ybWF0aW9uXG5mdW5jdGlvbiBidWlsZEN1cnJlbnRXZWF0aGVyQm94KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcblxuICAgIC8vIExldmVsIDEgKFRvcCkgLSBDdXJyZW50IHdlYXRoZXIgY29udGFpbmVyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXIpO1xuICAgIFxuICAgIC8vIExldmVsIDIgLSBDb250YWluZXIgZm9yIGN1cnJlbnQgbG9jYXRpb24gYW5kIHRpbWVcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50TG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1sb2NhdGlvbicpO1xuICAgIGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgICAvLyBMZXZlbCAzIC0gU3BhbnMgdGhhdCBzdG9yZXMgdGhlIGFib3ZlIGluZm9ybWF0aW9uXG4gICAgY29uc3QgcmVnaW9uU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcmVnaW9uU3RhdGUuY2xhc3NMaXN0LmFkZCgncmVnaW9uLXN0YXRlJyk7XG4gICAgY29uc3QgbG9jYWxUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9jYWx0aW1lJyk7XG4gICAgbG9jYWxUaW1lLmNsYXNzTGlzdC5hZGQoJ2xvY2FsdGltZScpO1xuICAgIGFwcGVuZENoaWxkcmVuKGN1cnJlbnRMb2NhdGlvbiwgcmVnaW9uU3RhdGUsIGxvY2FsVGltZSk7XG5cbiAgICAvLyBMZXZlbCAyIC0gQ29udGFpbmVyIGZvciBjdXJyZW50IHRlbXBlcmF0dXJlXG4gICAgY29uc3QgY3VycmVudEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50Qm9keS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWJvZHknKTtcbiAgICBjdXJyZW50V2VhdGhlci5hcHBlbmRDaGlsZChjdXJyZW50Qm9keSk7XG5cbiAgICAvLyBMZXZlbCAzIC0gU3ViLWNvbnRhaW5lciBmb3IganVzdCB0aGUgd2VhdGhlciBpbmZvcm1hdGlvblxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1cnJlbnRXZWF0aGVySW5mby5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXItaW5mb3JtYXRpb24nKTtcbiAgICBjdXJyZW50Qm9keS5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckluZm8pO1xuXG4gICAgLy8gTGV2ZWwgNCAtIFRlbXBlcmF0dXJlIGluZm9ybWF0aW9uXG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXRlbXBlcmF0dXJlJyk7XG4gICAgY29uc3QgY3VycmVudENvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50Q29uZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvbmRpdGlvbicpO1xuICAgIGNvbnN0IGN1cnJlbnRNYXhNaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50TWF4TWluLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbWF4LW1pbicpO1xuICAgIGFwcGVuZENoaWxkcmVuKGN1cnJlbnRXZWF0aGVySW5mbywgY3VycmVudFRlbXAsIGN1cnJlbnRDb25kLCBjdXJyZW50TWF4TWluKTtcblxuICAgIC8vIExldmVsIDUgLSBNYXggTWluXG4gICAgY29uc3QgbWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbWF4LXRlbXAnKTtcbiAgICBjb25zdCBtaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1taW4tdGVtcCcpO1xuICAgIGFwcGVuZENoaWxkcmVuKGN1cnJlbnRNYXhNaW4sIG1heCwgbWluKTtcblxuICAgIC8vIExldmVsIDMgLSBDb250YWluZXIgZm9yIGN1cnJlbnQgd2VhdGhlciBpY29uXG4gICAgY29uc3QgY3VycmVudENvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50Q29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvbmRpdGlvbi1pY29uLWNvbnRhaW5lcicpO1xuICAgIGN1cnJlbnRCb2R5LmFwcGVuZENoaWxkKGN1cnJlbnRDb25kaXRpb25JY29uKTtcbn1cblxuLy8gUG9wdWxhdGUgdGhlIHRvcCBib3ggd2l0aCBiYXNpYyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB3ZWF0aGVyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVDdXJyZW50V2VhdGhlcih3ZWF0aGVyKSB7XG4gICAgYnVpbGRDdXJyZW50V2VhdGhlckJveCgpO1xuICAgIGNvbnN0IGN1cnJlbnRSZWdpb25TdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpb24tc3RhdGUnKTtcbiAgICBjb25zdCBjdXJyZW50TG9jYWxUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2FsdGltZScpO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGVtcGVyYXR1cmUnKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY29uZGl0aW9uJyk7XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWNvbmRpdGlvbi1pY29uLWNvbnRhaW5lcicpXG4gICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW1heC10ZW1wJyk7XG4gICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW1pbi10ZW1wJyk7XG4gICAgXG4gICAgbGV0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uLWljb24nKVxuICAgIGlmICghY29uZGl0aW9uSWNvbikge1xuICAgICAgICBjb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbmRpdGlvbkljb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uLWljb24nKTtcbiAgICAgICAgY29uZGl0aW9uSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25JY29uKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbG9jYXRpb24gPSB3ZWF0aGVyLmdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlci5nZXRDdXJyZW50Q29uZGl0aW9uKCk7XG4gICAgY29uc3QgcmFuZ2UgPSB3ZWF0aGVyLmdldE1heE1pblRlbXBUb2RheSgpO1xuICAgIGNvbnN0IHRlcnJpdG9yeSA9IGxvY2F0aW9uLnJlZ2lvbiA/IGxvY2F0aW9uLnJlZ2lvbiA6IGxvY2F0aW9uLmNvdW50cnk7IFxuXG4gICAgY3VycmVudFJlZ2lvblN0YXRlLnRleHRDb250ZW50ID0gYCR7dGVycml0b3J5fSwgJHtsb2NhdGlvbi5jaXR5fWA7XG4gICAgY3VycmVudFJlZ2lvblN0YXRlLmlubmVyVGV4dCArPSAnXFx1MDBBMCc7XG4gICAgY3VycmVudExvY2FsVGltZS50ZXh0Q29udGVudCA9IGBhcyBvZiAke2xvY2F0aW9uLmxvY2FsVGltZX1gO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gd2VhdGhlci5nZXRDdXJyZW50VGVtcGVyYXR1cmUoKS5mYWhyZW5oZWl0O1xuICAgIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBjb25kaXRpb24udGV4dDtcbiAgICBjb25kaXRpb25JY29uLnNyYyA9IGNvbmRpdGlvbi5pY29uO1xuICAgIGNvbmRpdGlvbkljb24uYWx0ID0gYCR7Y29uZGl0aW9uLnRleHR9IGljb25gO1xuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBgSDogJHtyYW5nZS5tYXh9YDtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYEw6ICR7cmFuZ2UubWlufWA7XG59IiwiaW1wb3J0IHthcHBlbmRDaGlsZHJlbn0gZnJvbSAnLi9yZXVzYWJsZS1mdW5jdGlvbnMuanMnO1xuXG4vLyBDcmVhdGUgYm94IHVzZWQgdG8gc3RvcmUgMyBkYXkgZm9yZWNhc3RcbmZ1bmN0aW9uIGJ1aWxkM0RheUZvcmVjYXN0KHdlYXRoZXIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5cbiAgICAvLyBMZXZlbCAxXG4gICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdCk7XG5cbiAgICAvLyBMZXZlbCAyXG4gICAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRocmVlRGF5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZGFpbHktZm9yZWNhc3QnKTtcbiAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZCh0aHJlZURheUZvcmVjYXN0KTtcblxuICAgIC8vTGV2ZWwgMyAtIEhvbGRzIHZhbHVlcyBmb3IgZm9yZWNhc3RcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWZvcmVjYXN0LXRpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnMyBEYXkgRm9yZWNhc3QnO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYWlseS1mb3JlY2FzdC1ib2R5Jyk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbih0aHJlZURheUZvcmVjYXN0LCB0aXRsZSwgYm9keSk7XG59XG5cbi8vIENyZWF0ZSBhIEhUTUwgYm94IGFuZCBwb3B1bGF0ZSBpdCB3aXRoIDMgZGF5IGZvcmVjYXN0IGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZURhaWx5Rm9yZWNhc3RXZWF0aGVyKHdlYXRoZXIpIHtcbiAgICBidWlsZDNEYXlGb3JlY2FzdCh3ZWF0aGVyKTtcbiAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktZm9yZWNhc3QtYm9keScpO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gd2VhdGhlci5nZXRGb3JlY2FzdERheXMoKTtcbiAgICBmb3IgKGNvbnN0IGRheSBvZiBmb3JlY2FzdCkge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kYXknKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZGF0ZScpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtY29uZGl0aW9uJyk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcblxuICAgICAgICBjb25zdCBoaWdoTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZ2hMb3cuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtaGlnaC1sb3cnKTtcbiAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaWdoLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWhpZ2gnKTtcbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvdy5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1sb3cnKTtcbiAgICAgICAgaGlnaExvdy5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICAgICAgaGlnaExvdy5hcHBlbmRDaGlsZChsb3cpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGhpZ2hMb3cpO1xuXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBkYXkuZGF0ZTtcbiAgICAgICAgY29uZGl0aW9uLnNyYyA9IGRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgY29uZGl0aW9uLmFsdCA9IGRheS5jb25kaXRpb24udGV4dDtcbiAgICAgICAgaGlnaC50ZXh0Q29udGVudCA9IGBIOiAke2RheS5tYXh9YDtcbiAgICAgICAgbG93LnRleHRDb250ZW50ID0gYEw6ICR7ZGF5Lm1pbn1gO1xuXG4gICAgICAgIGZvcmVjYXN0RGF5cy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG59XG5cbi8vIEFkZCBjbGFzcyBvbiBcIlNob3cgRGFpbHkgRGF0YVwiIGJ1dHRvbiB0byBtYXJrIGl0IGFzIGN1cnJlbnRseSBzZWxlY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERhaWx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc3Qgc2hvd0hvdXJseUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1ob3VybHktZm9yZWNhc3QnKTtcbiAgICBjb25zdCBzaG93RGFpbHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctZGFpbHktZm9yZWNhc3QnKTtcbiAgICBzaG93SG91cmx5QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zZWxlY3RlZCcpKTtcbiAgICBzaG93RGFpbHlCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LXNlbGVjdGVkJykpO1xufSIsImltcG9ydCB7YXBwZW5kQ2hpbGRyZW59IGZyb20gJy4vcmV1c2FibGUtZnVuY3Rpb25zLmpzJztcblxuLy8gQ3JlYXRlIGJveCB1c2VkIHRvIHN0b3JlIGhvdXJseSBmb3JlY2FzdFxuZnVuY3Rpb24gYnVpbGRIb3VybHlGb3JlY2FzdCh3ZWF0aGVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXG4gICAgLy8gTGV2ZWwgMVxuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cmx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0KTtcblxuICAgIC8vIExldmVsIDJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdC10aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJzMgRGF5IEhvdXJseSBGb3JlY2FzdCc7XG4gICAgXG4gICAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlY29yZHMuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcicpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oaG91cmx5Rm9yZWNhc3QsIHRpdGxlLCByZWNvcmRzKTtcbn1cblxuLy8gVGFrZXMgaW4gYSBkYXkgb2JqZWN0IChmcm9tIHRoZSB3ZWF0aGVyIG9iamVjdCkgYW5kIGNyZWF0ZXMgYSBkaXYgZm9yIGVhY2ggaG91ciBkYXRhXG5mdW5jdGlvbiBwb3B1bGF0ZUhvdXJseVJlY29yZHMoZGF5LCBkYXlFbGVtKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXkuaG91cnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBob3VyID0gaG91cnNbaV07XG4gICAgICAgIGNvbnN0IGhvdXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaG91ckVsZW0uY2xhc3NMaXN0LmFkZCgnaG91cmx5LWRhdGEnKTtcbiAgICAgICAgaG91ckVsZW0uc2V0QXR0cmlidXRlKCdpbmRleCcsIGAke2l9YCk7XG4gICAgICAgIGRheUVsZW0uYXBwZW5kQ2hpbGQoaG91ckVsZW0pO1xuXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdob3VybHktdGltZScpO1xuICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gaG91ci50aW1lO1xuXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1jb25kaXRpb24nKTtcbiAgICAgICAgY29uZGl0aW9uSWNvbi5zcmMgPSBob3VyLmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBjb25kaXRpb25JY29uLmFsdCA9IGhvdXIuY29uZGl0aW9uLnRleHQ7XG5cbiAgICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LXRlbXBlcmF0dXJlJyk7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBob3VyLnRlbXA7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oaG91ckVsZW0sIHRpbWUsIGNvbmRpdGlvbkljb24sIHRlbXApO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIGEgSFRNTCBib3ggYW5kIHBvcHVsYXRlIGl0IHdpdGggaG91cmx5IGZvcmVjYXN0IGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUhvdXJseUZvcmVjYXN0V2VhdGhlcih3ZWF0aGVyKSB7XG4gICAgYnVpbGRIb3VybHlGb3JlY2FzdCh3ZWF0aGVyKTtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm9yZWNhc3QgPSB3ZWF0aGVyLmdldEZvcmVjYXN0RGF5cygpO1xuICAgIFxuICAgIGZvciAoY29uc3QgZGF5IG9mIGZvcmVjYXN0KSB7XG4gICAgICAgIGNvbnN0IGRheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXktaG91cmx5JyxgJHtkYXkuZGF0ZX1gKTtcbiAgICAgICAgaG91cmx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZGF5LXRpdGxlJywgYCR7ZGF5LmRhdGV9YCk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZGF5LmRhdGU7XG5cbiAgICAgICAgY29uc3QgaG91cmx5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGhvdXJseURhdGEuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWJvZHknLCBgJHtkYXkuZGF0ZX1gKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihkYXlFbGVtZW50LCB0aXRsZSwgaG91cmx5RGF0YSk7XG5cbiAgICAgICAgcG9wdWxhdGVIb3VybHlSZWNvcmRzKGRheSwgaG91cmx5RGF0YSk7XG4gICAgfVxufVxuXG4vLyBBZGQgY2xhc3Mgb24gXCJTaG93IEhvdXJseSBEYXRhXCIgYnV0dG9uIHRvIG1hcmsgaXQgYXMgY3VycmVudGx5IHNlbGVjdGVkXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0SG91cmx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc3Qgc2hvd0RhaWx5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWRhaWx5LWZvcmVjYXN0Jyk7XG4gICAgY29uc3Qgc2hvd0hvdXJseUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1ob3VybHktZm9yZWNhc3QnKTtcbiAgICBzaG93RGFpbHlCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvcmVjYXN0LXNlbGVjdGVkJykpO1xuICAgIHNob3dIb3VybHlCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LXNlbGVjdGVkJykpO1xufSIsImltcG9ydCB7Z2V0V2VhdGhlcn0gZnJvbSAnLi4vbG9naWMvd2VhdGhlci1BUEkuanMnO1xuaW1wb3J0IHthcHBlbmRDaGlsZHJlbn0gZnJvbSAnLi9yZXVzYWJsZS1mdW5jdGlvbnMuanMnO1xuaW1wb3J0IHtyZWZyZXNoUGFnZSwgYWRkTG9hZGVyR0lGLCByZW1vdmVMb2FkZXJHSUZ9IGZyb20gJy4vcGFnZS1jb250cm9sLmpzJztcblxuLy8gQ3JlYXRlIGEgc2VhcmNoIGJveCBmb3IgdXNlcnMgdG8gaW5wdXQgYSBsb2NhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTG9jYXRpb25TZWFyY2goKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIFxuICAgIC8vIExldmVsIDFcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBMZXZlbCAyXG4gICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXNlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3VzZXItaW5wdXQnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXNlcklucHV0KTtcblxuICAgIC8vIExldmVsIDNcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnJyk7XG4gICAgdXNlcklucHV0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gTGV2ZWwgNFxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb2NhdGlvbi1zZWFyY2gnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1sYWJlbCcpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0lucHV0IGNpdHkgb3IgemlwIGNvZGU6ICc7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3NlYXJjaCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24tc2VhcmNoJyk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWxvY2F0aW9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihmb3JtLCBsYWJlbCwgaW5wdXQsIGJ1dHRvbik7XG5cbiAgICBhY3RpdmF0ZVN1Ym1pdEJ1dHRvbigpO1xufVxuXG4vLyBBY2NlcHRzIGFuIGVycm9yIG1lc3NhZ2UgYW5kIGRpc3BsYXlzIHRoZSBlcnJvclxuZnVuY3Rpb24gYWRkRXJyb3JNZXNzYWdlKGVycm9yKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBleGlzdGluZ0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcbiAgICBpZiAoZXhpc3RpbmdFcnJvcikge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBleGlzdGluZ0Vycm9yO1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xufVxuXG4vLyBSZXRyaWV2ZXMgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gZ2l2ZW4gYSBsb2NhdGlvbiBzdHJpbmcuIFJldHJpZXZlcyBkYXRhIHRocm91Z2ggdGhlIHdlYXRoZXIgQVBJXG5hc3luYyBmdW5jdGlvbiBwdXNoV2VhdGhlck9ialRvRE9NKGxvY2F0aW9uKSB7XG4gICAgbGV0IHdlYXRoZXI7XG4gICAgdHJ5IHtcbiAgICAgICAgYWRkTG9hZGVyR0lGKCk7XG4gICAgICAgIHdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICByZW1vdmVMb2FkZXJHSUYoKTtcbiAgICAgICAgYWRkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gRm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICBcbiAgICByZWZyZXNoUGFnZSh3ZWF0aGVyKTtcbn1cblxuLy8gQWRkcyBldmVudCBsaXN0ZW5lciB0byB0aGUgc3VibWl0IGJ1dHRvbi4gU2VuZHMgdGhlIHRleHQgd2l0aGluIHRoZSBzZWFyY2ggYm94IHRvIHJldHJpZXZlIHRoZSBsb2NhdGlvbidzIHdlYXRoZXIgZGF0YVxuZnVuY3Rpb24gYWN0aXZhdGVTdWJtaXRCdXR0b24oKSB7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1sb2NhdGlvbicpO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1zZWFyY2gnKTtcbiAgICAgICAgcHVzaFdlYXRoZXJPYmpUb0RPTShzZWFyY2hCYXIudmFsdWUpO1xuICAgICAgICBzZWFyY2hCYXIudmFsdWUgPSBudWxsO1xuICAgIH0pXG59IiwiaW1wb3J0IHtwb3B1bGF0ZUxvY2F0aW9uU2VhcmNofSBmcm9tICcuL2xvY2F0aW9uLWlucHV0LmpzJ1xuaW1wb3J0IHtwb3B1bGF0ZUN1cnJlbnRXZWF0aGVyfSBmcm9tICcuL2N1cnJlbnQtd2VhdGhlci10b3AuanMnO1xuaW1wb3J0IHtwb3B1bGF0ZURhaWx5Rm9yZWNhc3RXZWF0aGVyLCBzZWxlY3REYWlseUZvcmVjYXN0fSBmcm9tICcuL2ZvcmVjYXN0LWRhaWx5LmpzJztcbmltcG9ydCB7cG9wdWxhdGVIb3VybHlGb3JlY2FzdFdlYXRoZXIsIHNlbGVjdEhvdXJseUZvcmVjYXN0fSBmcm9tICcuL2ZvcmVjYXN0LWhvdXJseS5qcyc7XG5pbXBvcnQge3BvcHVsYXRlQ3VycmVudFdlYXRoZXJJbmZvfSBmcm9tICcuL2N1cnJlbnQtd2VhdGhlci1pbmZvLWJvdHRvbS5qcyc7XG5pbXBvcnQge2Rpc3BsYXlGb3JlY2FzdEJ1dHRvbnMsIGRpc3BsYXlDaGFuZ2VUZW1wU2NhbGVCdXR0b25zfSBmcm9tICcuL2J1dHRvbnMuanMnO1xuaW1wb3J0IHBhZ2VTdGF0ZSBmcm9tICcuLi9sb2dpYy9zZXR0aW5ncy1zdGF0ZS5qcyc7XG5pbXBvcnQgbG9hZGVyR2lmQXNzZXQgZnJvbSAnLi4vYXNzZXRzL2dpZi9sb2FkaW5nLWFuaW1hdGlvbi5naWYnO1xuaW1wb3J0IGRlZmF1bHRCYWNrZ3JvdW5kIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC0xLmpwZyc7XG5pbXBvcnQgZGF5QmFja2dyb3VuZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2RheS0xLmpwZyc7XG5pbXBvcnQgbmlnaHRCYWNrZ3JvdW5kIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbmlnaHQtMS5qcGcnXG5cbi8vIENsZWFycyBhbGwgdGhlIERPTSBvZiB0aGUgd2VicGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbi8vIFNldHMgdGhlIGJhY2tncm91bmQgb2YgdGhlIHdlYnBhZ2UgZGVwZW5kaW5nIG9uIHRoZSB3ZWF0aGVyIG9iamVjdCdzIGRheSBjeWNsZSAoZGF5IHZzLiBuaWdodCB2cy4gZGVmYXVsdClcbmV4cG9ydCBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKHdlYXRoZXIgPSBudWxsKSB7XG4gICAgaWYgKCF3ZWF0aGVyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RlZmF1bHRCYWNrZ3JvdW5kfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyLmlzRGF5KCkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF5QmFja2dyb3VuZH0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtuaWdodEJhY2tncm91bmR9KWA7XG4gICAgfVxufVxuXG4vLyBDcmVhdGVzIHRoZSBzZWFyY2ggYmFyIGFuZCB0aGUgY3VycmVudCB3ZWF0aGVyIGJveFxuZnVuY3Rpb24gcG9wdWxhdGVTZWFyY2hBbmRDdXJyZW50KHdlYXRoZXIpIHtcbiAgICBzZXRCYWNrZ3JvdW5kKHdlYXRoZXIpO1xuICAgIHBvcHVsYXRlTG9jYXRpb25TZWFyY2goKTtcbiAgICBcbiAgICBwb3B1bGF0ZUN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpO1xuICAgIGRpc3BsYXlDaGFuZ2VUZW1wU2NhbGVCdXR0b25zKHdlYXRoZXIpO1xuICAgIGRpc3BsYXlGb3JlY2FzdEJ1dHRvbnMod2VhdGhlcik7XG59XG5cbi8vIENyZWF0ZXMgYSBmb290ZXIgYXQgdGhlIGVuZCBvZiB0aGUgd2VicGFnZS4gVXNlZCB0byBhZGQgZXh0cmEgc3BhY2UgYXQgdGhlIGJvdHRvbSBmb3Igbm93XG5mdW5jdGlvbiBhZGRGb290ZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuLy8gQ2xlYXJzIHdlYnBhZ2UgYW5kIHJlLXBvcHVsYXRlcyB3aXRoIERhaWx5IGZvcmVjYXN0IGRhdGFcbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoV2l0aERhaWx5Rm9yZWNhc3Qod2VhdGhlcikge1xuICAgIGNsZWFyUGFnZSgpO1xuXG4gICAgcG9wdWxhdGVTZWFyY2hBbmRDdXJyZW50KHdlYXRoZXIpO1xuICAgIFxuICAgIHBvcHVsYXRlRGFpbHlGb3JlY2FzdFdlYXRoZXIod2VhdGhlcik7XG4gICAgcG9wdWxhdGVDdXJyZW50V2VhdGhlckluZm8od2VhdGhlcik7XG4gICAgc2VsZWN0RGFpbHlGb3JlY2FzdCgpO1xuICAgIFxuICAgIGFkZEZvb3RlcigpO1xufVxuXG4vLyBDbGVhcnMgd2VicGFnZSBhbmQgcmUtcG9wdWxhdGVzIHdpdGggSG91cmx5IGZvcmVjYXN0IGRhdGFcbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoV2l0aEhvdXJseUZvcmVjYXN0KHdlYXRoZXIpIHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBcbiAgICBwb3B1bGF0ZVNlYXJjaEFuZEN1cnJlbnQod2VhdGhlcik7XG5cbiAgICBwb3B1bGF0ZUhvdXJseUZvcmVjYXN0V2VhdGhlcih3ZWF0aGVyKTtcbiAgICBkaXNwbGF5Rm9yZWNhc3RCdXR0b25zKHdlYXRoZXIpO1xuICAgIHNlbGVjdEhvdXJseUZvcmVjYXN0KCk7XG5cbiAgICBhZGRGb290ZXIoKTtcbn1cblxuLy8gQ2xlYXJzIGFuZCByZXBvcHVsYXRlcyB0aGUgd2VicGFnZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgdXNlciBzZWxlY3RlZCBob3VybHkgb3IgZGFpbHkgZm9yZWNhc3RcbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoUGFnZSh3ZWF0aGVyKSB7XG4gICAgLy8gY29uc3Qgc2VsZWN0ZWRGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1zZWxlY3RlZCcpO1xuICAgIGNvbnN0IHNlbGVjdGVkRm9yZWNhc3QgPSBwYWdlU3RhdGUuZ2V0Rm9yZWNhc3QoKTtcbiAgICBpZiAoc2VsZWN0ZWRGb3JlY2FzdCA9PT0gJ2RhaWx5Jykge1xuICAgICAgICByZWZyZXNoV2l0aERhaWx5Rm9yZWNhc3Qod2VhdGhlcik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEZvcmVjYXN0ID09PSAnaG91cmx5Jykge1xuICAgICAgICByZWZyZXNoV2l0aEhvdXJseUZvcmVjYXN0KHdlYXRoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZm9yZWNhc3QgdHlwZSBmb3VuZCBhdCByZWZyZXNoJyk7XG4gICAgfVxufVxuXG4vLyBEaXNwbGF5cyBhIGJ1ZmZlcmluZyBnaWYgd2hpbGUgYXdhaXRpbmcgdGhlIEFQSSB0byByZXR1cm4gdGhlIHdlYXRoZXIgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvYWRlckdJRigpIHtcbiAgICAvLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdsb2FkZXItY29udGFpbmVyJyk7XG4gICAgaGVhZGVyLmFmdGVyKGxvYWRlcik7XG5cbiAgICBjb25zdCBsb2FkZXJHaWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2FkZXJHaWYuY2xhc3NMaXN0LmFkZCgnbG9hZGVyLWdpZicpO1xuICAgIGxvYWRlckdpZi5zcmMgPSBsb2FkZXJHaWZBc3NldDtcbiAgICBsb2FkZXJHaWYuYWx0ID0gJ3dlYnBhZ2UgbG9hZGVyJztcbiAgICBsb2FkZXIuYXBwZW5kQ2hpbGQobG9hZGVyR2lmKTtcbn1cblxuLy8gUmVtb3ZlcyB0aGUgYnVmZmVyaW5nIGdpZlxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxvYWRlckdJRigpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyLWNvbnRhaW5lcicpO1xuICAgIGlmIChsb2FkZXIpIHtcbiAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJcbi8vIEFwcGVuZCBvbmUgb3IgbW9yZSBjaGlsZHJlbiBlbGVtZW50IHRvIGEgcGFyZW50IGVsZW1lbnRcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihwYXJlbnQsIC4uLmNoaWxkcmVuKSB7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIG9uZSBvciBtb3JlIGVsZW1lbnRzIG9mIHRoZSBzYW1lIGRlZmluZWQgdHlwZVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11bHRpcGxlRWxlbWVudHMoZWxlbVR5cGUsIGNvdW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtVHlwZX1gKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQge3BvcHVsYXRlTG9jYXRpb25TZWFyY2h9IGZyb20gJy4vbG9jYXRpb24taW5wdXQuanMnO1xuaW1wb3J0IHtzZXRCYWNrZ3JvdW5kfSBmcm9tICcuL3BhZ2UtY29udHJvbC5qcyc7XG5pbXBvcnQge2FkZFRhYkljb259IGZyb20gJy4vdGFiLWljb24uanMnO1xuXG4vLyBTdGFydHMgdGhlIHdlYnBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBhZGRUYWJJY29uKCk7XG4gICAgc2V0QmFja2dyb3VuZCgpO1xuICAgIHBvcHVsYXRlTG9jYXRpb25TZWFyY2goKTtcbn1cblxuXG4iLCJpbXBvcnQgd2ViSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Nsb3VkeS5wbmcnO1xuXG4vLyBBZGRzIGEgaW1nIGljb24gdG8gdGhlIGJyb3dzZXIgdGFiXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFiSWNvbigpIHtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgaWNvbi5yZWwgPSAnaWNvbic7XG4gICAgaWNvbi5ocmVmID0gd2ViSWNvbjtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGljb24pO1xufSIsIi8vIENoYW5nZXMgdGhlIHNldHRpbmdzLXN0YXRlIG1vZHVsZSB0byBiZSBlaXRoZXIgRmFocmVuaGVpdCBvciBDZWxzaXVzXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRUZW1wU2NhbGUod2VhdGhlciwgRmFocmVuaGVpdEJ0biwgQ2Vsc2l1c0J0bikge1xuICAgIGlmICh3ZWF0aGVyLmdldFRlbXBTY2FsZSgpID09PSAnZmFocmVuaGVpdCcpIHtcbiAgICAgICAgc2V0QXNTZWxlY3RlZFNjYWxlKEZhaHJlbmhlaXRCdG4pO1xuICAgIH0gZWxzZSBpZiAod2VhdGhlci5nZXRUZW1wU2NhbGUoKSA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgIHNldEFzU2VsZWN0ZWRTY2FsZShDZWxzaXVzQnRuKTtcbiAgICB9XG59XG5cbi8vIEFjY2VwdHMgdHdvIGJ1dHRvbiBlbGVtZW50czogdGhlIGZpcnN0IHdpbGwgcmVjZWl2ZSBhIGNsYXNzIGluZGljYXRpbmcgdGhhdCBpdCBpcyBzZWxlY3RlZCwgd2hpbGUgdGhlIHNlY29uZCB3aWxsIGhhdmUgaXQgcmVtb3ZlZFxuZnVuY3Rpb24gc2V0QXNTZWxlY3RlZFNjYWxlKHNlbGVjdGVkQnRuLCBkZXNlbGVjdGVkQnRuPW51bGwpIHtcbiAgICBzZWxlY3RlZEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10ZW1wLXNjYWxlJyk7XG4gICAgaWYgKGRlc2VsZWN0ZWRCdG4pIHtcbiAgICAgICAgZGVzZWxlY3RlZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10ZW1wLXNjYWxlJyk7XG4gICAgfVxufVxuXG4vLyBDaGFuZ2VzIHRoZSBzZXR0aW5ncy1zdGF0ZSBtb2R1bGUgdG8gYmUgRmFocmVuaGVpdFxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZhaHJlbmhlaXQoKSB7XG4gICAgY29uc3QgZmFocmVuaGVpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdG8tZmFocmVuaGVpdCcpO1xuICAgIGNvbnN0IGNlbHNpdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRvLWNlbHNpdXMnKTtcbiAgICBzZXRBc1NlbGVjdGVkU2NhbGUoZmFocmVuaGVpdEJ0biwgY2Vsc2l1c0J0bik7XG59XG5cbi8vIENoYW5nZXMgdGhlIHNldHRpbmdzLXN0YXRlIG1vZHVsZSB0byBiZSBDZWxzaXVzXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0Q2Vsc2l1cygpIHtcbiAgICBjb25zdCBjZWxzaXVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC10by1jZWxzaXVzJyk7XG4gICAgY29uc3QgZmFocmVuaGVpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdG8tZmFocmVuaGVpdCcpO1xuICAgIHNldEFzU2VsZWN0ZWRTY2FsZShjZWxzaXVzQnRuLCBmYWhyZW5oZWl0QnRuKTtcbn0iLCIvLyBDb252ZXJ0cyBhIDI0IGhvdXIgdGltZSBmb3JtYXQgKGV4OiAxODo0MikgdG8gYSAxMiBob3VyIGZvcm1hdCAoNjo0MiBwbSlcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG8xMkhvdXJDbG9jayh0aW1lKSB7XG4gICAgY29uc3QgdGltZU9iaiA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGNvbnN0IGhvdXIgPSB0aW1lT2JqLmdldEhvdXJzKCk7XG4gICAgY29uc3QgaG91cnMgPSAoaG91ciAlIDEyKSB8fCAxMjtcbiAgICBsZXQgbWludXRlcyA9IHRpbWVPYmouZ2V0TWludXRlcygpO1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzID49IDEwID8gbWludXRlcyA6ICcwJyArIG1pbnV0ZXM7XG4gICAgY29uc3QgYW1PclBtID0gaG91ciA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXG4gICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9ICR7YW1PclBtfWA7XG59IiwiLy8gTW9kdWxlIHRoYXQgc3RvcmVzIHRoZSBzdGF0ZSBvZiB0aGUgd2VicGFnZSBlLmcuIFdoZXRoZXIgdG8gZGlzcGxheSBmYWhyZW5oZWl0IG9yIGNlbHNpdXMgZGF0YVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZvcmVjYXN0OiAnZGFpbHknLFxuICAgIHRlbXBTY2FsZTogJ2ZhaHJlbmhlaXQnLFxuXG4gICAgc2V0Rm9yZWNhc3RUb0RhaWx5KCkge1xuICAgICAgICB0aGlzLmZvcmVjYXN0ICA9ICdkYWlseSc7XG4gICAgfSxcblxuICAgIHNldEZvcmVjYXN0VG9Ib3VybHkoKSB7XG4gICAgICAgIHRoaXMuZm9yZWNhc3QgPSAnaG91cmx5JztcbiAgICB9LFxuXG4gICAgZ2V0Rm9yZWNhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcmVjYXN0O1xuICAgIH0sXG5cbiAgICBzZXRUb0ZhaHJlbmhlaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcFNjYWxlID0gJ2ZhaHJlbmhlaXQnO1xuICAgIH0sXG5cbiAgICBzZXRUb0NlbHNpdXMoKSB7XG4gICAgICAgIHRoaXMudGVtcFNjYWxlID0gJ2NlbHNpdXMnO1xuICAgIH0sXG5cbiAgICBnZXRUZW1wU2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBTY2FsZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlV2VhdGhlck9iamVjdCB9IGZyb20gJy4vd2VhdGhlci1vYmplY3QuanMnO1xuXG4vLyBNYWtlcyBhIHJlcXVlc3QgdG8gdGhlIHdlYXRoZXIgQVBJIHRvIHJldHJpZXZlIHdlYXRoZXIgb2JqZWN0IGJhc2VkIG9uIGxvY2F0aW9uIHBhcmFtZXRlciBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgLy9EZWxldGUgbGF0ZXJcbiAgICAvLyBjb25zdCB3YWl0ID0gKCkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UgKChyZXNvbHZlLCByZWplY3QpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwMCkpO1xuICAgIC8vIH1cbiAgICAvLyBhd2FpdCB3YWl0KCk7XG4gICAgLy9cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1hMDc0MjNiZWUxMTg0ODMxYmExMjI0NTM2MjQwODA2JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCwge21vZGU6J2NvcnMnfSk7XG4gICAgY29uc3QgcmVzcE9iaiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKCdmaXJzdCcsIHJlc3BPYmopO1xuXG4gICAgY2hlY2tSZXNwb25zZUVycm9ycyhyZXNwT2JqKTtcblxuICAgIGNvbnN0IG5ld09iaiA9IGNyZWF0ZVdlYXRoZXJPYmplY3QocmVzcE9iaik7XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICAgXG59XG5cbi8vIENoZWNrcyB0aGUgQVBJIHJlc3BvbnNlIG9iamVjdCB0byBzZWUgaWYgaXQgaGFzIGFueSBlcnJvcnMsIGFuZCBpZiBpdCBkb2VzIGl0IHRocm93cyB0aGF0IGVycm9yXG5mdW5jdGlvbiBjaGVja1Jlc3BvbnNlRXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yLmNvZGUgPT09IDEwMDMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRvIG5vdCBzdWJtaXQgZW1wdHkgc2VhcmNoIGJhcicpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yLmNvZGUgPT09IDEwMDYpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbG9jYXRpb24gZm91bmQgbWF0Y2hpbmcgeW91ciBzZWFyY2gnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBjb252ZXJ0VG8xMkhvdXJDbG9jayB9IGZyb20gJy4vbG9naWMtZnVuY3Rpb25zLmpzJztcbmltcG9ydCBwYWdlU3RhdGUgZnJvbSAnLi9zZXR0aW5ncy1zdGF0ZS5qcyc7XG5cbi8vIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdCB3aGljaCBjb250YWlucyBtZXRob2RzIHVzZWQgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgd2VhdGhlciBvYmplY3QgcmV0cmlldmVkIGZyb20gdGhlIEFQSVxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlck9iamVjdE1ldGhvZHMoKSB7XG4gICAgXG4gICAgZnVuY3Rpb24gdHVyblRvRGVncmVlcyh0ZW1wKSB7XG4gICAgICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHRlbXApfcKwYFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRUZW1wKHRlbXBfZiwgdGVtcF9jKSB7XG4gICAgLy8gY29uc3QgZ2V0VGVtcCA9ICh0ZW1wX2YsIHRlbXBfYykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGVzdCcsIHRoaXMudGVtcFNjYWxlKTtcbiAgICAgICAgaWYgKHBhZ2VTdGF0ZS5nZXRUZW1wU2NhbGUoKSA9PT0gJ2ZhaHJlbmhlaXQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHVyblRvRGVncmVlcyh0ZW1wX2YpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VTdGF0ZS5nZXRUZW1wU2NhbGUoKSA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHVyblRvRGVncmVlcyh0ZW1wX2MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPYmplY3QgaXMgbmVpdGhlciBzZXQgdG8gZmFocmVuaGVpdCBub3IgY2Vsc2l1cycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VG9GYWhyZW5oZWl0KCkge1xuICAgICAgICBwYWdlU3RhdGUuc2V0VG9GYWhyZW5oZWl0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VG9DZWxzaXVzKCkge1xuICAgICAgICBwYWdlU3RhdGUuc2V0VG9DZWxzaXVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGVtcFNjYWxlKCkge1xuICAgICAgICByZXR1cm4gcGFnZVN0YXRlLmdldFRlbXBTY2FsZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2l0eTogdGhpcy5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgcmVnaW9uOiB0aGlzLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgICAgICAgIGNvdW50cnk6IHRoaXMubG9jYXRpb24uY291bnRyeSxcbiAgICAgICAgICAgIGxvY2FsVGltZTogY29udmVydFRvMTJIb3VyQ2xvY2sodGhpcy5sb2NhdGlvbi5sb2NhbHRpbWUpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXBlcmF0dXJlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFocmVuaGVpdDogZ2V0VGVtcCh0aGlzLmN1cnJlbnQudGVtcF9mLCB0aGlzLmN1cnJlbnQudGVtcF9jKSwgXG4gICAgICAgICAgICAvLyBjZWxzaXVzOiB0dXJuVG9EZWdyZWVzKHRoaXMuY3VycmVudC50ZW1wX2MpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudENvbmRpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsIGljb246IGBodHRwczoke3RoaXMuY3VycmVudC5jb25kaXRpb24uaWNvbn1gfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmZWVsc2xpa2VfZjogZ2V0VGVtcCh0aGlzLmN1cnJlbnQuZmVlbHNsaWtlX2YsIHRoaXMuY3VycmVudC5mZWVsc2xpa2VfYyksXG4gICAgICAgICAgICBodW1pZGl0eTogYCR7dGhpcy5jdXJyZW50Lmh1bWlkaXR5fSVgLFxuICAgICAgICAgICAgdXY6IHRoaXMuY3VycmVudC51dixcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGAke3RoaXMuY3VycmVudC52aXNfbWlsZXN9IG1pYCxcbiAgICAgICAgICAgIHdpbmRfbXBoOiBgJHtNYXRoLnJvdW5kKHRoaXMuY3VycmVudC53aW5kX21waCl9IG1waGAsXG4gICAgICAgICAgICBwcmVzc3VyZV9pbjogYCR7TWF0aC5yb3VuZCh0aGlzLmN1cnJlbnQucHJlc3N1cmVfaW4pfSBpbmBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRNYXhNaW5UZW1wVG9kYXkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXg6IGdldFRlbXAodGhpcy5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mLCB0aGlzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2MpLCBcbiAgICAgICAgICAgIG1pbjogZ2V0VGVtcCh0aGlzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2YsIHRoaXMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIb3VybHlEYXRhKGhvdXJzLCBub3csIHNlbGYpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IGhvdXIgb2YgaG91cnMpIHtcbiAgICAgICAgICAgIGlmIChub3cgPiBob3VyLnRpbWUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aW1lOiBjb252ZXJ0VG8xMkhvdXJDbG9jayhob3VyLnRpbWUpLFxuICAgICAgICAgICAgICAgIHRlbXA6IGdldFRlbXAoaG91ci50ZW1wX2YsIGhvdXIudGVtcF9jKSxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaG91ci5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogYGh0dHBzOiR7aG91ci5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBnZXRGb3JlY2FzdERheXMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGZvcmVjYXN0RGF5IG9mIHRoaXMuZm9yZWNhc3QuZm9yZWNhc3RkYXkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCB7XG4gICAgICAgICAgICAgICAgZGF0ZTogZm9yZWNhc3REYXkuZGF0ZSxcbiAgICAgICAgICAgICAgICBtYXg6IGdldFRlbXAoZm9yZWNhc3REYXkuZGF5Lm1heHRlbXBfZiwgZm9yZWNhc3REYXkuZGF5Lm1heHRlbXBfYyksXG4gICAgICAgICAgICAgICAgbWluOiBnZXRUZW1wKGZvcmVjYXN0RGF5LmRheS5taW50ZW1wX2YsIGZvcmVjYXN0RGF5LmRheS5taW50ZW1wX2MpLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmb3JlY2FzdERheS5kYXkuY29uZGl0aW9uLnRleHQsIFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBgaHR0cHM6JHtmb3JlY2FzdERheS5kYXkuY29uZGl0aW9uLmljb259YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaG91cnM6IGdldEhvdXJseURhdGEoZm9yZWNhc3REYXkuaG91ciwgdGhpcy5sb2NhdGlvbi5sb2NhbHRpbWUsIHRoaXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQuaXNfZGF5ID09PSAxO1xuICAgIH1cblxuICAgIHJldHVybiB7c2V0VG9GYWhyZW5oZWl0LCBzZXRUb0NlbHNpdXMsIGdldFRlbXBTY2FsZSwgZ2V0TG9jYXRpb24sIGdldEN1cnJlbnRUZW1wZXJhdHVyZSwgZ2V0Q3VycmVudENvbmRpdGlvbiwgZ2V0Q3VycmVudFdlYXRoZXJJbmZvLCBnZXRNYXhNaW5UZW1wVG9kYXksIGdldEZvcmVjYXN0RGF5cywgaXNEYXl9O1xufSBcblxuLy8gQ29tYmluZXMgdGhlIG9iamVjdCBmcm9tIHRoZSBBUEkgYW5kIHRoZSBvYmplY3QgdGhhdCBob2xkcyBhbGwgdGhlIG1ldGhvZHMgKGNyZWF0ZWQgZnJvbSBcImNyZWF0ZVdlYXRoZXJPYmplY3RNZXRob2RzKClcIilcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyT2JqZWN0KHJlc3BvbnNlT2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlT2JqLCBjcmVhdGVXZWF0aGVyT2JqZWN0TWV0aG9kcygpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgc3RhcnQgfSBmcm9tIFwiLi9ET00vc3RhcnQuanNcIjtcblxuc3RhcnQoKTtcbi8vIGdldFdlYXRoZXIoJ3BhcmlzJyk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9