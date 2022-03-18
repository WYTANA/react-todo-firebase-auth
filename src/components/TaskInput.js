import React from 'react'
import { useState } from 'react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import db from '../utils/firebase'

const TaskInput = ({ tasks, setTasks, userId, filteredTasks }) => {

    const [input, setInput] = useState("")

    const handleChange = e => setInput(e.target.value)

    const generateId = (array) => {
        const taskIds = array.map(item => item.id)
        if (taskIds.length === 0) {
            return 0
        } else {
            return Math.max(...taskIds) + 1
        }
    }

    // Store on Firestore DB
    const handleForm = async (e) => {
        e.preventDefault()
        if (input) {

            // Create task object
            const newTask = {
                text: input.trim(),
                status: false,
                id: generateId(filteredTasks)
            }
            // Get current users' tasks THEN add the new task to that array
            let tasksRef = filteredTasks
            tasksRef.push(newTask)

            const docRef = doc(db, "users", userId)
            const payload = { tasks: tasksRef }
            setDoc(docRef, payload)
            setInput("")
        }
    }

    return (
        <div className="task-input">
            <div className="check">
                <div className="checkmark">
                    {/* insert image here */}
                </div>
            </div>
            <div className="new-todo-input">
                <form onSubmit={handleForm}>
                    <input
                        value={input}
                        type="text"
                        onChange={handleChange}
                        id="todo-input"
                        placeholder="What are you doing?"
                    />
                </form>
            </div>
        </div>
    )
}

export default TaskInput