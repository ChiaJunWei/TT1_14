
import OrderModel from "../models/OrderModel.js";
import dotenv from 'dotenv'


dotenv.config();


export const createorder = async (req,res) => {
    const{ customer_id, status, created_at } = req.body;
    try {
        const result = await OrderModel.create({
            customer_id : customer_id,
            status: status,
            created_at : created_at ? created_at : new Date(),
        });
        
        res.status(201).json({result});

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}
