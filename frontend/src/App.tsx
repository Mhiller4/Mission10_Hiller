import { useState } from 'react'

import './App.css'
import BowlerList from './BowlerList'

function Welcome(){

  return(
  <h1> Players for the Marlins and Sharks Teams</h1>
  )
}

function App() {
  return (
    <>
      <Welcome/>
      <BowlerList/>
    </>
  )
}

export default App
