import styled from 'styled-components/macro'
import React from 'react'

export default function LikedExerciseList({ title, image }) {
  return (
    <LikedExerciseWrapper>
      <LikedExerciseImages
        type="image"
        //alt="pictures of exercises"
        src={image}
      />
      <LikedExerciseTitle title={title}></LikedExerciseTitle>
    </LikedExerciseWrapper>
  )
}

const LikedExerciseWrapper = styled.div`
  display: grid;
  grid-template: column;
  border: solid 1.5px #647d91;
  border-radius: 5px;
  height: 53px;
  width: 280px;
  margin-top: 5px;
  margin: 15px 0;
`
const LikedExerciseImages = styled.img`
  height: 50px;
  width: 50px;
`
const LikedExerciseTitle = styled.p`
  color: #647d91;
`
