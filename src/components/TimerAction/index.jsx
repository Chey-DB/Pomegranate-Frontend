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
  setUsedTimes,
  usedTimes,
}) => {
  const [mostUsedObj, setMostUsedObj] = useState([])

  const onReset = () => {
    setMostUsedObj([])
    setUsedTimes([])
  }

  useEffect(() => {
    let numMap = {}

    usedTimes.forEach(function(num){
      if(numMap[num]){
        numMap[num]++
      } else {
        numMap[num] = 1
      }
    })
    //sorted array
    let sorted = []
    for (var num in numMap){
      sorted.push([num,numMap[num]])
    }
    sorted.sort((a,b) => (a[1] - b[1]));
    setMostUsedObj(sorted)
  },[usedTimes])

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

      <div className='used-containers'>
        <div className='used-timers'>
          <h2>Most used timers</h2>
          <ul>
            {mostUsedObj.map((time,key) => 
              <li key={key}><button>
                {time[0]} mins
                </button></li>
            )}
            {/* <li><button> 25 mins</button></li>
            <li><button> 5 mins</button></li>
            <li><button> 15 mins</button></li> */}
          </ul>
        </div>

        <div className='reset'>
          <button
          onClick={onReset}>Clear</button>
        </div>

      </div>
    </div>
  )
}

export default TimerAction