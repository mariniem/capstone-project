import styled from 'styled-components/macro'
import React from 'react'
import Workout from './Workout'

export default function PersonalWorkoutList({ workouts, exercises }) {
  return (
    <>
      <WorkoutsHeadline>Übersicht deiner Workouts:</WorkoutsHeadline>
      <WorkoutsOverview>
        {workouts.map(workout => {
          const exerciseIds = workout.exercises
          const firstExerciseId = exerciseIds[0]

          const filteredExercises = exercises.filter(
            exercise => exercise._id === firstExerciseId
          )
          let image

          if (filteredExercises.length > 0) image = filteredExercises[0].image
          return (
            <Workout
              image={image}
              workoutName={workout.workoutName}
              category={workout.category}
            />
          )
        })}
      </WorkoutsOverview>
    </>
  )
}

const WorkoutsOverview = styled.div`
  display: Grid;
  grid-template-columns: 1fr;
  margin: 0 40px;
  row-gap: 80px;
  margin-right: 10px;
`
const WorkoutsHeadline = styled.h1`
  font-size: 17px;
  color: #647d91;
  margin-top: 20px;
  margin-left: 20px;
`
