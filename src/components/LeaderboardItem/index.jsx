import React from 'react'
import "./style.css"

const LeaderboardItem = ({ user }) => {
    return (
        <div className="user-score" role="leaderboard-items">
            <strong>#{user.id}</strong> {user.username}: <em>{user.pomodoroCount} PTS</em>
        </div>
    )
}

export default LeaderboardItem
