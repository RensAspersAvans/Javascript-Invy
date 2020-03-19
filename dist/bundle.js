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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/controller/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/controller/Initialize.js":
/*!*************************************!*\
  !*** ./js/controller/Initialize.js ***!
  \*************************************/
/*! exports provided: switchInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchInterface\", function() { return switchInterface; });\n/* harmony import */ var _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Warehouse */ \"./js/model/Warehouse.js\");\n/* harmony import */ var _model_Regios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Regios */ \"./js/model/Regios.js\");\n\r\n\r\n\r\nlet clothing;\r\nlet tierlantin;\r\nlet decoration;\r\n\r\n//region Initialize maps\r\nconst clothingMap = new Array(\r\n    [\"@\", null, null, null, null, null, null, \"#\", null, null, null, null, null, null, \"@\"],\r\n    [null, \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", null, null, null, null, null, null, null],\r\n    [null, \"#\", null, null, null, null, null, \"#\", null, null, null, null, null, null, null],\r\n    [null, \"#\", null, null, null, null, null, \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", null],\r\n    [null, \"#\", null, null, null, null, null, \"#\", null, null, null, null, null, \"#\", null],\r\n    [null, \"#\", null, null, null, \"@\", null, \"#\", null, \"@\", null, null, null, \"#\", null],\r\n    [null, \"#\", null, null, null, null, null, \"#\", null, null, null, null, null, \"#\", null],\r\n    [null, \"#\", null, null, null, null, null, \"#\", null, null, null, null, null, \"#\", null],\r\n    [null, \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", null, null, null, null, null, \"#\", null],\r\n    [null, null, \"#\", null, null, null, null, \"#\", null, null, null, null, null, \"#\", null],\r\n    [null, null, \"#\", null, null, null, null, \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", null],\r\n    [null, null, \"#\", null, null, \"@\", null, \"#\", null, \"@\", null, null, \"#\", null, null],\r\n    [null, null, \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", null, null],\r\n    [null, null, null, null, null, null, null, \"#\", null, null, null, null, null, null, null],\r\n    [\"@\", null, null, null, null, null, null, \"#\", null, null, null, null, null, null, \"@\"],\r\n);\r\n\r\nconst tierlatinMap = new Array(\r\n    [\"@\", null, null, null, null, null, null, \"#\", null, null, null, null, null, null, \"@\"],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [\"@\", null, null, null, null, null, null, \"#\", null, null, null, null, null, null, \"@\"]\r\n);\r\n\r\nconst decorationMap = new Array(\r\n    [\"@\", null, null, null, null, null, null, \"#\", null, null, null, null, null, null, \"@\"],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, \"@\", null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, \"@\", null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],\r\n    [\"@\", null, null, null, null, null, null, \"#\", null, null, null, null, null, null, \"@\"]\r\n);\r\n//endregion\r\n\r\nwindow.onload = function() {\r\n    if (localStorage.getItem('regios') == null)\r\n    {\r\n        clothing = new _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"](\"kleding\", null, null);\r\n        clothing.map = clothingMap;\r\n        clothing.items = [];\r\n        _model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].addRegio(clothing);\r\n        tierlantin = new _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"](\"tierlatijn\", null, null);\r\n        tierlantin.map = tierlantin;\r\n        tierlantin.items = [];\r\n        _model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].addRegio(tierlantin);\r\n        decoration = new _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"](\"decoratie\", null, null);\r\n        decoration.map = decorationMap;\r\n        decoration.items = [];\r\n        _model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].addRegio(decoration);\r\n    } else\r\n    {\r\n        clothing = _model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].getRegio(\"kleding\");\r\n        tierlantin = _model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].getRegio(\"tierlatijn\");\r\n        decoration = _model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].getRegio(\"decoratie\");\r\n    }\r\n    _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"].showMap(clothing.map);\r\n    _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"].showItems();\r\n};\r\n\r\nfunction switchInterface()\r\n{\r\n    var x = document.getElementById(\"regioSelect\").selectedIndex;\r\n\r\n    switch (x) {\r\n        case 0:\r\n            _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"].showMap(_model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].getRegio(\"kleding\").map);\r\n            break;\r\n        case 1:\r\n            _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"].showMap(_model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].getRegio(\"tierlatijn\").map);\r\n            break;\r\n        case 2:\r\n            _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"].showMap(_model_Regios__WEBPACK_IMPORTED_MODULE_1__[\"Regios\"].getRegio(\"decoratie\").map);\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n    _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"].showItems();\r\n    _model_Warehouse__WEBPACK_IMPORTED_MODULE_0__[\"WareHouse\"].resetSelected();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/controller/Initialize.js?");

/***/ }),

