const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date()
  
  const type = req.body.type
  const amount = req.body.amount
  const transaction = new Transaction({ bankAccountId,date,  type, amount });
  try {
    await transaction.save();
    console.log("dd");
    res.json({ message: 'Transaction created successfully'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTransactions = async (req, res) => {
  const bankAccountId = req.query.bankAccountId;
  const transactions = await Transaction.find({ bankAccountId });
  res.json(transactions);
};