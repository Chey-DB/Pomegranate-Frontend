import React from 'react'
import './style.css'
import dancing from '../../assets/dancing.gif'

const Home = () => {
    return (
        <div>
          <a>
            <img src={dancing} alt='dancing pomegranate' className='hero' />
          </a>
          <div className='instructions-container'>
            <h2>How to use the Pomodoro Timer?</h2>
            <p>
                Add tasks to work on today <br/>
                Set estimate pomodoros (1 = 25min of work) for each tasks <br/>
                Select a task to work on <br/>
                Start timer and focus on the task for 25 minutes <br/>
                Take a break for 5 minutes when the alarm ring <br/>
                Iterate 3-5 until you finish the tasks <br/>
            </p>
          </div>
        </div>
    )
}

export default Home
