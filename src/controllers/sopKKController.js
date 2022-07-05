const previousLink = '/sop/kk';

export const index = (req, res) => {
    res.render('public/sop/kk/index', {
        previousLink: '/sop'
    })
}

export const baru = (req, res) => {
    res.render('public/sop/kk/baru', {
        previousLink
    })
}
