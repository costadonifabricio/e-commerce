import userModel from "../models/user.model.js";

class UserService {
  constructor() {}
  async findAll() {
    return await userModel.find();
  }

  async create(user) {
    return await userModel.create(user);
  }
}

export default new UserService();