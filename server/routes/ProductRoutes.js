import express from 'express';
import auth from '../middleware/auth.js';
import { getallproducts} from '../controller/ProductController.js';


const router = express.Router();

router.post('/getallproducts', getallproducts);


export default router;