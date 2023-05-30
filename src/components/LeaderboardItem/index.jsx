import React from 'react'
import "./style.css"

const LeaderboardItem = ({ user }) => {
    return (
        <div className="user-score">
            <strong>#{user.id}</strong> {user.username}: <em>{user.pomodoroCountTotal} PTS</em>
        </div>
    )
}

export default LeaderboardItem
