import React, {useState, memo} from 'react'
import './style.css'

import { TimerAction, TimerProgress } from '..'

const Timer = () => {
  /* toggle input box*/
  const [toggleForm, setToggleForm] = useState(false)
  /* store the input mins*/
  const [timeInput, setTimeInput] = useState(1)
  /* toggle start and stop */
  const [countDownStarted, setCountDownStarted] = useState(false)
  /* time in milliseconds */
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(0)
  const [working, setWorking] = useState(false)
  const [pomodoroCount, setPomodoroCount] = useState(0)

  /* Start Timer */
  const startTimer = () => {
    setCountDownStarted(true)
    //close the form
    if (toggleForm){setToggleForm(false)}
    // set new timer minutes(milliseconds)
    setTimeInMilliseconds(timeInput * 60 * 1000)
  }
  /* Stop Timer */
  const stopTimer = () => {
    setCountDownStarted(false)
    setTimeInMilliseconds(0)
  }

  const onToggle = () => {
    setToggleForm(toggle => toggle = !toggleForm)
  }

  // Get time from input and set time input
  const handleChange = (e) => {
    const inputData = parseInt(e.target.value) ;
    setTimeInput(inputData);
  }

  const pomodoroTime = () => {
    setTimeInput(0.2)
    document.getElementById('timer').style.backgroundColor = 'red'
    setWorking(true)
  }

  const shortBreakTime = () => {
    setTimeInput(0.1)
    document.getElementById('timer').style.backgroundColor = 'blue'
    setWorking(false)
  }
  
  const longBreakTime = () => {
    setTimeInput(0.15)
    document.getElementById('timer').style.backgroundColor = 'green'
    setWorking(false)
  }

  // get time ahead in milliseconds
  const countDownTime = new Date().getTime() + timeInMilliseconds;

  // calculate animation duration
  const animationDuration = ((countDownTime - new Date().getTime()) / 1000 / 2)

  return (
    <div className="timerContainer">
      <div id='timer' className ="timer">
      <TimerProgress {...{
        timeInMilliseconds,
        stopTimer,
        countDownStarted,
        countDownTime,
        animationDuration,
        working,
        setPomodoroCount,
        pomodoroCount
      }}
      />
      <TimerAction {...{
        toggleForm,
        onToggle,
        handleChange,
        timeInput,
        countDownStarted,
        startTimer,
        stopTimer,
        pomodoroTime,
        shortBreakTime,
        longBreakTime,
      }}
       />
      </div>
      <h2>Pomodoro count is {pomodoroCount}</h2>
    </div>
  )
}
export default memo(Timer)
