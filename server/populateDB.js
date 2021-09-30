import { initUsers } from "./controller/UserController.js";
import { initProducts } from "./controller/ProductController.js";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const customers = require("./Dataset/customers.json") // use the require method
const products = require("./Dataset/products.json")

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

    for(var i = 0; i < products.length; i++){
        try {
            const{ data } = await initProducts(products[i]);
            console.log("DATA: " + JSON.stringify(data));
        } catch (error){
            console.log("ERROR: ", error);
        }
    }

    console.log("POPULATED USERS & PRODUCTS");
}
