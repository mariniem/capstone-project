import styled from 'styled-components/macro'
import React from 'react'
import PropTypes from 'prop-types'
import SquatsImage from './pictures/squats.png'
import SitUpsImage from './pictures/sit-ups.png'

export default function ExerciseCard({ title, description, image }) {
  let imageSrc

  switch (image) {
    case 'sit-ups.png':
      imageSrc = SitUpsImage
      break
    case 'squats.png':
      imageSrc = SquatsImage
      break
  }

  return (
    <ExerciseCardWrapper>
      <img src={imageSrc} style={{ width: '100%' }} />
    </ExerciseCardWrapper>
  )
}

const ExerciseCardWrapper = styled.section`
  border-radius: 5px;
  padding: 5px;
  border: solid 2px lightgrey;
  box-shadow: 0 10px 10px #0002;
  position: relative;
  width: 100%;
`

ExerciseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
