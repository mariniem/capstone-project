import styled from 'styled-components/macro'
import React, { useState } from 'react'
import HeadlineOne from '../GlobalComponents/HeadlineOne'
import HeadlineTwo from '../GlobalComponents/HeadlineTwo'
import TimerButton from './TimerButton.js'
import ArrowLeft from '../Icons/ArrowLeftStart.svg'
import ArrowRight from '../Icons/ArrowRightStart.svg'

export default function StartWorkout({
  workouts,
  exercises,
  id,
  setTimerValue,
  timerValue,
}) {
  const [exerciseIndex, setExerciseIndex] = useState(0)

  // nochmal prüfen, damit er keinen Fehler wirft wenn array und exercises leer sind
  if (workouts.length === 0 || exercises.length === 0) return <p></p>

  const workout = workouts.filter(item => item._id === id)[0]
  const exerciseId = workout.exercises[exerciseIndex]
  const exercise = exercises.filter(item => item._id === exerciseId)[0]

  return (
    <>
      <HeadlineOne style={{ marginLeft: '10px' }}>
        {workout.workoutName}
      </HeadlineOne>
      <WorkoutImage src={exercise.image}></WorkoutImage>
      <HeadlineTwo style={{ marginLeft: '10px' }}>{exercise.title}</HeadlineTwo>
      <TimerWrapper>
        <img
          alt="exercise before"
          src={ArrowLeft}
          onClick={handleBackClick}
        ></img>
        <TimerButton />
        <img
          alt="next exercise"
          src={ArrowRight}
          onClick={handleNextClick}
        ></img>
      </TimerWrapper>
    </>
  )

  function resetTimer(timerValue) {
    setTimerValue(timerValue)
  }

  function handleNextClick() {
    if (exerciseIndex < workout.exercises.length - 1) {
      setExerciseIndex(exerciseIndex + 1) && resetTimer()
      /* && setTimerValue(timerValue) */
    }
  }

  function handleBackClick() {
    if (exerciseIndex > 0) setExerciseIndex(exerciseIndex - 1)
  }
}

const TimerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
`

const WorkoutImage = styled.img`
  height: 300px;
  width: 100%;
  margin-bottom: 15px;
`
