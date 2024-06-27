const express = require('express')
const { addNewBank, getUserBanks } = require('../controllers/bankController')
const router = express.Router()
const protectRoute= require("../middleware/protectedRoute")

router.post("/:userId",protectRoute, addNewBank)
router.get('/:userId',protectRoute, getUserBanks)
module.exports = router