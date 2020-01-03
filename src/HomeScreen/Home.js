import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Exercise from './Exercise'
import FilterToggleButton from './FilterToggleButton'
import filterIcon from '../Icons/FilterIcon.svg'
import FilterMenu from './FilterMenu'

//import exerciseData from './exercises.json'

export default function Home({
  exercises,
  heartOnClick,
  searchInput,
  onClick,
}) {
  const [isOnlyLikedShown, setIsOnlyLikedShown] = useState(false)
  const [isFilterMenuShown, setIsFilterMenuShown] = useState(false)

  if (isOnlyLikedShown)
    exercises = exercises.filter(exercise => exercise.isLiked === true)

  return (
    <div>
      <FilterWrapper>
        <FilterMenuIcon
          onClick={() => setIsFilterMenuShown(!isFilterMenuShown)}
          src={filterIcon}
        ></FilterMenuIcon>

        <FilterToggleButton
          heartOnClick={() => setIsOnlyLikedShown(!isOnlyLikedShown)}
          isLiked={isOnlyLikedShown}
        ></FilterToggleButton>
      </FilterWrapper>
      <FilterMenu
        exercises={exercises}
        isFilterMenuShown={isFilterMenuShown}
      ></FilterMenu>

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 25px;
  margin-bottom: 10px;
`

const FilterMenuIcon = styled.img`
  height: 24px;
  width: 24px;
`
const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 20px;
  margin-top: 3px;
  align-items: center;
`
