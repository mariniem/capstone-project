import styled from 'styled-components/macro'
import React, { useState } from 'react'
import HeartLikeSmall from '../Icons/HeartLikeSmall.svg'
import LikedExerciseItem from './LikedExerciseItem'

export default function Create({ exercises, onSubmit }) {
  const [checkedExercises, setCheckedExercises] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data['exercises'] = [...checkedExercises]

    if (data['category'] === undefined) {
      alert('Bitte Kategorie auswählen')
      return
    }

    if (checkedExercises.length === 0) {
      alert('Bitte mindestens eine Übung auswählen')
      return
    }
    alert('Dein Workout wurde erfolgreich gespeichert.')

    onSubmit(data)
    form.reset()
    setCheckedExercises([])
    form.title.focus()
  }

  function handleOnExerciseCheckChange(e) {
    const id = e.target.name
    const isChecked = e.target.checked

    if (isChecked === true) {
      setCheckedExercises([...checkedExercises, id])
    } else {
      const index = checkedExercises.findIndex(exercise => exercise === id)

      setCheckedExercises([
        ...checkedExercises.slice(0, index),
        ...checkedExercises.slice(index + 1),
      ])
    }
  }

  return (
    <div>
      <CreateGrid onSubmit={handleSubmit}>
        <Label>
          <Headline>Name deines individuellen Workouts:</Headline>
          <WorkoutNameInput
            type="text"
            id="title"
            name="workoutName"
            placeholder="Name deines Workouts"
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
                onChange={handleOnExerciseCheckChange}
              />
            ))}
        </LikedExercisesWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <SubmitButton type="submit" value="Workout speichern"></SubmitButton>
        </div>
      </CreateGrid>
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
