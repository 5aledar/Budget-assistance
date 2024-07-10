const express = require('express')
const { addNewBank, getUserBanks, addBalance, withdrawBalance, deleteBank } = require('../controllers/bankController')
const router = express.Router()
const protectRoute = require("../middleware/protectedRoute")

router.post("/:userId", addNewBank)
router.delete("/:bankId", deleteBank)
router.get('/:userId', getUserBanks)
router.post('/add-balance', addBalance)
router.get('withdraw-balance', withdrawBalance)

module.exports = router