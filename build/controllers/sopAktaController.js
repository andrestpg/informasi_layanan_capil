"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = exports.aktaPerkawinan = exports.aktaPerceraian = exports.aktaPengesahanAnak = exports.aktaPengangkatanAnak = exports.aktaPengakuanAnak = exports.aktaPencatatanSipil = exports.aktaKematian = exports.aktaKelahiran = void 0;
const previousLink = '/sop/akta';

const index = async (req, res) => {
  res.render('public/sop/akta/index', {
    previousLink: '/sop'
  });
};

exports.index = index;

const aktaKelahiran = async (req, res) => {
  res.render('public/sop/akta/kelahiran', {
    previousLink
  });
};

exports.aktaKelahiran = aktaKelahiran;

const aktaKematian = async (req, res) => {
  res.render('public/sop/akta/kematian', {
    previousLink
  });
};

exports.aktaKematian = aktaKematian;

const aktaPerceraian = async (req, res) => {
  res.render('public/sop/akta/perceraian', {
    previousLink
  });
};

exports.aktaPerceraian = aktaPerceraian;

const aktaPerkawinan = async (req, res) => {
  res.render('public/sop/akta/perkawinan', {
    previousLink
  });
};

exports.aktaPerkawinan = aktaPerkawinan;

const aktaPengangkatanAnak = async (req, res) => {
  res.render('public/sop/akta/pengangkatan_anak', {
    previousLink
  });
};

exports.aktaPengangkatanAnak = aktaPengangkatanAnak;

const aktaPengakuanAnak = async (req, res) => {
  res.render('public/sop/akta/pengakuan_anak', {
    previousLink
  });
};

exports.aktaPengakuanAnak = aktaPengakuanAnak;

const aktaPengesahanAnak = async (req, res) => {
  res.render('public/sop/akta/pengesahan_anak', {
    previousLink
  });
};

exports.aktaPengesahanAnak = aktaPengesahanAnak;

const aktaPencatatanSipil = async (req, res) => {
  res.render('public/sop/akta/pencatatan_sipil', {
    previousLink
  });
};

exports.aktaPencatatanSipil = aktaPencatatanSipil;