import styled from 'styled-components/macro'
import React from 'react'
import HeartLike from './Icons/HeartLike.svg'
import HeartUnlike from './Icons/HeartUnlike.svg'

export default function({ heartOnClick, isLiked }) {
  const showLike = isLiked ? HeartLike : HeartUnlike

  return (
    <HeartBookmarkStyled
      src={showLike}
      isLiked={isLiked}
      onClick={heartOnClick}
    ></HeartBookmarkStyled>
  )
}

const HeartBookmarkStyled = styled.img`
  margin-left: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
`
