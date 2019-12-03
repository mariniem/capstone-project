import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import { getExercises } from './services'

export default function App() {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    getExercises().then(setExercises)
  }, [])

  function heartOnClick(id) {
    const exercise = exercises[id]
    setExercises([
      ...exercises.slice(0, id),
      { ...exercise, isLiked: !exercise.isLiked },
      ...exercises.slice(id + 1),
    ])
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home exercises={exercises} heartOnClick={heartOnClick}></Home>
        </Route>
        <Route path="/create">
          <Create exercises={exercises}></Create>
        </Route>
      </Switch>
    </Router>
  )
}
