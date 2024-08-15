import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
  
    navigate('/signin');
  };

  return (
    <div className="App">
      <div className="split left">
        <div className="centered">
        <img src='https://media.istockphoto.com/id/2163001649/photo/coat-of-arms-of-the-isle-of-man-on-a-government-building-three-legs-of-mann-triskelion-symbol.webp?b=1&s=612x612&w=0&k=20&c=nyUw0xNb4l9Qc2JQ8bK_F_b2ch_Tl-LKTRDNK-sZIAc='/>
        
          <h1 style={{fontSize:'50px',fontFamily:'fantasy'}}>Sign Up</h1>
          <form onSubmit={handleSubmit}>
          

            <label htmlFor="email" style={{fontSize:'20px',fontFamily:'fantasy'}}>Email: </label>
            <input type="email" id="email" name="email" required />
            <br />

            <label htmlFor="password"  style={{fontSize:'20px',fontFamily:'fantasy'}}>Password:</label>
            <input type="password" id="password" name="password" required />
            <br />

            <button type="submit">Sign Up</button>
          </form>

          <p  style={{fontSize:'20px',fontFamily:'fantasy'}}>
            If you have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>

      <div className="split right">
     
      </div>
    </div>
  );
}

export default SignUp;