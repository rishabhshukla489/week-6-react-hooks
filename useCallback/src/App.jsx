import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const a=useCallback(function(){
    console.log("hi there")
  },[])

  // const a=function(){
  //   console.log("hi there")
  // }

  return (
    <>
      

      <div>
        <button onClick={()=>{
          setCount(count+1)
        }}>{count}</button>

        <Demo a={a}></Demo>
      </div>
      
    </>
  )
}
// const Demo= React.memo(()=>{({a})=>{
//   console.log("rerender");
// return <div>
//   {a}
// </div>
// }})
function Demo({a}){
  console.log("rerender");
   <div>
  {a}
</div>
}
export default App
