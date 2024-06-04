import { useState } from 'react'
import './App.css'
import React from 'react'
import { Header } from './Components/Header'

function App() {
  // const [title, setTitle] = useState("")

  return (
    <React.Fragment>
      <Header title={"hi"}/>
      <Header title={"rishabh"}></Header>
    </React.Fragment>
    
  )
}

export default App
