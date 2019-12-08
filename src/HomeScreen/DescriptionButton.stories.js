import { withKnobs } from '@storybook/addon-knobs'
import DescriptionButton from './DescriptionButton'
import React from 'react'

export default {
  title: 'DescriptionButton',
  decorators: [withKnobs],
}

export const standard = () => (
  <div
    style={{
      position: 'relative',
      background: 'grey',
      marginTop: 200,
      height: '200px',
      width: '200px',
    }}
  >
    <DescriptionButton />
  </div>
)
