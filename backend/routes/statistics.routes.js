const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.post('/daily/:bankAccountId', statisticsController.getDailyExpenses);
router.get('/weekly/:bankAccountId', statisticsController.getWeeklyExpenses);
router.get('/monthly/:bankAccountId',statisticsController.getMonthlyExpenses);
router.get('/yearly/:bankAccountId',statisticsController.getYearlyExpenses);

module.exports = router;