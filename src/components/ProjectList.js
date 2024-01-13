import React from "react";
import ProjectItem from "./ProjectItem";
import App from './App'

// In the ProjectList component, a prop of projects is being passed down from the App component with an array of objects (I.E : projects={user.projects}). For each object in the array, render one ProjectItem component with the correct props. Use the id of the project for the key prop.


function ProjectList({ projects }) {
  console.log(projects);

  const ProjectCard = projects.map((project) => {
    return < ProjectItem key={project.id} {...project} />
  })


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectCard}</div>
    </div>
  );
}

export default ProjectList;
