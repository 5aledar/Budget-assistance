const express = require('express')
const { addNewBank, getUserBanks } = require('../controllers/bankController')
const router = express.Router()


router.post("/:userId", addNewBank)
router.get('/:userId', getUserBanks)
module.exports = router