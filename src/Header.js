import styled from 'styled-components/macro'
import React from 'react'
import headerLogo from '../src/Icons/Header/Header.svg'
import SearchBar from '../src/HomeScreen/SearchBar'

export default function Header({ handleInput, searchInput }) {
  return (
    <>
      <HeaderLogo src={headerLogo}></HeaderLogo>
      <SearchBar
        key="searchBar1"
        searchInput={searchInput}
        handleInput={handleInput}
      ></SearchBar>
    </>
  )
}

const HeaderLogo = styled.img`
  z-index: +1;
`
