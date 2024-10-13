import React from 'react';
import '../App.css'; // Assuming you'll use a separate CSS file
import rocket from "../Photos/Rocket.jpg";
import {PolygonCard} from "react-awesome-shapes"


const AboutMe = () => {
  return (
    <div className='about'>
      {/* Box 1 */}
      <div className='box'>
        <img src={rocket} alt="Description" className="box-image" />
      </div>

      {/* Box 2 */}
      <div className='box-2'>
        {/* Container for h1 and h2 */}
        <div className="text-container">
          <h1>MY Professional Background</h1>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
        </div>

        {/* Container for the list */}
        <div className="list-container">
          <ul>
            <li ><span className="number-1">01</span><div className="numberText"> <h1>Data Analysis</h1> <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3></div> </li>
            <li><span className="number-2">02</span><div className="numberText"> <h1>Mobile App Development</h1> <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3></div></li>
            <li><span className="number-3">03</span> <div className="numberText"> <h1>Process Enginering</h1> <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3></div></li>
            <li><span className="number-4">04</span><div className="numberText"> <h1>Web Development</h1> <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3></div></li>
          </ul>
        </div>

        {/* 10-word line of text */}
        <div className="text-line">
          This is a ten-word line that describes something briefly.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
