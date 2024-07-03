const express = require('express')
const { addNewBank, getUserBanks, addBalance ,  withdrawBalance } = require('../controllers/bankController')
const router = express.Router()
const protectRoute= require("../middleware/protectedRoute")

router.post("/:userId", addNewBank)
router.get('/:userId', getUserBanks)
router.post('/add-balance',addBalance)
router.get('withdraw-balance',withdrawBalance)

module.exports = router