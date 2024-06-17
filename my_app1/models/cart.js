import mongoose,{ Schema } from "mongoose";

const cartSchema = new Schema(
    {
        title: String,
    },
    {
        timestamps:true,
    }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;