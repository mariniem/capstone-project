import styled from 'styled-components/macro'
import React from 'react'
import Workout from './Workout'
/* import DeleteIcon from '../Icons/DeleteIcon.svg' */

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
            <WorkoutWrapper>
              <Workout
                image={image}
                workoutName={workout.workoutName}
                category={workout.category}
                handleClick={() => handleClick(workout._id)}
              />
              {/*  <DeleteImage src={DeleteIcon} onClick={handleClick}></DeleteImage> */}
            </WorkoutWrapper>
          )
        })}
      </WorkoutsOverview>
    </>
  )
}

const WorkoutsOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* margin: 0 40px; */
  row-gap: 80px;
  /* margin-right: 10px; */
  position: absolute;
  justify-items: center;
  align-content: center;
`

const WorkoutWrapper = styled.div`
  /*  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center; */
`

const WorkoutsHeadline = styled.h1`
  font-size: 17px;
  color: #647d91;
  margin-top: 20px;
  margin-left: 20px;
`
/* 
const DeleteImage = styled.img`
  position: relative;
  right: -210px;
  top: -40px;
` */
