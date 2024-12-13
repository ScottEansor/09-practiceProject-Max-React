//title
//add porject button
//list of added project
export default function SideBar({ projects, onAddProject, onSelectProject }) {
  function handleAddProject() {
    const name = prompt("Enter project name:");
    const description = prompt("Enter project description:");
  }
  return (
    <>
      <div className="sideBar-container">
        <header>Your Projects</header>
        <button className="sideBar-button" onClick={handleAddProject}>
          + Add Project
        </button>
        <ul>
          <li>test 1</li>
          <li>test 2</li>
        </ul>
      </div>
    </>
  );
}
