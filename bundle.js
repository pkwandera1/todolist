/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  height: 100vh;
  color: white;
  background-color: black;
}
#app {
  display: flex;
}
/* Sidebar */
.sidebar {
  width: 240px;
  background-color: #111;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  border-right: 2px solid magenta;
}

.sidebar h2 {
  color: magenta;
  margin-bottom: 1rem;
}

#project-list {
  list-style: none;
  margin-bottom: 1rem;
}

#project-list li {
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.2s;
}

#project-list li:hover {
  background-color: #333;
}

#project-list li.active {
  background-color: magenta;
  color: black;
  font-weight: bold;
}

/* Project input */
#new-project-name {
  padding: 0.4rem;
  border: none;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

#add-project-btn {
  padding: 0.5rem;
  background-color: magenta;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#add-project-btn:hover {
  background-color: #ff33cc;
}

/* Main Area */
.main {
  flex-grow: 1;
  padding: 2rem;
  background-color: white;
  color: black;
  overflow-y: auto;
}

.main h2 {
  color: blue;
  margin-bottom: 1rem;
}

/* Todo Form */
#todo-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

#todo-form input,
#todo-form select,
#todo-form button {
  padding: 0.5rem;
  font-size: 1rem;
}

#todo-form button {
  background-color: magenta;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#todo-form button:hover {
  background-color: #ff33cc;
}

/* Todo Items */
#todo-list {
  list-style: none;
}

.todo {
  display: flex;
  align-items: stretch;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  overflow: hidden;
  background-color: #f2f2f2;
  color: black;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.left-border {
  width: 6px;
}

.left-border.high {
  background: red;
}

.left-border.medium {
  background: orange;
}

.left-border.low {
  background: green;
}

.todo-content {
  padding: 0.75rem;
  flex-grow: 1;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-content {
  background-color: white;
  color: black;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 0 15px magenta;
}

.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA,YAAY;AACZ;EACE,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;AACnB;;AAEA,kBAAkB;AAClB;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,cAAc;AACd;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,mBAAmB;AACrB;;AAEA;;;EAGE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,eAAe;AACf;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* Reset & Base Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Segoe UI', sans-serif;\n  display: flex;\n  height: 100vh;\n  color: white;\n  background-color: black;\n}\n#app {\n  display: flex;\n}\n/* Sidebar */\n.sidebar {\n  width: 240px;\n  background-color: #111;\n  color: white;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height: 100vh;\n  border-right: 2px solid magenta;\n}\n\n.sidebar h2 {\n  color: magenta;\n  margin-bottom: 1rem;\n}\n\n#project-list {\n  list-style: none;\n  margin-bottom: 1rem;\n}\n\n#project-list li {\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background 0.2s;\n}\n\n#project-list li:hover {\n  background-color: #333;\n}\n\n#project-list li.active {\n  background-color: magenta;\n  color: black;\n  font-weight: bold;\n}\n\n/* Project input */\n#new-project-name {\n  padding: 0.4rem;\n  border: none;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n\n#add-project-btn {\n  padding: 0.5rem;\n  background-color: magenta;\n  color: black;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#add-project-btn:hover {\n  background-color: #ff33cc;\n}\n\n/* Main Area */\n.main {\n  flex-grow: 1;\n  padding: 2rem;\n  background-color: white;\n  color: black;\n  overflow-y: auto;\n}\n\n.main h2 {\n  color: blue;\n  margin-bottom: 1rem;\n}\n\n/* Todo Form */\n#todo-form {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n#todo-form input,\n#todo-form select,\n#todo-form button {\n  padding: 0.5rem;\n  font-size: 1rem;\n}\n\n#todo-form button {\n  background-color: magenta;\n  color: black;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#todo-form button:hover {\n  background-color: #ff33cc;\n}\n\n/* Todo Items */\n#todo-list {\n  list-style: none;\n}\n\n.todo {\n  display: flex;\n  align-items: stretch;\n  margin-bottom: 0.5rem;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #f2f2f2;\n  color: black;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n}\n\n.left-border {\n  width: 6px;\n}\n\n.left-border.high {\n  background: red;\n}\n\n.left-border.medium {\n  background: orange;\n}\n\n.left-border.low {\n  background: green;\n}\n\n.todo-content {\n  padding: 0.75rem;\n  flex-grow: 1;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n\n.modal-content {\n  background-color: white;\n  color: black;\n  padding: 2rem;\n  border-radius: 8px;\n  min-width: 300px;\n  box-shadow: 0 0 15px magenta;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/app/project.js":
/*!****************************!*\
  !*** ./src/app/project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");


function createProject(name) {
  return {
    id: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.generateUniqueId)(),
    name,
    todos: [],
  };
}


/***/ }),

