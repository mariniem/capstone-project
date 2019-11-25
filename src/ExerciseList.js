import styled from 'styled-components/macro'
import React from 'react'
import PropTypes from 'prop-types'
import exerciseData from './exercises.json'
import Exercise from './Exercise'

export default function ExerciseList() {
  return (
    <Grid>
      {exerciseData.map(exercise => {
        return (
          <Exercise
            title={exercise.title}
            description={exercise.description}
            image={exercise.image}
          />
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: Grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px;
  row-gap: 40px;
  column-gap: 60px;
  justify-items: center;
  align-content: center;
`
