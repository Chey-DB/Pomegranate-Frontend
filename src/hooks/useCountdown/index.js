import { useEffect, useState} from 'react'

const useCountDown = ({ 
  timeInMilliseconds,
  countDownStarted,
  countDownTime,}) => {

    const [countDownInMilliSeconds, setCountDown] =  useState((countDownTime - new Date().getTime ))

    useEffect(() => {
        let interval;
        if(timeInMilliseconds > 0){
          interval = setInterval(() => {
            setCountDown(countDownTime - new Date().getTime())

          }, 1000)
        } else if(!countDownStarted){
            clearInterval(interval)
            setCountDown(0)
        }
          return () => clearInterval(interval)
        

    }, [countDownTime,
        timeInMilliseconds,
        countDownStarted])

  const seconds = '';
  const minutes = '';

  return getReturnValues(countDownInMilliSeconds)
}

const getReturnValues = (countdown) => {
  // calculate time left
  const minutes = Math.floor(countdown/ (60 * 1000))
  const seconds = parseInt(countdown % (60 * 1000)/ 1000).toFixed(0)
  return [seconds, minutes]
}


export default useCountDown