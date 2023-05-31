import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LeaderboardItem, SearchForm } from "../../components"

const LeaderboardSearch = ({ users }) => {
    const [inputText, setInputText] = useState("");
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/users/${inputText}`)
                const data = result.data;
                setUserInfo(data.user);
            } catch (err) {
                console.log(err.message)
            }
        }

        getUser()

    }, [inputText])

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


