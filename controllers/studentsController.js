const studentModel = require('../models/studentModel');

// Obtener todos los estudiantes
exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.getAll();
    res.json(students);
  } catch (err) {
    res.status(500).send('Error al obtener los estudiantes');
  }
};

// Crear un estudiante
exports.createStudent = async (req, res) => {
  const { account_number, name, generation, career, faculty } = req.body;
  try {
    const newStudent = await studentModel.create({
      account_number,
      name,
      generation,
      career,
      faculty,
    });
    res.json(newStudent);
  } catch (err) {
    res.status(500).send('Error al crear el estudiante');
  }
};
