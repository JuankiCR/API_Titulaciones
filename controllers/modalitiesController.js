const modalityModel = require('../models/modalityModel');

// Obtener todas las modalidades
exports.getAllModalities = async (req, res) => {
  try {
    const modalities = await modalityModel.getAll();
    res.json(modalities);
  } catch (err) {
    res.status(500).send('Error al obtener las modalidades de titulación');
  }
};

// Crear una modalidad
exports.createModality = async (req, res) => {
  const { name, has_document, max_students } = req.body;
  try {
    const newModality = await modalityModel.create({
      name,
      has_document,
      max_students,
    });
    res.json(newModality);
  } catch (err) {
    res.status(500).send('Error al crear la modalidad');
  }
};
