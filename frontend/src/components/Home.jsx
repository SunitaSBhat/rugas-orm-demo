import React from 'react'
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Home() {
     const navigate = useNavigate();
     const handleNavigate= async()=>{
    
      navigate("/CreateAccount");
      }
  
  return (
    <div>
      <nav className="navbar">
      <img src=""/>
      <ul className="nav-links">
        <h1>Logo</h1>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Contact</a></li>
        <li><button className="sign-in-btn" onClick={()=>navigate("/CreateAccount")}>Sign In / Sign Up</button></li>
      </ul>
    </nav>
         <section className="hero">
              <h1 id="welcome">Welcome to the Order Management app</h1>
              <p id="p">We will help to manage the order, onboarding customer, provide a platform to showcase the product</p>
              <button type="submit" id="button" onClick={handleNavigate}>Get Started</button>
          </section>
    </div>
  )
}
