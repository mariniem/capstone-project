import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Exercise from './Exercise'

import FilterToggleButton from './FilterToggleButton'

//import exerciseData from './exercises.json'

export default function Home({ exercises, heartOnClick, searchInput }) {
  const [isOnlyLikedShown, setIsOnlyLikedShown] = useState(false)
  /* const [selectedLikedFilter, setSelectedLikedFilter] = useState({
    'isOnlyLikedShown': false;
  }) */

  if (isOnlyLikedShown)
    exercises = exercises.filter(exercise => exercise.isLiked === true)

  return (
    <div>
      <FilterToggleButton
        heartOnClick={() => setIsOnlyLikedShown(!isOnlyLikedShown)}
        isLiked={isOnlyLikedShown}
        /* selectedLikedFilter={selectedLikedFilter} */
      ></FilterToggleButton>
      <ExerciseGrid>
        {exercises
          .filter(item => {
            const title = item.title.toLowerCase()
            const query = searchInput.toLowerCase()
            return query === '' || title.includes(query)
          })
          .map((exercise, id) => (
            <Exercise
              title={exercise.title}
              description={exercise.description}
              image={exercise.image}
              key={exercise.id}
              heartOnClick={() => heartOnClick(id)}
              isLiked={exercise.isLiked}
            />
          ))}
      </ExerciseGrid>
    </div>
  )
}

const ExerciseGrid = styled.div`
  display: Grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 25px;
  overflow-y: scroll;
  margin-bottom: 10px;
`
