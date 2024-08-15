
import React, { useState } from 'react';
import './signin.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('userEmail', email); 
    localStorage.setItem('userPassword', password); 
    navigate('/'); // jab ye signin  ho jai ga to navigate karay ga
  };

  return (
    <div className="App">
     <div className="split left" >
     <div className="container">
        <div className="box">
        <div className="centered">
            <br/>
            <img src='https://media.istockphoto.com/id/2163001649/photo/coat-of-arms-of-the-isle-of-man-on-a-government-building-three-legs-of-mann-triskelion-symbol.webp?b=1&s=612x612&w=0&k=20&c=nyUw0xNb4l9Qc2JQ8bK_F_b2ch_Tl-LKTRDNK-sZIAc='/>
          <h1 style={{ fontSize: '50px', fontFamily: 'fantasy' }}>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ fontSize: '20px', fontFamily: 'fantasy' }}>Email: </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <br />
            
            <label htmlFor="password" style={{ fontSize: '20px', fontFamily: 'fantasy' }}>Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <br />

            <button type="submit">Sign In</button>
          </form>

          <p style={{ fontSize: '20px', fontFamily: 'fantasy' }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
      </div></div>
      <div className="split right">
        {/* Optional content for the right side */}
      </div>
    </div>
  );
}

export default App;