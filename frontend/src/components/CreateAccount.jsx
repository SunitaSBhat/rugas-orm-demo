import {React, useState} from 'react'
import "./createAccoun.css";
export default function CreateAccount() {
  const [userAccount, setUserAccount]= useState({
    name: "",
    email: "",
   password:""
  })
  const handleChange=(e)=>{
    setUserAccount({...userAccount,   [e.target.name]: e.target.value})

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
const res= await fetch("http://localhost:8000/user/userCreate", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userAccount)
})
const result= await res.json();
console.log(result);
alert(result);
    }
    catch(error){
      console.log(error);
      alert("There is an error occured");
    }
  }
  return (
    <div id="Create">
      <h1>Create Account here !!</h1>
        <form>
        Enter the Name<input type="text" name="name" onChange={handleChange}/>
        Enter the Email<input type="text" name="email" onChange={handleChange}/>
        Enter the password<input type="text" name="password" onChange={handleChange}/>
        <button type="submit"onClick={handleSubmit}>Submit</button>
        </form>
        
        <p>Already Have an account <a href="/Login" id="a">Login here</a></p>
    </div>
  )
}
