import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <img className="rotate" src="./images/icon-sun.svg" alt="sun" />
        </div>
        {/* Add to Task Input component */}
        <div className="task-input">
          <div className="check">
            <div className="checkmark">
              {/* insert image here */}
            </div>
          </div>
          <div className="new-todo-input">
            <form>
              <input type="text" id="todo-input" placeholder="What's your task?" />
            </form>
          </div>
        </div>
        {/* Make a task list component */}
        <div className="task-list"></div>
      </div>
    </div>
  );
}

export default App;
