const pool = require('../config/db');

// Obtener todos los sinodales
exports.getAll = async () => {
  const result = await pool.query('SELECT * FROM sinodals');
  return result.rows;
};

// Crear un sinodal
exports.create = async (sinodal) => {
  const { worker_number, name, faculty, career } = sinodal;
  const result = await pool.query(
    'INSERT INTO sinodals (worker_number, name, faculty, career) VALUES ($1, $2, $3, $4) RETURNING *',
    [worker_number, name, faculty, career]
  );
  return result.rows[0];
};
