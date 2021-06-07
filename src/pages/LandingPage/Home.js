import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const onload = async (e) => {
    axios.get(`http://localhost:5000/`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    return;
  };
  return (
    <div className="cent">
      <h2 className="type">EMPLOYEE RUBY CRUD</h2>
      <div className="homeButtons">
        <div className="buttonSignin">
          <Link to="/SignUp">
            <button onClick={onload}>Sign Up</button>
          </Link>
        </div>
        <div className="buttonSignup">
          <Link to="/SignIn">
            <button onClick={onload}>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;