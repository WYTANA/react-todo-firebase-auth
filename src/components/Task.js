import React from 'react'
import { useState } from 'react'
import Check from "../images/icon-check.svg"
import { setDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'

// This component updates front and back ends and uses conditional rendering

const Task = ({ text, tasks, task, setTasks, filteredTasks, setFilteredTasks }) => {

    const [mutableTask, setMutableTask] = useState(task)
    // Conditional rendering 
    const checked = mutableTask.status ? "checked" : ""
    const checkIcon = mutableTask.status ? (<img src={Check} alt="completed" />) : ""


    // Update css and switch task status (boolean)
    const markCompleted = () => {
        console.log(filteredTasks)
        // Update/change front end status
        setMutableTask({ ...mutableTask, status: !mutableTask.status })

        // Update/change back end status on Firestore
        const docRef = doc(db, "tasks", task.id)
        const payload = { id: task.id, text: task.text, status: !task.status }
        console.log(payload)
        setDoc(docRef, payload)
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