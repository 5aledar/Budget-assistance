const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.post('/daily/withdraw/:bankAccountId', statisticsController.getDailyExpenses);
router.post('/daily/deposit/:bankAccountId', statisticsController.getDailyDeposit);
router.post('/weekly/withdraw/:bankAccountId', statisticsController.getWeeklyExpenses);
router.get('/monthly/:bankAccountId',statisticsController.getMonthlyExpenses);
router.get('/yearly/:bankAccountId',statisticsController.getYearlyExpenses);

module.exports = router;