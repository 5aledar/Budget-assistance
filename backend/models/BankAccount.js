const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  balance: { type: Number, default: 0 },

});

module.exports = mongoose.model('BankAccount', bankAccountSchema);