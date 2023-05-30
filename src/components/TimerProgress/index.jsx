import React, { useEffect, memo} from 'react'
import styled, {keyframes, css} from 'styled-components'
import './style.css'
import { useCountDown } from '../../hooks'

const TimerProgress = ({
  timeInMilliseconds,
  animationDuration,
  stopTimer,
  countDownStarted,
  countDownTime,
}) => {
  
  const [seconds, minutes] = useCountDown({
    timeInMilliseconds,
    countDownStarted,
    countDownTime,
  })

  /* custom times */
  const cMin = minutes < 10 ? `0` + minutes : minutes
  const cSecs = seconds < 10 ? `0` + seconds : seconds

  //stop timer and reset/
  useEffect(() => {
    if((minutes + seconds) <= 0){
      stopTimer();
      return;
    }
  }, [minutes,seconds])


  return (
    <div className='pg-container'>
      <PgWidget>
        <PgWidgetInner />
        <PgWidgetNumber>
          {cMin} : {cSecs}
        </PgWidgetNumber>

        <Circle>
          <PgWidgetBarL>
            <PgWidgetProgressLeft {...{ animationDuration, timeInMilliseconds }} />
          </PgWidgetBarL>

          <PgWidgetBarR>
            <PgWidgetProgressRight {...{ animationDuration, timeInMilliseconds }} />
          </PgWidgetBarR>
        </Circle>
      </PgWidget>
    </div>
  )
}

export default memo(TimerProgress)

const left = keyframes`100% { transform: rotate(180deg) }`;
const right = keyframes`100% { transform: rotate(180deg) }`;

const PgWidget = styled.div`
  height: 194px;
  width: 194px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const PgWidgetInner = styled.div`
  position: absolute;
  width: 174px;
  height: 174px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  background-color: var(--default-color);
  z-index: 6;
`;
const PgWidgetNumber = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--white);
  font-family: "Rubik", sans-serif;
`;
const Circle = styled.div``;

const PgWidgetBarL = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip: rect(0px, 194px, 194px, 97px);
  border-radius: 100%;
  z-index: 1;
`;

const PgWidgetBarR = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip: rect(0px, 194px, 194px, 97px);
  border-radius: 100%;
  z-index: 1;
  transform: rotate(180deg)
`;

const PgWidgetProgressLeft = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: var(--white);
    clip: rect(0px, 97px, 194px, 0px);
    border-radius: 100%;
    animation: ${props => (props.timeInMilliseconds > 0 ? css`${left} ${props.animationDuration}s linear both` : '')} ;
  `;

const PgWidgetProgressRight = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: var(--white);
    clip: rect(0px, 97px, 194px, 0px);
    border-radius: 100%;
    animation: ${props => (props.timeInMilliseconds > 0 ? css`${right} ${props.animationDuration}s linear both` : '')} ;
    animation-delay: ${props => (props.timeInMilliseconds > 0 ? css`${props.animationDuration}s ` : '')} ;
  `;
