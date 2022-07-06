"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _syaratKiaController = require("../controllers/syaratKiaController");

const router = (0, _express.Router)();
router.get('/', _syaratKiaController.index);
router.get('/baru', _syaratKiaController.baru);
router.get('/hilang', _syaratKiaController.hilang);
router.get('/perubahan', _syaratKiaController.perubahan);
var _default = router;
exports.default = _default;