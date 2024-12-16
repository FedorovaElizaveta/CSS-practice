import { Link, useLocation } from "react-router-dom";

const ProjectList = () => {
  const location = useLocation();

  const projects = [
    {
      id: 1,
      name: "Pokeball",
      path: "/pokeball",
    },
    {
      id: 2,
      name: "Hexagon",
      path: "/hexagon",
    },
  ];

  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={project.path} state={{ from: location.pathname }}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
