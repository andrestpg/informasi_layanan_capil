const previousLink = '/jenis/ktp';

export const index = async (req, res) => {
    res.render('public/jenis/ktp/index', {
        previousLink: '/jenis'
    });
}

export const baru = async (req, res) => {
    res.render('public/jenis/ktp/baru', {
        previousLink
    });
}

export const hilang = async (req, res) => {
    res.render('public/jenis/ktp/hilang', {
        previousLink
    });
}

export const perubahan = async (req, res) => {
    res.render('public/jenis/ktp/perubahan', {
        previousLink
    });
}