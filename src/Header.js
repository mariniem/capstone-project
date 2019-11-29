import styled from 'styled-components/macro'
import React from 'react'
import headerLogo from '../src/Icons/Header/Header.svg'

export default function Header() {
  const Header = styled.div`
    border-bottom: 1.5px solid #647d91;
    height: 60px;
    display: grid;
    justify-items: center;
    align-items: center;
  `
  const HeaderLogo = styled.img`
    z-index: +1;
  `

  return (
    <Header>
      <HeaderLogo src={headerLogo}></HeaderLogo>
    </Header>
  )
}
