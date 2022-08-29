import "./styles.css";

export function Task(props) {
  return (
    <div className="output-container">
      <div>{props.value}</div>
      <button className="done">
        <i className="fa-solid fa-circle-check"></i>
      </button>
      <button className="delete">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
