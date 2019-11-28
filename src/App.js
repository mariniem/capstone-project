import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import Exercise from './Exercise'
import Header from './Header'
import Footer from './Footer'
import Grid from './Grid'
import CreateWorkout from './CreateWorkout'
//import exerciseData from './exercises.json'

export default function App() {
  let savedExercisesData =
    JSON.parse(localStorage.savedExercisesData || null) || {}
  const [exercises, setExercises] = useState(savedExercisesData)
  saveExercises(exercises)
  return (
    <div>
      <Grid>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <ExerciseGrid>
                {exercises.map((exercise, id) => {
                  return (
                    <Exercise
                      title={exercise.title}
                      description={exercise.description}
                      image={exercise.image}
                      key={exercise.id}
                      heartOnClick={() => heartOnClick(id)}
                      isLiked={exercise.isLiked}
                    />
                  )
                })}
              </ExerciseGrid>
            </Route>
            <Route path="/create">
              <CreateWorkout>Hallo</CreateWorkout>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Grid>
    </div>
  )
  function heartOnClick(id) {
    const exercise = exercises[id]
    setExercises([
      ...exercises.slice(0, id),
      { ...exercise, isLiked: !exercise.isLiked },
      ...exercises.slice(id + 1),
    ])
  }

  function saveExercises(exercises) {
    savedExercisesData = exercises
    localStorage.savedExercisesData = JSON.stringify(savedExercisesData)
  }
}

const ExerciseGrid = styled.div`
  display: Grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 40px;
  row-gap: 40px;
  margin-right: 10px;
  overflow-y: scroll;
`
