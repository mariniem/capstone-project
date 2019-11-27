import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Exercise from './Exercise'
import exerciseData from './exercises.json'
import GlobalStyle from './GlobalStyle'

function App() {
  //const [isLiked, setIsLiked] = useState(false)
  const [exercises, setExercises] = useState(exerciseData)

  return (
    <div>
      <GlobalStyle />

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
}

export default App
