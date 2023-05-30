import React from 'react'
import "./style.css"

const LeaderboardItem = ({ user }) => {
    return (
        <div className="user-score" role="leaderboard-item">
            <strong>#{user.id}</strong> {user.username}: <em>{user.pomodoroCountTotal} PTS</em>
        </div>
    )
}

export default LeaderboardItem
