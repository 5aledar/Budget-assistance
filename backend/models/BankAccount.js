const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bankName: { type: String, required: true , unique: true},
  accountNumber: { type: String, required: true },
  balance: { type: Number, default: 0 },
  transactions: [{
    type: { type: String, enum: ['deposit', 'withdrawal'] },
    amount: { type: Number, required: true },
    date: { type: Date, required: true }}]
});

module.exports = mongoose.model('BankAccount', bankAccountSchema);