import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    user: String,
    email: String,
    password: String,
    role: {
      enum: ["admin", "client", "seller"],
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
