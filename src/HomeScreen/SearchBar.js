import styled from 'styled-components/macro'
import React from 'react'
import SearchIcon from '../Icons/Header/SearchIcon.svg'

export default function SearchBar() {
  return (
    <SearchForm /* onSubmit={onSubmit} */>
      <Label type="search">
        <SearchImage type="image" alt="Search Icon" src={SearchIcon} />
        <SearchInputField
          type="search"
          name="search"
          /* placeholder="Suche..." */
        ></SearchInputField>
      </Label>
    </SearchForm>
  )
}

const SearchForm = styled.form``

const Label = styled.label``

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

const SearchImage = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  bottom: 5px;
`

const SearchLine = styled.div`
  height: 1px;
  width: 320px;
  color: black;
`
