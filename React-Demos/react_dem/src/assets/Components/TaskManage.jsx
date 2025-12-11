import React, { useState } from 'react'
import Taskdata from './Taskdata'

function TaskManage(props) {

    let [todo, setTask] = useState([])

    let retriveddata = (task) => {
        console.log("in app", task)
        setTask(prev => [task, ...prev])
    }
    return (
        <div>
            <Taskdata gettask={retriveddata} />

            <ul>
                {
                    todo.map(tasks => (
                        <li key={tasks.id}>{tasks.tasks}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskManage