import TasksView from "../components/TasksView";
import React, { useState } from "react";

export default function ProjectView({ project }) {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  return (
    <div className="project-view-container">
      <h2>Project Name:</h2>
      <h1>{project.name}</h1>
      <h4>Description</h4>
      <h3>{project.description}</h3>
      <TasksView tasks={tasks} onAddTask={handleAddTask} />
    </div>
  );
}
//task view here
