import { Router } from 'express';
import {
  getTime
} from '../controller/index.js';

const router = Router();

router.get('/getTime', getTime);

export default router;