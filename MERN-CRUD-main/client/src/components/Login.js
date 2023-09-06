import React, { useState } from 'react';
import { loginUser } from '../api/authApi'; // Import the loginUser function from authApi

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(email, password); // Call the loginUser function
      localStorage.setItem('token', token); // Store the token in local storage
      // Redirect to a dashboard or protected page
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Input fields for email and password */}
        {/* ... (input fields for email and password) */}
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
