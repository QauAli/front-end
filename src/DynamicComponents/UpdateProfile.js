import { useState, useEffect } from "react";
import "./Profileupdate.css";
import arrays from "../variables/globals";
function UpdateProfile() {
  const [values, setvalues] = useState({
    email: "",
    password: "",
    name: "",
    newpassword: "",
  });

  useEffect(() => {
    if (arrays.isLoggedin) {
      setvalues({ ...values, email: arrays.email, password: arrays.password });
    }
  });

  function handlechange(e) {
    setvalues({ ...values, [e.target.name]: e.target.value });
  }
  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("Updated Name:", values.name);
    console.log("Updated Password:", values.newpassword);
    await handleUpdate();
  };
  async function handleUpdate() {
    const updateObj = {
      name: values.name,
      email: values.email,
      password: values.password,
      role: values.role,
    };
    console.log("registration object", updateObj);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateObj),
    };
    const response = await fetch(
      "http://127.0.0.1:5000/ProfileUpdate",
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) {
      console.log("Email OR Password Incorrect");
    } else {
      console.log("update profile successfully");
    }
  }

  return (
    <div>
      <div className="profileform">
        <form onSubmit={handlesubmit}>
          <h1>Want to Update profile?</h1>
          <span>
            <label> Email Id</label>
            <br/>
            <input
              name="email"
              placeholder="Email-Id"
              type="text"
              value={values.email}
              onChange={handlechange}
            />
          </span>
          <br/>
          <span className="changings">
            <label>Change Name </label><br />
            <input
              name="name"
              placeholder="Enter Name"
              type="text"
              value={values.name}
              onChange={handlechange}
            />
           
          </span>
          <br />

          <span className="changings">
          <label>Current Password</label><br/>
            <input
              name="password"
              placeholder=" Password"
              type="text"
              value={values.password}
              onChange={handlechange}
            />
          </span>
          <br />
          <span className="changings">
          <label>New Password </label><br/>
            <input
              name="newpassword"
              placeholder="Enter new password"
              type="text"
              value={values.newpassword}
              onChange={handlechange}
            />
            <br />
          </span>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateProfile;
