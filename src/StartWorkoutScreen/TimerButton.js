import styled from 'styled-components/macro'
import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function TimerButton({ workouts, exercises, id }) {
  const [timerValue, setTimerValue] = useState(30)
  const [isRunning, setIsRunning] = useState(false)

  setTimeout(() => {
    if (timerValue > 0 && isRunning === true) setTimerValue(timerValue - 1)
  }, 1000)

  return (
    <TimerWrapper onClick={handleOnClick}>
      <CircularProgressbar
        maxValue="30"
        value={timerValue}
        text={timerValue}
        styles={buildStyles({
          pathColor: '#647D91',
          textColor: '#647D91',
        })}
      />
    </TimerWrapper>
  )

  function handleOnClick() {
    setIsRunning(!isRunning)
  }
}
const TimerWrapper = styled.div`
  height: 100px;
  width: 100px;
`
