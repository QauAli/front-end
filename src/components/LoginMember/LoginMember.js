import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import arrays from "../../variables/globals";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginMember(props) {
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  function handleUser(data) {
    arrays.user.push(data);
    arrays.isLoggedin = true;
    arrays.email = data.email;
    arrays.role = data.role;
    arrays.password = data.password;
    console.log(data);

    props.onRoleChange(data.role);
    console.log("aaabbc"+arrays.isLoggedin);
    switch (data.role) {
      case 'admin':
        console.log("Navigating to Admindashboard");
        navigate("/Admindash");
        break;
      case 'customer':
        console.log("Navigating to Customerdashboard");
        navigate("/Customerdash");
        break;
      case 'staff':
        console.log("Navigating to Employeedashboard");
        navigate("/Employeedash");
        break;
      default:
        console.log("Role not recognized. Navigating to home page");
        navigate("/");
        break;
    }
   // navigate("/Profile", { state: { role: role } }); // Use type instead of data.role
  }
  

  function handleRole(e) {
    setRole(e.target.value);
  }

  useEffect(() => {
    console.log("useEffect Working");
  },);
  
    

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

  async function handlesubmit(e) {
    e.preventDefault();
  
    console.log("handle Submit called");
    await handleRegistration();
  }
  
  async function handleRegistration() {
    const registrationObj = {
      email: values.email,
      password: values.password,
      role: role,
    };

    console.log("registration object",registrationObj);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationObj),
    };

    const response = await fetch("http://127.0.0.1:5000/login", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log("Email OR Password Incorrect");
      arrays.isLoggedin = false;
    } else {
      handleUser(data);
    }
  }

  return (
    <div>
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
          placeholder="Email"
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
    </div>
  );
}

export default LoginMember;
