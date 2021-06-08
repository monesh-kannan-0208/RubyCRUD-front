import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [edit, setedit] = useState(false);
  let history = useHistory();
  const [userDetails, setuserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [profileDetails, setprofileDetails] = useState({
    name: userDetails.name,
    email: userDetails.email,
    password: userDetails.password,
    empcode: userDetails.empcode,
    address: userDetails.address,
    joiningdate: userDetails.joiningdate,
  });

  const onChangeHandler = (e) => {
    let user = profileDetails;
    user[e.target.name] = e.target.value;
    setprofileDetails(user);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setedit(false);
    axios
      .post(`https://ruby-samp.herokuapp.com/UpdateProfile`, { profileDetails })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if (res.data.updated === "true") {
          toast.success("updated successfully")
          console.log(res.data.updated);
          localStorage.setItem("userDetails", JSON.stringify(res.data));
          history.push("/profile");
          setprofileDetails(JSON.parse(localStorage.getItem("userDetails")));
        }
        if (res.data.updated === "null") {
          console.log(setuserDetails);
        }
      });

    return;
  };

  const editHandler = async (e) => {
    e.preventDefault();
    setedit(true);
  };

  const signoutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem("userDetails");
    history.push("/Home");
    toast.success("SignOut successfully")
    return;
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`https://ruby-samp.herokuapp.com/DeleteProfile`, { profileDetails })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if (res.data.deleted === "true") {
          console.log(res.data.deleted);
          localStorage.removeItem("userDetails");
          toast.warn("deleted sucessfully")
          history.push("/Home");
        }
      });
    return;
  };

  if (edit) {
    return (
      <div className="">
        <div className="signinForm">
          <div className="formHeader">
            <div className="headerTitle">Profile</div>
            <div className="formInputs">
              <form onSubmit={onSubmitHandler}>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={onChangeHandler}
                />
                <br></br>

                <input type="email" placeholder="Email" name="email" disabled />
                <br></br>

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={onChangeHandler}
                />
                <br></br>

                <input
                  type="text"
                  placeholder="Emp-Code"
                  name="empcode"
                  onChange={onChangeHandler}
                />
                <br></br>

                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={onChangeHandler}
                />
                <br></br>

                <input
                  type="date"
                  placeholder="Joining date"
                  name="joiningdate"
                  onChange={onChangeHandler}
                />
                <br></br>

                <input type="submit" value="SUBMIT" />
                <br></br>
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signinForm">
      <div className="formHeader">
        <div className="headerTitle">Profile</div>
        <div className="formInputs">
          <form onSubmit={onSubmitHandler}>
            <button onClick={editHandler}>Edit</button> &nbsp;
            <button onClick={signoutHandler}>Sign Out</button>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={profileDetails.name}
              disabled
            />
            <br></br>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={profileDetails.email}
              disabled
            />
            <br></br>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={profileDetails.password}
              disabled
            />
            <br></br>
            <input
              type="text"
              placeholder="Emp-Code"
              name="empcode"
              value={profileDetails.empcode}
              disabled
            />
            <br></br>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={profileDetails.address}
              disabled
            />
            <br></br>
            <input
              type="date"
              placeholder="Joining date"
              name="joiningdate"
              value={profileDetails.joiningdate}
              disabled
            />
            <br></br>
            <button onClick={deleteHandler}>Delete Profile</button>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;