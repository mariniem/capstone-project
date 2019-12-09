import styled from 'styled-components/macro'
import React from 'react'
import headerLogo from '../src/Icons/Header/Header.svg'
import SearchBar from '../src/HomeScreen/SearchBar'

export default function Header({
  onInput,
  handleInput,
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
      <SearchBar onInput={event => handleInput(event.target.value)}>
        {/*    {exercises.filter(item => {
          const title = item.title.toLowerCase()
          const query = input.toLowerCase()
          return query === '' || title.includes(query)
        })} */}
      </SearchBar>
    </>
  )
}
