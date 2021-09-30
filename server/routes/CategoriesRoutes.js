import express from 'express';
import auth from '../middleware/auth.js';
import { signin, signup,} from '../controller/UserController.js';
import { createCategory, getCategories } from '../controller/CategoriesController.js';


const router = express.Router();

router.post('/categories', createCategory);
router.get('/', getCategories);

export default router;