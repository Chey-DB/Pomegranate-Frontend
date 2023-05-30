import React from 'react'

const LeaderboardItem = ({ user }) => {
    return (
        <div>
            #{user.id} {user.username} {user.pomodoroCountTotal} PTS
        </div>
    )
}

export default LeaderboardItem
