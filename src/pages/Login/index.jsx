import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleusernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    // ill use this to send to Be
    event.preventDefault();

    const response = await fetch("https://pomegranate-backend.onrender.com/users/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const data = await response.json();
    if (data.error) {
      alert(data.error, "error")
    } else {
      localStorage.setItem("isLoggedIn", "true");
      navigate(`/profile/${username}`);
    }

    console.log('username:', username);
    localStorage.setItem('username', username)
    console.log('Password:', password);
  };

  return (
    <>
      <div className="login-form-container">
        <form id="login-form" className="form" onSubmit={handleSubmit}>
          <h1 className="form__title">Log in</h1>
          <p className="form__description">Welcome to Pomegranate</p>

          <div className="form__group">
            <input type="text" id="username" className="form__input" placeholder=" " autoComplete="off" value={username} onChange={handleusernameChange} required />
            <label htmlFor="username" className="form__label"> Username</label>
          </div>

          <div className="form__group">
            <input type="password" id="password" className="form__input" placeholder=" " value={password} onChange={handlePasswordChange} required />
            <label htmlFor="password" className="form__label"> Password </label>
          </div>

          <button type="submit" className="form__button">Login</button>
          <p className="reg">Don't have an account? <Link to="/signup"> Register here!</Link></p>
        </form>
      </div>
    </>
  );
};

export default Login;
