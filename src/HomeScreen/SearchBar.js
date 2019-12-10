import styled from 'styled-components/macro'
import React, { useState } from 'react'
import SearchIcon from '../Icons/Header/SearchIcon.svg'

export default function SearchBar({ handleInput, searchInput }) {
  const [isSearchImageClicked, setIsSearchImageClicked] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Label htmlFor="search"></Label>

      <SearchImage
        type="image"
        alt="Search Icon"
        src={SearchIcon}
        onClick={() => setIsSearchImageClicked(!isSearchImageClicked)}
      />
      {isSearchImageClicked ? (
        <SearchInputField
          onInput={event => handleInput(event.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="Suche..."
          value={searchInput}
          autoFocus
        />
      ) : (
        ''
      )}
    </SearchForm>
  )
}

const SearchForm = styled.form`
  display: flex;
  background: grey;
`

const Label = styled.label`
  display: none;
`

const SearchImage = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  bottom: 5px;
`

const SearchInputField = styled.input`
  border: solid 0.5px black;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 38px;
  height: 18px;
  width: 320px;
  margin-left: 20px;
`
