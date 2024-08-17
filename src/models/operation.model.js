import { model, Schema } from "mongoose";

const OperationSchema = new Schema(
  {
    type: { type: String, enum: ["purchase", "sale", "cart"] },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: { type: Schema.Types.ObjectId, ref: "Products" },
    quantity: Number,
    totalprice: Number,
  },
  {
    timestamps: true,
  }
);

export default model("Operation", OperationSchema);
