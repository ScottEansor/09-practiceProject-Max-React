import { useState } from "react";
export default function NoProjectView({ onCreateProject }) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  function handleCreateProject() {
    if (projectName.trim() && projectDescription.trim()) {
      const newProject = {
        name: projectName,
        description: projectDescription,
      };
      onCreateProject(newProject);
      setProjectName("");
      setProjectDescription("");
    } else {
      alert("please fill out all fields");
    }
  }

  return (
    <>
      <div className="no-projects-container">
        <h1>No projects have been created</h1>
        <input
          type="text"
          placeholder="Enter Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <button onClick={handleCreateProject}>Create Project</button>
      </div>
    </>
  );
}
