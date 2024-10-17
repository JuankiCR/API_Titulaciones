const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router.get('/', studentsController.getAllStudents); // Obtener todos los estudiantes
router.post('/', studentsController.createStudent); // Crear un estudiante

module.exports = router;
