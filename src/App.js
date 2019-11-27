import React, { useState } from 'react'
import ExerciseList from './ExerciseList'
/* import Globalstyle from './GlobalStyle' */

function App() {
  const [isLiked, setIsLiked] = useState(false)
  function heartOnClick() {
    setIsLiked(() => !isLiked)
  }
  return (
    <div>
      {/* <Globalstyle></Globalstyle> */}
      <ExerciseList heartOnClick={heartOnClick} isLiked={isLiked} />
    </div>
  )
}

export default App
