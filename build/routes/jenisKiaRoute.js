"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _jenisKiaController = require("../controllers/jenisKiaController");

const router = (0, _express.Router)();
router.get('/', _jenisKiaController.index);
router.get('/baru', _jenisKiaController.baru);
router.get('/hilang', _jenisKiaController.hilang);
router.get('/perubahan', _jenisKiaController.perubahan);
var _default = router;
exports.default = _default;