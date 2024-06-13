import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import {toast} from "react-hot-toast"
import axios from 'axios';

function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  async function handleSignin(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare data for the API request
    const signinData = {
      email,
      password
    };
   // console.log(signinData);
    try {
      const response = await axios.post('http://localhost:4000/api/v1/login', signinData); 
  
      // Handle successful signin
     toast.success('Signin successful!', response.data);
     //console.log('Signin successful!', response.data);
      //alert("SignUp successful!")
      
  
    } catch (error) {
      // Handle errors gracefully
      toast.error(error.response.data.message);
     console.log('Signin failed:', error.response.data.message);
      //alert(`SignUp Failed: ${error.response.data.message}`);
     
    }
  }
  return (
    <div className="main">
    <div className="card">
   <div className="header">
     <h1>LOGIN</h1>
   </div>
   <div className="forms">
     <form onSubmit={handleSignin}>
       <label htmlFor="mail">Enter E-mail Id:</label>
       <input type="email" name="mail" id="mail" required placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br />
       <label htmlFor="password">Enter Password:</label>
       <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br />
       <div className="btn">
         <button type="submit" className='loginBtn'>LogIn</button>
         <Link to = "/" className='link'>Sign Up</Link>
       </div>
     </form>
   </div>
  </div>
 </div>
  )

  }

  

export default Login