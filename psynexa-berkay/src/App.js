import Navbar from "./components/Navbar";
import React, { useState } from 'react';
import './App.css';
import Starto from "./components/Starto";
import GreenMiddle from "./components/GreenMiddle";
import AboutMe from "./components/AboutMe";
import AboutFamily from "./components/AboutFamily";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="MrBody" >
     <Navbar></Navbar>
     <Starto></Starto>
    <GreenMiddle></GreenMiddle>
    <AboutMe></AboutMe>
    <AboutFamily></AboutFamily>
    <Footer></Footer>
    </div>
  );
}

export default App;
