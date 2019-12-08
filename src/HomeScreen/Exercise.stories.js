import { withKnobs } from '@storybook/addon-knobs'
import Exercise from './Exercise'
import React from 'react'

export default {
  title: 'Exercise',
  decorators: [withKnobs],
}

export const standard = () => <Exercise />
