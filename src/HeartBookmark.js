import styled from 'styled-components/macro'
import React, { useState } from 'react'
import HeartLike from './Icons/Heart like.svg'
import HeartUnlike from './Icons/Heart unlike.svg'

export default function({ heartOnClick, isLiked }) {
  const showLike = isLiked ? HeartLike : HeartUnlike

  return (
    <HeartBookmarkStyled
      src={showLike}
      isLiked={isLiked}
      onClick={() => heartOnClick()}
    ></HeartBookmarkStyled>
  )
}

const HeartBookmarkStyled = styled.img`
  margin-left: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
`
