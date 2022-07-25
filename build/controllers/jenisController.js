"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skpwni = exports.pindahWN = exports.index = void 0;

const index = async (req, res) => {
  res.render('public/jenis/index', {
    previousLink: '/'
  });
};

exports.index = index;

const skpwni = async (req, res) => {
  res.render('public/jenis/skpwni', {
    previousLink: '/jenis'
  });
};

exports.skpwni = skpwni;

const pindahWN = async (req, res) => {
  res.render('public/jenis/pindah_wn', {
    previousLink: '/jenis'
  });
};

exports.pindahWN = pindahWN;