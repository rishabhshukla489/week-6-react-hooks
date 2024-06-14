import { useEffect, useState } from 'react'

import axios from "axios";
import './App.css'


function App() {
  // const [todos, setTodos] = useState([])
  const [count, setCount] = useState(1)

  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/todos").then(function(response){
  //     setTodos(response.data.todos)
  //   })
  // },[])

  return  <div>
      {/* {todos.map(todo=><Todo id={3}  title={todo.title} description={todo.description} />  )} */}
      <button onClick={()=>{
        setCount(1)
      }}>1</button>
      <button onClick={()=>{
        setCount(2)
      }}>2</button>
      <button onClick={()=>{ 
        setCount(3)
      }}>3</button>
      <button onClick={()=>{
        setCount(4)
      }}>4</button>
      <Todo id={count}/>
    </div>
  
}

function Todo({id}){
  const [todo, setTodo] = useState({})
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id).then(function(response){
      setTodo(response.data.todo)
    })
  },[id])

  return <div>
    id:{id}
    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>
  </div>
}

{/* // function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h3>{description}</h3>
//   </div>
// } */}
export default App
