import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { userSchema } from "../models/validations/schemaValidations.js";
import { validator } from "../middleware/validator.js";

const router = Router();

router.get("/get-users", getUsers);
router.get("/get-user/:id", getUser);
router.post("/create-user", userSchema, validator, createUser);
router.put("/update-user/:id", userSchema, validator, updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
