import { initUsers } from "./controller/UserController.js";

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
import { initCategories } from "./controller/CategoriesController.js";
const require = createRequire(import.meta.url); // construct the require method
const customers = require("./Dataset/customers.json") // use the require method
const categories = require("./Dataset/categories.json")


export default async function populateDB() {
    for(var i = 0; i < customers.length; i++) {
        console.log(customers[i]);
        try {
            const{ data } = await initUsers(customers[i]);
            console.log("DATA: " + JSON.stringify(data));
        } catch (error) {
            console.log("ERROR: ", error);
        }
        
    }
    console.log("POPULATED USERS");
    for(var i = 0; i < categories.length; i++) {
        console.log(categories[i]);
        try {
            const{ data } = await initCategories(categories[i]);
            console.log("DATA: " + JSON.stringify(data));
        } catch (error) {
            console.log("ERROR: ", error);
        }
        
    }
    console.log("POPULATED CATEGORIES");
    
}