/***/ "./js/controller/app.js":
/*!******************************!*\
  !*** ./js/controller/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ \"./js/controller/Initialize.js\");\n/* harmony import */ var _view_Movable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/Movable */ \"./js/view/Movable.js\");\n/* harmony import */ var _view_ItemDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/ItemDetails */ \"./js/view/ItemDetails.js\");\n\r\n\r\n\r\n\r\n//region SelectRegio\r\ndocument.getElementById('chooseRegio').addEventListener('click', _Initialize__WEBPACK_IMPORTED_MODULE_0__[\"switchInterface\"]);\r\n//endregion\r\n//region ItemDetails\r\nconst ItemDetailsShower = new _view_ItemDetails__WEBPACK_IMPORTED_MODULE_2__[\"ItemDetails\"](document.getElementById('chooseRegio').innerHTML);\r\nconst imgDiv = document.getElementById(\"product-img-div\");\r\ndocument.getElementById(\"open-canvas\").addEventListener('click', function(e){\r\n    imgDiv.style.display = \"flex\";\r\n    document.getElementById(\"image-popup\").style.display = \"block\"}, false);\r\ndocument.getElementById(\"close-canvas\").addEventListener('click', function(e){\r\n    imgDiv.style.display = \"none\";\r\n    document.getElementById(\"image-popup\").style.display = \"none\"}, false);\r\ndocument.getElementById('getPicture').addEventListener('change', function(e){\r\n    ItemDetailsShower.HandleFileSelect(e);\r\n}, false);\r\n//endregion\r\n\r\n//region Drag and Drop\r\nconst dragAndDrop = new _view_Movable__WEBPACK_IMPORTED_MODULE_1__[\"Movable\"](null, null, null, null, ItemDetailsShower);\r\nconst dropzones = document.querySelector('.dropzones');\r\n\r\ndocument.getElementById(\"grid\").addEventListener(\"click\", function(e) {\r\n    dragAndDrop.ClickItem(e);\r\n});\r\n\r\ndocument.querySelector('.draggable-items').addEventListener('dragstart', e => {\r\n    dragAndDrop.DragStart(e);\r\n});\r\n\r\ndropzones.addEventListener('dragover', (e) => {\r\n    dragAndDrop.DragOver(e);\r\n});\r\n\r\ndropzones.addEventListener('dragenter', (e) => {\r\n   dragAndDrop.DragEnter(e);\r\n});\r\n\r\ndropzones.addEventListener('drop', (e) => {\r\n    dragAndDrop.DragDrop(e);\r\n});\r\n\r\ndropzones.addEventListener('dragleave', (e) => {\r\n    dragAndDrop.DragLeave(e);\r\n});\r\n//endregion\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/controller/app.js?");

/***/ }),

/***/ "./js/model/Regios.js":
/*!****************************!*\
  !*** ./js/model/Regios.js ***!
  \****************************/
