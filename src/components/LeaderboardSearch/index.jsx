import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LeaderboardItem, SearchForm } from "../../components"

const LeaderboardSearch = () => {
    const [inputText, setInputText] = useState("");
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/users/${inputText}`)
                const data = result.data;
                setUserInfo(data);
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
                userInfo.map(user => <LeaderboardItem key={user.id} user={user} role="leaderboard-item" />)
            }
        </>
    )
}

export default LeaderboardSearch
