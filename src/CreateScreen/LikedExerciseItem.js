import styled from 'styled-components/macro'
import React from 'react'

export default function LikedExerciseItem({ id, title, image, onChange }) {
  return (
    <LikedExerciseWrapper>
      <LikedExerciseImages
        type="image"
        alt="pictures of exercises"
        src={image}
      />
      <LikedExerciseTitle title={title}>{title}</LikedExerciseTitle>
      <div>
        <Checkbox type="Checkbox" name={id} onChange={onChange}></Checkbox>
        <Label>hinzufügen</Label>
      </div>
    </LikedExerciseWrapper>
  )
}

const LikedExerciseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  border: solid 1px #647d91;
  border-radius: 1px;
  height: 62px;
  width: 340px;
  margin-top: 5px;
  margin: 15px 0;
`
const LikedExerciseImages = styled.img`
  height: 59px;
  width: 59px;
`
const LikedExerciseTitle = styled.p`
  color: #647d91;
  font-size: 14px;
`

const Checkbox = styled.input`
  border: 1px solid #647d91;
  height: 18px;
  width: 18px;
  margin-left: 15px;
`

const Label = styled.label`
  font-size: 10px;
  color: #647d91;
`
