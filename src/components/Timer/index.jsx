import React, {useState, memo} from 'react'
import './style.css'

import { TimerAction, TimerProgress } from '..'

const Timer = () => {
  /* toggle input box*/
  const [toggleForm, setToggleForm] = useState(false)
  /* store the input mins*/
  const [timeInput, setTimeInput] = useState(25)
  /* toggle start and stop */
  const [countDownStarted, setCountDownStarted] = useState(false)
  /* time in milliseconds */
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(0)
  /*used timers */
  const [usedTimes, setUsedTimes] = useState([])

  /* Start Timer */
  const startTimer = () => {
    setCountDownStarted(true)
    //close the form
    if (toggleForm){setToggleForm(false)}
    // set new timer minutes(milliseconds)
    setTimeInMilliseconds(timeInput * 60 * 1000)
    //add the time to used times
    setUsedTimes(times => times.concat(timeInput))
  }
  /* Stop Timer */
  const stopTimer = () => {
    setCountDownStarted(false)
    setTimeInMilliseconds(0)
  }

  const onToggle = () => {
    setToggleForm(toggle => toggle =!toggle)
  }

  // Get time from input and set time input
  const handleChange = (e) => {
    const inputData = parseInt(e.target.value) ;
    setTimeInput(inputData);
  }

  // get time ahead in milliseconds
  const countDownTime = new Date().getTime() + timeInMilliseconds;

  // calculate animation duration
  const animationDuration = ((countDownTime - new Date().getTime()) / 1000)

  return (
    <div className="timerContainer">
      <div className ="timer">
      <TimerProgress {...{
        timeInMilliseconds,
        stopTimer,
        countDownStarted,
        countDownTime,
        animationDuration
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
        usedTimes,
        setUsedTimes
      }}
       />
      </div>
    </div>
  )
}
export default memo(Timer)