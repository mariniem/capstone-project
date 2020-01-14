import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './HomeScreen/HomeScreen'
import AppLayout from './AppLayout'
import CreateScreen from './CreateScreen/CreateScreen'
import StartWorkoutScreen from './StartWorkoutScreen/StartWorkoutScreen'
import WorkoutOverviewScreen from './WorkoutOverviewScreen/WorkoutOverviewScreen'
import {
  getExercises,
  patchExercise,
  postPersonalWorkout,
  getWorkouts,
  deleteWorkout,
} from './services'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Login from './Login'

export default function App() {
  const [exercises, setExercises] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [searchInput, setInput] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    getExercises().then(setExercises)
    getWorkouts().then(setWorkouts)
  }, [])

  //if (isLogged === false) {
  return <Login onLogged={onLogged}></Login>
  //‚}

  if (workouts.length === 0 || exercises.length === 0) return <p>Lade...</p>

  return (
    <Router>
      <Switch>
        <AppLayout
          onSearchInputChange={handleSearchInputChange}
          searchInput={searchInput}
        >
          <Route
            exact
            path="/"
            render={() => (
              <HomeScreen
                exercises={exercises}
                searchInput={searchInput}
                heartOnClick={heartOnClick}
              />
            )}
          ></Route>
          <Route path="/create">
            <CreateScreen
              onSubmit={createPersonalWorkout}
              exercises={exercises}
            />
          </Route>
          <Route path="/overview">
            <WorkoutOverviewScreen
              workouts={workouts}
              exercises={exercises}
              handleDeleteClick={handleDeleteClick}
            />
          </Route>
          <Route
            path="/workout/:id?"
            render={props => (
              <StartWorkoutScreen
                workouts={workouts}
                exercises={exercises}
                id={props.match.params.id}
              />
            )}
          />
        </AppLayout>
      </Switch>
    </Router>
  )

  function onLogged() {
    setIsLogged(!isLogged)
  }

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

  function handleSearchInputChange(newInput) {
    setInput(newInput)
  }
}
