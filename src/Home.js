import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Exercise from './Exercise'
import Header from './Header'
import Footer from './Footer'
import Grid from './Grid'

//import exerciseData from './exercises.json'

export default function Home() {
  let savedExercisesData =
    JSON.parse(localStorage.savedExercisesData || null) || {}

  const [exercises, setExercises] = useState(savedExercisesData)

  saveExercises(exercises)
  return (
    <div>
      <Grid>
        <Header />
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
        <Footer />
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
  row-gap: 30px;
  margin-right: 10px;
  overflow-y: scroll;
`
