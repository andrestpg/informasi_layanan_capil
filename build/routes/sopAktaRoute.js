"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _sopAktaController = require("../controllers/sopAktaController");

const router = (0, _express.Router)();
router.get('/', _sopAktaController.index);
router.get('/kelahiran', _sopAktaController.aktaKelahiran);
router.get('/kematian', _sopAktaController.aktaKematian);
router.get('/perceraian', _sopAktaController.aktaPerceraian);
router.get('/perkawinan', _sopAktaController.aktaPerkawinan);
router.get('/pengangkatan_anak', _sopAktaController.aktaPengangkatanAnak);
router.get('/pengakuan_anak', _sopAktaController.aktaPengakuanAnak);
router.get('/pengesahan_anak', _sopAktaController.aktaPengesahanAnak);
router.get('/catatan_sipil', _sopAktaController.aktaPencatatanSipil);
var _default = router;
exports.default = _default;