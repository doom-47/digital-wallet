const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const { addMoney, withdrawMoney } = require('../controllers/transactionController');

router.post('/add-money', authMiddleware, addMoney);
router.post('/withdraw', authMiddleware, withdrawMoney);

module.exports = router;
