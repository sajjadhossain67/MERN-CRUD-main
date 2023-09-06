import React, { useState } from 'react';
import { registerUser } from '../api/authApi'; // Import the registerUser function from authApi

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        email,
        password,
        companyName,
        phone,
        location,
        link,
        description,
      }); // Call the registerUser function with all fields
      // Redirect to a success page or login page
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        {/* Input fields for email, password, and other company information */}
        {/* ... (input fields for companyName, phone, location, link, description) */}
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Register;
