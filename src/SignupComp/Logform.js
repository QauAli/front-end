import React, { useRef, useState } from "react";
import "./Logform.css";
import Validation from "../DynamicComponents/Validation";
import "../Extraforms/Loginformstyles.css";
import Form from "react-bootstrap/Form";
// import Loginform from '../routes/Loginform';
// import SignIn from './SignIn';

import LoginMember from "../components/LoginMember/LoginMember";

function Logform() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [role, setRole] = useState("customer");
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  /*============================values-entered handling=============================================*/
  function handlechange(e) {
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  function handleRole(e) {
    setRole(e.target.value);
  }

  /*============================= submit button handling==============================================*/
  function handlesubmit(e) {
    e.preventDefault();

    const validationErrors = Validation(values);

    //^The line Object.keys(validationErrors).length === 0 is used to check if there
    //^are no validation errors in the validationErrors object.
    //^validationErrors is an object that holds error messages for each input field in your form.

    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, you can proceed with form submission logic here
      console.log(
        "Sign-up with name:",
        values.name,
        "and password:",
        values.password
      );

      handleRegistration(); // Call the registration function if there are no client-side validation errors
    } else {
      // Validation errors exist, update the errors state
      setErrors(validationErrors);
    }
  }

  // Function to reset form fields
  function handleCancel() {
    setvalues({ name: "", password: "", email: "" });
    setErrors({});
  }

  async function handleRegistration() {
    var registrationObj;
      registrationObj = {
        name:values.name,
        email: values.email,
        password:values.password,
        role: role,
      };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationObj),
    };

    console.log(registrationObj);

    const response = await fetch(
      "http://127.0.0.1:5000/Signup",
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

  /*===================checkbox handling=================================*/
  const handleCheckboxChange = () => {
    // setIsChecked(!isChecked);
    setIsLoggedIn(!isLoggedIn);
  };
  const uncheckCheckbox = () => {
    // setIsChecked(false);
    setIsLoggedIn(false);
  };

  //^ -------------------------handles sliding of form-----------------
  const htmlbodyRef = useRef(null);
  // =======only add=======
  const handleSignUpClick = () => {
    if (htmlbodyRef.current) {
      htmlbodyRef.current.classList.add("Slide");
    }
    // Add your SignUp logic here
  };

  const handleSignInClick = () => {
    if (htmlbodyRef.current) {
      htmlbodyRef.current.classList.remove("Slide");
    }
  };

  return (
    <div className="htmlbody" ref={htmlbodyRef}>
      <div className="container-form">
        {/* ================page swapping buttons============ */}
        <div className="box signin">
          <h2>Already have an account?</h2>
          <button className="signinBtn" onClick={handleSignInClick}>
            Sign in
          </button>
        </div>

        <div className="box signup">
          <h2>Don't have an account?</h2>
          <button className="signupBtn" onClick={handleSignUpClick}>
            Sign up
          </button>
        </div>

        <div className="formBx">
          <LoginMember />

          {/* ========================2ndform==================== */}
          <form className="form signupform" onSubmit={handlesubmit}>
            <h1 className="">
              <i class="fa-solid fa-user-plus"></i>Sign Up
            </h1>

            <Form.Select size="lg" value={role} onChange={handleRole}>
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
            </Form.Select>

            <div className="">
              <label className="">Username</label>
              <input
                className="input"
                type="text"
                placeholder="Enter UserName"
                name="name"
                value={values.name}
                onChange={handlechange}
              />
              {errors.name && <p>{errors.name}</p>}

              <label>Email</label>
              <input
                className="input"
                type="text"
                placeholder="Enter Email"
                name="email"
                value={values.email}
                onChange={handlechange}
              />
              {errors.email && <p>{errors.email}</p>}

              <label>Password</label>
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={values.password}
                onChange={handlechange}
              />
              {errors.password && <p>{errors.password}</p>}

              <button type="submit" onClick={handleRegistration}>
                Register
              </button>
            </div>

            <div className="checkbox">
              <input type="checkbox" onClick={uncheckCheckbox} />
              <label for="">Remember me</label>
            </div>

            <button type="button" id="canclebtn" onClick={handleCancel}>
              Cancle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Logform;
