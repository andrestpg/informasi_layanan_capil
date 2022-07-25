"use strict";

require("dotenv/config");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _syaratRoute = _interopRequireDefault(require("./routes/syaratRoute"));

var _syaratAktaRoute = _interopRequireDefault(require("./routes/syaratAktaRoute"));

var _syaratKKRoute = _interopRequireDefault(require("./routes/syaratKKRoute"));

var _syaratKtpRoute = _interopRequireDefault(require("./routes/syaratKtpRoute"));

var _syaratKiaRoute = _interopRequireDefault(require("./routes/syaratKiaRoute"));

var _sopRoute = _interopRequireDefault(require("./routes/sopRoute"));

var _sopAktaRoute = _interopRequireDefault(require("./routes/sopAktaRoute"));

var _jenisRoute = _interopRequireDefault(require("./routes/jenisRoute"));

var _jenisAktaRoute = _interopRequireDefault(require("./routes/jenisAktaRoute"));

var _jenisKKRoute = _interopRequireDefault(require("./routes/jenisKKRoute"));

var _jenisKtpRoute = _interopRequireDefault(require("./routes/jenisKtpRoute"));

var _jenisKiaRoute = _interopRequireDefault(require("./routes/jenisKiaRoute"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.listen(process.env.PORT);
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json({
  limit: "10mb"
}));
app.use((0, _cookieParser.default)()); //Public Dir

app.use(_express.default.static('assets')); //View Engine

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
  res.render('public/index');
});
app.get('/denah', async (req, res) => {
  res.render('public/denah', {
    previousLink: '/'
  });
});
app.use('/syarat', _syaratRoute.default);
app.use('/syarat/akta', _syaratAktaRoute.default);
app.use('/syarat/kk', _syaratKKRoute.default);
app.use('/syarat/ktp', _syaratKtpRoute.default);
app.use('/syarat/kia', _syaratKiaRoute.default);
app.use('/sop', _sopRoute.default);
app.use('/sop/akta', _sopAktaRoute.default);
app.use('/jenis', _jenisRoute.default);
app.use('/jenis/akta', _jenisAktaRoute.default);
app.use('/jenis/kk', _jenisKKRoute.default);
app.use('/jenis/ktp', _jenisKtpRoute.default);
app.use('/jenis/kia', _jenisKiaRoute.default); // app.use('/jenis/dafduk', dafdukRoute);
// 404------------------

app.use((req, res) => {
  res.status(404).render('404', {
    title: "404"
  });
});