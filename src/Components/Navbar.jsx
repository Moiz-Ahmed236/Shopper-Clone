import React, { useEffect, useState } from 'react';
import './Components.css';

const Navbar = ({setShowLogin }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if logged-in user data exists in localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser); 
    }
  }, []);

  const handleLogout = () => {
    // Remove logged-in user data from localStorage and reset state
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <div className="navbar">
      <a className="logo" href="start.bootstrap"><b>SHOPPER</b></a>
      
      {/* Check if user is logged in */}
      {user ? (
        <>
           <span className="user-name"><b>Welcome, {user.name}!</b></span>
          <button className="logout-btn" onClick={handleLogout}><b>Logout</b></button>
        </>
      ) : (
        <button className='login-btn' onClick={() => setShowLogin(true)}><b>Sign In</b></button>
      )}
    </div>
  );
};

export default Navbar;
