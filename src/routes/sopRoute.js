import { Router } from 'express'
import {index, kk, ktp, skpwni, kia, pindah} from '../controllers/sopController'

const router = Router();

router.get('/', index);
router.get('/kk', kk);
router.get('/ktp', ktp);
router.get('/kia', kia);
router.get('/skpwni', skpwni);
router.get('/pindah', pindah);

export default router;