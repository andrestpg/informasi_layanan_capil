import 'dotenv/config'

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import syaratRoute from './routes/syaratRoute'
import syaratAktaRoute from './routes/syaratAktaRoute'

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

app.use('/syarat', syaratRoute);
app.use('/syarat/akta', syaratAktaRoute);
// app.use('/alur', alurRoute);
// app.use('/denah', denahRoute);

// 404------------------
app.use((req, res) => {
    res.status(404).render('404', {title: "404"});
});