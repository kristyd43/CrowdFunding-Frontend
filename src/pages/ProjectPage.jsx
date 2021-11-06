import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import './Page.css'
import UpdateProjectPage from "./UpdateProjectPage";

function ProjectPage() {
  
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();
    const history = useHistory()
    const DeleteProject = async () => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
          method: "delete",
          headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
          }
        })
        history.push("/");
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
    <div class="project-info-container">
    <img  src={projectData.image}/>
    <div class="project-info"> 

        <h2>{projectData.title}</h2>
        <h4>Total Raised: {projectData.total_raised}</h4>
        <h4>Target: ${projectData.goal}</h4>
        <h4>{projectData.description}</h4>
        <h5>Created on {projectData.date_created}</h5>
    </div>
    <div class="pledges">
    <h3>Pledges:</h3>
    <ul>
    {projectData.pledges.map((pledgeData, key) =>{
        return (
        <li>
        ${pledgeData.amount} from user: {pledgeData.supporter}
        </li>
        );
    })}
    </ul>
    </div>
    <div class="update_delete">
    {/* <button type="submit" onClick={PledgeForm}>
            Pledge Now!
    </button> */}
    <button type="submit" onClick={DeleteProject}>
            Delete Project
    </button>
    <button type="submit" onClick={UpdateProjectPage}>
            Update Project
    </button>
    </div>
    </div>
    );
}

export default ProjectPage;