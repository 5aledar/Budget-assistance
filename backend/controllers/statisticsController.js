const Statistics = require('../models/Statistics');

// Get daily expenses for a specific account
exports.getDailyExpenses = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  const account = await Statistics.findById(bankAccountId);
  const dailyTransactions = account.transactions.filter(transaction => transaction.date.toISOString().split('T')[0] === today);
  const totalDailyExpenses = dailyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'withdrawal' ? transaction.amount : 0), 0);
  res.json({ total: totalDailyExpenses, count: dailyTransactions.length });
};

// Get weekly expenses for a specific account
exports.getWeeklyExpenses = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const startOfWeek = getStartOfWeek(date);
  const endOfWeek = getEndOfWeek(date);
  const account = await Statistics.findById(bankAccountId);
  const weeklyTransactions = account.transactions.filter(transaction => transaction.date >= startOfWeek && transaction.date < endOfWeek);
  const totalWeeklyExpenses = weeklyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'withdrawal' ? transaction.amount : 0), 0);
  res.json({ total: totalWeeklyExpenses, count: weeklyTransactions.length });
};

// Get monthly expenses for a specific account
exports.getMonthlyExpenses = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const startOfMonth = getStartOfMonth(date);
  const endOfMonth = getEndOfMonth(date);
  const account = await Statistics.findById(bankAccountId);
  const monthlyTransactions = account.transactions.filter(transaction => transaction.date >= startOfMonth && transaction.date < endOfMonth);
  const totalMonthlyExpenses = monthlyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'withdrawal' ? transaction.amount : 0), 0);
  res.json({ total: totalMonthlyExpenses, count: monthlyTransactions.length });
};

// Get yearly expenses for a specific account
exports.getYearlyExpenses = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const startOfYear = getStartOfYear(date);
  const endOfYear = getEndOfYear(date);
  const account = await Statistics.findById(bankAccountId);
  const yearlyTransactions = account.transactions.filter(transaction => transaction.date >= startOfYear && transaction.date < endOfYear);
  const totalYearlyExpenses = yearlyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'withdrawal' ? transaction.amount : 0), 0);
  res.json({ total: totalYearlyExpenses, count: yearlyTransactions.length });
};

// Helper functions
function getStartOfWeek(date) {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}

function getEndOfWeek(date) {
  const day = date.getDay();
  const diff = date.getDate() + (7 - day) % 7;
  return new Date(date.setDate(diff));
}

function getStartOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getEndOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getStartOfYear(date) {
  return new Date(date.getFullYear(), 0, 1);
}

function getEndOfYear(date) {
  return new Date(date.getFullYear(), 11, 31);
}