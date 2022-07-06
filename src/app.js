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

app.get('/syarat/skpwni', async (req, res) => {
    res.render('public/syarat/skpwni', {
        previousLink: '/syarat'
    })
});

app.get('/syarat/pindah_kewarganegaraan', async (req, res) => {
    res.render('public/syarat/pindah_wn', {
        previousLink: '/syarat'
    })
});

app.use('/syarat', syaratRoute);
app.use('/syarat/akta', syaratAktaRoute);
app.use('/syarat/kk', syaratKKRoute);
app.use('/syarat/ktp', syaratKtpRoute);
app.use('/syarat/kia', syaratKiaRoute);

app.get('/sop', (req, res) => {
    res.render('public/sop', {
        previousLink: '/'
    })
});
app.use('/sop', sopRoute);
app.use('/sop/akta', sopAktaRoute);

// 404------------------
app.use((req, res) => {
    res.status(404).render('404', {title: "404"});
});