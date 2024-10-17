const express = require('express');
const router = express.Router();
const sinodalsController = require('../controllers/sinodalsController');

router.get('/', sinodalsController.getAllSinodals); // Obtener todos los sinodales
router.post('/', sinodalsController.createSinodal); // Crear un nuevo sinodal

module.exports = router;
