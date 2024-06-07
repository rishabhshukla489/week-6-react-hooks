import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
      <CardWrapper1><div>hi there</div></CardWrapper1>
      <CardWrapper1><TextComponent/></CardWrapper1>
    </>
  )
}

function CardWrapper({innerComponent}){
  return <div style={{border:"2px solid black",padding:20}}>
    {innerComponent}
  </div>
}
function CardWrapper1({children}){
  console.log(children)
  return <div style={{border:"2px solid black",padding:20}}>
    {children}
  </div>
}

function TextComponent(){
  return <div>
    hi thereeeedede
  </div>
}



export default App
