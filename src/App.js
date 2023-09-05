import { useState } from "react";
import { Header, InputBox, ToDoCard } from "./components";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  // const tasks = [] // normal variable
  // console.log(tasks);
  const addTask = (newTaskText) => {
    setTasks((currTasks) => [...currTasks, newTaskText]);
    // tasks.push(newTaskText)
    // console.log(tasks);
    // setTasks(newTaskText); // this will tell react to rerender this component
  };
  const deleteTask = (idx) => {
    // console.log("deleting task with idx = ", idx);
    // Method 1
    // tasks.splice(idx, 1);
    // Issue - view is not updating
    // Conclusion - don't directly change the state variable , always use the set function

    // Method 2
    // setTasks((currTasks) => {
    //   const updatedTasks = currTasks;// updatedtasks = ['first' , 'second']
    //   updatedTasks.splice(idx, 1); // updatetasks = ['first']
    //   console.log(updatedTasks);
    //   return updatedTasks;
    // })
    // Conclusiong - create deep copy of the variable
    
    // Method 3 
    setTasks((currTasks) => {
      const updatedTasks = [...currTasks];// updatedtasks = ['first' , 'second']
      updatedTasks.splice(idx, 1); // updatetasks = ['first']
      console.log(updatedTasks);
      return updatedTasks;
    })

    // console.log(tasks)
  };
  return (
    <div className="home-component">
      <Header />
      <InputBox addTask={addTask} />
      <div className="tasks-container">
        {tasks.map((task, idx) => {
          return (
            <ToDoCard key={idx} idx={idx} deleteTask={deleteTask}>
              {task}
            </ToDoCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;
