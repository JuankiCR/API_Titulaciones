const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/recordsController');

router.get('/', recordsController.getAllRecords);  // Obtener todos los registros de titulación
router.post('/', recordsController.createRecord);  // Crear un nuevo registro de titulación

module.exports = router;
