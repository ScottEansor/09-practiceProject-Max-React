import { useState } from "react";
import SideBar from "../src/components/SideBar";
import NoProjectsView from "./components/NoProjectsView";
import ProjectView from "./components/ProjectView";
function App() {
  const [existingProjects, setExistingProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleCreateProject(newProject) {
    setExistingProjects((prevProjects) => [...prevProjects, newProject]);
  }
  return (
    <div className="app-container">
      <SideBar></SideBar>
      {existingProjects.length > 0 ? (
        <ProjectView projects={existingProjects} />
      ) : (
        <NoProjectsView onCreateProject={handleCreateProject} />
      )}
    </div>
  );
}

export default App;
