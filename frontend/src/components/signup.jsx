import React from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cnf, setCnf] = useState("")
    const avatar = "https://res.cloudinary.com/dc7sfg6nc/image/upload/v1717238606/avatars/epvfnirwrpctoqix08wz.jpg"


  async function handleSignup(event) {
    event.preventDefault(); // Prevent default form submission
   
    if(cnf !== password)
    {
      toast.error("Passwords not matched")
      setPassword("");
      setCnf("");
    }
    else
    {
      setPassword(cnf)
    // Prepare data for the API request
    const signupData = {
      name,
      email,
      password,
      avatar
    };
   // console.log(signupData);
    try {
      const response = await axios.post('http://localhost:4000/api/v1/register', signupData); 
  
      // Handle successful signup
      toast.success('Signup successful!', response.data);
      console.log('Signup successful!', response.data);
      //alert("SignUp successful!")
      
  
    } catch (error) {
      // Handle errors gracefully
      toast.error(error.response.data.message);
      console.log('Signup failed:', error.response.data.message);
      //alert(`SignUp Failed: ${error.response.data.message}`);
     
    }
  }
  }

  return (
    <div className="main">
       <div className="card">
      <div className="header">
        <h1>SIGNUP</h1>
      </div>
      <div className="forms">
        <form onSubmit={handleSignup}>
          <label htmlFor="name">Enter Full Name:</label>
          <input type="text" name="name" id="name" required placeholder='full name' value={name} onChange={(e)=>{setName(e.target.value)}}/><br />
          <label htmlFor="mail">Enter E-mail Id:</label>
          <input type="email" name="mail" id="mail" required placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br />
          <label htmlFor="password">Enter Password:</label>
          <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br />
          <label htmlFor="cpassword">Confirm Password:</label>
          <input type="password" name="cpassword" id="cpassword" placeholder='confirm password' value={cnf} onChange={(e)=>{setCnf(e.target.value)}} /><br />
          <div className="btn">
            <button type="submit" className='registerBtn'>SignUp</button>
            <Link to="/login" className='link'>Log In</Link>
          </div>
        </form>
      </div>
     </div>
    </div>

  )
}

export default Signup