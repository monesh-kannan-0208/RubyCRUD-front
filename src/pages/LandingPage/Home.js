import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import land from '../../assets/5417439.jpg'

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
      <div>
        <img src={land} width="50%" alt="land"/>
      </div>
      <div className="">
      <h2 className=""  style={{color:"Black"}}>EMPLOYEE RUBY CRUD</h2>
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
    </div>
    
  );
};

export default Home;