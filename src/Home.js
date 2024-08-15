
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.title}>Welcome to My Webpage</h1>
      
      <div style={styles.buttonContainer}>
        <button onClick={handleSignInClick} style={styles.button}>
          Sign In
        </button>
        <button onClick={handleSignupClick} style={styles.button}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    backgroundColor: 'tomato', 
    textAlign: 'center',
  },
  title: {
    fontSize: '70px',
    fontFamily: 'fantasy',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', 
  },
  button: {
    fontSize: '20px',
    fontFamily: 'fantasy',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px', 
    cursor: 'pointer', 
    transition: 'background-color 0.3s',
  },
};


styles.buttonHover = {
  backgroundColor: '#0056b3', 
};

export default Home;