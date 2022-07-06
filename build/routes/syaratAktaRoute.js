"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _syaratAktaController = require("../controllers/syaratAktaController");

const router = (0, _express.Router)();
router.get('/', _syaratAktaController.index);
router.get('/kelahiran', _syaratAktaController.aktaKelahiran);
router.get('/kematian', _syaratAktaController.aktaKematian);
router.get('/perceraian', _syaratAktaController.aktaPerceraian);
router.get('/perkawinan', _syaratAktaController.aktaPerkawinan);
router.get('/pengangkatan_anak', _syaratAktaController.aktaPengangkatanAnak);
router.get('/pengakuan_anak', _syaratAktaController.aktaPengakuanAnak);
router.get('/pengesahan_anak', _syaratAktaController.aktaPengesahanAnak);
router.get('/catatan_sipil', _syaratAktaController.aktaPencatatanSipil);
var _default = router;
exports.default = _default;