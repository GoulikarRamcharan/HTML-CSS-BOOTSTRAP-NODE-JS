import React, { useState } from 'react'


function Calculator() {

    let [counter,setCounter] = useState(0) 
    

    let btnHandler = ()=>{
       setCounter(counter +1)
        console.log("btn clicked",counter)

    }
  return (
    <div>
        <h2>Counter : {counter}</h2>
        <button onClick={btnHandler}>Increment</button>
    </div>
  )
}

export default Calculator