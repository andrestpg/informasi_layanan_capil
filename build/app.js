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
app.get('/syarat/skpwni', async (req, res) => {
  res.render('public/syarat/skpwni', {
    previousLink: '/syarat'
  });
});
app.get('/syarat/pindah_kewarganegaraan', async (req, res) => {
  res.render('public/syarat/pindah_wn', {
    previousLink: '/syarat'
  });
});
app.use('/syarat', _syaratRoute.default);
app.use('/syarat/akta', _syaratAktaRoute.default);
app.use('/syarat/kk', _syaratKKRoute.default);
app.use('/syarat/ktp', _syaratKtpRoute.default);
app.use('/syarat/kia', _syaratKiaRoute.default);
app.get('/sop', (req, res) => {
  res.render('public/sop', {
    previousLink: '/'
  });
});
app.use('/sop', _sopRoute.default);
app.use('/sop/akta', _sopAktaRoute.default); // 404------------------

app.use((req, res) => {
  res.status(404).render('404', {
    title: "404"
  });
});