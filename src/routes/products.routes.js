import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import { productSchema } from "../models/validations/schemaValidations.js";
import { validator } from "../middleware/validator.js";

const router = Router();

router.get("/get-products", getProducts);
router.get("/get-product/:id", getProduct);
router.post("/create-product", productSchema, validator, createProduct);
router.put("/update-product/:id", productSchema, validator, updateProduct);
router.delete("/delete-product/:id", deleteProduct);

export default router;
