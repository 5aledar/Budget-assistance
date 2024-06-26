const Bank = require('../models/BankAccount')

const addNewBank = async (req, res) => {
    try {
        const userId = req.params.userId
        const bankName = req.body.bankName
        const accountNumber = req.body.accountNumber
        const balance = req.body.balance
        if (userId && bankName && accountNumber) {
            const bank = new Bank({
                userId: userId,
                bankName: bankName,
                accountNumber: accountNumber,
                balance: balance
            })
            bank.save()
            res.status(200).json(bank)
        } else {
            res.status(400).json("data missing")
        }
    } catch (error) {
        console.log('error in bank controller');
        res.status(500).json({ error: error.message })
    }
}

const getUserBanks = async (req, res) => {
    try {
        const userId = req.params.userId
        const banks = db.Bank.find({ userId: userId })
        res.status(200).json(banks)
    } catch (error) {
        console.log("internal server error");
        res.status(500).json({ error: error.message })
    }
}


module.exports = { addNewBank, getUserBanks }