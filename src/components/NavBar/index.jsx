import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default NavBar