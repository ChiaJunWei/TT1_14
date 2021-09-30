import express from 'express';
import { createOrderItem, updateOrderItem, getOrderItems, deleteOrderItem} from '../controller/OrderItemController.js';


const router = express.Router();

router.post('/createOrderItem', createOrderItem);
router.post('/updateOrderItem', updateOrderItem);
router.get('/getOrderItems', getOrderItems);
router.post('/deleteOrderItem', deleteOrderItem);


export default router;