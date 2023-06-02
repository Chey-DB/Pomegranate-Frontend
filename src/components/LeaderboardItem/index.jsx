import React from 'react'
import "./style.css"

const LeaderboardItem = ({ user }) => {
    return (
        <div className="user-score" role="leaderboard-items">
            <strong>#{user.rank}</strong> {user.username} <em>{user.pomodoroCountTotal} PTS</em>
        </div>
    )
}

export default LeaderboardItem
