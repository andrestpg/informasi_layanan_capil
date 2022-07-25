"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = exports.aktaPerkawinan = exports.aktaPerceraian = exports.aktaPengesahanAnak = exports.aktaPengangkatanAnak = exports.aktaPengakuanAnak = exports.aktaPencatatanSipil = exports.aktaKematian = exports.aktaKelahiran = void 0;
const previousLink = '/jenis/akta';

const index = async (req, res) => {
  res.render('public/jenis/akta/index', {
    previousLink: '/jenis'
  });
};

exports.index = index;

const aktaKelahiran = async (req, res) => {
  res.render('public/jenis/akta/kelahiran', {
    previousLink
  });
};

exports.aktaKelahiran = aktaKelahiran;

const aktaKematian = async (req, res) => {
  res.render('public/jenis/akta/kematian', {
    previousLink
  });
};

exports.aktaKematian = aktaKematian;

const aktaPerceraian = async (req, res) => {
  res.render('public/jenis/akta/perceraian', {
    previousLink
  });
};

exports.aktaPerceraian = aktaPerceraian;

const aktaPerkawinan = async (req, res) => {
  res.render('public/jenis/akta/perkawinan', {
    previousLink
  });
};

exports.aktaPerkawinan = aktaPerkawinan;

const aktaPengangkatanAnak = async (req, res) => {
  res.render('public/jenis/akta/pengangkatan_anak', {
    previousLink
  });
};

exports.aktaPengangkatanAnak = aktaPengangkatanAnak;

const aktaPengakuanAnak = async (req, res) => {
  res.render('public/jenis/akta/pengakuan_anak', {
    previousLink
  });
};

exports.aktaPengakuanAnak = aktaPengakuanAnak;

const aktaPengesahanAnak = async (req, res) => {
  res.render('public/jenis/akta/pengesahan_anak', {
    previousLink
  });
};

exports.aktaPengesahanAnak = aktaPengesahanAnak;

const aktaPencatatanSipil = async (req, res) => {
  res.render('public/jenis/akta/pencatatan_sipil', {
    previousLink
  });
};

exports.aktaPencatatanSipil = aktaPencatatanSipil;