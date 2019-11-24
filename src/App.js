import React from 'react'
import ExerciseList from './ExerciseList'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ExerciseList />
        </Route>

        <Route path="/create">create</Route>
      </Switch>
    </Router>
  )
}

export default App
