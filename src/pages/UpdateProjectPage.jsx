import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function UpdateProjectPage() {
    const { id } = useParams();

    const [projectInfo, setProjectInfo] = useState({
        title: "",
        description: "",
        goal: 0,
        image: "",
        is_open: "",
        date_created: new Date()
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
    const token = window.localStorage.getItem("token")
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify(projectInfo),
    }
    );
    return response.json();
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
    updateData().then((response) => {
    console.log("response from our API ....")
    history.push("/");
    });
    }
};


  return(
    <form>
        <div>
        <label htmlFor="projectTitle">Project Name: </label>
        <input
            type="text"
            id="title"
            placeholder="Enter Project Name"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="projectDescription">Project Description: </label>
        <input 
            type="text"
            id="description"
            placeholder="Description"
           onChange={handleChange}
        />
        </div>      

        <div>
        <label htmlFor="projectGoal">Target Amount: </label>
        <input 
            type="text"
            id="goal"
            placeholder="Target Amount"
           onChange={handleChange}
        />
        </div>      

        <div>
        <label htmlFor="projectImage">Profile Photo: </label>
        <input 
            type="text"
            id="image"
            placeholder="Profile Photo"
           onChange={handleChange}
        />
        </div>  

        <div>
        <label htmlFor='projectIsOpen'>Project Is Open?</label>
        <input
          type='text'
          id='is_open'
          placeholder='IsOpen'
          onChange={handleChange}
        />
      </div>

        <button type="submit" onClick={handleSubmit}>
        Submit New Project
        </button> 
        </form>)
}

export default UpdateProjectPage