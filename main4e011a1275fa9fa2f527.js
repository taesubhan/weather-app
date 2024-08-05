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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-font-size: 25px;
    --button-font-size: 20px;
    --title-font-size: 35px;
    --current-temp-font-size: 50px;
    --border-radius: 10px;
    --page-width: 80%;
    --title-margin: 20px;
    
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

.header {
    display: flex;
    justify-content: center;
}

/* Current Weather */

.current-weather {
    /* align-content: start; */
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: var(--page-width);
    height: 200px;
    border: 1px black solid;
    border-radius: var(--border-radius);
    font-size: var(--main-font-size);
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
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 10px;
    flex: 1 1 auto;
    /* height: 100%; */
}

.current-weather-information {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.current-temperature {
    font-size: var(--current-temp-font-size);
}

.current-condition {
    
}

.current-condition-icon-container {

}

.condition-icon {
    width: 100px;
}

.current-max-min {
    display: flex;
    gap: 20px;
}


/* Forecast */

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
    background-color: rgb(1, 218, 1);
}

.temp-scale-button {
    font-size: 12px;
    width: 80px;
    height: 30px;
}

.selected-temp-scale {
    background-color: rgb(1, 218, 1);
}

/* Daily + Hourly */
.forecast,
.hourly-forecast,
.current-weather-info {
    font-size: var(--main-font-size);
    border: 1px black solid;
    border-radius: var(--border-radius);
    width: var(--page-width);
    /* height: 300px; */
    padding: 10px;
}

.daily-forecast-body,
.hourly-forecast-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* gap: 30px; */
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
    /* gap: 20px; */
    /* padding: 5px; */
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
    /* padding: 100px 0px; */
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
    /* width: 80%; */
    min-width: fit-content;
    gap: 10px;
}

.current-weather-info-item div {
    /* text-align: center;
    min-width: fit-content; */
}

.current-weather-info-item:not(:last-child):not(:nth-child(5))::after {
    content: '';
    width: 100%;
    border-bottom: 1px black solid;
    grid-column: 1 / 3;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;IACvB,8BAA8B;IAC9B,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;;AAExB;;AAEA;IACI,sBAAsB;AAC1B;AACA;;;IAGI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA,oBAAoB;;AAEpB;IACI,0BAA0B;IAC1B,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mCAAmC;IACnC,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,uCAAuC;IACvC,aAAa;IACb,wCAAwC;IACxC,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;;AAGA,aAAa;;AAEb,YAAY;AACZ;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,kCAAkC;AACtC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA,mBAAmB;AACnB;;;IAGI,gCAAgC;IAChC,uBAAuB;IACvB,mCAAmC;IACnC,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;;IAEI,qBAAqB;IACrB,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;;;IAGI,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA,eAAe;AACf;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kCAAkC;AACtC;;AAEA,gBAAgB;AAChB;IACI,6CAA6C;IAC7C,iBAAiB;IACjB,+BAA+B;IAC/B,wBAAwB;AAC5B;;;AAGA,yCAAyC;;AAEzC;IACI,gBAAgB;IAChB,aAAa;IACb,qCAAqC;IACrC,YAAY;IACZ,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI;6BACyB;AAC7B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;AACtB","sourcesContent":[":root {\n    --main-font-size: 25px;\n    --button-font-size: 20px;\n    --title-font-size: 35px;\n    --current-temp-font-size: 50px;\n    --border-radius: 10px;\n    --page-width: 80%;\n    --title-margin: 20px;\n    \n}\n\nhtml {\n    box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n    box-sizing: inherit;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n/* Current Weather */\n\n.current-weather {\n    /* align-content: start; */\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: var(--page-width);\n    height: 200px;\n    border: 1px black solid;\n    border-radius: var(--border-radius);\n    font-size: var(--main-font-size);\n}\n\n.current-location {\n    display: flex;\n    align-items: center;\n    height: 40px;\n    background-color: rgba(67, 67, 67, 0.5);\n    padding: 10px;\n    border-top-left-radius: calc(10px - 1px);\n    border-top-right-radius: calc(10px - 1px);\n}\n\n.current-body {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    padding: 10px;\n    flex: 1 1 auto;\n    /* height: 100%; */\n}\n\n.current-weather-information {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.current-temperature {\n    font-size: var(--current-temp-font-size);\n}\n\n.current-condition {\n    \n}\n\n.current-condition-icon-container {\n\n}\n\n.condition-icon {\n    width: 100px;\n}\n\n.current-max-min {\n    display: flex;\n    gap: 20px;\n}\n\n\n/* Forecast */\n\n/* Buttons */\n.forecast-buttons {\n    display: flex;\n}\n\n.forecast-btn {\n    width: 220px;\n    height: 40px;\n    border-radius: 0px;\n    background-color: rgb(198, 198, 198);\n    font-size: var(--button-font-size);\n}\n\n.forecast-selected {\n    background-color: rgb(1, 218, 1);\n}\n\n.temp-scale-button {\n    font-size: 12px;\n    width: 80px;\n    height: 30px;\n}\n\n.selected-temp-scale {\n    background-color: rgb(1, 218, 1);\n}\n\n/* Daily + Hourly */\n.forecast,\n.hourly-forecast,\n.current-weather-info {\n    font-size: var(--main-font-size);\n    border: 1px black solid;\n    border-radius: var(--border-radius);\n    width: var(--page-width);\n    /* height: 300px; */\n    padding: 10px;\n}\n\n.daily-forecast-body,\n.hourly-forecast-body {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* gap: 30px; */\n    padding: 0px;\n    margin: 0px;\n}\n\n.forecast-day,\n.hourly-data {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n    /* gap: 20px; */\n    /* padding: 5px; */\n}\n\n.forecast-day:not(:last-child)::after,\n.hourly-data:not(:last-child)::after {\n    content: '';\n    width: 100%;\n    border-bottom: 1px black solid;\n    grid-column: 1 / 4;\n}\n\n.daily-forecast-title,\n.hourly-forecast-title,\n.current-weather-info-title {\n    font-size: var(--title-font-size);\n    font-weight: bold;\n}\n\n/* Daily Only */\n.forecast-high-low {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.forecast-condition {\n    width: 50px;\n}\n\n.daily-forecast-title {\n    margin-bottom: var(--title-margin);\n}\n\n/* Hourly Only */\n.day-title {\n    font-size: calc(var(--main-font-size) * 1.25);\n    font-weight: bold;\n    margin: var(--title-margin) 0px;\n    /* padding: 100px 0px; */\n}\n\n\n/* Current Weather Information - Bottom */\n\n.current-weather-data {\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0px;\n    gap: 20px;\n    column-gap: 40px;\n    align-items: center;\n    min-width: fit-content;\n}\n\n.current-weather-info-item {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    /* width: 80%; */\n    min-width: fit-content;\n    gap: 10px;\n}\n\n.current-weather-info-item div {\n    /* text-align: center;\n    min-width: fit-content; */\n}\n\n.current-weather-info-item:not(:last-child):not(:nth-child(5))::after {\n    content: '';\n    width: 100%;\n    border-bottom: 1px black solid;\n    grid-column: 1 / 3;\n}"],"sourceRoot":""}]);
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
/* harmony export */   deleteForecastButtons: () => (/* binding */ deleteForecastButtons),
/* harmony export */   displayChangeTempScaleButtons: () => (/* binding */ displayChangeTempScaleButtons),
/* harmony export */   displayForecastButtons: () => (/* binding */ displayForecastButtons)
/* harmony export */ });
/* harmony import */ var _page_control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-control.js */ "./src/DOM/page-control.js");
/* harmony import */ var _temp_scale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temp-scale.js */ "./src/DOM/temp-scale.js");
/* harmony import */ var _logic_settings_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/settings-state.js */ "./src/logic/settings-state.js");




/* Forecast */

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

function deleteForecastButtons() {
    const btnStorage = document.querySelectorAll('.forecast-buttons');
    if (btnStorage) {
        for (const btn of btnStorage) {
            btn.remove();
        }
    }
}

/* Change Temperature Scale (F or C) */

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

function createTempScaleButtons(weather) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('change-temp-scale');
    btnContainer.appendChild(createFahrenheitBtn(weather));
    btnContainer.appendChild(createCelsiusBtn(weather));
    return btnContainer;
}

