import styled from 'styled-components/macro'
import React from 'react'
import HeadlineOne from '../GlobalComponents/HeadlineOne'
import Workout from './Workout'

export default function PersonalWorkoutList({
  workouts,
  exercises,
  handleDeleteClick,
}) {
  return (
    <>
      <HeadlineOne>Übersicht deiner Workouts:</HeadlineOne>
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
              workoutId={workout._id}
              workoutName={workout.workoutName}
              category={workout.category}
              handleDeleteClick={() => handleDeleteClick(workout._id)}
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
