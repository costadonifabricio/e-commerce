import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller.js";
import { userSchema } from "../models/validations/schemaValidations.js";
import { validator } from "../middleware/validator.js";

const router = Router();

router.get("/get-users", getUsers);
router.post("/create-user", userSchema, validator, createUser);

export default router;
