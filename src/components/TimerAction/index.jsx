import React, {useEffect, useState} from 'react'
import './style.css'

const TimerAction = ({
  toggleForm, 
  onToggle,
  timeInput,
  handleChange,
  countDownStarted,
  startTimer,
  stopTimer,
  pomodoroTime,
  shortBreakTime,
  longBreakTime,
}) => {

  return (
    <div className='ta-container'>
      <div className='btn-container'>
        {!countDownStarted?
        <button onClick={startTimer}> Start </button> :
        <button onClick={stopTimer}> Stop </button>}
        <button onClick={onToggle}> Set Time </button>
        
      </div>

      {toggleForm ?
      <div className='input-form'>
        <input type='number' 
        placeholder='Enter time' 
        onChange={handleChange}
        defaultValue={timeInput}
        />
      </div> : null}

      <div className='pomodoro-container'>
        <div className='pomodoro-timer'>
        <button onClick={pomodoroTime}> Pomodoro </button>
        <button onClick={shortBreakTime}> Short Break </button>
        <button onClick={longBreakTime}> Long Break </button>

        </div>

      </div>
    </div>
  )
}

export default TimerAction
