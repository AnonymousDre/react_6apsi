import React, { useState } from 'react';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  return (
    <div>
      {isLoggedIn ? (
        <LandingPage onLogout={handleLogout} /> // Show LandingPage if logged in
      ) : (
        <LoginPage onLogin={handleLoginSuccess} /> // Show LoginPage if not logged in
      )}
    </div>
  );
}

export default App;
