import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './HomeScreen/Home'
import AppLayout from './AppLayout'
import Create from './CreateScreen/Create'
import PersonalWorkoutList from './FavoritesScreen/PersonalWorkoutList'
import {
  getExercises,
  patchExercise,
  postPersonalWorkout,
  getWorkouts,
} from './services'

export default function App() {
  const [exercises, setExercises] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [searchInput, setInput] = useState('')

  useEffect(() => {
    getExercises().then(setExercises)
    getWorkouts().then(setWorkouts)
  }, [])

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
    postPersonalWorkout(workoutData).then(results => {
      console.log(results)
    })
  }
  return (
    <Router>
      <AppLayout
        key="appLayout1"
        handleInput={handleInput}
        searchInput={searchInput}
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
          <Route path="/favorites">
            <PersonalWorkoutList
              workouts={workouts}
              exercises={exercises}
            ></PersonalWorkoutList>
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  )
  function handleInput(newInput) {
    setInput(newInput)
  }
}
