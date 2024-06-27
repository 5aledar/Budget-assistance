const express = require("express");
const router = express.Router();
const {
  createTransaction,
  getTransactions
} = require("../controllers/transaction");

router.post("/:bankAccountId" , createTransaction);


module.exports = router