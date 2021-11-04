import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import PledgeForm from "../PledgeForm/PledgeForm";

function ProjectCard(props) {
    const { projectData } = props;


    return (
        <div class="project-card">
        <Link to={`/projects/${projectData.id}`}>
        <img src={projectData.image} width="300" height="300" alt="description"/>
        <div class="content">
            <div class="text">{projectData.description}</div>
        </div>
        <h3 id="project-card-title">{projectData.title}</h3>
        </Link>
        <button type="submit" onClick={PledgeForm}>
            Pledge Now!
        </button>
        </div>
        
    );
}


export default ProjectCard;