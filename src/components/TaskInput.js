import React from 'react'

const TaskInput = () => {
    return (
        <div className="task-input">
            <div className="check">
                <div className="checkmark">
                    {/* insert image here */}
                </div>
            </div>
            <div className="new-todo-input">
                <form>
                    <input type="text" id="todo-input" placeholder="What are you doing?" />
                </form>
            </div>
        </div>
    )
}

export default TaskInput