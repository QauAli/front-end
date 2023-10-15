import React, { useState, useEffect } from 'react';
import S1 from '../images/S1.jpg'
import S2 from '../images/S2.jpg'
import S3 from '../images/S3.jpg'
import S4 from '../images/S4.jpg'
import S5 from '../images/S5.jpg'
import S6 from '../images/S6.jpg'
import './Servicesstyles.css'


const IMAGES = [S1,S2,S3,S4, S5, S6];

const ImagesMove = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        console.log(IMAGES[index]);
      setIndex((index + 1) % IMAGES.length);
    }, 800);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div>
      <img src={IMAGES[index]} alt="Random image" className='IS'/>
    </div>
  );
};

export default ImagesMove;
