import styled from 'styled-components/macro'
import React, { useState } from 'react'
import ArrowDown from '../Icons/Arrow down.svg'

export default function ToggleTitleDescription({ title, description }) {
  const [isDescriptionShown, setIsDescriptionShwon] = useState(false)

  const onButtonClick = () => setIsDescriptionShwon(!isDescriptionShown)
  const showButton = isDescriptionShown ? '' : ArrowDown

  return (
    <>
      <ExerciseButton src={showButton} onClick={onButtonClick}></ExerciseButton>
      {isDescriptionShown ? (
        <DescriptionWrapper onButtonClick={!isDescriptionShown}>
          <Title>{title}</Title>
          <DescriptionButton onClick={onButtonClick}>x</DescriptionButton>
          <Description>{description}</Description>
        </DescriptionWrapper>
      ) : (
        ''
      )}
    </>
  )
}

const ExerciseButton = styled.img`
  margin-left: 5px;
  position: absolute;
  bottom: 5px;
`

const DescriptionButton = styled.button`
  color: #f2f2f2;
  position: absolute;
  right: 5%;
  top: 3%;
  background: transparent;
  border: none;
  font-weight: bold;
`

const DescriptionWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 150px;
  bottom: -140px;
  z-index: 100;
  position: relative;
  border-radius: 3px;
  box-shadow: 0 5px 20px #0002;
  background: #647d91;
  opacity: 0.95;

  &: after {
    content: '';
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color: #647d91;
    bottom: 100%;
    left: 10%;
    opacity: 0.95;
  }
`

const Title = styled.p`
  color: #f2f2f2;
  font-size: 12px;
  font-weight: bold;
  padding-top: 20px;
  margin: 5px;
  position: relative;
`
const Description = styled.p`
  color: #f2f2f2;
  font-size: 10px;
  margin: 5px;
  padding-bottom: 5px;
`
