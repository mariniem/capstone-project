import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Header from './Header'
import Footer from './Footer'

export default function AppLayout({ children, handleInput, searchInput }) {
  const [isSearchImageClicked, setIsSearchImageClicked] = useState(false)

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <HeaderContainer active={isSearchImageClicked}>
        <Header
          handleInput={handleInput}
          searchInput={searchInput}
          handleClick={() => setIsSearchImageClicked(!isSearchImageClicked)}
          active={isSearchImageClicked}
        />
      </HeaderContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>

      <ContentContainer active={isSearchImageClicked}>
        {children}
      </ContentContainer>
    </div>
  )
}

const HeaderContainer = styled.div`
  border-bottom: 1.5px solid #647d91;
  height: ${props => (props.active ? '70px' : '50px')};
  display: grid;
  justify-items: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
`

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  background: #647d91;
  height: 55px;
  width: 100%;
  border: 1px solid transparent;
  bottom: 0px;
  position: absolute;
  left: 0px;
  right: 0px;
`

const ContentContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: ${props => (props.active ? '70px' : '50px')};
  overflow-y: scroll;
  bottom: 55px;
`
