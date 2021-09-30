
import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema({
  product_id: { type: Number, required: true },
  order_id: {type: Number, required: true },
  product_qty: {type: Number, required: true},
  total_price: {type: Number, required: true},
});

export default mongoose.model("OrderItem", orderItemSchema);