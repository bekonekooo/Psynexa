import React from 'react';
import '../App.css'; // Assuming you'll use a separate CSS file for styling
import photo from "../Photos/Family-2.jpg"
const AboutFamily = () => {
  return (
    <div className='about-family'>
      <div className='text-container'>
        <h1>Family Background</h1>
        <h5>A little introduction to my beautiful family</h5>
      </div>
      <div className='photo-container'>
        <img src={photo} alt="Family member 1" />
        <img src={photo} className='member-2' alt="Family member 2" />
        <img src={photo} className='member-3' alt="Family member 3" />
        <img src={photo} alt="Family member 4" />
      </div>
    </div>
  );
}

export default AboutFamily;