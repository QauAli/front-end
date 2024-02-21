import React, { useState, useEffect } from 'react';
import './Profileupdate.css';
import { useLocation } from 'react-router-dom';
import defaultAvatar from '../images/default-avatar.png';
import arrays from "../variables/globals";


function Profile() {
  const location = useLocation();
  // const role = location.state ? location.state.role : values.role;

  useEffect(() => {
  
    if(arrays.isLoggedin){
      setvalues({...values, email:arrays.email, password:arrays.password})
     
    }

    console.log("Email="+arrays.email + "password="+arrays.password+"role="+arrays.role);

  },);
  

  const [values, setvalues] = useState({
    email: "",
    password: "",
    name: "",
    newpassword: "",
    role: location.state ? location.state.role : '',
  });
  const [image, setimage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  function handlechange(e) {
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  const handleimage = (event) => {
    const selectedImage = event.target.files[0];
    setimage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log('Updated Name:', values.name);
    console.log('Updated Password:', values.newpassword);
    console.log('Updated Image:', image);

    await handleUpdate();
  }
  async function handleUpdate() {
    const updateObj = {
      name:values.name,
      email: values.email,
      password: values.password,
      role: values.role,
    };
    console.log("registration object",updateObj);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateObj),
    };
    const response = await fetch("http://127.0.0.1:5000/ProfileUpdate", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log("Email OR Password Incorrect");
    } else {
      console.log("update profile successfully")
    }}

  return (
    <div>
      <div className='profileform'>
        <form onSubmit={handlesubmit}>
          <div className="image-container">
            {imagePreview ? (
              <img src={imagePreview} alt="Profile Preview" className="profile-image" />
            ) : (
              <img src={defaultAvatar} alt="Default Avatar" className="default-avatar" />
            )}
            <h4><i class="fa-solid fa-arrow-down fa-bounce"></i>upload image</h4>
              <input  className="file" type="file" accept="image/*" onChange={handleimage} />
              </div>
          <span>
          <input
            name="email"
            placeholder="Enter Email-Id"
            type="text"
            value={values.email}
            onChange={handlechange}
          />
          </span>
          <br/>
          <span className="changings">
            <input
             name="name"
              placeholder="Change Name"
              type="text"
              value={values.name}
              onChange={handlechange}
            />
          </span>
          <br />


          <span className="changings">
            <input
             name="password"
              placeholder="Enter Password"
              type="text"
              value={values.password}
              onChange={handlechange}
            />
          </span>
          <br />
          <span className="changings">
          <input
           name="newpassword"
            placeholder="Enter new password"
            type="text"
            value={values.newpassword}
            onChange={handlechange}
          />
          <br/>
          </span>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
