import styled from 'styled-components/macro'
import React from 'react'
import DeleteIcon from '../Icons/DeleteIcon.svg'
import { Link } from 'react-router-dom'

export default function Workout({
  workoutId,
  workoutName,
  image,
  category,
  handleDeleteClick,
}) {
  return (
    <WorkoutWrapper>
      <WorkoutImage type="image" alt="pictures of exercises" src={image} />
      <WorkoutName workoutName={workoutName}>{workoutName}</WorkoutName>
      <WorkoutCategory category={category}>{category}</WorkoutCategory>
      <DeleteImage src={DeleteIcon} onClick={handleDeleteClick}></DeleteImage>
      <Link to={'/workout/' + workoutId}>
        <StartButton>Starten</StartButton>
      </Link>
    </WorkoutWrapper>
  )
}

const WorkoutWrapper = styled.section`
  position: relative;
`

const WorkoutImage = styled.img`
  height: 230px;
  width: 330px;
  opacity: 0.95;
  position: absolute;
  border-radius: 2px;
  box-shadow: 0 5px 20px #0002;
`

const DeleteImage = styled.img`
  position: relative;
  left: 300px;
  top: -70px;
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
  bottom: -95px;
  margin-left: 10px;
  background: #647d91;
  border: none;
  padding: 4px;
  color: white;
`
