import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LeaderboardItem, SearchForm } from "../../components"

const LeaderboardSearch = ({ users }) => {
    const [inputText, setInputText] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/users/${inputText}`)
                const data = result.data;

                const updatedUser = { ...data.user };
                const existingRankedUser = users.find(user => user.id === updatedUser.id);

                existingRankedUser ? updatedUser.rank = existingRankedUser.rank : "";

                setUserInfo(updatedUser);
            } catch (err) {
                console.log(err.message)
            }
        }

        inputText ? getUser() : setUserInfo(null);

    }, [inputText, users])

    return (
        <>
            <SearchForm setInputText={setInputText} />

            {
                userInfo ? (
                    <LeaderboardItem user={userInfo} />
                ) : (
                    users.map(user => <LeaderboardItem key={user.id} user={user} role="leaderboard-items" />)
                )
            }
        </>
    )
}

export default LeaderboardSearch


