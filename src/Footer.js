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
      <NavButton>
        <NavLink
          to="/"
          exact
          style={{ textDecoration: 'none' }}
          activeStyle={{
            display: 'inline-block',
            height: '55px',
            width: '93.75px',
            backgroundColor: '#4C687E',
            paddingTop: '5px',
          }}
        >
          <img alt="home" src={Home}></img>
          <Title>Home</Title>
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink
          to="/create"
          exact
          style={{ textDecoration: 'none' }}
          activeStyle={{
            display: 'inline-block',
            height: '55px',
            width: '93.75px',
            backgroundColor: '#4C687E',
            paddingTop: '5px',
          }}
        >
          <img alt="create" src={Plus}></img>
          <Title>Anlegen</Title>
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink
          to="/overview"
          exact
          style={{ textDecoration: 'none' }}
          activeStyle={{
            display: 'inline-block',
            height: '55px',
            width: '93.75px',
            backgroundColor: '#4C687E',
            paddingTop: '5px',
          }}
        >
          <img alt="overview " src={Heart}></img>
          <Title>Übersicht</Title>
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink
          to="/workout/"
          style={{ textDecoration: 'none' }}
          activeStyle={{
            display: 'inline-block',
            height: '55px',
            width: '93.75px',
            backgroundColor: '#4C687E',
            paddingTop: '5px',
          }}
        >
          <img alt="workout" src={TimerWorkout}></img>
          <Title>Starten</Title>
        </NavLink>
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
  margin-top: 5px;
`
