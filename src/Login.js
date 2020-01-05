import styled from 'styled-components/macro'
import React from 'react'
import HeadlineOne from './GlobalComponents/HeadlineOne'
import InputField from './GlobalComponents/InputField'
import Button from './GlobalComponents/SubmitButton'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const history = useHistory()

  return (
    <LoginWrapper onSubmit={handleOnSubmit}>
      <Label>
        <HeadlineOne>Dein Name oder E-Mail Adresse:</HeadlineOne>
        <InputField
          type="text"
          id="name"
          name="name or email adress"
          placeholder="Name oder E-Mail Adresse"
          required
        ></InputField>
      </Label>

      <Label>
        <HeadlineOne>Passwort:</HeadlineOne>
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="Passwort"
          required
        ></InputField>
      </Label>

      <Button value="Anmelden" type="submit" />
    </LoginWrapper>
  )

  function handleOnSubmit(event) {
    event.preventDefault()

    history.push('/home')
  }
}

const LoginWrapper = styled.form`
  margin-left: 20px;
`
const Label = styled.label`
  font-size: 14px;
  color: #647d91;
`
