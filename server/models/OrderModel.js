
import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  id: { type: Number},
  customer_id: {type: Number, required: true },
  status: {type: Number, required: true },
  created_at: {type: String},
});

export default mongoose.model("Order", orderSchema);