import operationModel from "../models/operation.model.js";

class OperationService {
  constructor() {}
  async findAll() {
    return await operationModel.find();
  }

  async findOne(id) {
    return await operationModel
      .findById(id)
      .populate("user")
      .populate("products");
  }

  async create(operation) {
    return await operationModel.create(operation);
  }

  async delete(id) {
    return await operationModel.findByIdAndDelete(id);
  }

  async update(id, operation) {
    return await operationModel.findByIdAndUpdate(id, operation, { new: true });
  }
}

export default new OperationService();
