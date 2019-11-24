import React from 'react'
import ExerciseCard from './ExerciseCard'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'ExerciseCard',
  decorators: [withKnobs],
}

export const standard = () => <ExerciseCard />
