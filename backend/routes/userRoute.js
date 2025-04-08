const express= require("express");
const router=express.Router();
const user=require("../models/user.js");
 const customer=require("../models/customer.js");
 const order=require("../models/order.js");
router.get("/userCreate", (req, res)=>{
    return res.json("Create Account page");
})
router.post("/userCreate", async(req, res)=>{
    const {name, email, password}= req.body;
    try{
    const users= await user.create({
      name:name,
      email:email,
      password:password
    })
}
catch(error){
    return res.json("Something went wrong");
    console.log(error);
}
return res.status(200).json("user created");
})
router.get("/userLogin", (req, res)=>{
    return res.status(200).json("login page");
})
router.post("/userLogin", async(req, res)=>{
    const {email, password}= req.body;
    try{
        const token=await user.matchPassword(email, password);
        console.log(token);
        res.cookie("token", token, {
            expires:new Date(Date.now()+900000000),
            httpOnly: true,
  secure: true,
  sameSite: "None",
   path: "/"
          })
          const result={
            token
          }
          return res.json({token}, "sucess login")
    }                    
    catch(error){
        console.log(error);
        return res.json("email or password is wrong");
       
        }
    
})
router.get("/logout", (req, res)=>{
    res.clearCookie("token").res.json("Sucessfully logged Out");
})
router.get("/createCustomer", (req, res)=>{
    return res.json("customer create page");
})
router.post("/createCustomer", async(req, res)=>{
    const {name, address, phoneNumber, email}= req.body;
    try{
    const users= await customer.create({
      name:name,
      address:address,
      phoneNumber:phoneNumber,
      email:email
    })
}
catch(error){
    return res.json("You entered something wrong");
    console.log(error);
}
return res.json("Customer created");
})
router.get("/getCustomer", async(req, res)=>{
    try{
    const customers= await customer.find();
    console.log(customers);
    return res.json(customers);
    }
    catch(error){
        return res.json("something went wrong");
        console.log(error);
    }
})
router.post("/order", async(req, res)=>{
    const {customer, product}= req.body;
    try{
    const users= await order.create({
      customer:customer,
      product:product
    })
}
catch(error){
    return res.json("You entered somethig wrong");
    console.log(error);
}
    return res.json("Order created");
})
router.get("/allOrders", async(req, res)=>{
    try{
    const orders= await order.find();
    return res.json(orders);
    }
    catch(error){
        console.log(error);
        return res.json(error);
    }

})
  module.exports=router;

 