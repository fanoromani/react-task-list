import "./styles.css";
import { Task } from "../../components/Task";

export function Home() {
  return (
    <>
      <div className="input-container">
        <h1>Task List</h1>
        <form>
          <input type="text" placeholder="Enter Task" autoFocus />
          <button type="submit">Add</button>
        </form>
      </div>
      <Task value="fazer coco" />
      <Task />
    </>
  );
}
