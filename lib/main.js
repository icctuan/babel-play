"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.string.iterator.js");
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var testFun = function testFun() {
  console.log(999);
};
var A = /*#__PURE__*/(0, _createClass2.default)(function A() {
  (0, _classCallCheck2.default)(this, A);
  console.log("classA");
});
var C = /*#__PURE__*/(0, _createClass2.default)(function C() {
  (0, _classCallCheck2.default)(this, C);
  console.log("classC");
});
var newArray = Array.from({
  0: "a",
  1: "b",
  length: 2
});