import React from "react";



    const DeleteProject = async () => {
  fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}`, {
    method: "delete",
    headers: {
      "Authorization": `Token ${localStorage.getItem('token')}`
    }  
  });
  history.push('/')
}


export default Delete