import { withKnobs } from '@storybook/addon-knobs'
import HeartBookmark from './HeartBookmark'
import React from 'react'

export default {
  title: 'HeartBookmark',
  decorators: [withKnobs],
}

export const standard = () => (
  <div
    style={{
      position: 'absolute',
      background: 'grey',
      marginTop: 200,
      height: '200px',
      width: '200px',
    }}
  >
    <HeartBookmark />
  </div>
)
