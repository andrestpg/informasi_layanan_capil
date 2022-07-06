"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pindahDalamKota = exports.perubahanPeristiwaPenting = exports.perubahanData = exports.kedatangan = exports.index = exports.hilang = exports.baru = void 0;
const previousLink = '/syarat/kk';

const index = async (req, res) => {
  res.render('public/syarat/kk/index', {
    previousLink: '/syarat'
  });
};

exports.index = index;

const baru = async (req, res) => {
  res.render('public/syarat/kk/baru', {
    previousLink
  });
};

exports.baru = baru;

const kedatangan = async (req, res) => {
  res.render('public/syarat/kk/kedatangan', {
    previousLink
  });
};

exports.kedatangan = kedatangan;

const pindahDalamKota = async (req, res) => {
  res.render('public/syarat/kk/pindah_dalam_kota', {
    previousLink
  });
};

exports.pindahDalamKota = pindahDalamKota;

const hilang = async (req, res) => {
  res.render('public/syarat/kk/hilang', {
    previousLink
  });
};

exports.hilang = hilang;

const perubahanPeristiwaPenting = async (req, res) => {
  res.render('public/syarat/kk/perubahan_peristiwa_penting', {
    previousLink
  });
};

exports.perubahanPeristiwaPenting = perubahanPeristiwaPenting;

const perubahanData = async (req, res) => {
  res.render('public/syarat/kk/perubahan_data', {
    previousLink
  });
};

exports.perubahanData = perubahanData;