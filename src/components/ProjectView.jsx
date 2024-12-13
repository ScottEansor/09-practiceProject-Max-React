// project title
//date created
//description
export default function ProjectView({ project }) {
  return (
    <div className="project-view-container">
      <h1>{project.name}</h1>
      <h3>{project.description}</h3>
    </div>
  );
}
//task view here
