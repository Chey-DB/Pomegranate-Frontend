import React from 'react'
import './style.css'

const TimerAction = ({
  toggleForm, 
  onToggle,
  timeInput,
  handleChange,
  countDownStarted,
  startTimer,
  stopTimer,
  setUsedTimes,
  
}) => {
  return (
    <div className='ta-container'>
      <div className='btn-container'>
        {!countDownStarted?
        <button onClick={() => startTimer()}> Start </button> :
        <button onClick={() => stopTimer()}> Stop </button>}
        <button onClick={onToggle}> Set Time </button>
      </div>

      {toggleForm ?
      <div className='input-form'>
        <input type='number' placeholder='Enter time' 
        onChange={handleChange}
        defaultValue={timeInput}
        />
      </div> : null}

      <div className='used-containers'>
        <div className='used-timers'>
          <h2>Most used timers</h2>
          <ul>
            <li><button> 25 mins</button></li>
            <li><button> 5 mins</button></li>
            <li><button> 15 mins</button></li>
          </ul>
        </div>

        <div className='reset'>
          <button
          onClick= {() => setUsedTimes()}>Clear</button>
        </div>

      </div>
    </div>
  )
}

export default TimerAction