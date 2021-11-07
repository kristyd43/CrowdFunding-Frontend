import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function UpdateProjectPage() {
  const { id } = useParams();

  const [projectInfo, setProjectInfo] = useState({
    title: "",
    description: "",
    goal: 0,
    image: "",
    is_open: "",
    date_created: new Date(),
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectInfo((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const updateData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },

        body: JSON.stringify(projectInfo),
      }
    );
    return response.json();
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        console.log("results", results);
        return results.json();
      })

      .then((data) => {
        setProjectInfo(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
      updateData().then((response) => {
        if (response.status === 401 || response.status === 404) {
          history.push("/error");
          console.log("response", response);
        } else {
          console.log("response from our API ....");
          history.push("/");
        }
      });
    }
  };

  const Checkbox = (e) => {
    //for checkbox onclick, submit 'true' value
    const { id, value } = e.target;
    setProjectInfo((prevProject) => ({
      ...prevProject,
      [id]: !prevProject[id],
    }));
  };

  return (
    <div>
      <h1 class="form-title">Edit Your Project</h1>
      <form class="form">
        <div class="form-field">
          <label htmlFor="projectImage">Profile Photo: </label>
          <input
            value={projectInfo.image}
            type="text"
            id="image"
            placeholder="New Profile Photo"
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
          <label htmlFor="projectTitle">Project Name: </label>
          <input
            value={projectInfo.title}
            type="text"
            id="title"
            placeholder="Enter Project Name"
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
          <label htmlFor="projectDescription">Project Description: </label>
          <input
            value={projectInfo.description}
            type="text"
            id="description"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>

        <div class="form-field">
          <label htmlFor="projectGoal">Target Amount: </label>
          <input
            value={projectInfo.goal}
            type="text"
            id="goal"
            placeholder="Target Amount"
            onChange={handleChange}
          />
        </div>

        <div class="form-field">
          <label htmlFor="projectIsOpen">Project Is Open?</label>
          <input
            type="checkbox"
            id="is_open"
            placeholder="IsOpen"
            onChange={Checkbox}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Submit New Project
        </button>
      </form>
    </div>
  );
}

export default UpdateProjectPage;
