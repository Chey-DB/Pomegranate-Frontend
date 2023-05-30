import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { UserLeaderboard } from "../../components";

const Leaderboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("http://localhost:3000/users")
                const data = response.data;
                setUsers(data);
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchUsers();
    }, [])

    return (
        <>
            <UserLeaderboard users={users} />
        </>
    )
}

export default Leaderboard
