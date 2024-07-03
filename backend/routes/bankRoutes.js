const express = require('express')
const { addNewBank, getUserBanks } = require('../controllers/bankController')
const router = express.Router()
const protectRoute= require("../middleware/protectedRoute")

router.post("/:userId", addNewBank)
router.get('/:userId', getUserBanks)
module.exports = router