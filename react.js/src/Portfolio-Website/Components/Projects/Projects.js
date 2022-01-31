import React from "react";
import "./Projects.css"

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
          <div className="card">
            <a
              href="https://github.com/nsh-axelor/frontend-training/tree/html-css/html-css/project-1"
              target="_blank"
            >
              <img className="project-image" src="../../project-1 ss.PNG" alt="" />
              <p className="title">HTML Form</p>
            </a>
            <p className="project-info">
              In This Project I have created Simple HTML form using HTML and CSS
            </p>
          </div>
          <div className="card">
            <a
              href="https://github.com/nsh-axelor/frontend-training/tree/html-css/html-css/project-2"
              target="_blank"
            >
              <img className="project-image" src="../../project-2 ss.PNG" alt="" />
              <p className="title">Personal Website</p>
            </a>
            <p className="project-info">
              In This Project I have created Portfolio website using HTML and
              CSS. This website contains my basic information, my contact
              details and my projects
            </p>
          </div>
          <div className="card">
            <a
              href="https://github.com/nsh-axelor/WalletApp-Backend"
              target="_blank"
            >
              <img
                className="project-image"
                src="../../WalletApp Project ss.PNG"
                alt=""
              />
              <p className="title">WalletApp</p>
            </a>
            <p className="project-info">
              This Project is an App that contains the information about All
              digital wallet app and thei customers. Here cusotmer and wallets
              are M2M related.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
