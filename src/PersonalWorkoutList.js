import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Globalstyle from './GlobalStyle'
import Grid from './Grid'
import styled from 'styled-components/macro'
import Exercise from './Exercise'

export default function PersonalWorkoutList({ workouts, exercises }) {
  return (
    <Grid>
      <Globalstyle />
      <Header></Header>
      <WorkoutsOverview>
        {workouts.map(workout => {
          const exerciseIds = workout.exercises
          const firstExerciseId = exerciseIds[0]

          const filteredExercises = exercises.filter(
            exercise => exercise._id === firstExerciseId
          )

          return (
            <div>
              <img src={filteredExercises[0].image} />
            </div>
          )
        })}
      </WorkoutsOverview>
      <Footer></Footer>
    </Grid>
  )
}

const WorkoutsOverview = styled.div`
  display: Grid;
  grid-template-columns: 1fr;
  margin: 0 40px;
  row-gap: 30px;
  margin-right: 10px;
  overflow-y: scroll;
`
