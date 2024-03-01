import React, { useState,useEffect } from 'react';
import './Profileupdate.css';
import UpdateProfile from './UpdateProfile';
import defaultAvatar from '../images/default-avatar.png';
import arrays from '../variables/globals';
import Footer from '../DynamicComponents/Footer'

function Profile() {
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [imageSet, setImageSet] = useState(false);

  const handleImage = async (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
    setImageSet(true);

    if (selectedImage) {
      const formData = new FormData();
      formData.append('email', arrays.email);
      formData.append('role', arrays.role);
      formData.append('file', selectedImage);

      try {
        const response = await fetch('http://127.0.0.1:5000/ImageUpload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Image uploaded successfully');
          // Optionally, update your frontend state or trigger any additional actions
          localStorage.setItem('profileImage', imagePreview);
        } else {
          console.error('Error uploading image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.error('No image selected');
    }
  };
  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    console.log('Stored Image:', storedImage);
    if (storedImage) {
      setImagePreview(storedImage);
      setImageSet(true);
    }
  }, []);
  

  return (
    <div>
      <div className="welcome-note">
        <h2>Welcome, {arrays.email}</h2>
      </div>
      <div className="profile-pic">
        <img
          src={imagePreview || defaultAvatar}
          alt="Profile Preview"
          className="profile-image"
        />
        {!imageSet && (
          <div>
            <h4>
              <i className="fa-solid fa-arrow-down fa-bounce"></i> Upload image
            </h4>
            <input
              className="file"
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </div>
        )}
      </div>
      <UpdateProfile />
      <Footer/>
    </div>
  );
}

export default Profile;
