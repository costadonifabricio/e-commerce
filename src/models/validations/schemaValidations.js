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

export const productSchema = [
  body("role")
    .exists()
    .notEmpty()
    .isString()
    .isIn(["admin", "seller", "client"])
    .withMessage("El rol es obligatorio"),
  body("name")
    .exists()
    .notEmpty()
    .isString()
    .withMessage("El nombre del producto es obligatorio"),
  body("price")
    .exists()
    .notEmpty()
    .isNumeric()
    .withMessage("El precio del producto es obligatorio"),
  body("category")
    .exists()
    .notEmpty()
    .isString()
    .withMessage("La categoría del producto es obligatoria"),
  body("description")
    .exists()
    .notEmpty()
    .isString()
    .withMessage("La descripción del producto es obligatoria"),
  body("stock")
    .exists()
    .notEmpty()
    .isNumeric()
    .withMessage("El stock del producto es obligatorio"),
];

export const operationSchema = [
  body("role")
    .exists()
    .notEmpty()
    .isString()
    .isIn(["admin", "seller", "client"])
    .withMessage("El rol es obligatorio"),
  body("quantity")
    .exists()
    .notEmpty()
    .isNumeric()
    .withMessage("La cantidad del producto es obligatoria"),
  body("totalprice")
    .exists()
    .notEmpty()
    .isNumeric()
    .withMessage("El precio total de la compra es obligatoria"),
];
