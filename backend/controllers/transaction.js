const Transaction = require('../models/Transaction');
const Bank = require('../models/BankAccount')
exports.createTransaction = async (req, res) => {
  const userId = req.params.userId
  const date = new Date()

  let bankAccountId = req.body.bankId;
  const type = req.body.type
  const amount = req.body.amount
  const transaction = new Transaction({ userId, bankAccountId, date, type, amount });
  if (type == 'deposit') {
    try {
      const bankAccount = await Bank.findOne({ _id: bankAccountId });
      console.log(Number(bankAccount.balance));
      console.log(amount);
      const newBalance = Number(bankAccount.balance) + Number(amount)
      const update = { balance: Number(newBalance) }  // update operation
      console.log(update);
      // console.log(bankAccountId);
      const updated = await Bank.findOneAndUpdate({ _id: bankAccountId }, update)

      // console.log(updated.balance);
      await transaction.save();
      res.json({ message: 'Transaction created successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }else if (type == 'withdraw') {
    try {
      const bankAccount = await Bank.findOne({ _id: bankAccountId });
      console.log(Number(bankAccount.balance));
      console.log(amount);
      const newBalance = Number(bankAccount.balance) - Number(amount)
      const update = { balance: Number(newBalance) }  // update operation
      console.log(update);
      // console.log(bankAccountId);
      const updated = await Bank.findOneAndUpdate({ _id: bankAccountId }, update)

      // console.log(updated.balance);
      await transaction.save();
      res.json({ message: 'Transaction created successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

exports.getTransactions = async (req, res) => {
  const bankAccountId = req.query.bankAccountId;
  const transactions = await Transaction.find({ bankAccountId });
  res.json(transactions);
};

exports.getUserTransactions = async (req, res) => {
  const userId = req.query.userId;
  const transactions = await Transaction.find({ userId });
  const deposits = transactions.filter((transaction) => transaction.type === 'deposit');
  const withdraw = transactions.filter((transaction) => transaction.type === 'withdraw');
  console.log(deposits);
  res.json({ deposits, withdraw });
};