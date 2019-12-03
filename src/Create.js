import styled from 'styled-components/macro'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeartLikeSmall from './Icons/HeartLikeSmall.svg'
import LikedExerciseList from './LikedExerciseList'

export default function Create({ exercises }) {
  return (
    <div>
      <StyledFormGrid>
        <Header></Header>
        <CreateGrid>
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

          <LikedExercisesWrapper>
            <Headline>
              Deine <img type="image" alt="heart" src={HeartLikeSmall}></img>{' '}
              Übungen:{' '}
            </Headline>
            {exercises
              .filter(exercise => exercise.isLiked === true)
              .map(exercise => (
                <LikedExerciseList
                  title={exercise.title}
                  image={exercise.image}
                  key={exercise.id}
                  isLiked={exercise.isLiked}
                />
              ))}
          </LikedExercisesWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <SubmitButton
              type="submit"
              value="Workout speichern"
            ></SubmitButton>
          </div>
        </CreateGrid>
        <Footer />
      </StyledFormGrid>
    </div>
  )
}

const LikedExercisesWrapper = styled.div`
  display: grid;
`

const CreateGrid = styled.div`
  display: grid;
  grid-template-rows: 60px auto 55px;
  gap: 20px;
  overflow-y: scroll;
  margin-left: 10px;
`

const StyledFormGrid = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const WorkoutNameInput = styled.input`
  border: solid 1.5px #647d91;
  border-radius: 1px;
  height: 30px;
  width: 340px;
  margin-top: 5px;
`

const Headline = styled.h1`
  font-size: 17px;
  color: #647d91;
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
  margin-bottom: 20px;
`
