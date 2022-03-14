import React from 'react'

const Task = ({ text }) => {
    return (
        <div className="task-item">
            <div className="check">
                <div className="checkmark">

                </div>
            </div>
            <div className="task-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Task