"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _sopController = require("../controllers/sopController");

const router = (0, _express.Router)();
router.get('/', _sopController.index);
router.get('/kk', _sopController.kk);
router.get('/ktp', _sopController.ktp);
router.get('/kia', _sopController.kia);
router.get('/skpwni', _sopController.skpwni);
router.get('/pindah', _sopController.pindah);
var _default = router;
exports.default = _default;