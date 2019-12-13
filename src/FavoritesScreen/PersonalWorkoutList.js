import styled from 'styled-components/macro'
import React from 'react'
import Workout from './Workout'

export default function PersonalWorkoutList({
  workouts,
  exercises,
  handleClick,
}) {
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
              handleClick={() => handleClick(workout._id)}
            />
          )
        })}
      </WorkoutsOverview>
    </>
  )
}

const WorkoutsOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 100px;
  margin-left: 20px;
`

const WorkoutsHeadline = styled.h1`
  font-size: 17px;
  color: #647d91;
  margin-top: 20px;
  margin-left: 20px;
`
