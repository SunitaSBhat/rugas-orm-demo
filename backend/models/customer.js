const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    
});


const customer = mongoose.model("customer", customerSchema);

module.exports = customer; 