import styled from 'styled-components/macro'
import React from 'react'
import headerLogo from '../src/Icons/Header/Header.svg'
import SearchBar from '../src/HomeScreen/SearchBar'

export default function Header({
  onInput,
  handleInput,
  searchInput,
  onSubmit,
  exercises,
  input,
}) {
  const HeaderLogo = styled.img`
    z-index: +1;
  `

  return (
    <>
      <HeaderLogo src={headerLogo}></HeaderLogo>
      <SearchBar
        key="searchBar1"
        searchInput={searchInput}
        onInput={event => {
          console.log(event.target)
          handleInput(event.target.value)
        }}
      ></SearchBar>
    </>
  )
}
