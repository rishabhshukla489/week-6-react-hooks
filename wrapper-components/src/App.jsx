import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
      <CardWrapper innerComponent={<TextComponent2/>}></CardWrapper>
    </>
  )
}

function CardWrapper({innerComponent}){
  return <div style={{border:"2px solid black",padding:20}}>
    {innerComponent}
  </div>
}

function TextComponent(){
  return <div>
    hi there
  </div>
}

function TextComponent2(){
  return <div>
    hi thereeeee
  </div>
}

export default App
