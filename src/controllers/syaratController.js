export const index = async (req, res) => {
    res.render('public/syarat/index', {
        previousLink: '/'
    });
}

export const skpwni = async (req, res) => {
    res.render('public/syarat/skpwni', {
        previousLink: '/syarat'
    })
}

export const pindahWN = async (req, res) => {
    res.render('public/syarat/pindah_wn', {
        previousLink: '/syarat'
    })
}