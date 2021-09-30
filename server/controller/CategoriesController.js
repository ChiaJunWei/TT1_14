import CategoriesModel from "../models/CategoriesModel.js";

export const createCategory = async (req,res) => {
    const{ name, description, image } = req.body;
    
    try {
        const catExists = await CategoriesModel.findOne({ name });
        if(catExists) {
            console.log("category already exists");
            return res.status(200).send( {message: `Category ${name} already exists.`});
        }

        const result = await CategoriesModel.create({
            name: name,
            description : description,
            image : image,
        });
        res.status(201).json({ result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
    }
}

export const initCategories = async (req,res) => {
    console.log("REQ:", req);
    const{ name, description, image, id } = req;
    
    try {
        const catExists = await CategoriesModel.findOne({ name });
        if(catExists) {
            console.log("category already exists");
            return false;
        }

        const result = await CategoriesModel.create({
            name: name,
            description : description,
            image : image,
            id : id,
        });
        return true;
    } catch (error) {
        console.log(error);
    }
}