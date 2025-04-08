import React from 'react';
import './nav.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Nav= () => {
   const navigate = useNavigate();
   const handleNavigate= async()=>{
    try{
    await axios.get('https://rugas-orm-demo-xi.vercel.app/api/check-auth', { withCredentials: true });
    navigate("/CustomerOnboardingr");
    }
    catch(error){
      console.log(error.response);
      if(error.response && error.response.status===401){
        alert('Please create an account or sign in first!');
       
      } else {
        console.error('Auth check error:', error);
        alert('Something went wrong. Please try again later.');
      }
    }
  };
  const handleLogout= async()=>{
    try{
      const response=await axios.get('https://rugas-orm-demo-xi.vercel.app/user/logout', { withCredentials: true });
      alert(response);
      }
      catch(error){
        console.log(error.response);
      alert("Something went wrong")
      }
  } 
  return (
    <>
    <nav className="navbar">
      <img src=""/>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="" onClick={handleNavigate}>Create Customer</a></li>
        <li><a href="#">Support</a></li>
        <li><button className="sign-in-btn" onClick={()=>navigate("/CreateAccount")}>Sign In / Sign Up</button></li>
        <li><button className="sign-in-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
   
    
 </>
 );
};

export default Nav;

