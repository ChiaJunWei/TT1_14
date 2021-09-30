
import OrderItemModel from "../models/OrderItemModel.js";
import dotenv from 'dotenv'


dotenv.config();


export const createOrderItem = async (req,res) => {
    const{ product_id, order_id, product_qty, price} = req.body;
    try {
        const total_price = price * product_qty; 
        const result = await OrderItemModel.create({
            product_id : product_id,
            order_id: order_id,
            product_qty: product_qty,
            total_price: total_price
        });
        
        res.status(201).json({result});

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}

export const updateOrderItem = async (req,res) => {
    const{ product_id, order_id, product_qty, price } = req.body;

    try {
        const result = await OrderItemModel.update(
            { "product_id" : product_id,
                "order_id": order_id},
            { $set: { "product_qty" : product_qty,
                        "total_price": price * product_qty} }
        );
        
        res.status(201).json({result});

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}

export const getOrderItems = async (req,res) => { //retrieves ALL order items
    const{ product_id, order_id, product_qty, price } = req.body;

    try {
        const result = await OrderItemModel.find();
        console.log('success'); 

        return res.status(200).json({result});


    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}

export const deleteOrderItem = async (req,res) => {
    const{ product_id, order_id} = req.body;

    try {
        const result = await OrderItemModel.deleteOne(
            { "product_id" : product_id,
                "order_id": order_id}
        );

        res.status(201).json({result});

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}



