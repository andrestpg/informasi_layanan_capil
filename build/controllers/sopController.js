"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skpwni = exports.pindah = exports.ktp = exports.kk = exports.kia = exports.index = void 0;
const previousLink = '/sop';

const index = (req, res) => {
  res.render('public/sop', {
    previousLink: '/sop'
  });
};

exports.index = index;

const kk = (req, res) => {
  res.render('public/sop/kk', {
    previousLink
  });
};

exports.kk = kk;

const ktp = (req, res) => {
  res.render('public/sop/ktp', {
    previousLink
  });
};

exports.ktp = ktp;

const kia = (req, res) => {
  res.render('public/sop/kia', {
    previousLink
  });
};

exports.kia = kia;

const skpwni = (req, res) => {
  res.render('public/sop/skp', {
    previousLink
  });
};

exports.skpwni = skpwni;

const pindah = (req, res) => {
  res.render('public/sop/pindah', {
    previousLink
  });
};

exports.pindah = pindah;