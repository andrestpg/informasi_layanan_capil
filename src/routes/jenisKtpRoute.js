import { Router } from 'express'
import {
    index, 
    baru,
    hilang,
    perubahan,
} from '../controllers/jenisKtpController'

const router = Router();

router.get('/', index);
router.get('/baru', baru);
router.get('/hilang', hilang);
router.get('/perubahan', perubahan);

export default router;