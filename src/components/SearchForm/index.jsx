import React, { useState } from 'react'
import "./style.css"

const SearchForm = ({ setInputText }) => {
    const [user, setUser] = useState("")

    function handleInput(e) {
        setUser(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setInputText(user)
        setUser("")
    }

    return (
        <>
            <form
                className="search-form"
                role="search"
                onSubmit={handleSubmit}
                aria-label="leaderboard-search-form"
            >
                <label htmlFor="users"></label>
                <input
                    className="search-input"
                    role="search-input"
                    type="text"
                    id="users"
                    onChange={handleInput}
                    value={user}
                    placeholder="Find user"
                    required
                />
                <input className="form-button" type="submit" value="Search" aria-label="search-btn" />
                <input className="form-button" type="button" value="Reset" aria-label="reset-btn" onClick={() => { window.location.reload() }} />
            </form>
        </>
    )
}

export default SearchForm
