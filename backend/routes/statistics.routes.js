const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.get('/totalBalance/:userId', statisticsController.getTotalBalance);
router.post('/daily/withdraw/:bankAccountId', statisticsController.getDailyExpenses);
router.post('/daily/deposit/:bankAccountId', statisticsController.getDailyDeposit);
router.get('/weekly/withdraw/:userId', statisticsController.getWeeklyExpenses);
router.post('/weekly/deposit/:bankAccountId', statisticsController.getWeeklyExpenses);
router.get('/lastWeek/withdraw/:userId', statisticsController.getWeeklyExpenses);
router.get('/monthly/:bankAccountId',statisticsController.getMonthlyExpenses);
router.get('/lastMonth/:bankAccountId',statisticsController.getMonthlyExpenses);
router.get('/yearly/:bankAccountId',statisticsController.getYearlyExpenses);

module.exports = router;