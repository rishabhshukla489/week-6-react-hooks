import { useCallback } from "react";
import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const onClick=useCallback( function onClick() {
    console.log("child clicked")
  },[])
  console.log(onClick)

  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({onClick}) => {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App;