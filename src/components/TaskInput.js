import React from 'react'
import { useState } from 'react'

const TaskInput = ({ tasks, setTasks }) => {

    const [input, setInput] = useState("")

    const handleChange = e => setInput(e.target.value)


    const handleForm = (e) => {
        e.preventDefault()

        const generateId = (array) => {
            const taskIds = array.map(item => item.id)
            return Math.max(...taskIds) + 1
        }

        const newTask = {
            id: generateId(tasks),
            text: input,
            status: false,
        }

        setTasks([newTask, ...tasks])
        setInput("")
        console.log(tasks)
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
                        onChange={handleChange}
                        value={input}
                        type="text"
                        id="todo-input"
                        placeholder="What are you doing?"
                    />
                </form>
            </div>
        </div>
    )
}

export default TaskInput