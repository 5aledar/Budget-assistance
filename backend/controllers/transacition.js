const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
  const bankAccountId = req.body.bankAccountId;
  const { type, amount } = req.body;
  const transaction = new Transaction({ bankAccountId, type, amount });
  try {
    await transaction.save();
    res.json({ message: 'Transaction created successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error creating transaction' });
  }
};

exports.getTransactions = async (req, res) => {
  const bankAccountId = req.query.bankAccountId;
  const transactions = await Transaction.find({ bankAccountId });
  res.json(transactions);
};