function displayChangeTempScaleButtons(weather) {
    const container = document.querySelector('#container');
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
/* harmony export */   deleteCurrentWeatherInfo: () => (/* binding */ deleteCurrentWeatherInfo),
/* harmony export */   populateCurrentWeatherInfo: () => (/* binding */ populateCurrentWeatherInfo)
/* harmony export */ });
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");


function deleteCurrentWeatherInfo() {
    const info = document.querySelector('.current-weather-info');
    if (info) {
        info.remove();
    }
}

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
/* harmony export */   deleteCurrentWeatherBox: () => (/* binding */ deleteCurrentWeatherBox),
/* harmony export */   populateCurrentWeather: () => (/* binding */ populateCurrentWeather)
/* harmony export */ });
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");


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

function deleteCurrentWeatherBox() {
    const currentWeather = document.querySelector('.current-weather');
    if (currentWeather) {
        currentWeather.remove();
    }
}

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

    currentRegionState.textContent = `${location.region}, ${location.city}`;
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
/* harmony export */   delete3DayForecast: () => (/* binding */ delete3DayForecast),
/* harmony export */   populateDailyForecastWeather: () => (/* binding */ populateDailyForecastWeather),
/* harmony export */   selectDailyForecast: () => (/* binding */ selectDailyForecast)
/* harmony export */ });
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");


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

function delete3DayForecast() {
    const forecast = document.querySelector('.forecast');
    if (forecast) {
        forecast.remove();
    }
}

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
/* harmony export */   deleteHourlyForecast: () => (/* binding */ deleteHourlyForecast),
/* harmony export */   populateHourlyForecastWeather: () => (/* binding */ populateHourlyForecastWeather),
/* harmony export */   selectHourlyForecast: () => (/* binding */ selectHourlyForecast)
/* harmony export */ });
/* harmony import */ var _reusable_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-functions.js */ "./src/DOM/reusable-functions.js");


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

function deleteHourlyForecast() {
    const hourlyForecast = document.querySelector('.hourly-forecast');
    if (hourlyForecast) {
        hourlyForecast.remove();
    }
}

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

async function pushWeatherObjToDOM(location) {
    const weather = await (0,_logic_weather_API_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location);
    console.log(weather);
    
    (0,_page_control_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage)(weather);
}

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
/* harmony export */   clearPage: () => (/* binding */ clearPage),
/* harmony export */   refreshPage: () => (/* binding */ refreshPage),
/* harmony export */   refreshWithDailyForecast: () => (/* binding */ refreshWithDailyForecast),
/* harmony export */   refreshWithHourlyForecast: () => (/* binding */ refreshWithHourlyForecast)
/* harmony export */ });
/* harmony import */ var _location_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-input.js */ "./src/DOM/location-input.js");
/* harmony import */ var _current_weather_top_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-weather-top.js */ "./src/DOM/current-weather-top.js");
/* harmony import */ var _forecast_daily_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast-daily.js */ "./src/DOM/forecast-daily.js");
/* harmony import */ var _forecast_hourly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast-hourly.js */ "./src/DOM/forecast-hourly.js");
/* harmony import */ var _current_weather_info_bottom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-weather-info-bottom.js */ "./src/DOM/current-weather-info-bottom.js");
/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons.js */ "./src/DOM/buttons.js");
/* harmony import */ var _temp_scale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temp-scale.js */ "./src/DOM/temp-scale.js");
/* harmony import */ var _logic_settings_state_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logic/settings-state.js */ "./src/logic/settings-state.js");









function clearPage() {
    const container = document.querySelector('#container');
    while (container.lastChild) {
        container.lastChild.remove();
    }
}

function populateSearchAndCurrent(weather) {
    (0,_location_input_js__WEBPACK_IMPORTED_MODULE_0__.populateLocationSearch)();
    (0,_buttons_js__WEBPACK_IMPORTED_MODULE_5__.displayChangeTempScaleButtons)(weather);
    (0,_temp_scale_js__WEBPACK_IMPORTED_MODULE_6__.setSelectedTempScale)(weather);
    (0,_current_weather_top_js__WEBPACK_IMPORTED_MODULE_1__.populateCurrentWeather)(weather);
    (0,_buttons_js__WEBPACK_IMPORTED_MODULE_5__.displayForecastButtons)(weather);
}

function refreshWithDailyForecast(weather) {
    clearPage();

    populateSearchAndCurrent(weather);
    
    (0,_forecast_daily_js__WEBPACK_IMPORTED_MODULE_2__.populateDailyForecastWeather)(weather);
    (0,_current_weather_info_bottom_js__WEBPACK_IMPORTED_MODULE_4__.populateCurrentWeatherInfo)(weather);
    (0,_forecast_daily_js__WEBPACK_IMPORTED_MODULE_2__.selectDailyForecast)();
}

function refreshWithHourlyForecast(weather) {
    clearPage();
    
    populateSearchAndCurrent(weather);

    (0,_forecast_hourly_js__WEBPACK_IMPORTED_MODULE_3__.populateHourlyForecastWeather)(weather);
    (0,_buttons_js__WEBPACK_IMPORTED_MODULE_5__.displayForecastButtons)(weather);
    (0,_forecast_hourly_js__WEBPACK_IMPORTED_MODULE_3__.selectHourlyForecast)();
}

