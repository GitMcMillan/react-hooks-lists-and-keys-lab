import React from "react";
import user from "../data/user";


// The ProjectItem component should get a prop of technologies passed down from ProjectList. For each element in this array of technologies, create a <span> tag that displays the name of the technology.

function ProjectItem({ name, about, technologies }) {

  const TechCard = technologies.map((techObj) => {
    return <span key={techObj}> {techObj} </span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {TechCard}
      </div>
    </div>
  );
}

export default ProjectItem;
