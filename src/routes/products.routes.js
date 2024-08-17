import { Router } from "express";
import {
  getProducts,
  createProduct,
} from "../controllers/products.controller.js";
import { productSchema } from "../models/validations/schemaValidations.js";
import { validator } from "../middleware/validator.js";

const router = Router();

router.get("/get-products", getProducts);
router.post("/create-product", productSchema, validator, createProduct);

export default router;
