import React, { useState } from "react";
import "./styles.css";
import { Task } from "../../components/Task";

export function Home() {
  const [inputValue, setInputValue] = useState();
  const [taskList, setTaskList] = useState([]);

  function appendTask(e) {
    const newTask = inputValue;
    e.preventDefault();

    setTaskList([newTask]);
  }

  return (
    <>
      <div className="input-container">
        <h1>Task List</h1>
        <form>
          <input
            type="text"
            placeholder="Enter Task"
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" onClick={appendTask}>
            Add
          </button>
        </form>
      </div>
      {taskList.map((task) => (
        <Task value={task} />
      ))}
    </>
  );
}
