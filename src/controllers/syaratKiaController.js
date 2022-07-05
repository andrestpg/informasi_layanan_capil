const previousLink = '/syarat/kia';

export const index = async (req, res) => {
    res.render('public/syarat/kia/index', {
        previousLink: '/syarat'
    });
}

export const baru = async (req, res) => {
    res.render('public/syarat/kia/baru', {
        previousLink
    });
}

export const hilang = async (req, res) => {
    res.render('public/syarat/kia/hilang', {
        previousLink
    });
}

export const perubahan = async (req, res) => {
    res.render('public/syarat/kia/perubahan', {
        previousLink
    });
}