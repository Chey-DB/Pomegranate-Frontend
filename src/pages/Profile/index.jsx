import React from 'react'
import { useParams } from 'react-router'
import "./styles.css"
// import { Menu } from '../../components'
import { Tasks, Timer } from '../../components'

const Profile = () => {
    const { username } = useParams();
    return (
        <div className='profile-container'>         <Timer />
            {/* <Menu username={username} /> */}
            <Tasks />

        </div>
    )
}

export default Profile
