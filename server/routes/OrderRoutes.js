import express from 'express';
import { createorder} from '../controller/OrderController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// router.post('/createorder',auth, createorder);

router.post('/createorder', createorder);

export default router;