/***/ "./src/app/projectManager.js":
/*!***********************************!*\
  !*** ./src/app/projectManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   getActiveProjectId: () => (/* binding */ getActiveProjectId),
/* harmony export */   getProjectById: () => (/* binding */ getProjectById),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   setActiveProjectId: () => (/* binding */ setActiveProjectId),
/* harmony export */   setProjects: () => (/* binding */ setProjects)
/* harmony export */ });
let projects = [];
let activeProjectId = null;

function setProjects(newProjects) {
  projects = newProjects;
}

function getProjects() {
  return projects;
}

function addProject(project) {
  projects.push(project);
}

function getProjectById(id) {
  return projects.find(project => project.id === id);
}

function removeProject(id) {
  projects = projects.filter(project => project.id !== id);
}

function setActiveProjectId(id) {
  activeProjectId = id;
}

function getActiveProjectId() {
  return activeProjectId;
}


/***/ }),

/***/ "./src/app/todo.js":
/*!*************************!*\
  !*** ./src/app/todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");


function createTodo(title, description, dueDate, priority) {
  return {
    id: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.generateUniqueId)(),
    title,
    description,
    dueDate,
    priority,
  };
}


/***/ }),

/***/ "./src/app/todoManager.js":
/*!********************************!*\
  !*** ./src/app/todoManager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   getTodosByProject: () => (/* binding */ getTodosByProject),
/* harmony export */   reorderTodos: () => (/* binding */ reorderTodos)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/app/projectManager.js");


function addTodo(projectId, todo) {
  const project = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjectById)(projectId);
  project.todos.push(todo);
}

function getTodosByProject(projectId) {
  const project = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjectById)(projectId);
  return project ? project.todos : [];
}

function reorderTodos(projectId, newOrder) {
  const project = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjectById)(projectId);
  if (project) {
    project.todos = newOrder;
  }
}


/***/ }),

/***/ "./src/storage/localStorage.js":
/*!*************************************!*\
  !*** ./src/storage/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects)
/* harmony export */ });
const STORAGE_KEY = 'projects';

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function loadProjects() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/domController.js":
/*!*********************************!*\
  !*** ./src/ui/domController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderApp: () => (/* binding */ renderApp),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTodos: () => (/* binding */ renderTodos)
/* harmony export */ });
/* harmony import */ var _app_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/projectManager */ "./src/app/projectManager.js");
/* harmony import */ var _app_todoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/todoManager */ "./src/app/todoManager.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");




const app = document.getElementById('app');

function renderApp() {
  app.innerHTML = `
    <aside class="sidebar">
      <h2>Projects</h2>
      <ul id="project-list"></ul>
      <button id="add-project-btn">Add Project</button>
    </aside>
    <div class="main">
      <h2 id="project-title"></h2>
      <form id="todo-form">
        <input name="title" placeholder="Title" required />
        <input name="description" placeholder="Description" />
        <input name="dueDate" type="date" />
        <select name="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
      <ul id="todo-list"></ul>
    </div>
  `;
  renderProjects();
  const addProjectBtn = document.getElementById('add-project-btn');
  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', () => {
      projectModal.classList.remove('hidden');
      projectNameInput.focus();
    });
  }
  renderTodos();
}

function renderProjects() {
  const list = document.getElementById('project-list');
  list.innerHTML = '';
  const activeId = (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getActiveProjectId)();
  (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjects)().forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.name;
    li.dataset.id = project.id;
    if (project.id === activeId) li.classList.add('active');
    list.appendChild(li);
  });
}

function renderTodos() {
  const project = (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjectById)((0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getActiveProjectId)());
  if (!project) return;

  document.getElementById('project-title').textContent = project.name;

  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  project.todos.forEach(todo => {
    const li = document.createElement('li');
    li.classList.add('todo');
    li.draggable = true;
    li.dataset.id = todo.id;
    li.innerHTML = `
      <div class="left-border ${todo.priority}"></div>
      <div class="todo-content">
        <strong>${todo.title}</strong><br/>
        ${todo.description}<br/>
        <small>${(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.formatDate)(todo.dueDate)}</small>
      </div>
    `;
    list.appendChild(li);
  });
}


/***/ }),

/***/ "./src/ui/eventHandlers.js":
/*!*********************************!*\
  !*** ./src/ui/eventHandlers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initEventListeners: () => (/* binding */ initEventListeners)
/* harmony export */ });
/* harmony import */ var _app_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/projectManager */ "./src/app/projectManager.js");
/* harmony import */ var _app_todoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/todoManager */ "./src/app/todoManager.js");
/* harmony import */ var _storage_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/localStorage */ "./src/storage/localStorage.js");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domController */ "./src/ui/domController.js");
/* harmony import */ var _app_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/project */ "./src/app/project.js");
/* harmony import */ var _app_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/todo */ "./src/app/todo.js");







