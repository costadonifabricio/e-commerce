import userModel from "../models/user.model.js";

class UserService {
  constructor() {}
  async findAll() {
    return await userModel.find();
  }

  async findOne(id) {
    return await userModel.findById(id);
  }

  async create(user) {
    return await userModel.create(user);
  }

  async delete(id) {
    return await userModel.findByIdAndDelete(id);
  }

  async update(id, user) {
    return await userModel.findByIdAndUpdate(id, user, { new: true });
  }
}

export default new UserService();
