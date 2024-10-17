const pool = require('../config/db');

// Obtener todos los registros de titulación
exports.getAll = async () => {
  const result = await pool.query('SELECT * FROM titling_records');
  return result.rows;
};

// Crear un registro de titulación
exports.create = async (record) => {
  const { student_id, modality_id, sinodal_id, role_id, committee_id, is_in_process, titling_date } = record;
  const result = await pool.query(
    'INSERT INTO titling_records (student_id, modality_id, sinodal_id, role_id, committee_id, is_in_process, titling_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [student_id, modality_id, sinodal_id, role_id, committee_id, is_in_process, titling_date]
  );
  return result.rows[0];
};
