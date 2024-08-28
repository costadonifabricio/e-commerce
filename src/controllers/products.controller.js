import ProductService from "../services/productServices.js";

const validRoles = ["admin", "client", "seller"];

export const getProducts = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role === "client") {
      return res.status(403).json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const products = await ProductService.findAll();
    if (!products.length) {
      return res.status(404).json({
        status: "Not Found",
        message: "No se han encontrado productos",
      });
    }
    return res.json(products);
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    const { id } = req.params;
    const product = await ProductService.findOne(id);
    if (!product) {
      return res.status(404).json({
        status: "Not Found",
        message: "Producto no encontrado",
      });
    }
    return res.json(product);
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role === "client") {
      return res.status(403).json({ message: "No tienes los permisos para realizar esta acción" });
    }
    await ProductService.create(req.body);
    return res.status(201).json({
      message: "Producto creado",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role === "client") {
      return res.status(403).json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const { id } = req.params;
    await ProductService.update(id, req.body);
    return res.json({
      message: "Producto actualizado",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role === "client") {
      return res.status(403).json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const { id } = req.params;
    await ProductService.delete(id);
    return res.json({
      message: "Producto eliminado",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};