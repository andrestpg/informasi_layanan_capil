const previousLink = '/syarat/ktp';

export const index = async (req, res) => {
    res.render('public/syarat/ktp/index', {
        previousLink: '/syarat'
    });
}

export const baru = async (req, res) => {
    res.render('public/syarat/ktp/baru', {
        previousLink
    });
}

export const hilang = async (req, res) => {
    res.render('public/syarat/ktp/hilang', {
        previousLink
    });
}

export const perubahan = async (req, res) => {
    res.render('public/syarat/ktp/perubahan', {
        previousLink
    });
}