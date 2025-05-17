const User = require('../models/User');

// ✅ Add Money
const addMoney = async (req, res) => {
  const { amount } = req.body;
  const userId = req.user.id;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Amount must be a positive number' });
  }

  try {
    const user = await User.findById(userId);
    user.balance += amount;
    await user.save();

    res.json({
      message: `Added ${amount} to your wallet.`,
      balance: user.balance
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ Withdraw Money
const withdrawMoney = async (req, res) => {
  const { amount } = req.body;
  const userId = req.user.id;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Amount must be a positive number' });
  }

  try {
    const user = await User.findById(userId);

    if (!user || user.balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    user.balance -= amount;
    await user.save();

    res.json({
      message: `Withdrew ${amount} from your wallet.`,
      balance: user.balance
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ Export both functions
module.exports = {
  addMoney,
  withdrawMoney,
};

