import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";

const SignIn = () => {
  const [signinDetails, setsigninDetails] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const onChangeHandler = (e) => {
    let user = signinDetails;
    user[e.target.name] = e.target.value;
    setsigninDetails(user);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`https://ruby-samp.herokuapp.com/SignIn`, { signinDetails })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if (res.data.validation === "true") {
          console.log(res.data.validation);
          localStorage.setItem("userDetails", JSON.stringify(res.data));
          history.push("/profile");
        }
      });
    return;
  };

  return (
    <React.Fragment>
      <div className="App-header">
        <div className="signinForm">
          <div className="formHeader">
            <div className="headerTitle hoverCSS3" style={{color:"black"}}>Sign In</div>
            <div className="formInputs">
              <form>
                <label>Email</label>
                <input type="text" name="email" onChange={onChangeHandler} />

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={onChangeHandler}
                />

                <button type="submit" value="SUBMIT" onClick={onSubmitHandler}>
                  Sign In
                </button>
                <br></br>
                <div className="formFoot">
                  <Link to="/ForgotPassword" style={{color:"black"}} className="LinkColor">
                    Forgot Password ?
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br></br>
                  <br></br>
                  <Link to="/SignUp" style={{color:"black"}} className="LinkColor">
                    New User ?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
