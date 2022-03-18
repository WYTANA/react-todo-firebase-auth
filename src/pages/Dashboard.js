import React from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, doc, setDoc } from 'firebase/firestore'
import db, { auth } from '../utils/firebase'

const Dashboard = () => {

    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [filterStatus, setFilterStatus] = useState("all")
    const [user, setUser] = useState({})

    // // Side effects for filter status and api call
    // useEffect(() => {
    //     const collectionRef = collection(db, "tasks")
    //     const unsub = onSnapshot(collectionRef, (snapshot) => {
    //         let todos = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

    //         // *** add function to sort tasks!! ******S

    //         const handleFilter = () => {
    //             if (filterStatus === "active") {
    //                 setFilteredTasks(todos.filter((task) => task.status === false))
    //             }
    //             else if (filterStatus === "completed") {
    //                 setFilteredTasks(todos.filter((task) => task.status === true))
    //             }
    //             else {
    //                 setFilteredTasks(todos)
    //             }
    //         }
    //         handleFilter()
    //     })
    //     // Clean up 
    //     return unsub
    // }, [filterStatus])


    useEffect(() => {
        // Check if user is logged in
        auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                // Keep track of user with state
                setUser(currentUser.uid)
            } else {
                console.log("ERROR! Please sign in.")
            }
        })
        // Grab the current user's tasks
        const docRef = doc(db, "users", `${user}`)
        const unsub = onSnapshot(docRef, (snapshot) => {
            // Get the array of tasks
            let todos = snapshot.data().tasks

            setFilteredTasks(todos)
        })
        return unsub
    }, [user])

    console.log(user)


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
                    userId={user}
                    filteredTasks={filteredTasks}
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