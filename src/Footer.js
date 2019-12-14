import styled from 'styled-components/macro'
import React from 'react'
import Home from '../src/Icons/Footer/Home.svg'
import Plus from '../src/Icons/Footer/Plus.svg'
import Heart from '../src/Icons/Footer/Heart.svg'
import TimerWorkout from '../src/Icons/Footer/TimerWorkout.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <NavButton>
        <Link to="/">
          <img alt="home" src={Home}></img>
        </Link>
        <Title>Home</Title>
      </NavButton>
      <NavButton>
        <Link to="/create">
          <img alt="create" src={Plus}></img>
        </Link>
        <Title>Anlegen</Title>
      </NavButton>
      <NavButton>
        <Link to="/overview">
          <img alt="overview " src={Heart}></img>
        </Link>
        <Title>Übersicht</Title>
      </NavButton>
      <NavButton>
        <Link to="/workout/gggg">
          <img alt="workout" src={TimerWorkout}></img>
        </Link>
        <Title>Starten</Title>
      </NavButton>
    </>
  )
}

const NavButton = styled.button`
  border: none;
  background: none;
`
const Title = styled.div`
  color: white;
  font-size: 10px;
  margin-top: 4px;
`
