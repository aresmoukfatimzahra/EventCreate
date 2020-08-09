(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/coreui/src/views/users/Users.js":
/*!***************************************************!*\
  !*** ./resources/coreui/src/views/users/Users.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Users; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _UsersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersData */ "./resources/coreui/src/views/users/UsersData.js");
/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! enzyme */ "./node_modules/enzyme/build/index.js");
/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
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








var Users = /*#__PURE__*/function (_Component) {
  _inherits(Users, _Component);

  var _super = _createSuper(Users);

  function Users(props) {
    var _this;

    _classCallCheck(this, Users);

    _this = _super.call(this, props);

    _this.componentDidMount = function () {
      var url = "http://localhost:8000/api";
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url + '/users/liste').then(function (Response) {
        _this.setState({
          users: Response.data
        });

        console.log(_this.state.users);
      })["catch"](function (err) {
        return console.log(err);
      });
    };

    _this.handledelete = function (id) {
      console.log('click', id);

      var isnotid = function isnotid(userid) {
        return userid.id != id;
      };

      var userliste = _this.state.users.filter(isnotid);

      _this.setState({
        users: userliste
      });

      axios__WEBPACK_IMPORTED_MODULE_5___default.a["delete"]("/api/user/".concat(id, "/delete")).then(function (response) {
        console.log(response);
      })["catch"](function (err) {
        return console.log(err);
      });
    };

    _this.state = {
      users: []
    };
    return _this;
  }

  _createClass(Users, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        xl: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardHeader"], null, "Users", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, " liste")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CDataTable"], {
        items: this.state.users,
        fields: [{
          key: 'name',
          _classes: 'font-weight-bold'
        }, 'email', 'role_id', 'actions'],
        hover: true,
        striped: true,
        itemsPerPage: 5 // activePage={page}
        ,
        pagination: true,
        clickableRows: true //onRowClick={(item) => history.push(`/users/${item.id}`)}
        ,
        scopedSlots: {
          // 'status':
          //   (item)=>(
          //     <td>
          //       <CBadge color={getBadge(item.status)}>
          //         {item.status}
          //       </CBadge>
          //     </td>
          //   ),
          'actions': function actions(item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
              to: "/user/".concat(item.id, "/update/"),
              type: "submit",
              size: "sm",
              className: "btn btn-warning"
            }, "Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
              size: "sm",
              type: "submit",
              onClick: _this2.handledelete.bind(_this2, item.id),
              className: "btn btn-danger"
            }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
              to: "/user/".concat(item.id),
              size: "sm",
              className: "btn btn-danger"
            }, "Details"));
          }
        }
      })))));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/coreui/src/views/users/UsersData.js":
/*!*******************************************************!*\
  !*** ./resources/coreui/src/views/users/UsersData.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var usersData = [{
  id: 0,
  name: 'John Doe',
  registered: '2018/01/01',
  role: 'Guest',
  status: 'Pending'
}, {
  id: 1,
  name: 'Samppa Nori',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 2,
  name: 'Estavan Lykos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 3,
  name: 'Chetan Mohamed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 4,
  name: 'Derick Maximinus',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 5,
  name: 'Friderik Dávid',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 6,
  name: 'Yiorgos Avraamu',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 7,
  name: 'Avram Tarasios',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 8,
  name: 'Quintin Ed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 9,
  name: 'Enéas Kwadwo',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 10,
  name: 'Agapetus Tadeáš',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 11,
  name: 'Carwyn Fachtna',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 12,
  name: 'Nehemiah Tatius',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 13,
  name: 'Ebbe Gemariah',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 14,
  name: 'Eustorgios Amulius',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 15,
  name: 'Leopold Gáspár',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 16,
  name: 'Pompeius René',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 17,
  name: 'Paĉjo Jadon',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 18,
  name: 'Micheal Mercurius',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 19,
  name: 'Ganesha Dubhghall',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 20,
  name: 'Hiroto Šimun',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 21,
  name: 'Vishnu Serghei',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 22,
  name: 'Zbyněk Phoibos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 23,
  name: 'Aulus Agmundr',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 42,
  name: 'Ford Prefect',
  registered: '2001/05/25',
  role: 'Alien',
  status: 'Don\'t panic!'
}];
/* harmony default export */ __webpack_exports__["default"] = (usersData);

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);