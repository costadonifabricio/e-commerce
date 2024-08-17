import { body } from "express-validator";

export const userSchema = [
  body("user")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 3 })
    .withMessage("El nombre de usuario debe tener 3 caracteres como mínimo"),
  body("email")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage("El Email es obligatorio")
    .notEmpty(),
  body("password")
    .exists()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  body("role")
    .exists()
    .notEmpty()
    .isString()
    .withMessage("El rol es obligatorio"),
];
