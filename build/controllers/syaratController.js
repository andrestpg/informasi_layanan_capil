"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skpwni = exports.pindahWN = exports.index = void 0;

const index = async (req, res) => {
  res.render('public/syarat/index', {
    previousLink: '/'
  });
};

exports.index = index;

const skpwni = async (req, res) => {
  res.render('public/syarat/skpwni', {
    previousLink: '/syarat'
  });
};

exports.skpwni = skpwni;

const pindahWN = async (req, res) => {
  res.render('public/syarat/pindah_wn', {
    previousLink: '/syarat'
  });
};

exports.pindahWN = pindahWN;