import React from 'react'
import { useParams } from 'react-router'
import "./styles.css"


import { Tasks, Timer, Sounds } from '../../components'

// import { Menu } from '../../components'


const Profile = () => {
    const { username } = useParams();
    return (
        <div className='profile-container'>         <Timer />
            {/* <Menu username={username} /> */}
            <Tasks />

            <div className='sound-container'>
                <Sounds />
            </div>
              
        </div>
    )
}

export default Profile
