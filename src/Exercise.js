import styled from 'styled-components/macro'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowDown from './Icons/Arrow down.svg'
import ArrowUp from './Icons/Arrow up.svg'

export default function Exercise({ title, description, image }) {
  const [isDescriptionShown, setIsDescriptionShwon] = useState(false)

  const button = isDescriptionShown ? ArrowDown : ArrowUp
  const onButtonClick = () => setIsDescriptionShwon(!isDescriptionShown)

  return (
    <ExerciseWrapper>
      <ExerciseImages src={image} />
      <ExerciseButton src={button} onClick={onButtonClick}></ExerciseButton>
    </ExerciseWrapper>
  )
}

const ExerciseButton = styled.img`
  color: black;
`

const ExerciseWrapper = styled.section`
  border-radius: 5px;
  border: solid 0.5px lightgrey;
  box-shadow: 0 5px 20px #0002;
  position: relative;
  width: 120px;
  height: 120px;
`

const ExerciseImages = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`

Exercise.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
