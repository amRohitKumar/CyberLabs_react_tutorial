import { useState } from "react";
import "./InputBox.css";

const InputBox = (props) => {
  // controlled input
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    props.addTask(text);
    setText("");
  }
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your task ..."
        className="input-box"
        value={text}
        onChange={handleText}
      />
      <button className="add-btn" type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default InputBox;
