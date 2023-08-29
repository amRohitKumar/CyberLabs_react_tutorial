import { useState } from "react";
import { Header, InputBox, ToDoCard } from "./components";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const addTask = (taskText) => {
    setTasks((currTasks) => [...currTasks, taskText]);
  }
  return (
    <div className="home-component">
      <Header />
      <InputBox />
      <div className="tasks-container">
        {tasks.map((task, idx) => {
          return <ToDoCard  />
        })}
      </div>
    </div>
  );
}

export default App;
