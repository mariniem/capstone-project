import styled from 'styled-components/macro'
import React from 'react'
import SearchIcon from '../Icons/Header/SearchIcon.svg'

export default function SearchBar({
  handleInput,
  searchInput,
  active,
  handleClick,
}) {
  return (
    <SearchBarForm>
      <Label htmlFor="search"></Label>

      <SearchImage
        type="image"
        alt="Search Icon"
        src={SearchIcon}
        onClick={handleClick}
        isSearchImageClicked={active}
      />

      {active ? (
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
    </SearchBarForm>
  )
}

const SearchBarForm = styled.form`
  display: grid;
`

const Label = styled.label`
  display: none;
`

const SearchImage = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  bottom: 8px;
`

const SearchInputField = styled.input`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 32px;
  height: 22px;
  width: 325px;
  border-radius: 5px;
  margin: 10px 0px 0px 20px;
  background: rgba(100, 125, 145, 0.1);
  border: transparent;
  padding: 0 8px;
`
