import { Router } from "express";
import { getProducts, createProduct } from "../controllers/products.controller.js";

export const router = Router();

router.get('/get-products', getProducts)
router.post('/create-products', createProduct)


