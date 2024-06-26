const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  bankAccountId: { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccount', required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['deposit', 'withdraw'], required: true },
  amount: { type: Number, required: true }
});

module.exports = mongoose.model('Transaction', transactionSchema);