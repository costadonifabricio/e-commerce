import { Router } from "express";
import {
  getOperation,
  getOperations,
  createOperation,
} from "../controllers/operation.controller.js";
import { validator } from "../middleware/validator.js";
import { operationSchema } from "../models/validations/schemaValidations.js";

const router = Router();

router.get("/get-operations", getOperations);
router.get("/get-operation/:id", getOperation);
router.post("/create-operation", operationSchema, validator, createOperation);

export default router;
