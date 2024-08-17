import { Router } from "express";
import {
  getProducts,
  createProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/get-products", getProducts);
router.post("/create-product", createProduct);

export default router;
