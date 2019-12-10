import styled from 'styled-components/macro'
import React from 'react'
import SearchIcon from '../Icons/Header/SearchIcon.svg'

export default function SearchBar({ onInput, searchInput }) {
  //({ onInput, searchInput })

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Label htmlFor="search"></Label>

      <SearchImage type="image" alt="Search Icon" src={SearchIcon} onClick="" />

      <SearchInputField
        onChange={onInput}
        type="text"
        name="search"
        id="search"
        placeholder="Suche..."
        value={searchInput}
      />
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
  /* border-bottom: solid 1px black; */
  border: solid 1px transparent;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 38px;
  height: 20px;
  width: 320px;
  margin-left: 20px;
`

/* const SearchLine = styled.div`
  height: 1px;
  width: 320px;
  color: black;
` */
