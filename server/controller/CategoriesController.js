import CategoriesModel from "../models/CategoriesModel.js";

export const initCategories = async (req,res) => {
    console.log("REQ:", req);
    const{ name, description, image } = req;
    
    try {
        const oldUser = await CategoriesModel.findOne({ name });
        if(oldUser) {
            console.log("category already exists");
            return false;
        }

        const result = await CategoriesModel.create({
            name: name,
            description : description,
            image : image,
        });
        return true;
    } catch (error) {
        console.log(error);
    }
}