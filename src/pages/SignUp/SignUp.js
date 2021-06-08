import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "./SignUp.css";

const SignUp = () => {
  const [signupDetails, setsignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    empcode: "",
    address: "",
    joiningdate: "",
  });

  let history = useHistory();

  const onChangeHandler = (e) => {
    let user = signupDetails;
    user[e.target.name] = e.target.value;
    setsignupDetails(user);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`https://ruby-samp.herokuapp.com/SignUp`, { signupDetails })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if (res.data.result === "Account Created") {
          history.push("/SignIn");
        } else {
          alert("Account exist with this email.");
        }
      });
    return;
  };
  return (
    <React.Fragment>
      <div className="App-header">
        <div className="signupForm">
          <div className="formHeader">
            <div className="headerTitle hoverCSS3" style={{color:"black"}}>Sign Up</div>
            <div className="formInputs">
              <form>
                <label>Username</label>
                <input type="text" name="name" onChange={onChangeHandler} />
                <label>Email ID</label>
                <input type="email" name="email" onChange={onChangeHandler} />

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={onChangeHandler}
                />

                <label>Employee ID</label>
                <input type="text" name="empcode" onChange={onChangeHandler} />

                <label>Address</label>
                <input type="text" name="address" onChange={onChangeHandler} />

                <label>Date</label>
                <input
                  type="date"
                  name="joiningdate"
                  onChange={onChangeHandler}
                />
                <button type="submit" value="SUBMIT" onClick={onSubmitHandler}>
                  Sign Up
                </button>
                <div>
                  <Link style={{color:"black"}} className="LinkColor" to="/SignIn">
                    Have an account ?
                  </Link>
                </div>

                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;