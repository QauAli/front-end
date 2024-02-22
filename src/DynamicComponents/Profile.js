import React, { useState, useEffect } from 'react';
import './Profileupdate.css';
import { useLocation } from 'react-router-dom';
import defaultAvatar from '../images/default-avatar.png';
import arrays from "../variables/globals";


function Profile() {

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

  const handleimage = (event) => {
    const selectedImage = event.target.files[0];
    setimage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  return (
    <div>
          <div className='profile-pic'>
            {imagePreview ? (
              <img src={imagePreview} alt="Profile Preview" className="profile-image" />
            ) : (
              <img src={defaultAvatar} alt="Default Avatar" className="default-avatar" />
            )}
            <h4><i class="fa-solid fa-arrow-down fa-bounce"></i>upload image</h4>
              <input  className="file" type="file" accept="image/*" onChange={handleimage} />
              </div>
<UpdateProfile/>

      </div>
  );
}

export default Profile;
