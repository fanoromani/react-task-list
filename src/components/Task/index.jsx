import "./styles.css";

function deleteTask() {
  console.log(Task(""));
}

export function Task({ value, time }) {
  return (
    <div className="output-container">
      <div className="taskValue">
        <strong>{value}</strong>
        <small>{time}</small>
      </div>
      <button className="done">
        <i className="fa-solid fa-circle-check"></i>
      </button>
      <button className="delete" onClick={deleteTask}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
