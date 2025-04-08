import {React, useState} from 'react'
import "./createAccoun.css";
import Nav from "./nav";
export default function CustomerOnboarding() {
   const [customer, setCustomer]= useState({
       name:"",
       address:"",
       phoneNumber:"",
       email:""
       
      })
      const handleChange=(e)=>{
        setCustomer({...customer,   [e.target.name]: e.target.value})
    
      }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
  const res= await fetch("https://rugas-orm-demo-xi.vercel.app/user/createCustomer", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })
  const result= await res.json();
  console.log(result);
  alert(result);
      }
      catch(error){
        {console.log(error)}
        alert("There is an error occured");
      }
    }
  return (
    <>
    <Nav/>
    <div id="Create">
        <h1>Customer Onboarding !!</h1>
        <form style={{height:"301px"}}>
        Enter the Name<input type="text" name="name" onChange={handleChange}/>
        Enter the address<input type="text"name="address" onChange={handleChange}/>
        Enter the Phone Number<input type="Number" name="phoneNumber" onChange={handleChange}/>
        Enter the Email<input type="email" name="email" onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    </>
  )
}