function initEventListeners() {
  document.getElementById('add-project-btn').addEventListener('click', () => {
    const name = document.getElementById('projectNameInput').value.trim();
    if (name) {
      const project = (0,_app_project__WEBPACK_IMPORTED_MODULE_4__["default"])(name);
      (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.addProject)(project);
      (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.setActiveProjectId)(project.id);
      (0,_storage_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)((0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
      (0,_domController__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();
      (0,_domController__WEBPACK_IMPORTED_MODULE_3__.renderTodos)();
    }
  });

  document.getElementById('project-list').addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.setActiveProjectId)(id);
      (0,_domController__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();
      (0,_domController__WEBPACK_IMPORTED_MODULE_3__.renderTodos)();
    }
  });

  document.getElementById('todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const todo = (0,_app_todo__WEBPACK_IMPORTED_MODULE_5__["default"])(
      data.get('title'),
      data.get('description'),
      data.get('dueDate'),
      data.get('priority')
    );
    (0,_app_todoManager__WEBPACK_IMPORTED_MODULE_1__.addTodo)((0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getActiveProjectId)(), todo);
    (0,_storage_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)((0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
    (0,_domController__WEBPACK_IMPORTED_MODULE_3__.renderTodos)();
    e.target.reset();
  });

  // Drag and Drop
  let dragged;

  document.getElementById('todo-list').addEventListener('dragstart', (e) => {
    dragged = e.target;
  });

  document.getElementById('todo-list').addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  document.getElementById('todo-list').addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.target.closest('li') && dragged) {
      const list = [...document.querySelectorAll('#todo-list li')];
      const draggedIndex = list.indexOf(dragged);
      const targetIndex = list.indexOf(e.target.closest('li'));

      const todos = (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjects)()
        .find(p => p.id === (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getActiveProjectId)())
        .todos.slice();

      const [moved] = todos.splice(draggedIndex, 1);
      todos.splice(targetIndex, 0, moved);

      (0,_app_todoManager__WEBPACK_IMPORTED_MODULE_1__.reorderTodos)((0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getActiveProjectId)(), todos);
      (0,_storage_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)((0,_app_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
      (0,_domController__WEBPACK_IMPORTED_MODULE_3__.renderTodos)();
    }
  });
}


/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   generateUniqueId: () => (/* binding */ generateUniqueId)
/* harmony export */ });
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _storage_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage/localStorage */ "./src/storage/localStorage.js");
/* harmony import */ var _app_projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/projectManager */ "./src/app/projectManager.js");
/* harmony import */ var _ui_domController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/domController */ "./src/ui/domController.js");
/* harmony import */ var _ui_eventHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/eventHandlers */ "./src/ui/eventHandlers.js");
/* harmony import */ var _app_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/project */ "./src/app/project.js");








//Modal control
const projectModal = document.getElementById('projectModal');
const projectNameInput = document.getElementById('projectNameInput');
const confirmAddProject = document.getElementById('confirmAddProject');
const cancelAddProject = document.getElementById('cancelAddProject');

// Hide modal
function hideProjectModal() {
  projectModal.classList.add('hidden');
  projectNameInput.value = '';
}

cancelAddProject.addEventListener('click', hideProjectModal);

// Confirm add project
confirmAddProject.addEventListener('click', () => {
  const name = projectNameInput.value.trim();
  if (!name) return;

  const project = (0,_app_project__WEBPACK_IMPORTED_MODULE_5__["default"])(name);
  (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_2__.addProject)(project);
  (0,_storage_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveProjects)((0,_app_projectManager__WEBPACK_IMPORTED_MODULE_2__.getProjects)());
  hideProjectModal();
  (0,_ui_domController__WEBPACK_IMPORTED_MODULE_3__.renderApp)();
});

document.addEventListener('DOMContentLoaded', () => {
  let projects = (0,_storage_localStorage__WEBPACK_IMPORTED_MODULE_1__.loadProjects)();
  if (!projects || projects.length === 0) {
    const defaultProject = (0,_app_project__WEBPACK_IMPORTED_MODULE_5__["default"])('Default');
    projects = [defaultProject];
    (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_2__.setActiveProjectId)(defaultProject.id);
  } else {
    (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_2__.setActiveProjectId)(projects[0].id);
  }
  (0,_app_projectManager__WEBPACK_IMPORTED_MODULE_2__.setProjects)(projects);
  (0,_ui_domController__WEBPACK_IMPORTED_MODULE_3__.renderApp)();
  (0,_ui_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.initEventListeners)();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map