const previousLink = '/syarat';

export const index = async (req, res) => {
    res.render('public/syarat/akta/index', {
        previousLink
    });
}

export const aktaKelahiran = async (req, res) => {
    res.render('public/syarat/akta/kelahiran', {
        previousLink
    });
}

export const aktaKematian = async (req, res) => {
    res.render('public/syarat/akta/kematian', {
        previousLink
    });
}

export const aktaPerceraian = async (req, res) => {
    res.render('public/syarat/akta/perceraian', {
        previousLink
    });
}

export const aktaPerkawinan = async (req, res) => {
    res.render('public/syarat/akta/perkawinan', {
        previousLink
    });
}

export const aktaPengangkatanAnak = async (req, res) => {
    res.render('public/syarat/akta/pengangkatan_anak', {
        previousLink
    });
}

export const aktaPengakuanAnak = async (req, res) => {
    res.render('public/syarat/akta/pengakuan_anak', {
        previousLink
    });
}

export const aktaPengesahanAnak = async (req, res) => {
    res.render('public/syarat/akta/pengesahan_anak', {
        previousLink
    });
}

export const aktaPencatatanSipil = async (req, res) => {
    res.render('public/syarat/akta/pecatatan_sipil', {
        previousLink
    });
}