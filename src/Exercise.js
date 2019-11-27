import styled from 'styled-components/macro'
import React from 'react'
import PropTypes from 'prop-types'
import ToggleDescription from './ToggleTitleDescription'
import HeartBookmark from './HeartBookmark'

export default function Exercise({
  title,
  description,
  image,
  showLike,
  heartOnClick,
  isLiked,
}) {
  return (
    <Grid>
      <ExerciseWrapper>
        <ExerciseImages src={image} />
        <HeartBookmark
          heartOnClick={heartOnClick}
          src={showLike}
          isLiked={isLiked}
        ></HeartBookmark>
        <ToggleDescription
          title={title}
          description={description}
        ></ToggleDescription>
      </ExerciseWrapper>
    </Grid>
  )
}

const Grid = styled.div`
  display: Grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px;
  row-gap: 40px;
  margin-right: 10px;
`

const ExerciseWrapper = styled.section`
  border-radius: 5px;
  border: solid 0.5px lightgrey;
  box-shadow: 0 5px 20px #0002;
  position: relative;
  width: 120px;
  height: 120px;
  position: relative;
`

const ExerciseImages = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  position: absolute;
  z-index: -100;
  border-radius: 5px;
`

Exercise.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
