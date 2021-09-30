
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: { type: Number},
  title: { type: String, required:  true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category_id: { type: Number, required: true},
  image: { type: String, required: true},
  qty: { type: Number, required: true},

/*   PRIMARY KEY (`id`), <--- how to add?
  KEY `category_id` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
*/

});

export default mongoose.model("Product", productSchema);