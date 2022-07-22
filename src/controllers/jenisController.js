export const index = async (req, res) => {
    res.render('public/jenis/index', {
        previousLink: '/'
    });
}

export const skpwni = async (req, res) => {
    res.render('public/jenis/skpwni', {
        previousLink: '/jenis'
    })
}

export const pindahWN = async (req, res) => {
    res.render('public/jenis/pindah_wn', {
        previousLink: '/jenis'
    })
}