import styled from 'styled-components/macro'
import React from 'react'
import PropTypes from 'prop-types'

export default function Exercise({ title, description, image }) {
  return (
    <ExerciseWrapper>
      <img
        src={image}
        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
      />
    </ExerciseWrapper>
  )
}

const ExerciseWrapper = styled.section`
  border-radius: 5px;
  border: solid 0.5px lightgrey;
  box-shadow: 0 5px 20px #0002;
  position: relative;
  width: 100px;
  height: 100px;
`

Exercise.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
