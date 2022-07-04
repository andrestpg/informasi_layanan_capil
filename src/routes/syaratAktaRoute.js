import { Router } from 'express'
import {index} from '../controllers/syaratAktaController'

const router = Router();

router.get('/', index);

export default router;