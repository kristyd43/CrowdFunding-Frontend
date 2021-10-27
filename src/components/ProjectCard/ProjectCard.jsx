import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div class="project-card">
        <Link to={`/projects/${projectData.id}`}>
        <img src={projectData.image} width="300" height="300" alt="description"/>
        <div class="content">
            <div class="text">{projectData.description}</div>
        </div>
        <h3>{projectData.title}</h3>
        </Link>
        </div>
    );
}


export default ProjectCard;