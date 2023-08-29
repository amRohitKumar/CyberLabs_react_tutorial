import "./InputBox.css";

const InputBox = () => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your task ..."
        className="input-box"
      />
      <button className="add-btn">Add</button>
    </div>
  );
};

export default InputBox;
