import styled from 'styled-components/macro'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import HeadlineOne from '../GlobalComponents/HeadlineOne'
import HeadlineTwo from '../GlobalComponents/HeadlineTwo'
import TimerWrapper from './TimerWrapper'
import BackIcon from '../Icons/BackIcon.svg'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function StartWorkoutScreen({ workouts, exercises, id }) {
  let initialExerciseIndex = 0

  if (id === undefined) {
    id = localStorage.getItem('currentWorkoutId')
    initialExerciseIndex = parseInt(
      localStorage.getItem('currentExerciseIndex')
    )
  }

  const [exerciseIndex, setExerciseIndex] = useState(initialExerciseIndex)
  const history = useHistory()

  if (id === null) {
    confirmAlert({
      title: 'Du hast noch kein Workout begonnen',
      message: 'Bitte wähle ein Workout aus der deiner Übersicht.',
      buttons: [
        {
          label: 'Zur Übersichtsseite',
          onClick: () => history.push('/overview/'),
        },
      ],
    })

    return <p></p>
  }

  const workout = workouts.filter(item => item._id === id)[0]
  const exerciseId = workout.exercises[exerciseIndex]
  const exercise = exercises.filter(item => item._id === exerciseId)[0]

  localStorage.setItem('currentWorkoutId', id)
  localStorage.setItem('currentExerciseIndex', exerciseIndex)

  return (
    <>
      <Link to={'/overview/'}>
        <BackToOverviewIcon src={BackIcon}></BackToOverviewIcon>
      </Link>
      <HeadlineOne style={{ marginLeft: '10px' }}>
        {workout.workoutName}
      </HeadlineOne>
      <WorkoutImage
        style={{ height: '250' }}
        src={exercise.image}
      ></WorkoutImage>
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
    } else
      confirmAlert({
        message: 'Du hast dein Workout beendet',
        buttons: [
          {
            label: 'Ok',
          },
        ],
      })
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
