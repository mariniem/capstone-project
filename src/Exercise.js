import styled from 'styled-components/macro'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ExerciseButton from './ExerciseButton'
import ArrowDown from './Icons/Arrow down.svg'
import ArrowUp from './Icons/Arrow up.svg'

export default function Exercise({ title, description, image }) {
  const [isDescriptionShown, setIsDescriptionShwon] = useState(false)

  const onButtonClick = () => setIsDescriptionShwon(!isDescriptionShown)
  const button = isDescriptionShown ? '' : ArrowUp

  return (
    <ExerciseWrapper>
      <ExerciseImages src={image} />
      <ExerciseButton src={button} onClick={onButtonClick}></ExerciseButton>
      {isDescriptionShown ? (
        <DescriptionWrapper onButtonClick={!isDescriptionShown}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </DescriptionWrapper>
      ) : (
        ''
      )}
    </ExerciseWrapper>
  )
}

const DescriptionWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 150px;
  bottom: -100px;
  z-index: 100;
  position: relative;
  border-radius: 3px;
  box-shadow: 0 5px 20px #0002;
  background: #647d91;
  opacity: 0.9;

  &: after {
    content: '';
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color: #647d91;
    bottom: 100%;
    left: 10%;
    opacity: 0.9;
  }
`

const Title = styled.p`
  color: #f2f2f2;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  padding-top: 10px;
  margin: 5px;
`
const Description = styled.p`
  color: #f2f2f2;
  font-size: 10px;
  font-family: 'Nunito', sans-serif;
  margin: 5px;
  padding: 5px;
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
