"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = void 0;

const index = async (req, res) => {
  res.render('public/syarat/index', {
    previousLink: '/'
  });
};

exports.index = index;