const express = require('express');
const router = express.Router();
const modalitiesController = require('../controllers/modalitiesController');

router.get('/', modalitiesController.getAllModalities); // Obtener todas las modalidades
router.post('/', modalitiesController.createModality);  // Crear una nueva modalidad

module.exports = router;
