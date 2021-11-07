import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateUserForm() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const enterUser = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const postUser = async () => {
    console.log("creating new user, Whoopee!");
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (
      response.status == 404 ||
      response.status == 403 ||
      response.statuscode == 400
    ) {
      history.push("/error");
    }
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
      postUser().then((response) => {
        history.push("/");
      });
    }
  };

  return (
    <div>
      <h1 class="form-title">Register: </h1>
      <form class="form">
        <div class="form-field">
          <label htmlFor="createUsername">Create Username: </label>
          <input
            type="text"
            id="username"
            placeholde="Enter Username"
            onChange={enterUser}
            value={userInfo.username}
          />
        </div>

        <div class="form-field">
          <label htmlFor="createEmail">Enter Email Address: </label>
          <input
            type="text"
            id="email"
            placeholde="Enter Email"
            onChange={enterUser}
            value={userInfo.email}
          />
        </div>

        <div class="form-field">
          <label htmlFor="createPassword">Create Password: </label>
          <input
            type="text"
            id="password"
            placeholde="Enter Password"
            onChange={enterUser}
            value={userInfo.password}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Create User!
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUserForm;
