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
            const findBank = await Bank.findOne({ bankName:bankName ,userId:userId})
         console.log(findBank);
            if (findBank) {
                res.status(400).json("bank already exist")
                return
            }
            bank.save()
            res.status(200).json("new bank added")

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
        const banks = await Bank.find({ userId: userId })
        // console.log(banks);
        res.status(200).json({banks})
    } catch (error) {
        console.log("internal server error");
        res.status(500).json({ error: error.message })
    }
}


module.exports = { addNewBank, getUserBanks }
