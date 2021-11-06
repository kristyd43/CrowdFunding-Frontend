import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./Page.css";

function HomePage() {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        console.log("results", results);
        return results.json();
      })
      .then((data) => {
        console.log("data", data);
        setProjectList(data);
      });
  }, []);

  return (
    <div>
      <h1 class="aboutUs">Fundraisers</h1>
      <div id="project-list">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={projectData} projectData={projectData} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
