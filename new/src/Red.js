import React, { useReducer } from 'react'



export default function Red() {
    const[state,dispatch]=useReducer(counterReducer,{count:10})

  return (
    <div>
        <p>Count:</p>
        <button onClick={() =>dispatch ({type:"In"})}>ADD</button>
        <button onClick={() =>dispatch ({type:"De"})}>SUB</button>
    </div>
  )
}
