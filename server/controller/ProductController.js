

import ProductModel from "../models/ProductModel.js";
import dotenv from 'dotenv'
import mongoose from "mongoose";


dotenv.config();



export const getallproducts = async (req,res) => {
    // const{ email, password, firstName, lastName } = req.body;

    try {

        const products = await ProductModel.findAll;
        res.status(200).json(products);

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}

export const createproduct = async (req,res) => {
     const{ title, price, description, category_id, image, qty } = req.body;
    try {

        // await UserModel.create({email, password: hPassword, name : `${firstName} ${lastName}`});
        // res.status(200).json(products);

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}




