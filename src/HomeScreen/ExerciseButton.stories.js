import { withKnobs } from '@storybook/addon-knobs'
import ExerciseButton from './ExerciseButton'
import React from 'react'

export default {
  title: 'ExerciseButton',
  decorators: [withKnobs],
}

export const standard = () => (
  <div style={{ position: 'relative', background: 'black', marginTop: 200, height: '200px', width: '200px' }}>
    <ExerciseButton />
  </div>
)
