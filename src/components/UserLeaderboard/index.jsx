import React from 'react'
import LeaderboardItem from "../LeaderboardItem";

const UserLeaderboard = ({ users }) => {
    return (
        <>
            {
                users.map(user => <LeaderboardItem key={user.id} user={user} />)
            }
        </>
    )
}

export default UserLeaderboard
