import React from 'react'
import { useParams } from 'react-router'

import { Menu, Tasks, Timer } from '../../components'

const Profile = () => {
    const { username } = useParams();
    return (
        <div>
            <Menu username={username} />
            <Tasks />
            <Timer />
        </div>
    )
}

export default Profile
