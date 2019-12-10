import styled from 'styled-components/macro'
import React from 'react'
import headerLogo from '../src/Icons/Header/Header.svg'
import SearchBar from '../src/HomeScreen/SearchBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Header({ handleInput, searchInput }) {
  return (
    <>
      <HeaderLogo src={headerLogo}></HeaderLogo>
      <Route exact path="/">
        <SearchBar
          key="searchBar1"
          searchInput={searchInput}
          handleInput={handleInput}
        ></SearchBar>
      </Route>
    </>
  )
}

const HeaderLogo = styled.img`
  z-index: +1;
`
