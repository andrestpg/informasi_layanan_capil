const previousLink = '/syarat/kk';

export const index = async (req, res) => {
    res.render('public/syarat/kk/index', {
        previousLink: '/syarat'
    });
}

export const baru = async (req, res) => {
    res.render('public/syarat/kk/baru', {
        previousLink
    });
}

export const kedatangan = async (req, res) => {
    res.render('public/syarat/kk/kedatangan', {
        previousLink
    });
}

export const pindahDalamKota = async (req, res) => {
    res.render('public/syarat/kk/pindah_dalam_kota', {
        previousLink
    });
}

export const hilang = async (req, res) => {
    res.render('public/syarat/kk/hilang', {
        previousLink
    });
}

export const perubahanPeristiwaPenting = async (req, res) => {
    res.render('public/syarat/kk/perubahan_peristiwa_penting', {
        previousLink
    });
}

export const perubahanData = async (req, res) => {
    res.render('public/syarat/kk/perubahan_data', {
        previousLink
    });
}