import React from 'react'
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Home() {
     const navigate = useNavigate();
     const handleNavigate= async()=>{
      try{
      await axios.get('https://rugas-orm-demo-xi.vercel.app/api/check-auth', {withCredentials: true} );
      navigate("orderList");
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
  return (
    <div>
         <section className="hero">
              <h1 id="welcome">Welcome to the Order Management app</h1>
              <p id="p">We will help to manage the order, onboarding customer, provide a platform to showcase the product</p>
              <button type="submit" id="button" onClick={handleNavigate}>Get Started</button>
          </section>
    </div>
  )
}
