import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./style.css"

function SignUp() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/users/register", {
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
                navigate("/login")
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="signup-form-container">
                <form id="signup-form" className="form" onSubmit={handleSubmit}>
                    <h1 className="form__title">Sign up</h1>
                    <p className="form__description">Welcome to Pomegranate</p>

                    <div className="form__group">
                        <input type="text" id="username" className="form__input" placeholder=" " autoComplete="off" value={username}
                            onChange={(e) => { setUsername(e.target.value) }} required />
                        <label htmlFor="username" className="form__label"> Username</label>
                    </div>

                    <div className="form__group">
                        <input type="password" id="password" className="form__input" placeholder=" " value={password}
                            onChange={(e) => { setPassword(e.target.value) }} required />
                        <label htmlFor="password" className="form__label"> Password </label>
                    </div>

                    <button type="submit" className="form__button">Sign Up</button>
                    <p className="reg">Already registered? <Link to="/login"> Log in here!</Link></p>
                </form>
            </div>
        </>
    )
}


export default SignUp
