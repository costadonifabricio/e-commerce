import ProductModel from "../models/products.model.js";

class ProductService {
  constructor() {}
  async findAll() {
    return await ProductModel.find();
  }

  async create(product) {
    return await ProductModel.create(product);
  }
}

export default new ProductService()
