import React from 'react'
import LeaderboardItem from "../LeaderboardItem";
import "./style.css"
import LeaderboardSearch from '../LeaderboardSearch';

const UserLeaderboard = ({ users }) => {
    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <LeaderboardSearch />
            {
                users.map(user => <LeaderboardItem key={user.id} user={user} />)
            }
        </div>
    )
}

export default UserLeaderboard
