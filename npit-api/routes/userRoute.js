const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { getUserProfile } = require('../controllers/userController');

router.route('/profile').get(protect, getUserProfile);

module.exports = router;