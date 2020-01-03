import styled from 'styled-components/macro'
import React from 'react'
import Home from '../src/Icons/Footer/Home.svg'
import Plus from '../src/Icons/Footer/Plus.svg'
import Heart from '../src/Icons/Footer/Heart.svg'
import TimerWorkout from '../src/Icons/Footer/TimerWorkout.svg'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <NavLink to="/" exact style={linkStyle} activeStyle={linkActiveStyle}>
        <div>
          <img alt="home" src={Home}></img>
          <Title>Home</Title>
        </div>
      </NavLink>
      <NavLink
        to="/create"
        exact
        style={linkStyle}
        activeStyle={linkActiveStyle}
      >
        <div>
          <img alt="create" src={Plus}></img>
          <Title>Anlegen</Title>
        </div>
      </NavLink>
      <NavLink
        to="/overview"
        exact
        style={linkStyle}
        activeStyle={linkActiveStyle}
      >
        <div>
          <img alt="overview " src={Heart}></img>
          <Title>Übersicht</Title>
        </div>
      </NavLink>
      <NavLink to="/workout/" style={linkStyle} activeStyle={linkActiveStyle}>
        <div>
          <img alt="workout" src={TimerWorkout}></img>
          <Title>Starten</Title>
        </div>
      </NavLink>
    </>
  )
}

const linkStyle = {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  paddingTop: '5px',
  textDecoration: 'none',
}

const linkActiveStyle = {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: '#4C687E',
  paddingTop: '5px',
  textDecoration: 'none',
}

const Title = styled.div`
  color: white;
  font-size: 10px;
`
