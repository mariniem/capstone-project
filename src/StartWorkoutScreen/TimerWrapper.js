import styled from 'styled-components/macro'
import React, { useState } from 'react'
import ArrowLeft from '../Icons/ArrowLeftStart.svg'
import ArrowRight from '../Icons/ArrowRightStart.svg'
import TimerButton from './TimerButton.js'

export default function TimerWrapper({ handleBackClick, handleNextClick }) {
  const [timerValue, setTimerValue] = useState(30)
  const [isRunning, setIsRunning] = useState(false)

  setTimeout(() => {
    if (timerValue > 0 && isRunning === true) setTimerValue(timerValue - 1)
    else if (timerValue === 0) onNextClick()
  }, 1000)

  return (
    <TimerLayout>
      <img alt="exercise before" src={ArrowLeft} onClick={onBackClick}></img>
      <TimerButton timerValue={timerValue} handleOnClick={handleOnClick} />
      <img alt="next exercise" src={ArrowRight} onClick={onNextClick}></img>
    </TimerLayout>
  )
  function handleOnClick() {
    setIsRunning(!isRunning)
  }
  function onBackClick() {
    setIsRunning(false)
    setTimerValue(30)

    handleBackClick()
  }

  function onNextClick() {
    setIsRunning(false)
    setTimerValue(30)

    handleNextClick()
  }
}

const TimerLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
`
