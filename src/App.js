import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './HomeScreen/Home'
import AppLayout from './AppLayout'
import Create from './CreateScreen/Create'
import StartWorkout from '../src/StartWorkoutScreen/StartWorkout'
import PersonalWorkoutList from './FavoritesScreen/PersonalWorkoutList'
import {
  getExercises,
  /* postExercise, */
  patchExercise,
  postPersonalWorkout,
  getWorkouts,
  deleteWorkout,
} from './services'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function App(isSearchImageClicked) {
  const [exercises, setExercises] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [searchInput, setInput] = useState('')

  useEffect(() => {
    getExercises().then(setExercises)
    getWorkouts().then(setWorkouts)
  }, [])

  return (
    <Router>
      <AppLayout
        handleInput={handleInput}
        searchInput={searchInput}
        active={isSearchImageClicked}
      >
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                exercises={exercises}
                searchInput={searchInput}
                heartOnClick={heartOnClick}
              />
            )}
          ></Route>
          <Route path="/create">
            <Create
              onSubmit={createPersonalWorkout}
              exercises={exercises}
            ></Create>
          </Route>
          <Route path="/overview">
            <PersonalWorkoutList
              workouts={workouts}
              exercises={exercises}
              handleDeleteClick={handleDeleteClick}
            ></PersonalWorkoutList>
          </Route>
          <Route
            path="/workout/:id"
            render={props => (
              <StartWorkout
                workouts={workouts}
                exercises={exercises}
                id={props.match.params.id}
                /*   workouts={workouts}
              exercises={exercises}
              handleClick={handleClick} */
              ></StartWorkout>
            )}
          />
        </Switch>
      </AppLayout>
    </Router>
  )

  function heartOnClick(id) {
    const exercise = exercises[id]
    patchExercise({ isLiked: !exercise.isLiked, _id: exercise._id }).then(
      changedExercise => {
        setExercises([
          ...exercises.slice(0, id),
          changedExercise,
          ...exercises.slice(id + 1),
        ])
      }
    )
  }

  /* function createExercise(exerciseData) {
    postExercise(exerciseData).then(exercise => {
      setExercises([...exercises, exercise])
    })
  } */

  function createPersonalWorkout(workoutData) {
    postPersonalWorkout(workoutData).then(workout => {
      setWorkouts([...workouts, workout])
    })
  }

  function removeWorkout(id) {
    deleteWorkout(id).then(deletedWorkout => {
      setWorkouts(workouts.filter(workout => workout.id !== deletedWorkout.id))
      getWorkouts().then(setWorkouts)
    })
  }

  function handleDeleteClick(id) {
    confirmAlert({
      title: 'Löschen bestätigen',
      message: 'Möchten Sie dieses Workout wirklich löschen?',
      buttons: [
        {
          label: 'Ja',
          onClick: () => removeWorkout(id),
        },
        {
          label: 'Nein',
        },
      ],
    })
  }

  function handleInput(newInput) {
    setInput(newInput)
  }
}
