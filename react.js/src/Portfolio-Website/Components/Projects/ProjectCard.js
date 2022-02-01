import React from "react";

function ProjectCard({title,description,imgLink,projectLink}) {
  return (
    <div className="card">
      <a
        href={projectLink}
        target="_blank" rel="noreferrer"
      >
        <img className="project-image" src={imgLink} alt="" />
        <p className="title">{title}</p>
      </a>
      <p className="project-info">
        {description}
      </p>
    </div>
  );
}

export default ProjectCard;
