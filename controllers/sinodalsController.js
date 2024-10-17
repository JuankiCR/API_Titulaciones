const sinodalModel = require('../models/sinodalModel');

// Obtener todos los sinodales
exports.getAllSinodals = async (req, res) => {
  try {
    const sinodals = await sinodalModel.getAll();
    res.json(sinodals);
  } catch (err) {
    res.status(500).send('Error al obtener los sinodales');
  }
};

// Crear un sinodal
exports.createSinodal = async (req, res) => {
  const { worker_number, name, faculty, career } = req.body;
  try {
    const newSinodal = await sinodalModel.create({
      worker_number,
      name,
      faculty,
      career,
    });
    res.json(newSinodal);
  } catch (err) {
    res.status(500).send('Error al crear el sinodal');
  }
};
