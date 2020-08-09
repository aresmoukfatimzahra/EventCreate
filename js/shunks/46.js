(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./resources/coreui/src/views/theme/colors/Colors.js":
/*!***********************************************************!*\
  !*** ./resources/coreui/src/views/theme/colors/Colors.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ThemeView = function ThemeView() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('rgb(255, 255, 255)'),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var ref = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var el = ref.current.parentNode.firstChild;
    var varColor = window.getComputedStyle(el).getPropertyValue('background-color');
    setColor(varColor);
  }, [ref]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table w-100",
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-muted"
  }, "HEX:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "font-weight-bold"
  }, Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_3__["rgbToHex"])(color))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-muted"
  }, "RGB:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "font-weight-bold"
  }, color))));
};

var ThemeColor = function ThemeColor(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'theme-color w-75 rounded mb-3');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    xl: "2",
    md: "4",
    sm: "6",
    xs: "12",
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes,
    style: {
      paddingTop: '75%'
    }
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeView, null));
};

var Colors = function Colors() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, "Theme colors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Primary Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Secondary Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Success Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Danger Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Warning Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Info Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Light Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Dark Color"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, "Grays"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 100 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 200 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 300 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 400 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 500 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 600 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 700 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 800 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 900 Color"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Colors);

/***/ })

}]);