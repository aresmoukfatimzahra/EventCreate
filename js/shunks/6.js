(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/coreui/src/views/events/Liste.js":
/*!****************************************************!*\
  !*** ./resources/coreui/src/views/events/Liste.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Liste; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../js/services */ "./resources/js/services/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Liste = /*#__PURE__*/function (_Component) {
  _inherits(Liste, _Component);

  var _super = _createSuper(Liste);

  function Liste(props) {
    var _this;

    _classCallCheck(this, Liste);

    _this = _super.call(this, props);

    _this.componentDidMount = function () {
      var url = "http://localhost:8000/api";
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url + '/events').then(function (Response) {
        _this.setState({
          events: Response.data
        });

        console.log(_this.state.events);
      })["catch"](function (err) {
        return console.log(err);
      });
    };

    _this.getBadge = function (status) {
      switch (status) {
        case 1:
          return 'success';

        case 0:
          return 'secondary';
      }
    };

    _this.handleDelete = function (id) {
      console.log('clicked', id);

      var isnotid = function isnotid(eventid) {
        return eventid.id != id;
      };

      var updateevent = _this.state.events.filter(isnotid);

      _this.setState({
        events: updateevent
      });

      axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/events/".concat(id)).then(function (Response) {
        console.log('success'); //this.props.history.push('/events/liste')
      })["catch"](function (err) {
        return console.log(err);
      });
    };

    _this.fields = ['title', 'place', 'description', 'date', 'status', 'action'];
    _this.state = {
      events: []
    };
    return _this;
  }

  _createClass(Liste, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Events Liste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDataTable"], {
        items: this.state.events,
        fields: this.fields,
        hover: true,
        striped: true,
        bordered: true,
        size: "sm",
        itemsPerPage: 10,
        pagination: true,
        scopedSlots: {
          'status': function status(item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
              color: _this2.getBadge(item.status)
            }, item.status));
          },
          'action': function action(item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLink"], {
              to: "/events/".concat(item.id, "/update/"),
              type: "submit",
              size: "sm",
              className: "btn btn-warning"
            }, "Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLink"], {
              onClick: _this2.handleDelete.bind(_this2, item.id),
              type: "submit",
              size: "sm",
              className: "btn btn-danger"
            }, "Delete"));
          }
        }
      })))));
    }
  }]);

  return Liste;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/services/index.js":
/*!****************************************!*\
  !*** ./resources/js/services/index.js ***!
  \****************************************/
/*! exports provided: indexEvents, indexMedia, showUser, mediaIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexEvents", function() { return indexEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexMedia", function() { return indexMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUser", function() { return showUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaIndex", function() { return mediaIndex; });
function indexEvents(api, onSuccess) {
  // fetch('http://localhost:8000/api/events')
  fetch(api).then(function (results) {
    if (results.ok) {
      return results.json();
    } else {
      console.log('error event index');
    }
  }).then(function (data) {
    return onSuccess(data);
  })["catch"](function (error) {
    return console.log('error => ' + error);
  });
}
function indexMedia(api, onSuccess) {
  // fetch('http://localhost:8000/api/events')
  fetch(api).then(function (results) {
    if (results.ok) {
      return results.json();
    } else {
      console.log('error media index');
    }
  }).then(function (data) {
    return onSuccess(data);
  })["catch"](function (error) {
    return console.log('error => ' + error);
  });
}
function showUser(api, onSuccess) {
  fetch(api).then(function (results) {
    if (results.ok) {
      return results.json();
    } else {
      console.log('error user index');
    }
  }).then(function (data) {
    return onSuccess(data);
  })["catch"](function (error) {
    return console.log('error => ' + error);
  });
}
function mediaIndex(api, onSuccess) {
  fetch(api).then(function (results) {
    if (results.ok) {
      return results.json();
    } else {
      console.log('error media index');
    }
  }).then(function (data) {
    return onSuccess(data);
  })["catch"](function (error) {
    return console.log('error => ' + error);
  });
}

/***/ })

}]);