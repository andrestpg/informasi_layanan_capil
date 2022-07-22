const previousLink = '/sop'

export const index = (req, res) => {
    res.render('public/sop', {
        previousLink: '/sop'
    })
}

export const kk = (req, res) => {
    res.render('public/sop/kk', {
        previousLink
    })
}

export const ktp = (req, res) => {
    res.render('public/sop/ktp', {
        previousLink
    })
}

export const kia = (req, res) => {
    res.render('public/sop/kia', {
        previousLink
    })
}

export const skpwni = (req, res) => {
    res.render('public/sop/skp', {
        previousLink
    })
}

export const pindah = (req, res) => {
    res.render('public/sop/pindah', {
        previousLink
    })
}