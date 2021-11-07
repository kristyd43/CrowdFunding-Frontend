import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./Page.css";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        if (results.status == 404 || results.status == 401) {
          history.push("/error");
          console.log("results", results);
        }
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
