import styled from 'styled-components/macro'
import React from 'react'
import Button from './GlobalComponents/SubmitButton'
import loginPicture from './Icons/LoginPicture.jpg'
import traynLogo from './Icons/LoginTraynLogo.svg'
import { useSpring, animated } from 'react-spring'

export default function Login({ onLogged }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2500 },
  })

  return (
    <>
      <LoginPicture src={loginPicture} />
      <LoginWrapper onSubmit={handleOnSubmit}>
        <Logo src={traynLogo} />
        <Textfield style={props}>
          Herzlich Willkommen in deiner persönlichen Workout-App: Let's TRAYN
        </Textfield>
        <Label>
          <Headline>Benutzer</Headline>
          <InputField
            type="text"
            id="name"
            name="name or email adress"
            placeholder="Name oder E-Mail Adresse"
            required
          ></InputField>
        </Label>

        <Label>
          <Headline>Passwort</Headline>
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
    </>
  )

  function handleOnSubmit(event) {
    event.preventDefault()
    onLogged()
  }
}

const LoginWrapper = styled.form`
  display: grid;
  justify-items: center;
  gap: 10px;
`
const LoginPicture = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.4;
  object-fit: cover;
`

const Logo = styled.img`
  margin: 70px 0 50px 0;
`

const Label = styled.label`
  font-size: 14px;
  color: #647d91;
`
const InputField = styled.input`
  border: solid 1px #647d91;
  border-radius: 1px;
  height: 30px;
  width: 180px;
  margin-top: 5px;
`

const Headline = styled.p`
  font-size: 18px;
  color: #647d91;
  margin-bottom: 1px;
`

const Textfield = styled(animated.div)`
  color: #86919f;
  text-align: center;
`
