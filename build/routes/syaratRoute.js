"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _syaratController = require("../controllers/syaratController");

const router = (0, _express.Router)();
router.get('/', _syaratController.index);
var _default = router;
exports.default = _default;