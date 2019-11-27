import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import ToggleTitleDescription from './ToggleTitleDescription'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { relative } from 'path'

export default {
  title: 'ToggleTitleDescription',
  decorators: [withKnobs],
}

export const standard = () => (
  <div
    style={{
      background: 'lightgrey',
      marginTop: 200,
      height: '200px',
      width: '200px',
    }}
  >
    <ToggleTitleDescription
      title={text('Title', 'Title')}
      description={text('description', 'description')}
      ToggleTitleDescription={boolean('ToggleTitleDescription', false)}
    />
  </div>
)
