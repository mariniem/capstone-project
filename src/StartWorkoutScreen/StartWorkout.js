import styled from 'styled-components/macro'
import React, { useState } from 'react'
import HeadlineOne from '../GlobalComponents/HeadlineOne'
import TimerButton from './TimerButton.js'

export default function StartWorkout({ workouts, exercises, id }) {
  const [exerciseIndex, setExerciseIndex] = useState(0)

  // nochmal prüfen, damit er keinen Fehler wirft wenn array und exercises leer sind
  if (workouts.length === 0 || exercises.length === 0) return <p></p>

  const workout = workouts.filter(item => item._id === id)[0]
  const exerciseId = workout.exercises[exerciseIndex]
  const exercise = exercises.filter(item => item._id === exerciseId)[0]

  return (
    <>
      <HeadlineOne>{workout.workoutName}</HeadlineOne>
      <WorkoutImage src={exercise.image}></WorkoutImage>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handleBackClick}>Back</button>
      <TimerButton />
    </>
  )

  function handleNextClick() {
    if (exerciseIndex < workout.exercises.length - 1)
      setExerciseIndex(exerciseIndex + 1)
  }

  function handleBackClick() {
    if (exerciseIndex > 0) setExerciseIndex(exerciseIndex - 1)
  }
}

const WorkoutImage = styled.img`
  height: 100px;
  width: 100px;
`
