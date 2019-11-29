import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  min-width: 0;
}

:root {
margin: 0px;
font-family: 'Nunito', sans-serif;
}

body {
  margin: 0;
}
`

export default GlobalStyle
