"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _syaratKtpController = require("../controllers/syaratKtpController");

const router = (0, _express.Router)();
router.get('/', _syaratKtpController.index);
router.get('/baru', _syaratKtpController.baru);
router.get('/hilang', _syaratKtpController.hilang);
router.get('/perubahan', _syaratKtpController.perubahan);
var _default = router;
exports.default = _default;