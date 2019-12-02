import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import { getExercises, patchExercise } from './services'

export default function App() {
  /*  let savedExercisesData =
    JSON.parse(localStorage.savedExercisesData || null) || {} */

  const [exercises, setExercises] = useState(savedExercisesData)

  useEffect(() => {
    getExercises().then(setExercises)
  }, [])

  /* saveExercises(exercises) */

  return (
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home></Home>
        </Route>
        <Route path="/create">
          <Create></Create>
        </Route>
      </Switch>
    </Router>
  )

  /*   function saveExercises(exercises) {
    savedExercisesData = exercises
    localStorage.savedExercisesData = JSON.stringify(savedExercisesData)
  } */
}
