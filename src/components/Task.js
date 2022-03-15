import React from 'react'
import { useState } from 'react'
import Check from "../images/icon-check.svg"

const Task = ({ text, tasks, task, setTasks, setFilteredTasks }) => {

    const [mutableTask, setMutableTask] = useState(task)

    // Conditional rendering 
    const checked = mutableTask.status ? "checked" : ""
    const checkIcon = mutableTask.status ? (<img src={Check} alt="completed" />) : ""

    // Update css and switch task status
    const markCompleted = () => {
        console.log(tasks)
        // Update/change front end status
        setMutableTask({ ...mutableTask, status: !mutableTask.status })

        // Update/change back end status
        const updatedTasks = tasks.map((item) => {
            return task.id === item.id ? { ...item, status: !item.status } : item
        })
        setTasks(updatedTasks)
    }

    return (
        <div className="task-item">
            <div className="check" onClick={markCompleted}>
                <div className={`checkmark ${checked}`}>
                    {checkIcon}
                </div>
            </div>
            <div className={`task-text ${checked}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Task