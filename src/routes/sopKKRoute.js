import { Router } from 'express'
import {index, baru} from '../controllers/sopKKController'

const router = Router();

router.get('/', index);
router.get('/baru', baru);

export default router;