import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Globalstyle from './GlobalStyle'
import Create from './Create'
import Grid from './Grid'

export default function PersonalWorkoutList({ onSubmit }) {
  return (
    <Grid>
      <Globalstyle />
      <Header></Header>
      <Create onSubmit={onSubmit}></Create>
      <Footer></Footer>
    </Grid>
  )
}
