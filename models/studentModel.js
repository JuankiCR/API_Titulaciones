const pool = require('../config/db');

// Obtener todos los estudiantes
exports.getAll = async () => {
  const result = await pool.query('SELECT * FROM students');
  return result.rows;
};

// Crear un estudiante
exports.create = async (student) => {
  const { account_number, name, generation, career, faculty } = student;
  const result = await pool.query(
    'INSERT INTO students (account_number, name, generation, career, faculty) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [account_number, name, generation, career, faculty]
  );
  return result.rows[0];
};
