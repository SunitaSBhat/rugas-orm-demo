const express= require("express");

const path= require("path");
const app=express();
const bodyParser = require("body-parser");
const dotenv= require("dotenv");
const cookieParser=require("cookie-parser");
const {checkloggedinUser}= require("./middleware/index");
const mongoose= require("mongoose");
const userRoute= require("./routes/userRoute.js");
const cors = require("cors");
const port=process.env.PORT;
mongoose.connect(process.env.MONGO_URL, {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
  mongoose.connection.on("error", err => {
  
    console.log("err", err)
  
  })
  mongoose.connection.on("connected", (err, res) => {
  
    console.log("mongoose is connected")
  
  })
  app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "https://rugas-orm-demo-w3zi.vercel.app", 
  credentials: true
}));
app.use(cookieParser());
app.use(checkloggedinUser("token"));
app.get("/api/check-auth", checkloggedinUser("token"), (req, res) => {
  console.log( req.body);
  if (req.user) {
    return res.status(200).json({ message: "User is authenticated" });
  } else {
    return res.status(401).json({ message: "Not authenticated" });
  }
});
app.get("/", (req, res) => {
 return res.json("server running");
})
app.use("/user", userRoute);
app.listen(port, ()=>{
    console.log(`server running ${port}`);
})