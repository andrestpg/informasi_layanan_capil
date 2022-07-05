import { Router } from 'express'
import {
    index, 
    aktaKelahiran,
    aktaKematian,
    aktaPerceraian,
    aktaPerkawinan,
    aktaPengangkatanAnak,
    aktaPengakuanAnak,
    aktaPengesahanAnak,
    aktaPencatatanSipil
} from '../controllers/syaratAktaController'

const router = Router();

router.get('/', index);
router.get('/kelahiran', aktaKelahiran);
router.get('/kematian', aktaKematian);
router.get('/perceraian', aktaPerceraian);
router.get('/perkawinan', aktaPerkawinan);
router.get('/pengangkatan_anak', aktaPengangkatanAnak);
router.get('/pengakuan_anak', aktaPengakuanAnak);
router.get('/pengesahan_anak', aktaPengesahanAnak);
router.get('/catatan_sipil', aktaPencatatanSipil);

export default router;