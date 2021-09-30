

import ProductModel from "../models/ProductModel.js";
import dotenv from 'dotenv'
import mongoose from "mongoose";


dotenv.config();



export const getallproducts = async (req,res) => {

    try {

        const products = await ProductModel.findAll;
        console.log('success'); 
        return res.status(200).json({products});

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}


export const initProducts = async (req,res) => {
    
    const{ title, price, description, category_id, image, qty } = req;
    
    try {
        const oldProduct = await ProductModel.findOne({ title });
        if(oldProduct) {
            console.log("product already exists");
            return res.status(200).send( {message: `${title} already exists.`});
        }
        const result = await ProductModel.create({
            title : title, 
            price: price, 
            description: description,
            category_id: category_id,
            image: image,
            qty: qty
        });

        res.status(201).json(result);

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}

