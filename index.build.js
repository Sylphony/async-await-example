"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var add2 = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(x) {
    var a, b;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return resolveAfter2Seconds(20);

          case 2:
            a = _context.sent;
            _context.next = 5;
            return resolveAfter2Seconds(30);

          case 5:
            b = _context.sent;
            return _context.abrupt("return", x + a + b);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function add2(_x) {
    return _ref.apply(this, arguments);
  };
}();

require("babel-core/register");

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveAfter2Seconds(x) {
  return new _promise2.default(function (resolve) {
    setTimeout(function () {
      resolve(x);
    }, 2000);
  });
}

add2(10).then(function (v) {
  console.log(v); // prints 60 after 4 seconds.
});
