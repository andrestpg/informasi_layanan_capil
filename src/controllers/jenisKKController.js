const previousLink = '/jenis/kk';

export const index = async (req, res) => {
    res.render('public/jenis/kk/index', {
        previousLink: '/jenis'
    });
}

export const baru = async (req, res) => {
    res.render('public/jenis/kk/baru', {
        previousLink
    });
}

export const kedatangan = async (req, res) => {
    res.render('public/jenis/kk/kedatangan', {
        previousLink
    });
}

export const pindahDalamKota = async (req, res) => {
    res.render('public/jenis/kk/pindah_dalam_kota', {
        previousLink
    });
}

export const hilang = async (req, res) => {
    res.render('public/jenis/kk/hilang', {
        previousLink
    });
}

export const perubahanPeristiwaPenting = async (req, res) => {
    res.render('public/jenis/kk/perubahan_peristiwa_penting', {
        previousLink
    });
}

export const perubahanData = async (req, res) => {
    res.render('public/jenis/kk/perubahan_data', {
        previousLink
    });
}