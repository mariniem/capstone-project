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
  border: solid 0.5px lightgrey;
  box-shadow: 0 5px 20px #0002;
  position: relative;
  width: 130px;
  height: 130px;
`

const ExerciseImages = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  border-radius: 5px;
`

Exercise.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
