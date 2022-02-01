import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    name: "HTML Form",
    imageLink: "https://raw.githubusercontent.com/nsh-axelor/frontend-training/html-css/html-css/project-1%20ss.PNG",
    projectLink:
      "https://github.com/nsh-axelor/frontend-training/tree/html-css/html-css/project-1",
    description:
      "Here are some projects that I have created. Click on them to see thecode of that project",
  },
  {
    name: "Personal Website",
    imageLink: "https://raw.githubusercontent.com/nsh-axelor/frontend-training/html-css/html-css/project-2%20ss.PNG",
    projectLink:
      "https://github.com/nsh-axelor/frontend-training/tree/html-css/html-css/project-2",
    description:
      "In This Project I have created Portfolio website using HTML and CSS. This website contains my basic information, my contact details and my projects",
  },
  {
    name: "WalletApp",
    imageLink: "https://raw.githubusercontent.com/nsh-axelor/frontend-training/html-css/html-css/WalletApp%20Project%20ss.PNG",
    projectLink:
      "https://github.com/nsh-axelor/frontend-training/tree/html-css/html-css/project-1",
    description:  
      "This Project is an App that contains the information about All digital wallet app and thei customers. Here cusotmer and wallets are M2M related.",
  },
];

function Projects() {
  return (
    <>
      <div className="projects">
        <h1 className="heading">Projects</h1>
        <div className="introducton">
          <p>
            Here are some projects that I have created. Click on them to see the
            code of that project
          </p>
        </div>

        <div className="project-cards">
          {projects.map(({ name, projectLink, imageLink, description }) => (
            <ProjectCard
              title={name}
              projectLink={projectLink}
              description={description}
              imgLink={imageLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
