import "./ToDoCard.css";

const ToDoCard = ({ children, idx, deleteTask }) => {
  console.log(children);
  // const handleDelete = () => {
  //   deleteTask(idx);
  // };
  /**
   onClick attribute - expect a function
	- onClick = {deleteTask()}
	- onClick = {deleteTask}
	- onClick = {() => deleteTask(someParameter)}

   */
  return (
    <div className="card-box">
      <span>{children}</span>
      <span style={{ cursor: "pointer" }} onClick={() => deleteTask(idx)}>
        {" "}
        ❌{" "}
      </span>
    </div>
  );
};

export default ToDoCard;
