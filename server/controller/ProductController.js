

import ProductModel from "../models/ProductModel.js";
import dotenv from 'dotenv'
import CategoriesModel from "../models/CategoriesModel.js";


dotenv.config();



export const getallproducts = async (req,res) => {

    try {

        const products = await ProductModel.find();
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
            return res.status(400).send( {message: `${title} already exists.`});
        }
        const result = await ProductModel.create({
            title : title, 
            price: price, 
            description: description,
            category_id: category_id,
            image: image,
            qty: qty
        });

        const category = await CategoriesModel.findOne({id : category_id})
        if(category) {
            console.log("FOUND CATEGORY");
            category.products.push(result);
            const updated = await CategoriesModel.findOneAndUpdate({id: category_id}, category, {new : true});
        }



        res.status(201).json(result);

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}

