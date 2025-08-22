import { useState } from 'react'
import data from './fixtures/cardstextData'
import './App.css'
import CardText from './assets/components'

function App() { 

  return (
    <>
       <CardText {...data[0]} />
    </>
  )
}

export default App
