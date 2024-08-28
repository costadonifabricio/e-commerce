import userService from "../services/userService.js";

const validRoles = ["admin", "client", "seller"];

export const getUsers = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role !== "admin") {
      return res
        .status(403)
        .json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const users = await userService.findAll();
    if (!users.length) {
      return res.status(404).json({
        status: "Not Found",
        message: "No se han encontrado usuarios",
      });
    }
    return res.json(users);
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findOne(id);
    if (!user) {
      return res.status(404).json({
        status: "Not Found",
        message: "Usuario no encontrado",
      });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    await userService.create(req.body);
    return res.status(201).json({
      message: "Usuario creado",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role !== "admin") {
      return res
        .status(403)
        .json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const { id } = req.params;
    await userService.update(id, req.body);
    return res.json({
      message: "Usuario actualizado",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role !== "admin") {
      return res
        .status(403)
        .json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const { id } = req.params;
    await userService.delete(id);
    return res.json({
      message: "Usuario eliminado",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Error interno del servidor",
    });
  }
};
