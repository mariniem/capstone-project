import styled from 'styled-components/macro'
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function TimerButton({ handleOnClick, timerValue }) {
  return (
    <TimerButtonWrapper onClick={handleOnClick}>
      <CircularProgressbar
        maxValue="60"
        value={timerValue}
        text={timerValue}
        styles={buildStyles({
          pathColor: '#647D91',
          textColor: '#647D91',
        })}
      />
    </TimerButtonWrapper>
  )
}
const TimerButtonWrapper = styled.div`
  height: 140px;
  width: 140px;
`
