"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perubahan = exports.index = exports.hilang = exports.baru = void 0;
const previousLink = '/jenis/kia';

const index = async (req, res) => {
  res.render('public/jenis/kia/index', {
    previousLink: '/jenis'
  });
};

exports.index = index;

const baru = async (req, res) => {
  res.render('public/jenis/kia/baru', {
    previousLink
  });
};

exports.baru = baru;

const hilang = async (req, res) => {
  res.render('public/jenis/kia/hilang', {
    previousLink
  });
};

exports.hilang = hilang;

const perubahan = async (req, res) => {
  res.render('public/jenis/kia/perubahan', {
    previousLink
  });
};

exports.perubahan = perubahan;