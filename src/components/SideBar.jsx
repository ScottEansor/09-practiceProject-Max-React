//title
//add porject button
//list of added project
export default function SideBar({ projects, onAddProject, onSelectProject }) {
  function handleAddProject() {
    const name = prompt("Enter project name:");
    const description = prompt("Enter project description:");

    if (name && description) {
      const newProject = { name, description };
      onAddProject(newProject);
    } else {
      alert("please provide both description and project name");
    }
  }

  return (
    <>
      <div className="sideBar-container">
        <header>Your Projects</header>
        <button className="sideBar-button" onClick={handleAddProject}>
          + Add Project
        </button>
        <ul>
          {projects.map((project, index) => {
            return (
              <li key={index} onClick={() => onSelectProject(project)}>
                {project.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
