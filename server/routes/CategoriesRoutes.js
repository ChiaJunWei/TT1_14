import express from 'express';
import auth from '../middleware/auth.js';
import { signin, signup,} from '../controller/UserController.js';


const router = express.Router();

router.post('/categories', createCategory);

export default router;