/*! exports provided: Regios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Regios\", function() { return Regios; });\nclass Regios\r\n{\r\n    constructor(kleding, tierlatijn, decocratie) {\r\n        this.kleding = kleding;\r\n        this.tierlatijn = tierlatijn;\r\n        this.decocratie = decoratie;\r\n        //make for each element in constructor a getter and setter.\r\n    }\r\n\r\n    static getRegios() {\r\n        let regios;\r\n        if (localStorage.getItem(\"regios\") === null) {\r\n            regios = [];\r\n        } else {\r\n            regios = JSON.parse(localStorage.getItem(\"regios\"));\r\n        }\r\n        return regios;\r\n    }\r\n\r\n    static addRegio(regio) {\r\n        const storedRegios = this.getRegios();\r\n\r\n        for (let i in storedRegios)\r\n        {\r\n            if (storedRegios[i].name == regio.name)\r\n            {\r\n                storedRegios.splice(i, 1);\r\n            }\r\n        }\r\n        storedRegios.push(regio);\r\n        localStorage.setItem(\"regios\", JSON.stringify(storedRegios));\r\n    }\r\n\r\n    static getRegio(regioname) {\r\n        let regio;\r\n        if (JSON.parse(localStorage.getItem(\"regios\")) === null) {\r\n            regio = [];\r\n        } else {\r\n            let regios = JSON.parse(localStorage.getItem('regios'));\r\n            for (var index = 0; index < 3; index++)\r\n            {\r\n                if (regios[index].name.includes(regioname))\r\n                {\r\n                    regio = regios[index];\r\n                }\r\n            }\r\n        }\r\n        return regio;\r\n    }\r\n\r\n    static updateRegio(update) {\r\n        const storedRegios = this.getRegios();\r\n\r\n        for (let i in storedRegios)\r\n        {\r\n            if (storedRegios[i].name == update.name)\r\n            {\r\n                storedRegios[i] = update;\r\n            }\r\n        }\r\n        localStorage.setItem(\"regios\", JSON.stringify(storedRegios));\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./js/model/Regios.js?");

/***/ }),

/***/ "./js/model/Warehouse.js":
/*!*******************************!*\
  !*** ./js/model/Warehouse.js ***!
  \*******************************/
