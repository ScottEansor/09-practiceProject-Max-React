import { useState } from "react";
import SideBar from "../src/components/SideBar";
import NoProjectsView from "./components/NoProjectsView";
import ProjectView from "./components/ProjectView";
function App() {
  const [existingProjects, setExistingProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleCreateProject(newProject) {
    setExistingProjects((prevProjects) => [...prevProjects, newProject]);
    setSelectedProject(newProject);
  }
  function handleSelectProject(project) {
    setSelectedProject(project);
  }
  return (
    <div className="app-container">
      <SideBar
        projects={existingProjects}
        onAddProject={handleCreateProject}
        onSelectProject={handleSelectProject}
      />
      {selectedProject ? (
        <ProjectView project={selectedProject} />
      ) : (
        <NoProjectsView onCreateProject={handleCreateProject} />
      )}
    </div>
  );
}

export default App;
