
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  username: { type: String, required: true },
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  gender: {type: String, required: true},
  postal_code : {type: String, required: true},
  password: { type: String, required: true },
  created_at : {type: Date, default: new Date()},
  id: { type: Number},
});

export default mongoose.model("Customer", userSchema);