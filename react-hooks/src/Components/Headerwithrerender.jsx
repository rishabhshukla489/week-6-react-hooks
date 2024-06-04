import { useState } from "react"
export function Headerwithrerender(){
    const [title, setTitle] = useState("My Name is ")
    function updateTitle(){
        setTitle("MY NAME IS "+ Math.random())
      }
    return <div>
        <button onClick={updateTitle}>Update the title</button>
        <div>{title}</div>
        </div>
   
}