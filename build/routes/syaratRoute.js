"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _syaratController = require("../controllers/syaratController");

const router = (0, _express.Router)();
router.get('/', _syaratController.index);
router.get('/pindah_kewarganegaraan', _syaratController.pindahWN);
router.get('/skpwni', _syaratController.skpwni);
var _default = router;
exports.default = _default;