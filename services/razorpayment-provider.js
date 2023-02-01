"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _medusa = require("@medusajs/medusa");
var _razorpay = _interopRequireDefault(require("razorpay"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RazorpaymentProviderService = /*#__PURE__*/function (_AbstractPaymentServi) {
  (0, _inherits2["default"])(RazorpaymentProviderService, _AbstractPaymentServi);
  var _super = _createSuper(RazorpaymentProviderService);
  function RazorpaymentProviderService(container, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, RazorpaymentProviderService);
    _this = _super.call(this, container);
    _this._options = options;
    _this._razorpay = new _razorpay["default"]({
      key_id: options.key_id,
      key_secret: options.key_secret
    });
    _this._customerService = container.customerService;
    return _this;
  }
  (0, _createClass2["default"])(RazorpaymentProviderService, [{
    key: "createOrder",
    value: function () {
      var _createOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(context) {
        var amount, resource_id, currency_code, cart, customer, orderReqData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              amount = context.amount, resource_id = context.resource_id, currency_code = context.currency_code, cart = context.cart, customer = context.customer;
              orderReqData = {
                amount: Math.round(amount),
                currency: currency_code,
                notes: {
                  cart_id: "".concat(cart.id)
                }
              };
              if (customer) {} else {
                // NOTE: create razor pay customer if not created.
                // const razorPayCustomer = this._customerService.create()

                // const razorCustomer = await this.createCustomer({
                //     email,
                //     contact: phone
                // });
                // orderReqData.notes.customer_id = razorCustomer.id;
              }
              return _context.abrupt("return", null);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createOrder(_x) {
        return _createOrder.apply(this, arguments);
      }
      return createOrder;
    }() // async createCustomer(customer: CreateCustomerInput): Promise<Customer> {
    //     return null;
    // }
  }, {
    key: "createPayment",
    value: function () {
      var _createPayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(context) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", Promise.resolve(null));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function createPayment(_x2) {
        return _createPayment.apply(this, arguments);
      }
      return createPayment;
    }()
  }, {
    key: "retrievePayment",
    value: function () {
      var _retrievePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(paymentData) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", {});
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function retrievePayment(_x3) {
        return _retrievePayment.apply(this, arguments);
      }
      return retrievePayment;
    }()
  }, {
    key: "getStatus",
    value: function () {
      var _getStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", _medusa.PaymentSessionStatus.AUTHORIZED);
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function getStatus(_x4) {
        return _getStatus.apply(this, arguments);
      }
      return getStatus;
    }()
  }, {
    key: "updatePayment",
    value: function () {
      var _updatePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(paymentSessionData, cart) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", {});
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function updatePayment(_x5, _x6) {
        return _updatePayment.apply(this, arguments);
      }
      return updatePayment;
    }()
  }, {
    key: "updatePaymentData",
    value: function () {
      var _updatePaymentData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(paymentSessionData, data) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", {});
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function updatePaymentData(_x7, _x8) {
        return _updatePaymentData.apply(this, arguments);
      }
      return updatePaymentData;
    }()
  }, {
    key: "deletePayment",
    value: function () {
      var _deletePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(paymentSession) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return");
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function deletePayment(_x9) {
        return _deletePayment.apply(this, arguments);
      }
      return deletePayment;
    }()
  }, {
    key: "authorizePayment",
    value: function () {
      var _authorizePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(paymentSession, context) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", {
                status: _medusa.PaymentSessionStatus.AUTHORIZED,
                data: {
                  id: "test"
                }
              });
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function authorizePayment(_x10, _x11) {
        return _authorizePayment.apply(this, arguments);
      }
      return authorizePayment;
    }()
  }, {
    key: "getPaymentData",
    value: function () {
      var _getPaymentData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(paymentSession) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", paymentSession.data);
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function getPaymentData(_x12) {
        return _getPaymentData.apply(this, arguments);
      }
      return getPaymentData;
    }()
  }, {
    key: "capturePayment",
    value: function () {
      var _capturePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(payment) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", {
                status: "captured"
              });
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function capturePayment(_x13) {
        return _capturePayment.apply(this, arguments);
      }
      return capturePayment;
    }()
  }, {
    key: "refundPayment",
    value: function () {
      var _refundPayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(payment, refundAmount) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", {
                id: "test"
              });
            case 1:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function refundPayment(_x14, _x15) {
        return _refundPayment.apply(this, arguments);
      }
      return refundPayment;
    }()
  }, {
    key: "cancelPayment",
    value: function () {
      var _cancelPayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(payment) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", {
                id: "test"
              });
            case 1:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function cancelPayment(_x16) {
        return _cancelPayment.apply(this, arguments);
      }
      return cancelPayment;
    }()
  }]);
  return RazorpaymentProviderService;
}(_medusa.AbstractPaymentService);
(0, _defineProperty2["default"])(RazorpaymentProviderService, "identifier", 'razorpayment');
var _default = RazorpaymentProviderService;
exports["default"] = _default;