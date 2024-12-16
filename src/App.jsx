import { useState } from "react";
import SideBar from "../src/components/SideBar";
import NoProjectsView from "./components/NoProjectsView";
import ProjectView from "./components/ProjectView";
function App() {
  const [existingProjects, setExistingProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleCreateProject(newProject) {
    const projectWithTasks = { ...newProject, tasks: [] };
    setExistingProjects((prevProjects) => [...prevProjects, projectWithTasks]);
    setSelectedProject(projectWithTasks);
  }
  function handleSelectProject(project) {
    setSelectedProject(project);
  }
  function handleAddTaskToProject(task) {
    const updatedProjects = existingProjects.map((project) => {
      if (project.name === selectedProject.name) {
        return { ...project, tasks: [...project.tasks, task] };
      }
      return project;
    });
    setExistingProjects(updatedProjects);
    setSelectedProject((prev) => ({
      ...prev,
      tasks: [...prev.tasks, task],
    }));
  }
  return (
    <div className="app-container">
      <SideBar
        projects={existingProjects}
        onAddProject={handleCreateProject}
        onSelectProject={handleSelectProject}
      />
      {selectedProject ? (
        <ProjectView
          project={selectedProject}
          onAddTask={handleAddTaskToProject}
        />
      ) : (
        <NoProjectsView onCreateProject={handleCreateProject} />
      )}
    </div>
  );
}

export default App;
