import React from "react";
import Work from "../assets/work";
import { GoMarkGithub } from "react-icons/go";

const Project = () => {
  return (
    <div>
      <Work title="Projects">
        <div className="project-container">
          <div className="project-div1">
            <h3>React Projects</h3>
            <p>This is my first React projects</p>
            <hr></hr>
            <a
              href="http://Google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button type="button">
                <GoMarkGithub />
              </button>
            </a>
          </div>
          <div className="project-div1">
            <h3>HTML/CSS Projects</h3>
            <p>This is my first HTML projects</p>
            <hr></hr>
            <a
              href="http://Google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button type="button">
                <GoMarkGithub />
              </button>
            </a>
          </div>
          <div className="project-div1">
            <h3>Python Projects</h3>
            <p>This is my first Python projects</p>
            <hr></hr>
            <a
              href="http://Google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button type="button">
                <GoMarkGithub />
              </button>
            </a>
          </div>
        </div>
      </Work>
    </div>
  );
};

export default Project;
