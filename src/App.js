import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { useState, useEffect } from 'react'


const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish CP challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];

const App = () => {

  const [tasks, setTasks] = useState(data)

  const [filterStatus, setFilterStatus] = useState("all")

  useEffect(() => {
    if (filterStatus === "active") {
      console.log("Active")
    } else if (filterStatus === "completed") {
      console.log("Completed")
    } else {
      console.log("All")
    }
  }, [filterStatus])

  return (
    <div className="App">
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
          filterStatus={filterStatus}
          tasks={tasks}
          setTasks={setTasks}
          setFilterStatus={setFilterStatus}
        />
      </div>
    </div>
  );
}

export default App;
