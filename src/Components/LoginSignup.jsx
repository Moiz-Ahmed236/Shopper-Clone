import React, { useState } from 'react'; 
import './Components.css';

const LoginSignup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState("");

  // Handle Input Change:
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form validation and Submission:
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Basic Validation:
    if (!formData.email || !formData.password || (currState === 'Sign Up' && !formData.name)) {
      setError("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Invalid email format');
      return;
    }

    setError("");

    // Get users from localStorage (if exist) or initialize as empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (currState === "Sign Up") {
      // Check if email is already registered
      const userExists = users.some(user => user.email === formData.email);
      if (userExists) {
        setError("Email is already registered");
        return;
      }

      // Add new user to users array
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));

      // Store the newly created user as loggedInUser
     localStorage.setItem('loggedInUser', JSON.stringify(formData));
      alert("Account Created Successfully");
      setShowLogin(false); 
    } 

    if (currState === "Login") {
      // Find the user with matching email and password
      const storedUser = users.find(user => user.email === formData.email && user.password === formData.password);
      
      if (storedUser) {
         // Store logged in user in localStorage
         localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        alert("Login Successful");
        setShowLogin(false); 
      } else {
        setError("Invalid email or password");
        return;
      }
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>{currState}</h1>
          <div className="loginsignup-fields">
            {currState === 'Sign Up' && (
              <input
                type='text'
                name="name"
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
              />
            )}
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              autoComplete={currState === "Sign Up" ? "new-password" : "current-password"}
              required 
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              autoComplete={currState === "Sign Up" ? "new-password" : "current-password"}
              required 
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">
            {currState === "Sign Up" ? "Create Account" : "Continue"}
          </button>

          {currState === 'Login' 
            ? <p className='loginsignup-login'>Create a New Account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
            : <p className='loginsignup-login'>Already have an Account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
          }

          <div className="loginsignup-agree">
            <input type='checkbox' id='agree' />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;

