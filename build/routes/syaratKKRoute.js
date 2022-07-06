"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _syaratKKController = require("../controllers/syaratKKController");

const router = (0, _express.Router)();
router.get('/', _syaratKKController.index);
router.get('/baru', _syaratKKController.baru);
router.get('/kedatangan', _syaratKKController.kedatangan);
router.get('/pindah_dalam_kota', _syaratKKController.pindahDalamKota);
router.get('/hilang', _syaratKKController.hilang);
router.get('/perubahan_peristiwa_penting', _syaratKKController.perubahanPeristiwaPenting);
router.get('/perubahan_data', _syaratKKController.perubahanData);
var _default = router;
exports.default = _default;