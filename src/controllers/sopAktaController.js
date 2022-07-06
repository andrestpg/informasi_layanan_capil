const previousLink = '/sop/akta';

export const index = async (req, res) => {
    res.render('public/sop/akta/index', {
        previousLink: '/sop'
    });
}

export const aktaKelahiran = async (req, res) => {
    res.render('public/sop/akta/kelahiran', {
        previousLink
    });
}

export const aktaKematian = async (req, res) => {
    res.render('public/sop/akta/kematian', {
        previousLink
    });
}

export const aktaPerceraian = async (req, res) => {
    res.render('public/sop/akta/perceraian', {
        previousLink
    });
}

export const aktaPerkawinan = async (req, res) => {
    res.render('public/sop/akta/perkawinan', {
        previousLink
    });
}

export const aktaPengangkatanAnak = async (req, res) => {
    res.render('public/sop/akta/pengangkatan_anak', {
        previousLink
    });
}

export const aktaPengakuanAnak = async (req, res) => {
    res.render('public/sop/akta/pengakuan_anak', {
        previousLink
    });
}

export const aktaPengesahanAnak = async (req, res) => {
    res.render('public/sop/akta/pengesahan_anak', {
        previousLink
    });
}

export const aktaPencatatanSipil = async (req, res) => {
    res.render('public/sop/akta/pencatatan_sipil', {
        previousLink
    });
}