const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const { registerUser, loginUser, getProfile } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
