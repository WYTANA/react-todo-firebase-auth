import React from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { useState, useEffect } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import db from '../utils/firebase'

const Dashboard = () => {

    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [filterStatus, setFilterStatus] = useState("all")

    // Side effects for filter status and api call
    useEffect(() => {
        const collectionRef = collection(db, "tasks")
        const unsub = onSnapshot(collectionRef, (snapshot) => {
            let todos = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setFilteredTasks(todos)

            // *** add function to sort tasks!! ******S

            const handleFilter = () => {
                if (filterStatus === "active") {
                    setFilteredTasks(todos.filter((task) => task.status === false))
                }
                else if (filterStatus === "completed") {
                    setFilteredTasks(todos.filter((task) => task.status === true))
                }
                else {
                    setFilteredTasks(todos)
                }
            }
            handleFilter()
        })
        // Clean up 
        return unsub
    }, [filterStatus])

    return (
        <div className="Dashboard">
            <div className="container">
                <div className="header">
                    <h1>TODO</h1>
                    <img className="rotate" src="./images/icon-sun.svg" alt="sun" />
                </div>
                <TaskInput
                    tasks={tasks}
                    setTasks={setTasks}
                />
                <TaskList
                    filteredTasks={filteredTasks}
                    filterStatus={filterStatus}
                    tasks={tasks}
                    setTasks={setTasks}
                    setFilterStatus={setFilterStatus}
                    setFilteredTasks={setFilteredTasks}
                />
            </div>
        </div>
    )
}

export default Dashboard