import styled from 'styled-components/macro'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeartLikeSmall from './Icons/HeartLikeSmall.svg'
//import Grid from './Grid'

export default function Create({ isLiked, isOnlyLikedShown, exercise }) {
  return (
    <CreateGrid>
      <Header></Header>
      <StyledForm>
        <Label>
          <Headline>Name deines Workouts:</Headline>
          <WorkoutNameInput type="text" name="workoutName"></WorkoutNameInput>
        </Label>
        <Headline>Kategorie:</Headline>
        <CheckboxWrapper>
          <div>
            <Checkbox type="Checkbox" name="kraft"></Checkbox>
            <Label>Kraft</Label>
          </div>
          <div>
            <Checkbox type="Checkbox" name="cardio"></Checkbox>
            <Label>Cardio</Label>
          </div>
          <div>
            <Checkbox type="Checkbox" name="yoga"></Checkbox>
            <Label>Yoga</Label>
          </div>
        </CheckboxWrapper>
        <Headline>
          Deine <img type="image" alt="heart" src={HeartLikeSmall}></img>{' '}
          Übungen:{' '}
        </Headline>
        {/*     <LikedExercisesWrapper>
          <LikedExerciseImage isLiked={isLiked}>Hallo</LikedExerciseImage>
          <LikedExerciseTitle>{title}</LikedExerciseTitle>
        </LikedExercisesWrapper> */}
        <SubmitButton type="submit" value="Workout speichern"></SubmitButton>
      </StyledForm>
      <Footer></Footer>
    </CreateGrid>
  )
}
/* 
const LikedExercisesWrapper = styled.section`
  border-radius: 5px;
  border: solid 2px #647d91;
  height: 50px;
  width: 300px;
`
const LikedExerciseImage = styled.img`
  height: 20px;
  width: 20px;
`
const LikedExerciseTitle = styled.div`
  color: #647d91;
` */

const CreateGrid = styled.div`
  display: grid;
  grid-template-rows: 60px auto 55px;
  gap: 20px;
`
const StyledForm = styled.div`
  margin-left: 10px;
  overflow-y: scroll;
`

const WorkoutNameInput = styled.input`
  border: solid 2px #647d91;
  border-radius: 5px;
  height: 30px;
  width: 340px;
  margin-top: 5px;
`

const Headline = styled.h1`
  font-size: 17px;
  color: #647d91;
  margin-top: 40px;
`
const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`
const Checkbox = styled.input`
  border: 1px solid #647d91;
  height: 18px;
  width: 18px;
`

const Label = styled.label`
  font-size: 14px;
  color: #647d91;
`

const SubmitButton = styled.input`
  background: #647d91;
  color: white;
  width: 130px;
  height: 30px;
  padding: 5px;
  border: 2px solid transparent;
  border-radius: 3px;
`
