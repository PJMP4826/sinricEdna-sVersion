const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/verify', authController.verifyPassword);

// Ruta para cambiar la contraseña
router.post('/change-password', authController.changePassword);


module.exports = router;
