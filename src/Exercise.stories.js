import React from 'react'
import styled from 'styled-components/macro'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import PlaceholderImage from './pictures/Placeholder.jpg'

export default {
  title: 'Exercise',
  decorators: [withKnobs],
}

export const standard = () => (
  <ExerciseWrapper>
    <img src={PlaceholderImage} style={{ width: '100%' }} />
  </ExerciseWrapper>
)

const ExerciseWrapper = styled.section`
  border-radius: 5px;
  border: solid 0.5px lightgrey;
  box-shadow: 0 5px 20px #0002;
  position: relative;
`
