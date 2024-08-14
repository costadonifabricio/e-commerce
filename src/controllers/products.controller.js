import ProductService from "../services/productServices.js";

export const getProducts = async (req, res) => {
  try {
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

export const createProduct = async (req, res) => {
  try {
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
