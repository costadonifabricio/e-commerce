import OperationService from "../services/operationService.js";

const validRoles = ["admin", "client", "seller"];

export const getOperations = async (req, res) => {
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
    const operations = await OperationService.findAll();
    res.status(200).json(operations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOperation = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    const { id } = req.params;
    const operation = await OperationService.findOne(id);
    if (!operation) {
      return res.status(404).json({ message: "Operación no encontrada" });
    }
    res.status(200).json(operation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOperation = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role === "client") {
      return res
        .status(403)
        .json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const operation = req.body;
    const newOperation = await OperationService.create(operation);
    res.status(201).json(newOperation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOperation = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role === "client") {
      return res
        .status(403)
        .json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const { id } = req.params;
    const operation = req.body;
    const updatedOperation = await OperationService.update(id, operation);
    res.status(200).json(updatedOperation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteOperation = async (req, res) => {
  try {
    const { role } = req.body;
    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: "Rol no permitido" });
    }
    if (role === "client") {
      return res
        .status(403)
        .json({ message: "No tienes los permisos para realizar esta acción" });
    }
    const { id } = req.params;
    await OperationService.delete(id);
    res.json({
      message: "Operación eliminada",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
