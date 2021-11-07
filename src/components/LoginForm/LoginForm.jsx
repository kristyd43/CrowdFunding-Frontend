import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    if (
      response.status == 404 ||
      response.status == 403 ||
      response.status == 400
    ) {
      history.push("/error");
    }
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history.push("/");
      });
    }
  };

  return (
    <div>
      <h1 class="form-title">Login</h1>
      <form class="form">
        <div class="form-field">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <h3>Don't have a login? Register now!</h3>
      <button>
        <Link to="/create/user">Register</Link>
      </button>
    </div>
  );
}

export default LoginForm;