/*! exports provided: WareHouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WareHouse\", function() { return WareHouse; });\n/* harmony import */ var _Regios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Regios */ \"./js/model/Regios.js\");\n\r\n\r\nclass WareHouse\r\n{\r\n    //constructor\r\n    constructor(name, items, map)\r\n    {\r\n        this.name = name;\r\n        this.items = items;\r\n        this.map = map;\r\n\r\n    }\r\n\r\n    //functions\r\n    static showMap(map) {\r\n        //read json and draw warehouse with json information\r\n        if (map == null)\r\n        {\r\n            console.log(\"map is leeg\");\r\n            return;\r\n        }\r\n\r\n        var oldMap = document.getElementById(\"grid\");\r\n        while (oldMap.lastElementChild) {\r\n            oldMap.removeChild(oldMap.lastElementChild);\r\n        }\r\n\r\n        var size = 15;\r\n        for (var rows = 0; rows < size; rows++) {\r\n            var temp = map[rows];\r\n            for (var columns = 0; columns < size; columns++) {\r\n                var node = document.createElement(\"div\");\r\n                node.classList.add(\"grid-item\");\r\n                node.id = rows + \"-\" + columns;\r\n                node.style.backgroundColor = \"lightgrey\";\r\n                switch (temp[columns]) {\r\n                    case \"@\":\r\n                        node.style.backgroundColor = \"red\";\r\n                        break;\r\n                    case \"#\":\r\n                        node.style.backgroundColor = \"grey\";\r\n                        break;\r\n                    default:\r\n                        if (/[a-z]\\d/.test(temp[columns]))\r\n                        {\r\n                            node.style.backgroundColor = \"yellow\";\r\n                            node.setAttribute('draggable', true);\r\n                            node.classList.add(temp[columns]);\r\n                            break;\r\n                        }\r\n                        node.classList.add(\"dropzone\");\r\n                        break;\r\n                }\r\n                document.getElementById(\"grid\").appendChild(node);\r\n            };\r\n        };\r\n        let gridItems = document.getElementsByClassName('grid-item');\r\n\r\n        let parentWidth = document.getElementById('grid').offsetWidth;\r\n\r\n        Array.from(gridItems).forEach(element => {\r\n            element.style.width = parentWidth / size;\r\n            element.style.height = parentWidth / size;\r\n        });\r\n    }\r\n\r\n    static isStored(item)\r\n    {\r\n        let result = false;\r\n        let optionRegios = document.getElementById(\"regioSelect\");\r\n        let selectedRegio = _Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].getRegio(optionRegios[optionRegios.selectedIndex].innerText.toLowerCase());\r\n\r\n        for (let row = 0; row < 15; row++)\r\n        {\r\n            for (let col = 0; col < 15; col++)\r\n            {\r\n                if (selectedRegio.map[row][col] == item)\r\n                {\r\n                    result = true;\r\n                }\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n\r\n    static showItems()\r\n    {\r\n\r\n        let oldItemList = document.getElementById(\"products\");\r\n        while (oldItemList.lastElementChild) {\r\n            oldItemList.removeChild(oldItemList.lastElementChild);\r\n        }\r\n\r\n        let optionRegios = document.getElementById(\"regioSelect\");\r\n        let selectedRegio = _Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].getRegio(optionRegios[optionRegios.selectedIndex].innerText.toLowerCase());\r\n\r\n        for (let item in selectedRegio.items)\r\n        {\r\n            var node = document.createElement(\"div\");\r\n            node.classList.add(\"product-item\");\r\n            node.classList.add(\"p-2\");\r\n            node.classList.add(\"border-bottom\");\r\n            node.classList.add(\"text-break\");\r\n            node.classList.add(\"p\" + item);\r\n            node.innerHTML = selectedRegio.items[item].name;\r\n            if (this.isStored(\"p\" + item))\r\n            {\r\n                node.style.backgroundColor = \"orange\";\r\n            } else\r\n            {\r\n                node.style.backgroundColor = \"green\";\r\n                node.setAttribute('draggable', true);\r\n            }\r\n            node.style.color = \"white\";\r\n            node.style.fontWeight = \"bold\";\r\n\r\n            document.getElementById(\"products\").appendChild(node);\r\n        }\r\n    }\r\n\r\n    static showInfoSelectedItem(itemCode)\r\n    {\r\n        //get currentregio\r\n        let optionRegios = document.getElementById(\"regioSelect\");\r\n        let selectedRegio = _Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].getRegio(optionRegios[optionRegios.selectedIndex].innerText.toLowerCase());\r\n\r\n        //get number from itemCode\r\n        let reggex = /\\d+/g;\r\n        itemCode = parseInt(itemCode.match(reggex)[0]);\r\n\r\n        // delete old selected item\r\n        let oldItemList = document.getElementById(\"selected-products\");\r\n        while (oldItemList.lastElementChild) {\r\n            oldItemList.removeChild(oldItemList.lastElementChild);\r\n        }\r\n\r\n        //fill with new item\r\n        var itemName = document.createElement(\"p\");\r\n        itemName.classList.add('m-0');\r\n        itemName.innerHTML = \"<strong>Naam: </strong>\" + selectedRegio.items[itemCode].name;\r\n        var itemPrice = document.createElement(\"p\");\r\n        itemPrice.classList.add('m-0');\r\n        itemPrice.innerHTML = \"<strong>Prijs: </strong>\" + selectedRegio.items[itemCode].price;\r\n        // var itemDetails = document.createElement(\"p\");\r\n        // itemDetails.classList.add('m-0');\r\n        // itemDetails.innerHTML = \"<strong>Price: </strong>\" + selectedRegio.items[itemCode].price;\r\n\r\n        document.getElementById(\"selected-products\").append(itemName, itemPrice);\r\n\r\n        // var itemDesc = document.createElement(\"p\");\r\n        // itemDesc.innerHTML = \"Prijs: \" + selectedRegio.items[itemCode].de;\r\n        // document.getElementById(\"selected-products\").appendChild(itemName);\r\n    }\r\n\r\n    static resetSelected()\r\n    {\r\n        let oldItemList = document.getElementById(\"selected-products\");\r\n        emptySelected();\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./js/model/Warehouse.js?");

