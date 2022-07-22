const previousLink = '/jenis/akta';

export const index = async (req, res) => {
    res.render('public/jenis/akta/index', {
        previousLink: '/jenis'
    });
}

export const aktaKelahiran = async (req, res) => {
    res.render('public/jenis/akta/kelahiran', {
        previousLink
    });
}

export const aktaKematian = async (req, res) => {
    res.render('public/jenis/akta/kematian', {
        previousLink
    });
}

export const aktaPerceraian = async (req, res) => {
    res.render('public/jenis/akta/perceraian', {
        previousLink
    });
}

export const aktaPerkawinan = async (req, res) => {
    res.render('public/jenis/akta/perkawinan', {
        previousLink
    });
}

export const aktaPengangkatanAnak = async (req, res) => {
    res.render('public/jenis/akta/pengangkatan_anak', {
        previousLink
    });
}

export const aktaPengakuanAnak = async (req, res) => {
    res.render('public/jenis/akta/pengakuan_anak', {
        previousLink
    });
}

export const aktaPengesahanAnak = async (req, res) => {
    res.render('public/jenis/akta/pengesahan_anak', {
        previousLink
    });
}

export const aktaPencatatanSipil = async (req, res) => {
    res.render('public/jenis/akta/pencatatan_sipil', {
        previousLink
    });
}