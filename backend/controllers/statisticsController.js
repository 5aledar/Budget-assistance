const Statistics = require("../models/Statistics");
const Transaction = require("../models/Transaction");
const Bank = require('../models/BankAccount')
// Get daily expenses for a specific account
exports.getDailyExpenses = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  const account = await Transaction.find({ bankAccountId: bankAccountId });

  const dailyTransactions = account.filter(transaction => transaction.date.toISOString().split('T')[0] === today && transaction.type === "withdraw");

  const totalDailyExpenses = dailyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'withdraw' ? transaction.amount : 0), 0);
  console.log(totalDailyExpenses);

  res.json({ total: totalDailyExpenses, count: dailyTransactions.length });
};
exports.getDailyDeposit = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  const account = await Transaction.find({ bankAccountId: bankAccountId });

  const dailyTransactions = account.filter(transaction => transaction.date.toISOString().split('T')[0] === today && transaction.type === "deposit");

  const totalDailyExpenses = dailyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'deposit' ? transaction.amount : 0), 0);
  console.log(totalDailyExpenses);

  res.json({ total: totalDailyExpenses, count: dailyTransactions.length });
};
exports.getWeeklyExpenses = async (req, res) => {
  const userId = req.params.userId;
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  const firstDayOfWeek = getFirstDayOfWeek(date);
  const account = await Transaction.find({ userId: userId });
  const weeklyTransactions = account.filter(transaction => {
    const transactionDate = transaction.date.toISOString().split('T')[0];
    return transactionDate >= firstDayOfWeek && transactionDate <= today && transaction.type === "withdraw";
  });



  const totalWeeklyExpenses = weeklyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'withdraw' ? transaction.amount : 0), 0);


  res.json({ total: totalWeeklyExpenses });
};

exports.getTotalBalance = async (req, res) => {
  try {

    const userId = req.params.userId
    const banks = await Bank.find({ userId: userId })
    console.log(banks);
    const bankBalance = await banks.map(bank => { return bank.balance })
    // console.log(bankBalance);
    // const totalBalance = await bankBalance.reduce(
    //   (accumulator, currentValue) => {accumulator + currentValue},
    //   0
    // );
    let totalBalance = 0
    bankBalance.map(tot => {
      totalBalance = tot + totalBalance
    })
    // console.log(totalBalance);
    res.json(totalBalance)
  } catch (error) {
    console.log(error.message);
  }
}

exports.getWeeklyDeposit = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  const firstDayOfWeek = getFirstDayOfWeek(date);
  const account = await Transaction.find({ bankAccountId: bankAccountId });

  const weeklyTransactions = account.filter(transaction => {
    const transactionDate = transaction.date.toISOString().split('T')[0];
    return transactionDate >= firstDayOfWeek && transactionDate <= today && transaction.type === "deposit";
  });



  const totalWeeklyExpenses = weeklyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'deposit' ? transaction.amount : 0), 0);
  console.log(totalWeeklyExpenses);

  res.json({ total: totalWeeklyExpenses, count: weeklyTransactions.length });
};

function getFirstDayOfWeek(date) {
  const dayOfWeek = date.getDay();
  const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const firstDayOfWeek = new Date(date.setDate(diff));
  return firstDayOfWeek.toISOString().split('T')[0];
}
function getLastWeekFirstDay(date) {
  const firstDayOfWeek = getFirstDayOfWeek(date);
  const lastWeekFirstDay = new Date(new Date(firstDayOfWeek).getTime() - 7 * 24 * 60 * 60 * 1000);
  return lastWeekFirstDay.toISOString().split('T')[0];
}

exports.getPreviosWeekExpenses = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();

  const firstDayOfWeek = getFirstDayOfWeek(date);
  const lastWeekFirstDay = getLastWeekFirstDay(date);
  const account = await Transaction.find({ bankAccountId: bankAccountId });

  const weeklyTransactions = account.filter(transaction => {
    const transactionDate = transaction.date.toISOString().split('T')[0];
    return transactionDate >= lastWeekFirstDay && transactionDate < firstDayOfWeek && transaction.type === "withdraw";
  });

  const totalWeeklyExpenses = weeklyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'withdraw' ? transaction.amount : 0), 0);
  console.log(totalWeeklyExpenses);

  res.json({ total: totalWeeklyExpenses, count: weeklyTransactions.length });
};

// Get monthly expenses for a specific account
exports.getMonthlyExpenses = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const firstDayOfMonth = getStartOfMonth(date)
  const lastDayOfMonth = getEndOfMonth(date)
  const account = await Transaction.find({ bankAccountId: bankAccountId });

  const monthlyTransactions = account.filter(transaction => {
    const transactionDate = transaction.date;
    return transactionDate >= firstDayOfMonth && transactionDate <= lastDayOfMonth && transaction.type === "withdraw";
  });

  const totalMonthlyExpenses = monthlyTransactions.reduce((acc, transaction) => acc + (transaction.type === 'withdraw' ? transaction.amount : 0), 0);
  console.log(totalMonthlyExpenses);

  res.json({ total: totalMonthlyExpenses, count: monthlyTransactions.length });
};
// Get yearly expenses for a specific account
exports.getYearlyExpenses = async (req, res) => {
  const bankAccountId = req.params.bankAccountId;
  const date = new Date();
  const startOfYear = getStartOfYear(date);
  const endOfYear = getEndOfYear(date);
  const account = await Statistics.findById(bankAccountId);
  const yearlyTransactions = account.transactions.filter(
    (transaction) =>
      transaction.date >= startOfYear && transaction.date < endOfYear
  );
  const totalYearlyExpenses = yearlyTransactions.reduce(
    (acc, transaction) =>
      acc + (transaction.type === "withdrawal" ? transaction.amount : 0),
    0
  );
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
  const diff = date.getDate() + ((7 - day) % 7);
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
