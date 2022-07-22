const previousLink = '/jenis/kia';

export const index = async (req, res) => {
    res.render('public/jenis/kia/index', {
        previousLink: '/jenis'
    });
}

export const baru = async (req, res) => {
    res.render('public/jenis/kia/baru', {
        previousLink
    });
}

export const hilang = async (req, res) => {
    res.render('public/jenis/kia/hilang', {
        previousLink
    });
}

export const perubahan = async (req, res) => {
    res.render('public/jenis/kia/perubahan', {
        previousLink
    });
}