
import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
  name: { type: String, required:  true },
  description: { type: String },
  Image: { type: String},
  products : {type: [], default: []},
  id : {type: Number, required : true},
});

export default mongoose.model("Category", categoriesSchema);