import React, { useState } from 'react'

function TodoList(props) {

    let [inputtask,setTask] = useState("")

    let taskHandler = (e)=>{
        setTask(e.target.value)
    }

    let submitHandler = (e) =>{

        e.preventDefault()

        var task =  {
            tasks : inputtask
        }
        props.gettask(task)
        console.log("in todo",task)
        setTask("")
    }
  return (
    <div>
        <div>
        <form onSubmit={submitHandler}>
            <div>
            <input onChange={taskHandler} value={inputtask} />
            </div>
            <div>
                <button type='submit' >ADD</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default TodoList