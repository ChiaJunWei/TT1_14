import express from 'express';
import auth from '../middleware/auth.js';
import { createOrderItem, updateOrderItem, getOrderItems, deleteOrderItem} from '../controller/OrderItemController.js';


const router = express.Router();

// router.post('/createOrderItem',auth, createOrderItem);
// router.post('/updateOrderItem',auth, updateOrderItem);
// router.get('/getOrderItems',auth, getOrderItems);
// router.post('/deleteOrderItem',auth, deleteOrderItem);


router.post('/createOrderItem', createOrderItem);
router.post('/updateOrderItem', updateOrderItem);
router.get('/getOrderItems', getOrderItems);
router.post('/deleteOrderItem',deleteOrderItem);

export default router;