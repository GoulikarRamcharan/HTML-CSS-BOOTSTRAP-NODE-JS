import React from 'react'
import TodoList from './TodoList'

function Taskdata(props) {

    let dotask = (tasks) =>{

        let work = {
                    ...tasks ,
                    id : Math.random().toString()
        }
        
        props.gettask(work)
        console.log("in data transfer",work)
    }



  return (
    <div>
        <TodoList gettask={dotask}/>
    </div>
  )
}

export default Taskdata