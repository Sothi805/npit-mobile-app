const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/authController');
const { validateRegister, validateLogin, handleValidationErrors } = require('../middleware/validate');

router.post('/register', validateRegister, handleValidationErrors, registerUser);
router.post('/login', validateLogin, handleValidationErrors, authUser);

module.exports = router;