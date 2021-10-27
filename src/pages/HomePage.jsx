import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";



function HomePage() {
    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            console.log("results", results)
            return results.json();
        })
        .then((data) => {
            console.log("data", data)
        setProjectList(data);
    });
    }, []);

    return (
        <div>
        <h2>About Us</h2>
            <h4>Our Mission is to help schools get the funding they need to give every child the best chance at life. We've created a platform to give regional schools the opportunity to gain funds for their specific needs. From equipment to excursions, they can promote what they think will benefit their cohort best, here.</h4>
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData}/>;
            })}        
        </div>
        </div>
    );
}

export default HomePage