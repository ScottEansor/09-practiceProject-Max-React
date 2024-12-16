import React, { useState } from "react";

export default function TasksView({ tasks, onAddTask }) {
  const [task, setTask] = useState("");

  function handleAddTask() {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    } else {
      alert("please enter task");
    }
  }
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      ) : (
        <p>No tasks added yet</p>
      )}
    </div>
  );
}
