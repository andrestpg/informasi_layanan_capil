import { Router } from 'express'
import {index, pindahWN, skpwni} from '../controllers/jenisController'

const router = Router();

router.get('/', index);
router.get('/pindah_kewarganegaraan', pindahWN);
router.get('/skpwni', skpwni);

export default router;