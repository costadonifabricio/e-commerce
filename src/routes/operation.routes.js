import { Router } from "express";
import { getOperation, getOperations, createOperation } from "../controllers/operation.controller.js";

const router = Router();

router.get("/get-operations", getOperations);
router.get("/get-operation/:id", getOperation);
router.post("/create-operation", createOperation);

export default router;