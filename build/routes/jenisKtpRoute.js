"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _jenisKtpController = require("../controllers/jenisKtpController");

const router = (0, _express.Router)();
router.get('/', _jenisKtpController.index);
router.get('/baru', _jenisKtpController.baru);
router.get('/hilang', _jenisKtpController.hilang);
router.get('/perubahan', _jenisKtpController.perubahan);
var _default = router;
exports.default = _default;