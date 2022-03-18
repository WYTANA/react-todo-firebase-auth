import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'
import { deleteDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'

// This component maps through tasks, holds the delete doc function, and displays filter and "items left" status

const TaskList = ({ setFilteredTasks, filteredTasks, filterStatus, tasks, setTasks, setFilterStatus, userId }) => {

    // Delete doc (filtered tasks) with Firebase
    const clearCompleted = () => {
        filteredTasks.forEach((item) => {
            const docRef = doc(db, "tasks", item.id)
            if (item.status === true) {
                deleteDoc(docRef)
            }
        })
    }

    return (
        <div className="task-list-wrapper">
            <div className="task-list">
                {/* Map through an array of todos */}
                {
                    filteredTasks.map((task) => {
                        return <Task
                            key={task.id}
                            text={task.text}
                            status={task.status}
                            task={task}
                            setTasks={setTasks}
                            tasks={tasks}
                            filteredTasks={filteredTasks}
                            setFilteredTasks={setFilteredTasks}
                            userId={userId}
                        />
                    })
                }
            </div>

            <div className="task-items-info">
                {/* Bottom-left of app */}
                <div className="items-left">
                    {filteredTasks.length} items left
                </div>
                {/* Bottom-middle of app */}
                <FilterControl
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                />
                {/* Bottom-right of app */}
                <div className="items-clear">
                    <span onClick={clearCompleted}>Clear Completed</span>
                </div>
            </div>
        </div>
    )
}

export default TaskList