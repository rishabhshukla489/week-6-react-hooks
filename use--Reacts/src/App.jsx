import { useEffect, useState } from 'react'

import './App.css'
import { Todos } from './assets/Components/Todos'
function App() {
  const [todos, setTodos] = useState([])
  useEffect(function(){
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos?a=1&b=2").then(
      async(res)=>{
        const json=await res.json();
        setTodos(json.todos);
      }
    )
    },10000)
    
  },[ ])

  return (
    <div>
     <Todos todos={todos}></Todos> 
    </div>
  )
}

export default App
