import { Router } from 'express'
import {index} from '../controllers/syaratController'

const router = Router();

router.get('/', index);

export default router;