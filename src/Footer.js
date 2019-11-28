import styled from 'styled-components/macro'
import React from 'react'
import Home from '../src/Icons/Footer/Home.svg'
import Plus from '../src/Icons/Footer/Plus.svg'
import Heart from '../src/Icons/Footer/Heart.svg'
import TimerWorkout from '../src/Icons/Footer/TimerWorkout.svg'

export default function Footer() {
  const Footer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    background: #647d91;
    height: 55px;
    width: 100%;
    border: 1px solid transparent;
    bottom: 0;
  `
  return (
    <Footer>
      <img src={Home}></img>
      <img src={Plus}></img>
      <img src={Heart}></img>
      <img src={TimerWorkout}></img>
    </Footer>
  )
}
