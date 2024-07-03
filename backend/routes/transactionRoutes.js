const express = require("express");
const router = express.Router();
const {createTransaction,getTransactions,getUserTransactions} = require("../controllers/transaction");

router.post("/:bankAccountId", createTransaction);
router.get("/:bankAccountId", getTransactions);
router.get("/user", getUserTransactions);

module.exports = router;