import styled from 'styled-components/macro'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PlaceholderImage from './pictures/Placeholder.jpg'

export default function Exercise({ title, description, image }) {
  const [isDescriptionShown, setIsDescritptionShown] = useState(false)

  let imageSrc
  switch (image) {
    /*  case 'sit-ups.png':
      imageSrc = SitUpsImage
      break
    case 'squats.png':
      imageSrc = SquatsImage
      break */
    case 'Placeholder.jpg':
      imageSrc = PlaceholderImage
      break
  }

  return (
    <Exercise>
      <ExerciseWrapper>
        <img src={imageSrc} style={{ width: '100%' }} />
      </ExerciseWrapper>
    </Exercise>
  )
}

const ExerciseWrapper = styled.section`
  border-radius: 5px;
  border: solid 0.5px lightgrey;
  box-shadow: 0 5px 20px #0002;
  position: relative;
  /*  width: 100%; */
`

Exercise.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
