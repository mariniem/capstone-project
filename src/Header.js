import styled from 'styled-components/macro'
import React from 'react'
import headerLogo from '../src/Icons/Header/Header.svg'

export default function Header() {
  const HeaderLogo = styled.img`
    z-index: +1;
  `

  return <HeaderLogo src={headerLogo}></HeaderLogo>
}
