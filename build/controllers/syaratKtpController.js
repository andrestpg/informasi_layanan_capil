"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perubahan = exports.index = exports.hilang = exports.baru = void 0;
const previousLink = '/syarat/ktp';

const index = async (req, res) => {
  res.render('public/syarat/ktp/index', {
    previousLink: '/syarat'
  });
};

exports.index = index;

const baru = async (req, res) => {
  res.render('public/syarat/ktp/baru', {
    previousLink
  });
};

exports.baru = baru;

const hilang = async (req, res) => {
  res.render('public/syarat/ktp/hilang', {
    previousLink
  });
};

exports.hilang = hilang;

const perubahan = async (req, res) => {
  res.render('public/syarat/ktp/perubahan', {
    previousLink
  });
};

exports.perubahan = perubahan;