/***/ }),

/***/ "./js/view/ItemDetails.js":
/*!********************************!*\
  !*** ./js/view/ItemDetails.js ***!
  \********************************/
/*! exports provided: ItemDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemDetails\", function() { return ItemDetails; });\n/* harmony import */ var _model_Regios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Regios */ \"./js/model/Regios.js\");\n\r\n\r\nconst productName = document.getElementById(\"product-name\");\r\nconst productPrice = document.getElementById(\"product-price\");\r\nconst productDetails = document.getElementById(\"product-details-list\");\r\nconst canvas = document.getElementById(\"product-img\");\r\nconst imgUploadBtn = document.getElementById(\"no-img\");\r\nconst imgDiv = document.getElementById(\"product-img-div\");\r\nconst loadedDiv = document.getElementById(\"loaded-img-div\");\r\nconst ctx = canvas.getContext(\"2d\");\r\n\r\nclass ItemDetails\r\n{\r\n    constructor(selectedRegio) {\r\n        this.prevX = 0;\r\n        this.currX = 0;\r\n        this.prevY = 0;\r\n        this.currY = 0;\r\n        this.drawActive = false;\r\n        this.productCode = null;\r\n        this.selectedRegio = selectedRegio;\r\n        this.regio = null;\r\n        this.loadedProduct = null;\r\n        if(this.loadedProduct == null){\r\n            imgUploadBtn.style.display = \"none\";\r\n        }\r\n        this.EmptySelected();\r\n    }\r\n\r\n    ShowDetails(itemCode){\r\n        this.regio = _model_Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].getRegio(this.selectedRegio.options[this.selectedRegio.selectedIndex].text.toLowerCase());\r\n        this.productCode = itemCode;\r\n        this.loadedProduct = this.regio.items[itemCode];\r\n        productName.innerHTML = this.loadedProduct.name;\r\n        productPrice.innerHTML = \"Prijs: €\" + this.loadedProduct.price + \".-\";\r\n        while(productDetails.firstChild)\r\n        {\r\n            productDetails.removeChild(productDetails.firstChild);\r\n        }\r\n\r\n        this.loadedProduct.details.forEach(element => {\r\n            let newItem =  document.createElement('li');\r\n            newItem.innerHTML = element;\r\n            productDetails.appendChild(newItem);\r\n        });\r\n\r\n        imgUploadBtn.style.display = \"flow-root\";\r\n    }\r\n\r\n    LoadItem(itemCode){\r\n        //get number from itemCode\r\n        let reggex = /\\d+/g;\r\n        itemCode = parseInt(itemCode.match(reggex)[0]);\r\n        this.ShowDetails(itemCode);\r\n        this.LoadPicture();\r\n    }\r\n\r\n    LoadPicture(){\r\n        if(this.loadedProduct.picture != \"\"){\r\n            loadedDiv.style.display = \"block\";\r\n            let img = new Image();\r\n                img.onload = function(){\r\n                    canvas.getContext(\"2d\").clearRect(0, 0, canvas.width, canvas.height);\r\n                    this.LoadImgOnCanvas(img);\r\n                    this.InitDrawing();\r\n            }\r\n            img.src = this.loadedProduct.picture;\r\n        }else{\r\n            loadedDiv.style.display = \"none\";\r\n        }\r\n    }\r\n\r\n    LoadImgOnCanvas(img){\r\n        let sizer = Math.min((500/img.width),(500/img.height));\r\n        canvas.width = 500;\r\n        canvas.height = 500;\r\n        canvas.getContext(\"2d\").drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width*sizer, img.height*sizer);\r\n    }\r\n\r\n    HandleFileSelect(evt) {\r\n        let newFile = evt.target.files[0];\r\n        if (!newFile.type.match('image.*')) {\r\n            window.alert(\"gekozen bestand is niet van het juiste type!\")\r\n            return;\r\n        }\r\n        var reader = new FileReader();\r\n        reader.onload = (function() {\r\n          return function(e) {\r\n            canvas.getContext(\"2d\").clearRect(0, 0, canvas.width, canvas.height);\r\n            let buffer = new Image();\r\n            buffer.src = e.target.result;\r\n            buffer.onload = function(){\r\n                this.LoadImgOnCanvas();\r\n                this.InitDrawing();\r\n                this.SaveImage();\r\n                this.LoadPicture();\r\n            }\r\n          };\r\n        })(newFile);\r\n        reader.readAsDataURL(newFile);\r\n    }\r\n\r\n    InitDrawing(){\r\n        canvas.addEventListener(\"mousemove\", function(e){this.MouseMove(e)}, false);\r\n        canvas.addEventListener(\"mousedown\", function(e){this.MouseDown(e)}, false);\r\n        canvas.addEventListener(\"mouseup\", this.MouseUp, false);\r\n        this.currX = 0;\r\n        this.currY = 0;\r\n        this.prevX = 0;\r\n        this.prevY = 0;\r\n    }\r\n\r\n    MouseMove(e){\r\n        if(this.drawActive){\r\n            this.prevX = this.currX;\r\n            this.prevY = this.currY;\r\n            this.currX = e.clientX - canvas.getBoundingClientRect().left;\r\n            this.currY = e.clientY - canvas.getBoundingClientRect().top;\r\n            this.Draw();\r\n        }\r\n    }\r\n\r\n    Draw(){\r\n        ctx.beginPath();\r\n        ctx.moveTo(this.prevX, this.prevY);\r\n        ctx.lineTo(this.currX, this.currY);\r\n        ctx.strokeStyle = \"black\";\r\n        ctx.lineWidth = 3;\r\n        ctx.stroke();\r\n        ctx.closePath();\r\n        this.SaveImage();\r\n    }\r\n\r\n    MouseDown(e){\r\n        this.prevX = this.currX;\r\n        this.prevY = this.currY;\r\n        this.currX = e.clientX - canvas.getBoundingClientRect().left;\r\n        this.currY = e.clientY - canvas.getBoundingClientRect().top;\r\n        this.drawActive = true;\r\n    }\r\n\r\n    MouseUp(){\r\n        this.drawActive = false;\r\n    }\r\n\r\n    SaveImage(){\r\n        this.loadedProduct.picture = canvas.toDataURL(\"image/png\");\r\n        this.regio.items[this.productCode] = this.loadedProduct;\r\n        _model_Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].updateRegio(this.regio);\r\n    }\r\n\r\n    EmptySelected(){\r\n        productName.innerHTML = \"\";\r\n        productPrice.innerHTML = \"\";\r\n        while(productDetails.firstChild)\r\n        {\r\n            productDetails.removeChild(productDetails.firstChild);\r\n        }\r\n        loadedDiv.style.display = \"none\";\r\n        imgUploadBtn.style.display = \"none\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/view/ItemDetails.js?");

