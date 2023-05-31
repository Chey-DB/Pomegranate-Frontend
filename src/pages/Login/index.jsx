import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    // ill use this to send to Be
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <form id="signup-form" className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Login</h1>
        <p className="form__description">Welcome to Pomegranate</p>

        <div className="form__group">
          <input type="text" id="email" className="form__input" placeholder=" " autoComplete="off" value={email} onChange={handleEmailChange} />
          <label htmlFor="email" className="form__label"> Email</label>
        </div>

        <div className="form__group">
          <input type="password" id="password" className="form__input" placeholder=" " value={password} onChange={handlePasswordChange} />
          <label htmlFor="password" className="form__label"> Password </label>
        </div>

        <button type="submit" className="form__button">Login</button>
        <p className="reg">Don't have an account? <Link to="/signup"> Register here!</Link></p>
      </form>
    </>
  );
};

export default Login;
