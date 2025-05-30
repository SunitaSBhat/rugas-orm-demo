const mongoose = require("mongoose");
const {createHmac, randomBytes}=require('crypto');
const { createToken}= require("../services/auth");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    salt:{
        type:String,
       
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", function(next){
    const user =this;
    if(!user.isModified("password")) return;
    const salt=randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");
    this.salt= salt;
    this.password=hashedPassword;
    next();
});
userSchema.static("matchPassword", async function(email, password){
      const user=await this.findOne({email});
      if(!user)  throw new Error("user not found");
      const salt = user.salt;
      const hashedPassword=user.password;
      const userProvidedPassword=createHmac("sha256", salt).update(password).digest("hex");
      if (hashedPassword !== userProvidedPassword) throw new Error("Incorrect");
      const token = createToken(user);
      return token;
})
const user = mongoose.model("user", userSchema);

module.exports = user; 
