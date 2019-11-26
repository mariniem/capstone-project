import styled from 'styled-components/macro'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ExerciseButton from './ExerciseButton'
import ArrowDown from './Icons/Arrow down.svg'
import ArrowUp from './Icons/Arrow up.svg'

export default function Exercise({
  title,
  description,
  image,
  isDescritionShown,
}) {
  const [isDescriptionShown, setIsDescriptionShwon] = useState(false)

  const onButtonClick = () => setIsDescriptionShwon(!isDescriptionShown)
  const button = isDescriptionShown ? ArrowDown : ArrowUp
  /* const toggleDescription = (Title = { title }),
    Description = { description } */

  return (
    <ExerciseWrapper>
      <ExerciseImages src={image} />
      <ExerciseButton src={button} onClick={onButtonClick}></ExerciseButton>
      <DescriptionWrapper>
        {isDescriptionShown ? description : ''}
      </DescriptionWrapper>
    </ExerciseWrapper>
  )
}

const DescriptionWrapper = styled.div`
  background: white;
  border: 2px solid #647d91;
  position: absolute;
  height: 80px;
  width: 150px;
  bottom: -50px;
  z-index: 100;
`

const Title = styled.p`
  color: black;
`
const Description = styled.p`
  color: black;
`

const ExerciseWrapper = styled.section`
  border-radius: 5px;
  border: solid 0.5px lightgrey;
  box-shadow: 0 5px 20px #0002;
  position: relative;
  width: 120px;
  height: 120px;
  position: relative;
`

const ExerciseImages = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  position: absolute;
  z-index: -100;
`

Exercise.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
