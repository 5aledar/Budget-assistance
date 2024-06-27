const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.get('/daily/:accountId', statisticsController.getDailyExpenses);
router.get('/weekly/:accountId', statisticsController.getWeeklyExpenses);
router.get('/monthly/:accountId',statisticsController.getMonthlyExpenses);
router.get('/yearly/:accountId',statisticsController.getYearlyExpenses);

module.exports = router;