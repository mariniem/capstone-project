import styled from 'styled-components/macro'
import React from 'react'
import PropTypes from 'prop-types'

export default function Exercise({ title, description, image }) {
  return (
    <ExerciseWrapper>
      <ExerciseImages src={image} />
    </ExerciseWrapper>
  )
}

const ExerciseWrapper = styled.section`
  border-radius: 5px;
  border: solid 0.5px lightgrey;
  box-shadow: 0 5px 20px #0002;
  position: relative;
  width: 120px;
  height: 120px;
`

const ExerciseImages = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`

Exercise.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