/***/ }),

/***/ "./js/view/Movable.js":
/*!****************************!*\
  !*** ./js/view/Movable.js ***!
  \****************************/
/*! exports provided: Movable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Movable\", function() { return Movable; });\n/* harmony import */ var _model_Regios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Regios */ \"./js/model/Regios.js\");\n/* harmony import */ var _model_Warehouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Warehouse */ \"./js/model/Warehouse.js\");\n/* harmony import */ var _view_ItemDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/ItemDetails */ \"./js/view/ItemDetails.js\");\n\r\n\r\n\r\n\r\nclass Movable\r\n{\r\n    constructor(el, currentItem, currentClasslist, currentProduct, itemDetailShower)\r\n    {\r\n        this.el = el;\r\n        this.currentItem = currentItem;\r\n        this.currentClasslist = currentClasslist;\r\n        this.currentProduct = currentProduct;\r\n        this.ItemDetails = itemDetailShower;\r\n    }\r\n\r\n    ClickItem(e)\r\n    {\r\n        for (let index in e.target.classList)\r\n        {\r\n            if (/[a-z]\\d/.test(e.target.classList[index]))\r\n            {\r\n                _view_ItemDetails__WEBPACK_IMPORTED_MODULE_2__[\"ItemDetails\"].LoadItem(e.target.classList[index])\r\n                return;\r\n            }\r\n        }\r\n    }\r\n\r\n    DragStart(e)\r\n    {\r\n        e.dataTransfer.dropEffect = 'move';\r\n        this.el = e.target.cloneNode(true)\r\n        el.removeAttribute('draggable');\r\n    }\r\n\r\n    DragOver(e)\r\n    {\r\n        if (e.target.classList.contains('dropzone'))\r\n        {\r\n\r\n        }\r\n        e.preventDefault();\r\n    }\r\n\r\n    DragEnter(e)\r\n    {\r\n        if (this.currentItem == null)\r\n        {\r\n            this.currentItem = e.target;\r\n            this.currentClassList = this.currentItem.classList;\r\n\r\n            //removes draggable from product-item\r\n            for(let index in this.currentClassList)\r\n            {\r\n                if(/[a-z]\\d/.test(this.currentClassList[index]))\r\n                {\r\n                    this.currentProduct = this.currentClassList[index];\r\n                    let productItem = document.getElementsByClassName(this.currentClassList[index])[0]\r\n                    productItem.removeAttribute('draggable');\r\n                    productItem.style.backgroundColor = \"orange\";\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        let position = e.target.id;\r\n        let row = position.split(\"-\")[0];\r\n        let col = position.split(\"-\")[1];\r\n        let selectedRegio = document.getElementById(\"regioSelect\");\r\n        let regio = _model_Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].getRegio(selectedRegio.options[selectedRegio.selectedIndex].text.toLowerCase());\r\n\r\n        if (Number.isInteger(parseInt(row)))\r\n        {\r\n            let temp = regio.map[row][col];\r\n            if (regio.map[row][col] == this.currentProduct)\r\n            {\r\n                e.target.style.backgroundColor = \"lightgrey\";\r\n                regio.map[row][col] = \"null\";\r\n                _model_Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].updateRegio(regio);\r\n                e.target.classList.add('dropzone');\r\n                e.target.classList.remove(this.currentProduct);\r\n                document.getElementById(e.target.id).removeAttribute('draggable');\r\n            }\r\n        }\r\n\r\n        if (e.target.classList.contains('dropzone')) {\r\n            e.target.style.backgroundColor = \"black\";\r\n        }\r\n    }\r\n\r\n    DragDrop(e)\r\n    {\r\n        if (e.target.classList.contains('dropzone'))\r\n        {\r\n            e.preventDefault();\r\n            e.target.style.backgroundColor = \"yellow\";\r\n            e.target.setAttribute('draggable', true);\r\n            e.target.classList.remove('dropzone');\r\n            this.el = null;\r\n\r\n            let position = e.target.id;\r\n            let row = position.split(\"-\")[0];\r\n            let col = position.split(\"-\")[1];\r\n            let selectedRegio = document.getElementById(\"regioSelect\");\r\n\r\n            let regio = _model_Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].getRegio(selectedRegio.options[selectedRegio.selectedIndex].text.toLowerCase());\r\n            regio.map[row][col] = this.currentProduct;\r\n            _model_Regios__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].updateRegio(regio);\r\n            document.getElementById(position).classList.add(this.currentProduct);\r\n        } else\r\n        {\r\n            let productItem = document.getElementsByClassName(this.currentProduct)[0]\r\n            productItem.setAttribute('draggable',true);\r\n            productItem.style.backgroundColor = \"green\";\r\n            _model_Warehouse__WEBPACK_IMPORTED_MODULE_1__[\"WareHouse\"].resetSelected();\r\n        }\r\n        this.currentItem = null;\r\n    }\r\n\r\n    DragLeave(e)\r\n    {\r\n        if (e.target.classList.contains('dropzone')) {\r\n            e.target.style.backgroundColor = \"lightgrey\";\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/view/Movable.js?");

/***/ })

/******/ });