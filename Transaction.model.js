const mongoose = require("mongoose");


const transactionSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now},
    type:{
        type:String,
        enum:["ingreso","egreso"],
        require:true,
    },
    description:{
        type:String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
        index:true,
    }
});






module.exports = mongoose.model("Transaction",transactionSchema)