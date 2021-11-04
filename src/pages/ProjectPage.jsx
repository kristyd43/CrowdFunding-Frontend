import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Page.css'

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();

    const DeleteProject = async () => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
          method: "delete",
          headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
          }
        })
      }

    useEffect(() => {fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    .then((results) => {
    console.log("results", results)
    return results.json();
    })
    .then((data) => {
        setProjectData(data);
    });
}, []);

    return (
    <div class="project-info">
    <img  src={projectData.image}/>
    <div > 
        <h2>{projectData.title}</h2>
        <h4>Total Raised: {projectData.total_raised}</h4>
        <h4>Target: ${projectData.goal}</h4>
        <h4>{projectData.description}</h4>
        <h5>Created on {projectData.date_created}</h5>
    </div>
    <h3>Pledges:</h3>
    <ul>
    {projectData.pledges.map((pledgeData, key) =>{
        return (
        <li>
        {pledgeData.amount} from {pledgeData.supporter}
        </li>
        );
    })}
    </ul>
    {/* <button type="submit" onClick={PledgeForm}>
            Pledge Now!
    </button> */}
    <button type="submit" onClick={DeleteProject}>
            Delete Project
    </button>
    </div>
    );
}

export default ProjectPage;