function refreshPage(weather) {
    // const selectedForecast = document.querySelector('.forecast-selected');
    const selectedForecast = _logic_settings_state_js__WEBPACK_IMPORTED_MODULE_7__["default"].getForecast();
    if (selectedForecast === 'daily') {
        refreshWithDailyForecast(weather);
    } else if (selectedForecast === 'hourly') {
        refreshWithHourlyForecast(weather);
    } else {
        throw new Error('No forecast type found at refresh');
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
function appendChildren(parent, ...children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

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

// import {pageSetting} from '../logic/settings-state.js';

function start() {
    (0,_location_input_js__WEBPACK_IMPORTED_MODULE_0__.populateLocationSearch)();
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
function setSelectedTempScale(weather) {
    if (weather.getTempScale() === 'fahrenheit') {
        selectFahrenheit();
    } else if (weather.getTempScale() === 'celsius') {
        selectCelsius();
    }
}

function selectFahrenheit() {
    const fahrenheitBtn = document.querySelector('.set-to-fahrenheit');
    const celsiusBtn = document.querySelector('.set-to-celsius');
    fahrenheitBtn.classList.add('selected-temp-scale');
    celsiusBtn.classList.remove('selected-temp-scale');
}

function selectCelsius() {
    const celsiusBtn = document.querySelector('.set-to-celsius');
    const fahrenheitBtn = document.querySelector('.set-to-fahrenheit');
    celsiusBtn.classList.add('selected-temp-scale');
    fahrenheitBtn.classList.remove('selected-temp-scale');
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
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a07423bee1184831ba1224536240806&q=${location}&days=3`, {mode:'cors'});
        const respObj = await response.json();

        console.log('first', respObj);

        checkResponseErrors(respObj);

        const newObj = (0,_weather_object_js__WEBPACK_IMPORTED_MODULE_0__.createWeatherObject)(respObj);

        return newObj;
    } catch(error) {
        alert(error);
    }   
}

// Checks the API response object to see if it has any errors, and if it does it throws it
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

    return {setToFahrenheit, setToCelsius, getTempScale, getLocation, getCurrentTemperature, getCurrentCondition, getCurrentWeatherInfo, getMaxMinTempToday, getForecastDays};
} 

// Combines the object from the API and the object that holds all the methods (created from "createWeatherObjectMethods()")
function createWeatherObject(responseObj) {
    return Object.assign({}, responseObj, createWeatherObjectMethods());
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbjRlMDExYTEyNzVmYTlmYTJmNTI3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3RkFBd0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sV0FBVyxVQUFVLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksUUFBUSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEs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O0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9CO0FBQ3ZEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsK0JBQStCO0FBQ2xFLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ087QUFDUCwyQkFBMkI7QUFDM0I7Ozs7OztVQ2pIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7QUNBNEI7QUFDVzs7QUFFdkMsb0RBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00vYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00vY3VycmVudC13ZWF0aGVyLWluZm8tYm90dG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS9jdXJyZW50LXdlYXRoZXItdG9wLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS9mb3JlY2FzdC1kYWlseS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00vZm9yZWNhc3QtaG91cmx5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS9sb2NhdGlvbi1pbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00vcGFnZS1jb250cm9sLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS9yZXVzYWJsZS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NL3N0YXJ0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS90ZW1wLXNjYWxlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvZ2ljL2xvZ2ljLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2dpYy9zZXR0aW5ncy1zdGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2dpYy93ZWF0aGVyLUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2dpYy93ZWF0aGVyLW9iamVjdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1mb250LXNpemU6IDI1cHg7XG4gICAgLS1idXR0b24tZm9udC1zaXplOiAyMHB4O1xuICAgIC0tdGl0bGUtZm9udC1zaXplOiAzNXB4O1xuICAgIC0tY3VycmVudC10ZW1wLWZvbnQtc2l6ZTogNTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLS1wYWdlLXdpZHRoOiA4MCU7XG4gICAgLS10aXRsZS1tYXJnaW46IDIwcHg7XG4gICAgXG59XG5cbmh0bWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbiNjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNTBweDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogQ3VycmVudCBXZWF0aGVyICovXG5cbi5jdXJyZW50LXdlYXRoZXIge1xuICAgIC8qIGFsaWduLWNvbnRlbnQ6IHN0YXJ0OyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcbn1cblxuLmN1cnJlbnQtbG9jYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NywgNjcsIDY3LCAwLjUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYygxMHB4IC0gMXB4KTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYygxMHB4IC0gMXB4KTtcbn1cblxuLmN1cnJlbnQtYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbn1cblxuLmN1cnJlbnQtd2VhdGhlci1pbmZvcm1hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4uY3VycmVudC10ZW1wZXJhdHVyZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1jdXJyZW50LXRlbXAtZm9udC1zaXplKTtcbn1cblxuLmN1cnJlbnQtY29uZGl0aW9uIHtcbiAgICBcbn1cblxuLmN1cnJlbnQtY29uZGl0aW9uLWljb24tY29udGFpbmVyIHtcblxufVxuXG4uY29uZGl0aW9uLWljb24ge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmN1cnJlbnQtbWF4LW1pbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG59XG5cblxuLyogRm9yZWNhc3QgKi9cblxuLyogQnV0dG9ucyAqL1xuLmZvcmVjYXN0LWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mb3JlY2FzdC1idG4ge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDE5OCwgMTk4KTtcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xufVxuXG4uZm9yZWNhc3Qtc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAyMTgsIDEpO1xufVxuXG4udGVtcC1zY2FsZS1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zZWxlY3RlZC10ZW1wLXNjYWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMjE4LCAxKTtcbn1cblxuLyogRGFpbHkgKyBIb3VybHkgKi9cbi5mb3JlY2FzdCxcbi5ob3VybHktZm9yZWNhc3QsXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kYWlseS1mb3JlY2FzdC1ib2R5LFxuLmhvdXJseS1mb3JlY2FzdC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogZ2FwOiAzMHB4OyAqL1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmZvcmVjYXN0LWRheSxcbi5ob3VybHktZGF0YSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGdhcDogMjBweDsgKi9cbiAgICAvKiBwYWRkaW5nOiA1cHg7ICovXG59XG5cbi5mb3JlY2FzdC1kYXk6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIsXG4uaG91cmx5LWRhdGE6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XG59XG5cbi5kYWlseS1mb3JlY2FzdC10aXRsZSxcbi5ob3VybHktZm9yZWNhc3QtdGl0bGUsXG4uY3VycmVudC13ZWF0aGVyLWluZm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogRGFpbHkgT25seSAqL1xuLmZvcmVjYXN0LWhpZ2gtbG93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLmZvcmVjYXN0LWNvbmRpdGlvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5kYWlseS1mb3JlY2FzdC10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tdGl0bGUtbWFyZ2luKTtcbn1cblxuLyogSG91cmx5IE9ubHkgKi9cbi5kYXktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tYWluLWZvbnQtc2l6ZSkgKiAxLjI1KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IHZhcigtLXRpdGxlLW1hcmdpbikgMHB4O1xuICAgIC8qIHBhZGRpbmc6IDEwMHB4IDBweDsgKi9cbn1cblxuXG4vKiBDdXJyZW50IFdlYXRoZXIgSW5mb3JtYXRpb24gLSBCb3R0b20gKi9cblxuLmN1cnJlbnQtd2VhdGhlci1kYXRhIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGNvbHVtbi1nYXA6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uY3VycmVudC13ZWF0aGVyLWluZm8taXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogd2lkdGg6IDgwJTsgKi9cbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGdhcDogMTBweDtcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1pbmZvLWl0ZW0gZGl2IHtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDsgKi9cbn1cblxuLmN1cnJlbnQtd2VhdGhlci1pbmZvLWl0ZW06bm90KDpsYXN0LWNoaWxkKTpub3QoOm50aC1jaGlsZCg1KSk6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7O0FBR0EsYUFBYTs7QUFFYixZQUFZO0FBQ1o7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQSxtQkFBbUI7QUFDbkI7OztJQUdJLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBLGVBQWU7QUFDZjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksNkNBQTZDO0lBQzdDLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0Isd0JBQXdCO0FBQzVCOzs7QUFHQSx5Q0FBeUM7O0FBRXpDO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJOzZCQUN5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1mb250LXNpemU6IDI1cHg7XFxuICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogMjBweDtcXG4gICAgLS10aXRsZS1mb250LXNpemU6IDM1cHg7XFxuICAgIC0tY3VycmVudC10ZW1wLWZvbnQtc2l6ZTogNTBweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAtLXBhZ2Utd2lkdGg6IDgwJTtcXG4gICAgLS10aXRsZS1tYXJnaW46IDIwcHg7XFxuICAgIFxcbn1cXG5cXG5odG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIEN1cnJlbnQgV2VhdGhlciAqL1xcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgICAvKiBhbGlnbi1jb250ZW50OiBzdGFydDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcXG59XFxuXFxuLmN1cnJlbnQtbG9jYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDY3LCA2NywgMC41KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYygxMHB4IC0gMXB4KTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoMTBweCAtIDFweCk7XFxufVxcblxcbi5jdXJyZW50LWJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWN1cnJlbnQtdGVtcC1mb250LXNpemUpO1xcbn1cXG5cXG4uY3VycmVudC1jb25kaXRpb24ge1xcbiAgICBcXG59XFxuXFxuLmN1cnJlbnQtY29uZGl0aW9uLWljb24tY29udGFpbmVyIHtcXG5cXG59XFxuXFxuLmNvbmRpdGlvbi1pY29uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY3VycmVudC1tYXgtbWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5cXG4vKiBGb3JlY2FzdCAqL1xcblxcbi8qIEJ1dHRvbnMgKi9cXG4uZm9yZWNhc3QtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mb3JlY2FzdC1idG4ge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5mb3JlY2FzdC1zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAyMTgsIDEpO1xcbn1cXG5cXG4udGVtcC1zY2FsZS1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5zZWxlY3RlZC10ZW1wLXNjYWxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDIxOCwgMSk7XFxufVxcblxcbi8qIERhaWx5ICsgSG91cmx5ICovXFxuLmZvcmVjYXN0LFxcbi5ob3VybHktZm9yZWNhc3QsXFxuLmN1cnJlbnQtd2VhdGhlci1pbmZvIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGFpbHktZm9yZWNhc3QtYm9keSxcXG4uaG91cmx5LWZvcmVjYXN0LWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiAzMHB4OyAqL1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5LFxcbi5ob3VybHktZGF0YSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGdhcDogMjBweDsgKi9cXG4gICAgLyogcGFkZGluZzogNXB4OyAqL1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5Om5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyLFxcbi5ob3VybHktZGF0YTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxufVxcblxcbi5kYWlseS1mb3JlY2FzdC10aXRsZSxcXG4uaG91cmx5LWZvcmVjYXN0LXRpdGxlLFxcbi5jdXJyZW50LXdlYXRoZXItaW5mby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIERhaWx5IE9ubHkgKi9cXG4uZm9yZWNhc3QtaGlnaC1sb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5mb3JlY2FzdC1jb25kaXRpb24ge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmRhaWx5LWZvcmVjYXN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tdGl0bGUtbWFyZ2luKTtcXG59XFxuXFxuLyogSG91cmx5IE9ubHkgKi9cXG4uZGF5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1haW4tZm9udC1zaXplKSAqIDEuMjUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiB2YXIoLS10aXRsZS1tYXJnaW4pIDBweDtcXG4gICAgLyogcGFkZGluZzogMTAwcHggMHB4OyAqL1xcbn1cXG5cXG5cXG4vKiBDdXJyZW50IFdlYXRoZXIgSW5mb3JtYXRpb24gLSBCb3R0b20gKi9cXG5cXG4uY3VycmVudC13ZWF0aGVyLWRhdGEge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sdW1uLWdhcDogNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pbmZvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogd2lkdGg6IDgwJTsgKi9cXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWluZm8taXRlbSBkaXYge1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7ICovXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaW5mby1pdGVtOm5vdCg6bGFzdC1jaGlsZCk6bm90KDpudGgtY2hpbGQoNSkpOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3JlZnJlc2hXaXRoRGFpbHlGb3JlY2FzdCwgcmVmcmVzaFdpdGhIb3VybHlGb3JlY2FzdCwgcmVmcmVzaFBhZ2V9IGZyb20gJy4vcGFnZS1jb250cm9sLmpzJztcbmltcG9ydCB7c2VsZWN0RmFocmVuaGVpdCwgc2VsZWN0Q2Vsc2l1c30gZnJvbSAnLi90ZW1wLXNjYWxlLmpzJztcbmltcG9ydCBwYWdlU3RhdGUgZnJvbSAnLi4vbG9naWMvc2V0dGluZ3Mtc3RhdGUuanMnO1xuXG4vKiBGb3JlY2FzdCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTaG93RGFpbHlCdXR0b24od2VhdGhlcikge1xuICAgIGNvbnN0IHNob3dEYWlseUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNob3dEYWlseUJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93LWRhaWx5LWZvcmVjYXN0JywgJ2ZvcmVjYXN0LWJ0bicpO1xuICAgIHNob3dEYWlseUJ0bi50ZXh0Q29udGVudCA9ICdTaG93IERhaWx5IERhdGEnO1xuICAgIHNob3dEYWlseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGFnZVN0YXRlLnNldEZvcmVjYXN0VG9EYWlseSgpO1xuICAgICAgICByZWZyZXNoUGFnZSh3ZWF0aGVyKTsgICBcbiAgICB9KVxuICAgIHJldHVybiBzaG93RGFpbHlCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3dIb3VybHlCdXR0b24od2VhdGhlcikge1xuICAgIGNvbnN0IHNob3dIb3VybHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzaG93SG91cmx5QnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3ctaG91cmx5LWZvcmVjYXN0JywgJ2ZvcmVjYXN0LWJ0bicpO1xuICAgIHNob3dIb3VybHlCdG4udGV4dENvbnRlbnQgPSAnU2hvdyBIb3VybHkgRGF0YSc7XG4gICAgc2hvd0hvdXJseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGFnZVN0YXRlLnNldEZvcmVjYXN0VG9Ib3VybHkoKTtcbiAgICAgICAgcmVmcmVzaFBhZ2Uod2VhdGhlcik7ICAgICAgXG4gICAgfSlcbiAgICByZXR1cm4gc2hvd0hvdXJseUJ0bjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdEJ1dHRvbnMod2VhdGhlcikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb25zdCBidG5TdG9yYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuU3RvcmFnZS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1idXR0b25zJyk7XG4gICAgXG4gICAgY29uc3QgZGFpbHlCdG4gPSBjcmVhdGVTaG93RGFpbHlCdXR0b24od2VhdGhlcik7XG4gICAgY29uc3QgaG91cmx5QnRuID0gY3JlYXRlU2hvd0hvdXJseUJ1dHRvbih3ZWF0aGVyKTtcblxuICAgIGJ0blN0b3JhZ2UuYXBwZW5kQ2hpbGQoZGFpbHlCdG4pO1xuICAgIGJ0blN0b3JhZ2UuYXBwZW5kQ2hpbGQoaG91cmx5QnRuKTtcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuU3RvcmFnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGb3JlY2FzdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYnRuU3RvcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1idXR0b25zJyk7XG4gICAgaWYgKGJ0blN0b3JhZ2UpIHtcbiAgICAgICAgZm9yIChjb25zdCBidG4gb2YgYnRuU3RvcmFnZSkge1xuICAgICAgICAgICAgYnRuLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBDaGFuZ2UgVGVtcGVyYXR1cmUgU2NhbGUgKEYgb3IgQykgKi9cblxuZnVuY3Rpb24gY3JlYXRlRmFocmVuaGVpdEJ0bih3ZWF0aGVyKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3NldC10by1mYWhyZW5oZWl0JywgJ3RlbXAtc2NhbGUtYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ0ZhaHJlbmhlaXQnO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2VhdGhlci5zZXRUb0ZhaHJlbmhlaXQoKTtcbiAgICAgICAgcmVmcmVzaFBhZ2Uod2VhdGhlcik7XG4gICAgICAgIHNlbGVjdEZhaHJlbmhlaXQoKTtcbiAgICB9KVxuICAgIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNlbHNpdXNCdG4od2VhdGhlcikge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzZXQtdG8tY2Vsc2l1cycsICd0ZW1wLXNjYWxlLWJ1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdDZWxzaXVzJztcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdlYXRoZXIuc2V0VG9DZWxzaXVzKCk7XG4gICAgICAgIHJlZnJlc2hQYWdlKHdlYXRoZXIpO1xuICAgICAgICBzZWxlY3RDZWxzaXVzKCk7XG4gICAgfSlcbiAgICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZW1wU2NhbGVCdXR0b25zKHdlYXRoZXIpIHtcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLXRlbXAtc2NhbGUnKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRmFocmVuaGVpdEJ0bih3ZWF0aGVyKSk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNlbHNpdXNCdG4od2VhdGhlcikpO1xuICAgIHJldHVybiBidG5Db250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q2hhbmdlVGVtcFNjYWxlQnV0dG9ucyh3ZWF0aGVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUZW1wU2NhbGVCdXR0b25zKHdlYXRoZXIpKTtcbn0iLCJpbXBvcnQge2FwcGVuZENoaWxkcmVufSBmcm9tICcuL3JldXNhYmxlLWZ1bmN0aW9ucy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDdXJyZW50V2VhdGhlckluZm8oKSB7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXItaW5mbycpO1xuICAgIGlmIChpbmZvKSB7XG4gICAgICAgIGluZm8ucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBidWlsZEN1cnJlbnRXZWF0aGVySW5mbygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgXG4gICAgLy8gTGV2ZWwgMVxuICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLWluZm8nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckluZm8pO1xuXG4gICAgLy8gTGV2ZWwgMlxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLWluZm8tdGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDdXJyZW50IFdlYXRoZXInO1xuICAgIFxuICAgIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGRhdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLWRhdGEnKTtcblxuICAgIGFwcGVuZENoaWxkcmVuKHdlYXRoZXJJbmZvLCB0aXRsZSwgZGF0YUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVySW5mb1RpdGxlKGtleSkge1xuICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgY2FzZSAnZmVlbHNsaWtlX2YnOlxuICAgICAgICAgICAgcmV0dXJuICdGZWVscyBMaWtlJztcbiAgICAgICAgY2FzZSAnaHVtaWRpdHknOlxuICAgICAgICAgICAgcmV0dXJuICdIdW1pZGl0eSc7XG4gICAgICAgIGNhc2UgJ3V2JzpcbiAgICAgICAgICAgIHJldHVybiAnVVYgSW5kZXgnO1xuICAgICAgICBjYXNlICd2aXNpYmlsaXR5JzpcbiAgICAgICAgICAgIHJldHVybiAnVmlzaWJpbGl0eSc7XG4gICAgICAgIGNhc2UgJ3dpbmRfbXBoJzpcbiAgICAgICAgICAgIHJldHVybiAnV2luZCc7XG4gICAgICAgIGNhc2UgJ3ByZXNzdXJlX2luJzpcbiAgICAgICAgICAgIHJldHVybiAnUHJlc3N1cmUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlQ3VycmVudFdlYXRoZXJJbmZvKHdlYXRoZXIpIHtcbiAgICBidWlsZEN1cnJlbnRXZWF0aGVySW5mbygpO1xuICAgIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyLWRhdGEnKTtcbiAgICBjb25zdCB3ZWF0aGVySW5mbyA9IHdlYXRoZXIuZ2V0Q3VycmVudFdlYXRoZXJJbmZvKCk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMod2VhdGhlckluZm8pKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoa2V5LCAnY3VycmVudC13ZWF0aGVyLWluZm8taXRlbScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXItaW5mby1rZXknKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLWluZm8tdmFsdWUnKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGdldEN1cnJlbnRXZWF0aGVySW5mb1RpdGxlKGtleSk7XG4gICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gdmFsO1xuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGl0ZW0sIHRpdGxlLCB2YWx1ZSk7XG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxufSIsImltcG9ydCB7YXBwZW5kQ2hpbGRyZW59IGZyb20gJy4vcmV1c2FibGUtZnVuY3Rpb25zLmpzJztcblxuZnVuY3Rpb24gYnVpbGRDdXJyZW50V2VhdGhlckJveCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5cbiAgICAvLyBMZXZlbCAxIChUb3ApIC0gQ3VycmVudCB3ZWF0aGVyIGNvbnRhaW5lclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyKTtcbiAgICBcbiAgICAvLyBMZXZlbCAyIC0gQ29udGFpbmVyIGZvciBjdXJyZW50IGxvY2F0aW9uIGFuZCB0aW1lXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbG9jYXRpb24nKTtcbiAgICBjdXJyZW50V2VhdGhlci5hcHBlbmRDaGlsZChjdXJyZW50TG9jYXRpb24pO1xuXG4gICAgLy8gTGV2ZWwgMyAtIFNwYW5zIHRoYXQgc3RvcmVzIHRoZSBhYm92ZSBpbmZvcm1hdGlvblxuICAgIGNvbnN0IHJlZ2lvblN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHJlZ2lvblN0YXRlLmNsYXNzTGlzdC5hZGQoJ3JlZ2lvbi1zdGF0ZScpO1xuICAgIGNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvY2FsdGltZScpO1xuICAgIGxvY2FsVGltZS5jbGFzc0xpc3QuYWRkKCdsb2NhbHRpbWUnKTtcbiAgICBhcHBlbmRDaGlsZHJlbihjdXJyZW50TG9jYXRpb24sIHJlZ2lvblN0YXRlLCBsb2NhbFRpbWUpO1xuXG4gICAgLy8gTGV2ZWwgMiAtIENvbnRhaW5lciBmb3IgY3VycmVudCB0ZW1wZXJhdHVyZVxuICAgIGNvbnN0IGN1cnJlbnRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudEJvZHkuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1ib2R5Jyk7XG4gICAgY3VycmVudFdlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudEJvZHkpO1xuXG4gICAgLy8gTGV2ZWwgMyAtIFN1Yi1jb250YWluZXIgZm9yIGp1c3QgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb25cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50V2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLWluZm9ybWF0aW9uJyk7XG4gICAgY3VycmVudEJvZHkuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJJbmZvKTtcblxuICAgIC8vIExldmVsIDQgLSBUZW1wZXJhdHVyZSBpbmZvcm1hdGlvblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZCgnY3VycmVudC10ZW1wZXJhdHVyZScpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudENvbmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jb25kaXRpb24nKTtcbiAgICBjb25zdCBjdXJyZW50TWF4TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudE1heE1pbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW1heC1taW4nKTtcbiAgICBhcHBlbmRDaGlsZHJlbihjdXJyZW50V2VhdGhlckluZm8sIGN1cnJlbnRUZW1wLCBjdXJyZW50Q29uZCwgY3VycmVudE1heE1pbik7XG5cbiAgICAvLyBMZXZlbCA1IC0gTWF4IE1pblxuICAgIGNvbnN0IG1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW1heC10ZW1wJyk7XG4gICAgY29uc3QgbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbWluLXRlbXAnKTtcbiAgICBhcHBlbmRDaGlsZHJlbihjdXJyZW50TWF4TWluLCBtYXgsIG1pbik7XG5cbiAgICAvLyBMZXZlbCAzIC0gQ29udGFpbmVyIGZvciBjdXJyZW50IHdlYXRoZXIgaWNvblxuICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudENvbmRpdGlvbkljb24uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jb25kaXRpb24taWNvbi1jb250YWluZXInKTtcbiAgICBjdXJyZW50Qm9keS5hcHBlbmRDaGlsZChjdXJyZW50Q29uZGl0aW9uSWNvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDdXJyZW50V2VhdGhlckJveCgpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXInKTtcbiAgICBpZiAoY3VycmVudFdlYXRoZXIpIHtcbiAgICAgICAgY3VycmVudFdlYXRoZXIucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVDdXJyZW50V2VhdGhlcih3ZWF0aGVyKSB7XG4gICAgYnVpbGRDdXJyZW50V2VhdGhlckJveCgpO1xuICAgIGNvbnN0IGN1cnJlbnRSZWdpb25TdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpb24tc3RhdGUnKTtcbiAgICBjb25zdCBjdXJyZW50TG9jYWxUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2FsdGltZScpO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGVtcGVyYXR1cmUnKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY29uZGl0aW9uJyk7XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWNvbmRpdGlvbi1pY29uLWNvbnRhaW5lcicpXG4gICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW1heC10ZW1wJyk7XG4gICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW1pbi10ZW1wJyk7XG4gICAgXG4gICAgbGV0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uLWljb24nKVxuICAgIGlmICghY29uZGl0aW9uSWNvbikge1xuICAgICAgICBjb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbmRpdGlvbkljb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uLWljb24nKTtcbiAgICAgICAgY29uZGl0aW9uSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25JY29uKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbG9jYXRpb24gPSB3ZWF0aGVyLmdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlci5nZXRDdXJyZW50Q29uZGl0aW9uKCk7XG4gICAgY29uc3QgcmFuZ2UgPSB3ZWF0aGVyLmdldE1heE1pblRlbXBUb2RheSgpO1xuXG4gICAgY3VycmVudFJlZ2lvblN0YXRlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24ucmVnaW9ufSwgJHtsb2NhdGlvbi5jaXR5fWA7XG4gICAgY3VycmVudFJlZ2lvblN0YXRlLmlubmVyVGV4dCArPSAnXFx1MDBBMCc7XG4gICAgY3VycmVudExvY2FsVGltZS50ZXh0Q29udGVudCA9IGBhcyBvZiAke2xvY2F0aW9uLmxvY2FsVGltZX1gO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gd2VhdGhlci5nZXRDdXJyZW50VGVtcGVyYXR1cmUoKS5mYWhyZW5oZWl0O1xuICAgIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBjb25kaXRpb24udGV4dDtcbiAgICBjb25kaXRpb25JY29uLnNyYyA9IGNvbmRpdGlvbi5pY29uO1xuICAgIGNvbmRpdGlvbkljb24uYWx0ID0gYCR7Y29uZGl0aW9uLnRleHR9IGljb25gO1xuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBgSDogJHtyYW5nZS5tYXh9YDtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYEw6ICR7cmFuZ2UubWlufWA7XG59IiwiaW1wb3J0IHthcHBlbmRDaGlsZHJlbn0gZnJvbSAnLi9yZXVzYWJsZS1mdW5jdGlvbnMuanMnO1xuXG5mdW5jdGlvbiBidWlsZDNEYXlGb3JlY2FzdCh3ZWF0aGVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXG4gICAgLy8gTGV2ZWwgMVxuICAgIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3QpO1xuXG4gICAgLy8gTGV2ZWwgMlxuICAgIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aHJlZURheUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWZvcmVjYXN0Jyk7XG4gICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQodGhyZWVEYXlGb3JlY2FzdCk7XG5cbiAgICAvL0xldmVsIDMgLSBIb2xkcyB2YWx1ZXMgZm9yIGZvcmVjYXN0XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdkYWlseS1mb3JlY2FzdC10aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJzMgRGF5IEZvcmVjYXN0JztcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFpbHktZm9yZWNhc3QtYm9keScpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4odGhyZWVEYXlGb3JlY2FzdCwgdGl0bGUsIGJvZHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlM0RheUZvcmVjYXN0KCkge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgaWYgKGZvcmVjYXN0KSB7XG4gICAgICAgIGZvcmVjYXN0LnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRGFpbHlGb3JlY2FzdFdlYXRoZXIod2VhdGhlcikge1xuICAgIGJ1aWxkM0RheUZvcmVjYXN0KHdlYXRoZXIpO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1mb3JlY2FzdC1ib2R5Jyk7XG4gICAgY29uc3QgZm9yZWNhc3QgPSB3ZWF0aGVyLmdldEZvcmVjYXN0RGF5cygpO1xuICAgIGZvciAoY29uc3QgZGF5IG9mIGZvcmVjYXN0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWRheScpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kYXRlJyk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1jb25kaXRpb24nKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGhpZ2hMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlnaExvdy5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1oaWdoLWxvdycpO1xuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZ2guY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtaGlnaCcpO1xuICAgICAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbG93LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWxvdycpO1xuICAgICAgICBoaWdoTG93LmFwcGVuZENoaWxkKGhpZ2gpO1xuICAgICAgICBoaWdoTG93LmFwcGVuZENoaWxkKGxvdyk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaGlnaExvdyk7XG5cbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGRheS5kYXRlO1xuICAgICAgICBjb25kaXRpb24uc3JjID0gZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBjb25kaXRpb24uYWx0ID0gZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBoaWdoLnRleHRDb250ZW50ID0gYEg6ICR7ZGF5Lm1heH1gO1xuICAgICAgICBsb3cudGV4dENvbnRlbnQgPSBgTDogJHtkYXkubWlufWA7XG5cbiAgICAgICAgZm9yZWNhc3REYXlzLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERhaWx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc3Qgc2hvd0hvdXJseUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1ob3VybHktZm9yZWNhc3QnKTtcbiAgICBjb25zdCBzaG93RGFpbHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctZGFpbHktZm9yZWNhc3QnKTtcbiAgICBzaG93SG91cmx5QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zZWxlY3RlZCcpKTtcbiAgICBzaG93RGFpbHlCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LXNlbGVjdGVkJykpO1xufSIsImltcG9ydCB7YXBwZW5kQ2hpbGRyZW59IGZyb20gJy4vcmV1c2FibGUtZnVuY3Rpb25zLmpzJztcblxuZnVuY3Rpb24gYnVpbGRIb3VybHlGb3JlY2FzdCh3ZWF0aGVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXG4gICAgLy8gTGV2ZWwgMVxuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cmx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0KTtcblxuICAgIC8vIExldmVsIDJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdC10aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJzMgRGF5IEhvdXJseSBGb3JlY2FzdCc7XG4gICAgXG4gICAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlY29yZHMuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcicpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oaG91cmx5Rm9yZWNhc3QsIHRpdGxlLCByZWNvcmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUhvdXJseUZvcmVjYXN0KCkge1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1mb3JlY2FzdCcpO1xuICAgIGlmIChob3VybHlGb3JlY2FzdCkge1xuICAgICAgICBob3VybHlGb3JlY2FzdC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSG91cmx5UmVjb3JkcyhkYXksIGRheUVsZW0pIHtcbiAgICBjb25zdCBob3VycyA9IGRheS5ob3VycztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXIgPSBob3Vyc1tpXTtcbiAgICAgICAgY29uc3QgaG91ckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBob3VyRWxlbS5jbGFzc0xpc3QuYWRkKCdob3VybHktZGF0YScpO1xuICAgICAgICBob3VyRWxlbS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgYCR7aX1gKTtcbiAgICAgICAgZGF5RWxlbS5hcHBlbmRDaGlsZChob3VyRWxlbSk7XG5cbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS10aW1lJyk7XG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBob3VyLnRpbWU7XG5cbiAgICAgICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWNvbmRpdGlvbicpO1xuICAgICAgICBjb25kaXRpb25JY29uLnNyYyA9IGhvdXIuY29uZGl0aW9uLmljb247XG4gICAgICAgIGNvbmRpdGlvbkljb24uYWx0ID0gaG91ci5jb25kaXRpb24udGV4dDtcblxuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtdGVtcGVyYXR1cmUnKTtcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGhvdXIudGVtcDtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihob3VyRWxlbSwgdGltZSwgY29uZGl0aW9uSWNvbiwgdGVtcCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVIb3VybHlGb3JlY2FzdFdlYXRoZXIod2VhdGhlcikge1xuICAgIGJ1aWxkSG91cmx5Rm9yZWNhc3Qod2VhdGhlcik7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gd2VhdGhlci5nZXRGb3JlY2FzdERheXMoKTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IGRheSBvZiBmb3JlY2FzdCkge1xuICAgICAgICBjb25zdCBkYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGF5LWhvdXJseScsYCR7ZGF5LmRhdGV9YCk7XG4gICAgICAgIGhvdXJseUZvcmVjYXN0LmFwcGVuZENoaWxkKGRheUVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RheS10aXRsZScsIGAke2RheS5kYXRlfWApO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGRheS5kYXRlO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBob3VybHlEYXRhLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdC1ib2R5JywgYCR7ZGF5LmRhdGV9YCk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZGF5RWxlbWVudCwgdGl0bGUsIGhvdXJseURhdGEpO1xuXG4gICAgICAgIHBvcHVsYXRlSG91cmx5UmVjb3JkcyhkYXksIGhvdXJseURhdGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEhvdXJseUZvcmVjYXN0KCkge1xuICAgIGNvbnN0IHNob3dEYWlseUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1kYWlseS1mb3JlY2FzdCcpO1xuICAgIGNvbnN0IHNob3dIb3VybHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctaG91cmx5LWZvcmVjYXN0Jyk7XG4gICAgc2hvd0RhaWx5QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zZWxlY3RlZCcpKTtcbiAgICBzaG93SG91cmx5QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1zZWxlY3RlZCcpKTtcbn0iLCJpbXBvcnQge2dldFdlYXRoZXJ9IGZyb20gJy4uL2xvZ2ljL3dlYXRoZXItQVBJLmpzJztcbmltcG9ydCB7YXBwZW5kQ2hpbGRyZW59IGZyb20gJy4vcmV1c2FibGUtZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7cmVmcmVzaFBhZ2V9IGZyb20gJy4vcGFnZS1jb250cm9sLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTG9jYXRpb25TZWFyY2goKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIFxuICAgIC8vIExldmVsIDFcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBMZXZlbCAyXG4gICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXNlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3VzZXItaW5wdXQnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXNlcklucHV0KTtcblxuICAgIC8vIExldmVsIDNcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnJyk7XG4gICAgdXNlcklucHV0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gTGV2ZWwgNFxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb2NhdGlvbi1zZWFyY2gnKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdJbnB1dCBjaXR5IG9yIHppcCBjb2RlOiAnO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzZWFyY2gnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uLXNlYXJjaCcpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1sb2NhdGlvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZm9ybSwgbGFiZWwsIGlucHV0LCBidXR0b24pO1xuXG4gICAgYWN0aXZhdGVTdWJtaXRCdXR0b24oKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHVzaFdlYXRoZXJPYmpUb0RPTShsb2NhdGlvbikge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICBcbiAgICByZWZyZXNoUGFnZSh3ZWF0aGVyKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVTdWJtaXRCdXR0b24oKSB7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1sb2NhdGlvbicpO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1zZWFyY2gnKTtcbiAgICAgICAgcHVzaFdlYXRoZXJPYmpUb0RPTShzZWFyY2hCYXIudmFsdWUpO1xuICAgICAgICBzZWFyY2hCYXIudmFsdWUgPSBudWxsO1xuICAgIH0pXG59IiwiaW1wb3J0IHtwb3B1bGF0ZUxvY2F0aW9uU2VhcmNofSBmcm9tICcuL2xvY2F0aW9uLWlucHV0LmpzJ1xuaW1wb3J0IHtwb3B1bGF0ZUN1cnJlbnRXZWF0aGVyfSBmcm9tICcuL2N1cnJlbnQtd2VhdGhlci10b3AuanMnO1xuaW1wb3J0IHtwb3B1bGF0ZURhaWx5Rm9yZWNhc3RXZWF0aGVyLCBzZWxlY3REYWlseUZvcmVjYXN0fSBmcm9tICcuL2ZvcmVjYXN0LWRhaWx5LmpzJztcbmltcG9ydCB7cG9wdWxhdGVIb3VybHlGb3JlY2FzdFdlYXRoZXIsIHNlbGVjdEhvdXJseUZvcmVjYXN0fSBmcm9tICcuL2ZvcmVjYXN0LWhvdXJseS5qcyc7XG5pbXBvcnQge3BvcHVsYXRlQ3VycmVudFdlYXRoZXJJbmZvfSBmcm9tICcuL2N1cnJlbnQtd2VhdGhlci1pbmZvLWJvdHRvbS5qcyc7XG5pbXBvcnQge2Rpc3BsYXlGb3JlY2FzdEJ1dHRvbnMsIGRpc3BsYXlDaGFuZ2VUZW1wU2NhbGVCdXR0b25zfSBmcm9tICcuL2J1dHRvbnMuanMnO1xuaW1wb3J0IHtzZXRTZWxlY3RlZFRlbXBTY2FsZX0gZnJvbSAnLi90ZW1wLXNjYWxlLmpzJztcbmltcG9ydCBwYWdlU3RhdGUgZnJvbSAnLi4vbG9naWMvc2V0dGluZ3Mtc3RhdGUuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICBjb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTZWFyY2hBbmRDdXJyZW50KHdlYXRoZXIpIHtcbiAgICBwb3B1bGF0ZUxvY2F0aW9uU2VhcmNoKCk7XG4gICAgZGlzcGxheUNoYW5nZVRlbXBTY2FsZUJ1dHRvbnMod2VhdGhlcik7XG4gICAgc2V0U2VsZWN0ZWRUZW1wU2NhbGUod2VhdGhlcik7XG4gICAgcG9wdWxhdGVDdXJyZW50V2VhdGhlcih3ZWF0aGVyKTtcbiAgICBkaXNwbGF5Rm9yZWNhc3RCdXR0b25zKHdlYXRoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFdpdGhEYWlseUZvcmVjYXN0KHdlYXRoZXIpIHtcbiAgICBjbGVhclBhZ2UoKTtcblxuICAgIHBvcHVsYXRlU2VhcmNoQW5kQ3VycmVudCh3ZWF0aGVyKTtcbiAgICBcbiAgICBwb3B1bGF0ZURhaWx5Rm9yZWNhc3RXZWF0aGVyKHdlYXRoZXIpO1xuICAgIHBvcHVsYXRlQ3VycmVudFdlYXRoZXJJbmZvKHdlYXRoZXIpO1xuICAgIHNlbGVjdERhaWx5Rm9yZWNhc3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hXaXRoSG91cmx5Rm9yZWNhc3Qod2VhdGhlcikge1xuICAgIGNsZWFyUGFnZSgpO1xuICAgIFxuICAgIHBvcHVsYXRlU2VhcmNoQW5kQ3VycmVudCh3ZWF0aGVyKTtcblxuICAgIHBvcHVsYXRlSG91cmx5Rm9yZWNhc3RXZWF0aGVyKHdlYXRoZXIpO1xuICAgIGRpc3BsYXlGb3JlY2FzdEJ1dHRvbnMod2VhdGhlcik7XG4gICAgc2VsZWN0SG91cmx5Rm9yZWNhc3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hQYWdlKHdlYXRoZXIpIHtcbiAgICAvLyBjb25zdCBzZWxlY3RlZEZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LXNlbGVjdGVkJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRGb3JlY2FzdCA9IHBhZ2VTdGF0ZS5nZXRGb3JlY2FzdCgpO1xuICAgIGlmIChzZWxlY3RlZEZvcmVjYXN0ID09PSAnZGFpbHknKSB7XG4gICAgICAgIHJlZnJlc2hXaXRoRGFpbHlGb3JlY2FzdCh3ZWF0aGVyKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRm9yZWNhc3QgPT09ICdob3VybHknKSB7XG4gICAgICAgIHJlZnJlc2hXaXRoSG91cmx5Rm9yZWNhc3Qod2VhdGhlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBmb3JlY2FzdCB0eXBlIGZvdW5kIGF0IHJlZnJlc2gnKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCAuLi5jaGlsZHJlbikge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdWx0aXBsZUVsZW1lbnRzKGVsZW1UeXBlLCBjb3VudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbVR5cGV9YCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHtwb3B1bGF0ZUxvY2F0aW9uU2VhcmNofSBmcm9tICcuL2xvY2F0aW9uLWlucHV0LmpzJ1xuLy8gaW1wb3J0IHtwYWdlU2V0dGluZ30gZnJvbSAnLi4vbG9naWMvc2V0dGluZ3Mtc3RhdGUuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgcG9wdWxhdGVMb2NhdGlvblNlYXJjaCgpO1xufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3RlZFRlbXBTY2FsZSh3ZWF0aGVyKSB7XG4gICAgaWYgKHdlYXRoZXIuZ2V0VGVtcFNjYWxlKCkgPT09ICdmYWhyZW5oZWl0Jykge1xuICAgICAgICBzZWxlY3RGYWhyZW5oZWl0KCk7XG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyLmdldFRlbXBTY2FsZSgpID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgc2VsZWN0Q2Vsc2l1cygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZhaHJlbmhlaXQoKSB7XG4gICAgY29uc3QgZmFocmVuaGVpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdG8tZmFocmVuaGVpdCcpO1xuICAgIGNvbnN0IGNlbHNpdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRvLWNlbHNpdXMnKTtcbiAgICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRlbXAtc2NhbGUnKTtcbiAgICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRlbXAtc2NhbGUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdENlbHNpdXMoKSB7XG4gICAgY29uc3QgY2Vsc2l1c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdG8tY2Vsc2l1cycpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRvLWZhaHJlbmhlaXQnKTtcbiAgICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRlbXAtc2NhbGUnKTtcbiAgICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRlbXAtc2NhbGUnKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY29udmVydFRvMTJIb3VyQ2xvY2sodGltZSkge1xuICAgIGNvbnN0IHRpbWVPYmogPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBjb25zdCBob3VyID0gdGltZU9iai5nZXRIb3VycygpO1xuICAgIGNvbnN0IGhvdXJzID0gKGhvdXIgJSAxMikgfHwgMTI7XG4gICAgbGV0IG1pbnV0ZXMgPSB0aW1lT2JqLmdldE1pbnV0ZXMoKTtcbiAgICBtaW51dGVzID0gbWludXRlcyA+PSAxMCA/IG1pbnV0ZXMgOiAnMCcgKyBtaW51dGVzO1xuICAgIGNvbnN0IGFtT3JQbSA9IGhvdXIgPj0gMTIgPyAncG0nIDogJ2FtJztcblxuICAgIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfSAke2FtT3JQbX1gO1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBmb3JlY2FzdDogJ2RhaWx5JyxcbiAgICB0ZW1wU2NhbGU6ICdmYWhyZW5oZWl0JyxcblxuICAgIHNldEZvcmVjYXN0VG9EYWlseSgpIHtcbiAgICAgICAgdGhpcy5mb3JlY2FzdCAgPSAnZGFpbHknO1xuICAgIH0sXG5cbiAgICBzZXRGb3JlY2FzdFRvSG91cmx5KCkge1xuICAgICAgICB0aGlzLmZvcmVjYXN0ID0gJ2hvdXJseSc7XG4gICAgfSxcblxuICAgIGdldEZvcmVjYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JlY2FzdDtcbiAgICB9LFxuXG4gICAgc2V0VG9GYWhyZW5oZWl0KCkge1xuICAgICAgICB0aGlzLnRlbXBTY2FsZSA9ICdmYWhyZW5oZWl0JztcbiAgICB9LFxuXG4gICAgc2V0VG9DZWxzaXVzKCkge1xuICAgICAgICB0aGlzLnRlbXBTY2FsZSA9ICdjZWxzaXVzJztcbiAgICB9LFxuXG4gICAgZ2V0VGVtcFNjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW1wU2NhbGU7XG4gICAgfVxufSIsIlxuaW1wb3J0IHsgY3JlYXRlV2VhdGhlck9iamVjdCB9IGZyb20gJy4vd2VhdGhlci1vYmplY3QuanMnO1xuXG4vLyBNYWtlcyBhIHJlcXVlc3QgdG8gdGhlIHdlYXRoZXIgQVBJIHRvIHJldHJpZXZlIHdlYXRoZXIgb2JqZWN0IGJhc2VkIG9uIGxvY2F0aW9uIHBhcmFtZXRlciBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YTA3NDIzYmVlMTE4NDgzMWJhMTIyNDUzNjI0MDgwNiZxPSR7bG9jYXRpb259JmRheXM9M2AsIHttb2RlOidjb3JzJ30pO1xuICAgICAgICBjb25zdCByZXNwT2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaXJzdCcsIHJlc3BPYmopO1xuXG4gICAgICAgIGNoZWNrUmVzcG9uc2VFcnJvcnMocmVzcE9iaik7XG5cbiAgICAgICAgY29uc3QgbmV3T2JqID0gY3JlYXRlV2VhdGhlck9iamVjdChyZXNwT2JqKTtcblxuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgIH0gICBcbn1cblxuLy8gQ2hlY2tzIHRoZSBBUEkgcmVzcG9uc2Ugb2JqZWN0IHRvIHNlZSBpZiBpdCBoYXMgYW55IGVycm9ycywgYW5kIGlmIGl0IGRvZXMgaXQgdGhyb3dzIGl0XG5mdW5jdGlvbiBjaGVja1Jlc3BvbnNlRXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yLmNvZGUgPT09IDEwMDMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRvIG5vdCBzdWJtaXQgZW1wdHkgc2VhcmNoIGJhcicpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yLmNvZGUgPT09IDEwMDYpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbG9jYXRpb24gZm91bmQgbWF0Y2hpbmcgeW91ciBzZWFyY2gnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBjb252ZXJ0VG8xMkhvdXJDbG9jayB9IGZyb20gJy4vbG9naWMtZnVuY3Rpb25zLmpzJztcbmltcG9ydCBwYWdlU3RhdGUgZnJvbSAnLi9zZXR0aW5ncy1zdGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJPYmplY3RNZXRob2RzKCkge1xuICAgIFxuICAgIGZ1bmN0aW9uIHR1cm5Ub0RlZ3JlZXModGVtcCkge1xuICAgICAgICByZXR1cm4gYCR7TWF0aC5yb3VuZCh0ZW1wKX3CsGBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VGVtcCh0ZW1wX2YsIHRlbXBfYykge1xuICAgIC8vIGNvbnN0IGdldFRlbXAgPSAodGVtcF9mLCB0ZW1wX2MpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rlc3QnLCB0aGlzLnRlbXBTY2FsZSk7XG4gICAgICAgIGlmIChwYWdlU3RhdGUuZ2V0VGVtcFNjYWxlKCkgPT09ICdmYWhyZW5oZWl0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHR1cm5Ub0RlZ3JlZXModGVtcF9mKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYWdlU3RhdGUuZ2V0VGVtcFNjYWxlKCkgPT09ICdjZWxzaXVzJykge1xuICAgICAgICAgICAgcmV0dXJuIHR1cm5Ub0RlZ3JlZXModGVtcF9jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IGlzIG5laXRoZXIgc2V0IHRvIGZhaHJlbmhlaXQgbm9yIGNlbHNpdXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRvRmFocmVuaGVpdCgpIHtcbiAgICAgICAgcGFnZVN0YXRlLnNldFRvRmFocmVuaGVpdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRvQ2Vsc2l1cygpIHtcbiAgICAgICAgcGFnZVN0YXRlLnNldFRvQ2Vsc2l1cygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRlbXBTY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2VTdGF0ZS5nZXRUZW1wU2NhbGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNpdHk6IHRoaXMubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgIHJlZ2lvbjogdGhpcy5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgICAgICBjb3VudHJ5OiB0aGlzLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgICAgICBsb2NhbFRpbWU6IGNvbnZlcnRUbzEySG91ckNsb2NrKHRoaXMubG9jYXRpb24ubG9jYWx0aW1lKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUZW1wZXJhdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZhaHJlbmhlaXQ6IGdldFRlbXAodGhpcy5jdXJyZW50LnRlbXBfZiwgdGhpcy5jdXJyZW50LnRlbXBfYyksIFxuICAgICAgICAgICAgLy8gY2Vsc2l1czogdHVyblRvRGVncmVlcyh0aGlzLmN1cnJlbnQudGVtcF9jKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRDb25kaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7dGV4dDogdGhpcy5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LCBpY29uOiBgaHR0cHM6JHt0aGlzLmN1cnJlbnQuY29uZGl0aW9uLmljb259YH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJJbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmVlbHNsaWtlX2Y6IGdldFRlbXAodGhpcy5jdXJyZW50LmZlZWxzbGlrZV9mLCB0aGlzLmN1cnJlbnQuZmVlbHNsaWtlX2MpLFxuICAgICAgICAgICAgaHVtaWRpdHk6IGAke3RoaXMuY3VycmVudC5odW1pZGl0eX0lYCxcbiAgICAgICAgICAgIHV2OiB0aGlzLmN1cnJlbnQudXYsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBgJHt0aGlzLmN1cnJlbnQudmlzX21pbGVzfSBtaWAsXG4gICAgICAgICAgICB3aW5kX21waDogYCR7TWF0aC5yb3VuZCh0aGlzLmN1cnJlbnQud2luZF9tcGgpfSBtcGhgLFxuICAgICAgICAgICAgcHJlc3N1cmVfaW46IGAke01hdGgucm91bmQodGhpcy5jdXJyZW50LnByZXNzdXJlX2luKX0gaW5gXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0TWF4TWluVGVtcFRvZGF5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWF4OiBnZXRUZW1wKHRoaXMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZiwgdGhpcy5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jKSwgXG4gICAgICAgICAgICBtaW46IGdldFRlbXAodGhpcy5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLCB0aGlzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2MpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SG91cmx5RGF0YShob3Vycywgbm93LCBzZWxmKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBob3VyIG9mIGhvdXJzKSB7XG4gICAgICAgICAgICBpZiAobm93ID4gaG91ci50aW1lKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgdGltZTogY29udmVydFRvMTJIb3VyQ2xvY2soaG91ci50aW1lKSxcbiAgICAgICAgICAgICAgICB0ZW1wOiBnZXRUZW1wKGhvdXIudGVtcF9mLCBob3VyLnRlbXBfYyksXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGhvdXIuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGljb246IGBodHRwczoke2hvdXIuY29uZGl0aW9uLmljb259YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9yZWNhc3REYXlzKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmb3JlY2FzdERheSBvZiB0aGlzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5KSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgge1xuICAgICAgICAgICAgICAgIGRhdGU6IGZvcmVjYXN0RGF5LmRhdGUsXG4gICAgICAgICAgICAgICAgbWF4OiBnZXRUZW1wKGZvcmVjYXN0RGF5LmRheS5tYXh0ZW1wX2YsIGZvcmVjYXN0RGF5LmRheS5tYXh0ZW1wX2MpLFxuICAgICAgICAgICAgICAgIG1pbjogZ2V0VGVtcChmb3JlY2FzdERheS5kYXkubWludGVtcF9mLCBmb3JlY2FzdERheS5kYXkubWludGVtcF9jKSxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZm9yZWNhc3REYXkuZGF5LmNvbmRpdGlvbi50ZXh0LCBcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogYGh0dHBzOiR7Zm9yZWNhc3REYXkuZGF5LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhvdXJzOiBnZXRIb3VybHlEYXRhKGZvcmVjYXN0RGF5LmhvdXIsIHRoaXMubG9jYXRpb24ubG9jYWx0aW1lLCB0aGlzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB7c2V0VG9GYWhyZW5oZWl0LCBzZXRUb0NlbHNpdXMsIGdldFRlbXBTY2FsZSwgZ2V0TG9jYXRpb24sIGdldEN1cnJlbnRUZW1wZXJhdHVyZSwgZ2V0Q3VycmVudENvbmRpdGlvbiwgZ2V0Q3VycmVudFdlYXRoZXJJbmZvLCBnZXRNYXhNaW5UZW1wVG9kYXksIGdldEZvcmVjYXN0RGF5c307XG59IFxuXG4vLyBDb21iaW5lcyB0aGUgb2JqZWN0IGZyb20gdGhlIEFQSSBhbmQgdGhlIG9iamVjdCB0aGF0IGhvbGRzIGFsbCB0aGUgbWV0aG9kcyAoY3JlYXRlZCBmcm9tIFwiY3JlYXRlV2VhdGhlck9iamVjdE1ldGhvZHMoKVwiKVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJPYmplY3QocmVzcG9uc2VPYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2VPYmosIGNyZWF0ZVdlYXRoZXJPYmplY3RNZXRob2RzKCkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcydcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4vRE9NL3N0YXJ0LmpzXCI7XG5cbnN0YXJ0KCk7XG4vLyBnZXRXZWF0aGVyKCdwYXJpcycpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==