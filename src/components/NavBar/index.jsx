import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./style.css"

const NavBar = () => {
    const activeStyle = {
        textDecoration: "underline",
        color: "#FFF6C3"
    }

    const navA = ({ isActive }) => (isActive ? activeStyle : undefined)

    return (
        <>
            <header>
                <nav>
                    <h2>
                        <NavLink style={navA} to="/"><img src={logo} alt="logo" /></NavLink>
                        Pomegranate
                    </h2>
                    <ul className="nav-links">
                        <li><NavLink style={navA} to="/">Home</NavLink></li>
                        <li><NavLink style={navA} to="/leaderboard">Leaderboard</NavLink></li>
                        <li><NavLink style={navA} to="/profile">Profile</NavLink></li>
                        <li><NavLink style={navA} to="/login">Login</NavLink></li>
                        <li><NavLink style={navA} to="/signup">Signup</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default NavBar
