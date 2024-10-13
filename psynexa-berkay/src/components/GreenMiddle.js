import React from 'react';
import '../App.css'; // Import the CSS file
import {Circle} from "react-awesome-shapes"


function GreenMiddle() {
  return (
    <div className='green-middle'>
      <svg className='first-icon' xmlns="http://www.w3.org/2000/svg" height="66px" viewBox="0 -960 960 960" width="66px" fill="#5f6368"><path d="M410-120v-238L204-239l-70-121 206-120-206-119 70-121 206 119v-239h140v239l206-119 70 121-206 119 206 120-70 121-206-119v238H410Z"/></svg> <div className='left-third'> 
        <span> 4+</span>
        <span> years of </span>
        <span>  Experience</span>
      </div>
      <div className='divider'></div>
      <div className='middle-third'>
        <span> 10+</span>
        <span> completed </span>
        <span>  projects</span></div>
      <div className='divider'></div>
      <div className='right-third'>
      <span> 5+</span>
        <span>Happy</span>
        <span>  Customer</span>
      </div>
      <svg className='second-icon' xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#5f6368"><path d="M410-120v-238L204-239l-70-121 206-120-206-119 70-121 206 119v-239h140v239l206-119 70 121-206 119 206 120-70 121-206-119v238H410Z"/></svg> 

  
        </div>
  );
}



export default GreenMiddle;