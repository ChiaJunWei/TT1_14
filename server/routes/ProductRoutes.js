import express from 'express';
import { getallproducts} from '../controller/ProductController.js';


const router = express.Router();

router.get('/getallproducts', getallproducts);


export default router;