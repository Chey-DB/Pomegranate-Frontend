import React, { useState } from 'react'

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
                role="search"
                onSubmit={handleSubmit}
            >
                <label htmlFor="users">Users</label>
                <input
                    type="text"
                    id="users"
                    onChange={handleInput}
                    value={user}
                    placeholder="Find user"
                    required
                />

                <input type="submit" value="Search" />
            </form>
        </>
    )
}

export default SearchForm
