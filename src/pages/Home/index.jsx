import React, { useState } from "react";
import "./styles.css";
import { Task } from "../../components/Task";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  function appendTask(e) {
    const newTask = {
      value: inputValue,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    e.preventDefault();
    if (newTask.value === "") return;
    setTaskList((prevState) => [...prevState, newTask]);
    setInputValue("");
  }
  function deleteTask(value) {
    setTaskList(taskList.filter((task) => task.value !== value));
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" onClick={appendTask}>
            Add
          </button>
        </form>
      </div>
      {taskList.map((task) => (
        <Task
          value={task.value}
          time={task.time}
          key={task.time}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
}
