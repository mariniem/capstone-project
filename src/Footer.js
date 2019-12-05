import styled from 'styled-components/macro'
import React from 'react'
import Home from '../src/Icons/Footer/Home.svg'
import Plus from '../src/Icons/Footer/Plus.svg'
import Heart from '../src/Icons/Footer/Heart.svg'
import TimerWorkout from '../src/Icons/Footer/TimerWorkout.svg'
import { Link } from 'react-router-dom'

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
  const NavButton = styled.button`
    border: none;
    background: none;
  `

  return (
    <Footer>
      <NavButton>
        <Link to="/">
          <img alt="home" src={Home}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/create">
          <img alt="create" src={Plus}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/favorites">
          <img alt="favorites " src={Heart}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/workout">
          <img alt="workout" src={TimerWorkout}></img>
        </Link>
      </NavButton>
    </Footer>
  )
}
