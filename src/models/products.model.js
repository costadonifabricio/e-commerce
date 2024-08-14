import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number,
}, {
    timestamps: true,
});

export default model('Products', ProductSchema);
