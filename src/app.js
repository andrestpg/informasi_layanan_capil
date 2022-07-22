import 'dotenv/config'

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import syaratRoute from './routes/syaratRoute'
import syaratAktaRoute from './routes/syaratAktaRoute'
import syaratKKRoute from './routes/syaratKKRoute'
import syaratKtpRoute from './routes/syaratKtpRoute'
import syaratKiaRoute from './routes/syaratKiaRoute'

import sopRoute from './routes/sopRoute'
import sopAktaRoute from './routes/sopAktaRoute'

import jenisRoute from './routes/jenisRoute'
import jenisAktaRoute from './routes/jenisAktaRoute'
import jenisKKRoute from './routes/jenisKKRoute'
import jenisKtpRoute from './routes/jenisKtpRoute'
import jenisKiaRoute from './routes/jenisKiaRoute'

import express from 'express'
const app = express();
app.listen(process.env.PORT)

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json({
    limit: "10mb",
}));

app.use(cookieParser());

//Public Dir
app.use(express.static('assets'));

//View Engine
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('public/index')
});

app.get('/denah', async (req, res) => {
    res.render('public/denah', {
        previousLink: '/'
    })
});

app.use('/syarat', syaratRoute);
app.use('/syarat/akta', syaratAktaRoute);
app.use('/syarat/kk', syaratKKRoute);
app.use('/syarat/ktp', syaratKtpRoute);
app.use('/syarat/kia', syaratKiaRoute);

app.use('/sop', sopRoute);
app.use('/sop/akta', sopAktaRoute);

app.use('/jenis', jenisRoute);
app.use('/jenis/akta', jenisAktaRoute);
app.use('/jenis/kk', jenisKKRoute);
app.use('/jenis/ktp', jenisKtpRoute);
app.use('/jenis/kia', jenisKiaRoute);

// app.use('/jenis/dafduk', dafdukRoute);

// 404------------------
app.use((req, res) => {
    res.status(404).render('404', {title: "404"});
});