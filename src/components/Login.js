import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""});

    let navigate = useNavigate();

    const onChange = (e) => {
        /* this will update the email and password key with the values of input text,
         since they are using the same name and the javascript key*/
         setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Trying to Login");
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);

        if(json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/");
        } else {
            alert("Invalid Credentials");
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={credentials.email}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
