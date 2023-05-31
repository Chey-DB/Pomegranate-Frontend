import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Signup() {
    const history = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/home", { state: { id: email } })
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <>
        <div>
      <form id="signup-form" className="form" action="POST">
        <h1 className="form__title">Register</h1>
        <p className="form__description">Welcome to Pomegranate</p>

        <div className="form__group">
        <input type="name" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
        </div>
          

        <div className="form__group">
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
        </div>

        <div className="form__group">
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                
        </div>

        <button type="submit" className="form__button" onClick={submit}>Submit</button>

        <br />
        <br />
            <p>OR</p>
            <br />

            <Link to="/login">Login Page</Link>
      </form>

      </div>
    </>


        
    )
}


export default Signup
