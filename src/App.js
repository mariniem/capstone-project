import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
/* import PersonalWorkoutList from './PersonalWorkoutList' */
import { getExercises, patchExercise } from './services'

export default function App() {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    getExercises().then(setExercises)
  }, [])

  /*  useEffect(() => {
    patchExercises().then(setExercises)
  }, []) */

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
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home exercises={exercises} heartOnClick={heartOnClick}></Home>
        </Route>
        <Route path="/create">
          <Create exercises={exercises}></Create>
        </Route>
        <Route path="/favorites">
          {/* <PersonalWorkoutList exercises={exercises}></PersonalWorkoutList> */}
        </Route>
      </Switch>
    </Router>
  )
}
