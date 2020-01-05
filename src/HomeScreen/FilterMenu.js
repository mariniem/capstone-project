import styled from 'styled-components/macro'
import React from 'react'
import deleteIcon from '../Icons/DeleteIcon.svg'

export default function FilterMenu({
  isFilterMenuShown,
  exercises,
  checkedCategories,
  onChange,
  onCloseClick,
}) {
  if (!isFilterMenuShown) return <></>

  const categories = []
  exercises.forEach(element => {
    if (
      !categories.includes(element.category) &&
      element.category !== undefined
    )
      categories.push(element.category)
  })

  return (
    <FilterMenuLayout>
      {categories.map(category => {
        let checked = ''

        if (checkedCategories.includes(category)) checked = 'checked'

        return (
          <CheckboxWrapper>
            <CategoryTitle>{category}</CategoryTitle>
            <Checkbox
              type="Checkbox"
              name={category}
              checked={checked}
              onChange={onChange}
            />
          </CheckboxWrapper>
        )
      })}
      <DeleteIcon onClick={onCloseClick} src={deleteIcon}></DeleteIcon>
    </FilterMenuLayout>
  )
}

const FilterMenuLayout = styled.div`
  height: 400px;
  width: 250px;
  background: #7589a2;
  opacity: 0.9;
  z-index: +1;
  position: absolute;
  top: 22px;
  left: 0px;
`
const CategoryTitle = styled.div`
  color: white;
  margin-left: 15px;
  margin-top: 10px;
`
const Checkbox = styled.input`
  border: 1px solid #647d91;
  height: 18px;
  width: 18px;
  margin-left: 15px;
  margin-top: 10px;
`
const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const DeleteIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 7px;
`
