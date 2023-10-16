import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function LoginMember() {

  const [role, setRole] = useState("admin");

  function handleRole(e) {
    setRole(e.target.value);
  }



  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  function handlechange(e) {
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  function handleCancel() {
    setvalues({ email: "", password: "" });
  }

  function handlesubmit(e) {
    e.preventDefault();

    console.log("handle Submit called");
    handleRegistration();
  }
  async function handleRegistration() {
    const registrationObj = {
      email: values.email,
      password: values.password,
      role: role,
    };

    console.log(registrationObj);

     const requestOptions = {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(registrationObj),
     };

    const response = await fetch(
      "http://127.0.0.1:5000/login",
      requestOptions
     );
    const data = await response.json();

    if (!response.ok) {
       console.log("User Not Registered");
     } else {
      console.log("Registered Successfully");
       console.log(JSON.stringify(data));
     }
  }

  return (
    <form className="form signinform" onSubmit={handlesubmit}>
      <h1>
        <i class="fa-solid fa-user-plus"></i>Sign in
      </h1>

      <Form.Select size="lg" value={role} onChange={handleRole}>
        <option value="admin">Admin</option>
        <option value="customer">Customer</option>
        <option value="staff">Staff</option>
      </Form.Select>

      <div>
        <label>Email</label>
        <input
          className="input"
          type="text"
          placeholder="Enter UserName"
          name="email"
          value={values.email}
          onChange={handlechange}
        />

        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={values.password}
          onChange={handlechange}
        />
      
        <button type="submit">Login </button>
      </div>
      <button type="button" id="canclebtn" onClick={handleCancel}>
        Cancle
      </button>
      <span className="forgot">
        Forgot<Link to="/Forgotpassword">Password?</Link>
      </span>
    </form>
  );
}

export default LoginMember;
