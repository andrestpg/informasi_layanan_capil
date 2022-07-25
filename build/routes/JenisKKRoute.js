"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _jenisKKController = require("../controllers/jenisKKController");

const router = (0, _express.Router)();
router.get('/', _jenisKKController.index);
router.get('/baru', _jenisKKController.baru);
router.get('/kedatangan', _jenisKKController.kedatangan);
router.get('/pindah_dalam_kota', _jenisKKController.pindahDalamKota);
router.get('/hilang', _jenisKKController.hilang);
router.get('/perubahan_peristiwa_penting', _jenisKKController.perubahanPeristiwaPenting);
router.get('/perubahan_data', _jenisKKController.perubahanData);
var _default = router;
exports.default = _default;