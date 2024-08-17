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
}

export default new OperationService();
