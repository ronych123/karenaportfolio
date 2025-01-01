// LoginPage.js
import React, { useState } from 'react';
import './../style/login.css';

function LoginPage() {
  const [password, setPassword] = useState('');
  const correctPassword = 'karenak@123987'; // Set your password here

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      localStorage.setItem('authenticated', 'true'); // Store authentication status
      window.location.reload(); // Reload to show the content page
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="login-container">
      <h2>Enter Password</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;