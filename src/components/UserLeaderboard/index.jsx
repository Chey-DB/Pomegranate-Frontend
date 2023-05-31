import React from 'react'
import LeaderboardSearch from '../LeaderboardSearch';
import LeaderboardItem from "../LeaderboardItem";
import "./style.css"

const UserLeaderboard = ({ users }) => {
    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <LeaderboardSearch users={users} />
        </div>
    )
}

export default UserLeaderboard
