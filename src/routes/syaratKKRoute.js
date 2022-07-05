import { Router } from 'express'
import {
    index, 
    baru,
    kedatangan,
    pindahDalamKota,
    hilang,
    perubahanPeristiwaPenting,
    perubahanData,
} from '../controllers/syaratKKController'

const router = Router();

router.get('/', index);
router.get('/baru', baru);
router.get('/kedatangan', kedatangan);
router.get('/pindah_dalam_kota', pindahDalamKota);
router.get('/hilang', hilang);
router.get('/perubahan_peristiwa_penting', perubahanPeristiwaPenting);
router.get('/perubahan_data', perubahanData);

export default router;