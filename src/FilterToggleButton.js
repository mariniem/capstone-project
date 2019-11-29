import styled from 'styled-components/macro'
import React from 'react'

export default function FilterToggleButton({ isLiked, heartOnClick }) {
  const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 10em;
    height: 3.5em;
    left: 240px;
    top: 0px;
    font-size: 14px;
    color: #647d91;
  `
  const Checkbox = styled.input`
    display: none;
  `

  const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 1.5em;
    left: 3.2em;
    width: 3.4em;
    height: 1.49em;
    background-color: ${props => (props.isLiked ? '#DAA39F' : '#647d91')};
    border-radius: 1em;
    transition: all 0.3s ease-in-out;

    &::before {
      position: absolute;
      content: '';
      height: 1.2em;
      width: 1.2em;
      left: 0.2em;
      bottom: 0.2em;
      background-color: white;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      transform: ${props =>
        props.isLiked ? 'translateX(1.9em)' : 'translateX(0em)'};
    }
  `

  return (
    <Label
      onClick={() => {
        heartOnClick()
      }}
    >
      only liked exercises
      <Checkbox type="checkbox" />
      <Slider isLiked={isLiked}></Slider>
    </Label>
  )
}
