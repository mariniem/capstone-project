import styled from 'styled-components/macro'
import React from 'react'
import DeleteIcon from '../Icons/DeleteIcon.svg'

export default function Workout({ workoutName, image, category, handleClick }) {
  return (
    <WorkoutWrapper>
      <WorkoutImage type="image" alt="pictures of exercises" src={image} />
      <WorkoutName workoutName={workoutName}>{workoutName}</WorkoutName>
      <WorkoutCategory category={category}>{category}</WorkoutCategory>
      <DeleteImage src={DeleteIcon} onClick={handleClick}></DeleteImage>
      <StartButton>Starten</StartButton>
    </WorkoutWrapper>
  )
}

const WorkoutWrapper = styled.section`
  position: relative;
`

const WorkoutImage = styled.img`
  height: 180px;
  width: 330px;
  opacity: 0.8;
  position: absolute;
  border-radius: 2px;
  box-shadow: 0 5px 20px #0002;
`

const DeleteImage = styled.img`
  position: relative;
  left: 300px;
  top: -85px;
`

const WorkoutName = styled.p`
  font-size: 17px;
  color: #647d91;
  margin-top: 20px;
  position: relative;
  margin-left: 10px;
`
const WorkoutCategory = styled.p`
  font-size: 14px;
  color: #647d91;
  margin-top: 10px;
  position: relative;
  margin-left: 10px;
`

const StartButton = styled.button`
  border-radius: 5px;
  position: relative;
  right: -250px;
  bottom: -53px;
  margin-left: 10px;
  background: #647d91;
  border: none;
  padding: 4px;
  color: white;
`
