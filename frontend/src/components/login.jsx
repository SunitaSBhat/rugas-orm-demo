import {React, useState} from 'react'
import "./createAccoun.css";
export default function Login() {
  const [userAccountVerify, setUserAccountVerify]= useState({
      email: "",
     password:""
    })
    const handleChange=(e)=>{
      setUserAccountVerify({...userAccountVerify,   [e.target.name]: e.target.value})
  
    }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
const res= await fetch("https://rugas-orm-demo-xi.vercel.app/user/userLogin", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(userAccountVerify),
  credentials: "include"
})
const result= await res.json();

alert(result);
    }
    catch(error){
      {console.log(error)}
      alert("There is an error occured");
    }
  }
  return (
    <div id="Create">
        <h1>Login here !!</h1>
        <form style={{height:"170px"}}>
        Enter the Email<input type="text" name="email" onChange={handleChange}/>
        Enter the password<input type="text" name="password" onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
