import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <img className="rotate" src="./images/icon-sun.svg" alt="sun" />
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
