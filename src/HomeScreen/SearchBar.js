import styled from 'styled-components/macro'
import React, { useState } from 'react'
import SearchIcon from '../Icons/Header/SearchIcon.svg'

export default function SearchBar({ handleInput, searchInput, active }) {
  const [isSearchImageClicked, setIsSearchImageClicked] = useState(false)

  /*  const [isHeaderLarge, setIsHeaderLarge] = useState(false) */
  /* const handleButtonSize = () => setIsHeaderLarge(!isHeaderLarge)
   */
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <SearchForm onSubmit={handleSubmit} /* onClick={handleButtonSize} */>
      <Label htmlFor="search"></Label>

      <SearchImage
        type="image"
        alt="Search Icon"
        src={SearchIcon}
        onClick={() => setIsSearchImageClicked(!isSearchImageClicked)}
        isSearchImageClicked={active}
      />

      {isSearchImageClicked ? (
        <SearchInputField
          onInput={event => handleInput(event.target.value)}
          isSearchImageClicked={active}
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
  z-index: 1;
  position: absolute;
  left: 0;
  top: 38px;
  height: 18px;
  width: 320px;
  margin-left: 20px;
  background: rgba(100, 125, 145, 0.1);
  border-radius: 10px;
  border: transparent;
  padding: 0 8px;
`
