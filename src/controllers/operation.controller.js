import OperationService from "../services/operationService.js";

export const getOperations = async (req, res) => {
  try {
    const operations = await OperationService.findAll();
    res.status(200).json(operations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOperation = async (req, res) => {
  try {
    const { id } = req.params;
    const operation = await OperationService.findOne(id);
    if (!operation)
      return res.status(404).json({ message: "Operación no encontrada" });
    res.status(200).json(operation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOperation = async (req, res) => {
  try {
    const operation = req.body;
    const newOperation = await OperationService.create(operation);
    res.status(201).json(newOperation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
