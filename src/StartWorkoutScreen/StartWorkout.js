import styled from 'styled-components/macro'
import React, { useState } from 'react'
import HeadlineOne from '../GlobalComponents/HeadlineOne'
import HeadlineTwo from '../GlobalComponents/HeadlineTwo'
import TimerWrapper from './TimerWrapper'
import BackIcon from '../Icons/BackIcon.svg'
import { Link } from 'react-router-dom'

export default function StartWorkout({ workouts, exercises, id }) {
  const [exerciseIndex, setExerciseIndex] = useState(0)

  // nochmal prüfen, damit er keinen Fehler wirft wenn array und exercises leer sind
  if (workouts.length === 0 || exercises.length === 0) return <p></p>

  const workout = workouts.filter(item => item._id === id)[0]
  const exerciseId = workout.exercises[exerciseIndex]
  const exercise = exercises.filter(item => item._id === exerciseId)[0]

  return (
    <>
      <Link to={'/overview/'}>
        <BackToOverviewIcon src={BackIcon}></BackToOverviewIcon>
      </Link>
      <HeadlineOne style={{ marginLeft: '10px' }}>
        {workout.workoutName}
      </HeadlineOne>
      <WorkoutImage src={exercise.image}></WorkoutImage>
      <HeadlineTwo style={{ marginLeft: '10px' }}>{exercise.title}</HeadlineTwo>
      <TimerWrapper
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
      />
    </>
  )

  function handleNextClick() {
    if (exerciseIndex < workout.exercises.length - 1) {
      setExerciseIndex(exerciseIndex + 1)
    }
  }

  function handleBackClick() {
    if (exerciseIndex > 0) setExerciseIndex(exerciseIndex - 1)
  }
}

const BackToOverviewIcon = styled.img`
  position: relative;
  margin: 10px 0 0 10px;
`

const WorkoutImage = styled.img`
  height: 270px;
  width: 100%;
`
