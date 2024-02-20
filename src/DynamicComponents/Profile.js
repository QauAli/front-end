import React, { useState } from 'react';
import './Profileupdate.css';
import defaultAvatar from '../images/default-avatar.png';

function Profile() {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [image, setimage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handlename = (event) => {
    setname(event.target.value);
  };

  const handlepassword = (event) => {
    setpassword(event.target.value);
  };

  const handleimage = (event) => {
    const selectedImage = event.target.files[0];
    setimage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log('Updated Name:', name);
    console.log('Updated Password:', password);
    console.log('Updated Image:', image);
  };

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
            placeholder="Enter Id for changings"
            type="text"
            value={name}
            onChange={handlename}
          />
          </span>
          <br/>
          <span className="changings">
            <input
              placeholder="Change Name"
              type="text"
              value={name}
              onChange={handlename}
            />
          </span>
          <br />


          <span className="changings">
            <input
              placeholder="Change Password"
              type="text"
              value={password}
              onChange={handlepassword}
            />
          </span>
          <br />
          <span className="changings">
          <input
            placeholder="Change Email Address"
            type="text"
            value={password}
            onChange={handlepassword}
          />
          <br/>
          </span>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
