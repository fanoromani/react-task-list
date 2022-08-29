import "./styles.css";

export function Task({ value, time, deleteTask }) {
  return (
    <div className="output-container">
      <div className="taskValue">
        <strong>{value}</strong>
        <small>{time}</small>
      </div>
      <button className="done">
        <i className="fa-solid fa-circle-check"></i>
      </button>
      <button className="delete" onClick={(e) => deleteTask(value)}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
