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
    <ExerciseWrapper>
      <ExerciseImages type="image" alt="pictures of exercises" src={image} />
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
  )
}

const ExerciseWrapper = styled.section`
  border-radius: 5px;
  box-shadow: 0 5px 20px #0002;
  position: relative;
  width: 150px;
  height: 150px;
`

const ExerciseImages = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;
  border-radius: 5px;
`

Exercise.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
