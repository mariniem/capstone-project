import styled from 'styled-components/macro'
import React from 'react'
import headerLogo from '../src/Icons/Header/Header.svg'
import SearchBar from '../src/HomeScreen/SearchBar'
import { Route } from 'react-router-dom'

export default function Header({
  handleInput,
  searchInput,
  active,
  isSearchImageClicked,
}) {
  /* const [isHeaderLarge, setIsHeaderLarge] = useState(false) */

  /*  const handleButtonSize = () => setIsHeaderLarge(!isHeaderLarge) */

  return (
    <>
      <HeaderLogo src={headerLogo}></HeaderLogo>
      <Route exact path="/">
        <SearchBar
          key="searchBar"
          searchInput={searchInput}
          handleInput={handleInput}
          active={isSearchImageClicked} /* active={!isHeaderLarge} */

          /*  onClick={handleButtonSize} */
        ></SearchBar>
      </Route>
    </>
  )
}

const HeaderLogo = styled.img`
  z-index: +1;
`
