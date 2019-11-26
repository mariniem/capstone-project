import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ArrowDown from './Icons/Arrow down.svg'
import ArrowUp from './Icons/Arrow up.svg'

export default function ExerciseButton() {
  const [isDescriptionShown, setIsDescriptionShwon] = useState(false)

  const onButtonClick = () => setIsDescriptionShwon(!isDescriptionShown)
  const button = isDescriptionShown ? ArrowDown : ArrowUp

  const ExerciseButton = styled.img`
    margin-left: 5px;
    position: absolute;
    bottom: 5px;
  `
  return <ExerciseButton src={button} onClick={onButtonClick}></ExerciseButton>
}
