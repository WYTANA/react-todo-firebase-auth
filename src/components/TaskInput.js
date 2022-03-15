import React from 'react'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import db from '../utils/firebase'

const TaskInput = ({ tasks, setTasks }) => {

    const [input, setInput] = useState("")

    const handleChange = e => setInput(e.target.value)

    // Store on Firestore DB
    const handleForm = async (e) => {
        e.preventDefault()
        // access container
        const collectionRef = collection(db, "tasks")
        // add doc
        const payload = {
            text: input.trim(),
            status: false,
        }

        await addDoc(collectionRef, payload)
        setInput("")
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