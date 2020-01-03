import styled from 'styled-components/macro'
import React from 'react'

export default function FilterMenu({ isFilterMenuShown, exercises }) {
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
      {categories.map(e => (
        <CheckboxWrapper>
          <CategoryTitle>{e}</CategoryTitle>
          <Checkbox type="Checkbox" />
        </CheckboxWrapper>
      ))}
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
`
const CategoryTitle = styled.div`
  color: white;
  margin-left: 15px;
`
const Checkbox = styled.input`
  border: 1px solid #647d91;
  height: 18px;
  width: 18px;
  margin-left: 15px;
`
const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
