import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import { Link } from "react-router-dom";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt =""/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link to ={project.link} >
      Website Link
      </Link>
      <Link to ={project.github} >
      <GitHubIcon />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
