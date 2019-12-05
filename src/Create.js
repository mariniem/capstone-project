import styled from 'styled-components/macro'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeartLikeSmall from './Icons/HeartLikeSmall.svg'
import LikedExerciseItem from './LikedExerciseItem'

/* import PropTypes from 'prop-types' */

export default function Create({ exercises, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(form)
    onSubmit(data)
    //form.reset()
    form.title.focus()
  }
  return (
    <div>
      <StyledFormGrid>
        <Header></Header>
        <CreateGrid onSubmit={handleSubmit}>
          <Label>
            <Headline>Name deines Workouts:</Headline>
            <WorkoutNameInput
              type="text"
              id="title"
              name="workoutName"
              required
            ></WorkoutNameInput>
          </Label>

          <Wrapper>
            <Headline>Kategorie:</Headline>
            <CheckboxWrapper>
              <div>
                <RadioButton
                  type="radio"
                  name="category"
                  value="kraft"
                ></RadioButton>
                <Label>Kraft</Label>
              </div>
              <div>
                <RadioButton
                  type="radio"
                  name="category"
                  value="cardio"
                ></RadioButton>
                <Label>Cardio</Label>
              </div>
              <div>
                <RadioButton
                  type="radio"
                  name="category"
                  value="yoga"
                ></RadioButton>
                <Label>Yoga</Label>
              </div>
            </CheckboxWrapper>
          </Wrapper>

          <LikedExercisesWrapper>
            <Headline>
              Deine <img type="image" alt="heart" src={HeartLikeSmall}></img>{' '}
              Übungen:{' '}
            </Headline>
            {exercises
              .filter(exercise => exercise.isLiked === true)
              .map(exercise => (
                <LikedExerciseItem
                  id={exercise._id}
                  title={exercise.title}
                  image={exercise.image}
                  key={exercise._id}
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

const Wrapper = styled.div`
  margin-top: 39px;
`

const LikedExercisesWrapper = styled.div`
  display: grid;
  margin-top: 25px;
`

const CreateGrid = styled.form`
  overflow-y: scroll;
  margin-left: 20px;
`

const StyledFormGrid = styled.div`
  display: grid;
  grid-template-rows: 60px auto 55px;
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
  margin-top: 20px;
`
const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

const RadioButton = styled.input`
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
  margin: 30px 0;
`

/* Create.propTypes = {
  Headline: PropTypes.string.isRequired,
} */
