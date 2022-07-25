"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _jenisAktaController = require("../controllers/jenisAktaController");

const router = (0, _express.Router)();
router.get('/', _jenisAktaController.index);
router.get('/kelahiran', _jenisAktaController.aktaKelahiran);
router.get('/kematian', _jenisAktaController.aktaKematian);
router.get('/perceraian', _jenisAktaController.aktaPerceraian);
router.get('/perkawinan', _jenisAktaController.aktaPerkawinan);
router.get('/pengangkatan_anak', _jenisAktaController.aktaPengangkatanAnak);
router.get('/pengakuan_anak', _jenisAktaController.aktaPengakuanAnak);
router.get('/pengesahan_anak', _jenisAktaController.aktaPengesahanAnak);
router.get('/catatan_sipil', _jenisAktaController.aktaPencatatanSipil);
var _default = router;
exports.default = _default;