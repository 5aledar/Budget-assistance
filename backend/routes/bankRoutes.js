const express = require('express')
const { addNewBank, getUserBanks, withdrawBalance } = require('../controllers/bankController')
const router = express.Router()
const protectRoute= require("../middleware/protectedRoute")

router.post("/:userId",protectRoute, addNewBank)
router.get('/:userId',protectRoute, getUserBanks)
router.post('/add-balance',protectRoute,addBalance)
router.get('withdraw-balance',protectRoute,withdrawBalance)

module.exports = router