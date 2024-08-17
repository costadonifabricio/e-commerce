import ProductModel from "../models/products.model.js";

class ProductService {
  constructor() {}
  async findAll() {
    return await ProductModel.find();
  }

  async findOne(id) {
    return await ProductModel.findById(id);
  }

  async create(product) {
    return await ProductModel.create(product);
  }

  async delete(id) {
    return await ProductModel.findByIdAndDelete(id);
  }

  async update(id, product) {
    return await ProductModel.findByIdAndUpdate(id, product, { new: true });
  }
}

export default new ProductService();
