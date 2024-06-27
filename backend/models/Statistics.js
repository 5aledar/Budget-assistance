const mongoose = require('mongoose')
const statisticsSchema = new mongoose.Schema({

    Value: {type:BigInt, required:true},
    Type: { type: String, enum: ['daily', 'weekly','monthly','yearly'], required: true },
    Date:{type:Date , required : true},
    bankAccountId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
})
module.exports = mongoose.model('Statistics', statisticsSchema);