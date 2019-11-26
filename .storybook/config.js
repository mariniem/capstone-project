import { configure } from '@storybook/react'
import { load, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import styled from 'styled-components/macro'
import Globalstyles from '../src/GlobalStyle'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)
addDecorator(withInfo)
addDecorator(storyFn => (
  <>
    <Globalstyles />
    <Wrapper>{storyFn()}</Wrapper>
  </>
))

const Wrapper = styled.div``
