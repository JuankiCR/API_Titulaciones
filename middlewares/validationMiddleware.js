const { body, validationResult } = require('express-validator');

// Middleware de validación para crear estudiantes
exports.validateStudent = [
  body('account_number').isLength({ min: 8 }).withMessage('El número de cuenta debe tener al menos 8 caracteres'),
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('generation').isInt().withMessage('La generación debe ser un número entero'),
  body('career').notEmpty().withMessage('La carrera es obligatoria'),
  body('faculty').notEmpty().withMessage('La facultad es obligatoria'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
