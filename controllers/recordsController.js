const recordModel = require('../models/recordModel');

// Obtener todos los registros de titulación
exports.getAllRecords = async (req, res) => {
  try {
    const records = await recordModel.getAll();
    res.json(records);
  } catch (err) {
    res.status(500).send('Error al obtener los registros de titulación');
  }
};

// Crear un registro de titulación
exports.createRecord = async (req, res) => {
  const { student_id, modality_id, sinodal_id, role_id, committee_id, is_in_process, titling_date } = req.body;
  try {
    const newRecord = await recordModel.create({
      student_id,
      modality_id,
      sinodal_id,
      role_id,
      committee_id,
      is_in_process,
      titling_date,
    });
    res.json(newRecord);
  } catch (err) {
    res.status(500).send('Error al crear el registro de titulación');
  }
};
