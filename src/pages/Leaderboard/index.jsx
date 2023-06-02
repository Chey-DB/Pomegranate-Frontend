import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { UserLeaderboard } from "../../components";

const Leaderboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("https://pomegranate-backend.onrender.com/users")
                const data = response.data;

                const sortedUsers = data.users.sort((a, b) => b.pomodoroCountTotal - a.pomodoroCountTotal);
                const rankedUsers = sortedUsers.map((user, idx) => ({ ...user, rank: idx + 1 }));

                setUsers(rankedUsers);

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
