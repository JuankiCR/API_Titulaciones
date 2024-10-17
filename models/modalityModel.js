const pool = require('../config/db');

// Obtener todas las modalidades de titulación
exports.getAll = async () => {
  const result = await pool.query('SELECT * FROM titling_modalities');
  return result.rows;
};

// Crear una modalidad de titulación
exports.create = async (modality) => {
  const { name, has_document, max_students } = modality;
  const result = await pool.query(
    'INSERT INTO titling_modalities (name, has_document, max_students) VALUES ($1, $2, $3) RETURNING *',
    [name, has_document, max_students]
  );
  return result.rows[0];
};
