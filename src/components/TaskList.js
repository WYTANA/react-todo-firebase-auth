import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'

// Holds tasks and footer items
const TaskList = () => {
    return (
        <div className="task-list-wrapper">
            <div className="task-list">
                {/* Map through an array of todos */}
                {

                }
                <Task />
                <Task />
                <Task />
            </div>

            <div className="task-items-info">
                {/* Bottom-left of app */}
                <div className="items-left">
                    5 items left
                </div>

                <FilterControl />

                {/* Bottom-right of app */}
                <div className="items-clear">
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    )
}

export default TaskList