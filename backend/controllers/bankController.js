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
            console.log(userId);
            const findBank = await Bank.findOne({ bankName: bankName, userId: userId })
           
            if (findBank) {
                return res.status(400).json("bank already exist")
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

        res.status(200).json(banks)
    } catch (error) {
        console.log("internal server error");
        res.status(500).json({ error: error.message })
    }
};



const addBalance = async(req , res) => {
    try{
        const userId = req.params;
        const amount = req.body;
        const bankAccount = await Bank.findOne({userId});
        if(!bankAccount){
    return res.status(404).json('Account not found') ;
}
    
    bankAccount.balance += amount;
    await bankAccount.save();
    res.status(200).json({message:'Money added successfully'});
    
} catch(error){
    console.error('error adding money:',error);
    res.status(500).json({error:'Internal server error'});
}
};



const withdrawBalance = async(req , res) => {
    try{
        const userId = req.params;
        const amount = req.body;
        const bankAccount = await Bank.findOne({userId});
        if(!bankAccount){
    return res.status(404).json('Account not found') ;
}
if(bankAccount.balance < amount){
    return res.status(400).json({ error: 'Insufficient balance' });
}
bankAccount.balance -= amount;
    await bankAccount.save();
    res.status(200).json({ message: 'Money withdrawn successfully' });
  } catch (error) {
    console.error('Error withdrawing money:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addNewBank, getUserBanks, addBalance,withdrawBalance }
