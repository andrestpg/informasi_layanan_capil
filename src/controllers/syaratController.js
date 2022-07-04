export const index = async (req, res) => {
    res.render('public/syarat/index', {
        previousLink: '/'
    });
}