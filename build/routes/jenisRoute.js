"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _jenisController = require("../controllers/jenisController");

const router = (0, _express.Router)();
router.get('/', _jenisController.index);
router.get('/pindah_kewarganegaraan', _jenisController.pindahWN);
router.get('/skpwni', _jenisController.skpwni);
var _default = router;
exports.default = _default;