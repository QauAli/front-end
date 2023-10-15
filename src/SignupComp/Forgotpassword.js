import React, { useState } from 'react';
//import './ForgotPassword.css'; // Adjust the CSS import as needed
import {Link}  from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Function to submit the email/username for identification
  const handleSubmitIdentification = async () => {
    try {
      // Check if the email/username is valid and generate/send OTP
      const response = await fetch('your_generate_otp_api_url_here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Display an input field for the OTP
        setErrors({});
      } else {
        const errorData = await response.json();
        setErrors(errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to submit OTP and reset password
  const handleSubmitReset = async () => {
    try {
      // Validate OTP against the generated OTP
      const response = await fetch('your_verify_otp_api_url_here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        // If OTP is correct, update the password and set resetSuccess to true
        setResetSuccess(true);
        setErrors({});
      } else {
        const errorData = await response.json();
        setErrors(errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {!resetSuccess ? (
        <>
          <h2>Forgot Password</h2>
          <p>Enter your email/username to reset your password:</p>
          <input
            type="text"
            placeholder="Email/Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmitIdentification}>Submit</button>
          {errors.email && <p className="error">{errors.email}</p>}
        </>
      ) : (
        <>
          <h2>Enter OTP</h2>
          <p>Check your email for the OTP and enter it below:</p>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleSubmitReset}>Submit</button>
          {errors.otp && <p className="error">{errors.otp}</p>}
        </>
      )}
      {resetSuccess && (
        <>
          <h2>Password Reset Successful</h2>
          <p>Your password has been reset.</p>
          {/* Provide a link to the login page */}
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default ForgotPassword;
