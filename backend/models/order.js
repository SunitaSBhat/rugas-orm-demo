const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   customer:{
    type:String,
    required:true
   },
   product:{
    type:Object,
    required:true
   }
    
});


const order = mongoose.model("product", productSchema);

module.exports =order; 