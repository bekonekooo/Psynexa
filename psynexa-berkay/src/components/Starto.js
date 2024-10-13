import React from 'react';
import '../App.css'; // Stil dosyasını ekleyin
import { Circle } from "react-awesome-shapes";
import photo from "../Photos/BFotoYeni.jpg";
import { motion } from "framer-motion";

const Starto = () => {
  // Variants for staggering effect
  const leftPaneVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 }, // Start off-screen and transparent
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Stagger delay based on index
      },
    }),
  };

  return (
    <div className="bannerContainer">
      {/* Sol Parça */}
      <motion.div
        className="left-pane"
        initial={{ opacity: 0, x: -200 }} // Start at 200px left and opacity 0
        animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
        transition={{ duration: 1.5 }} // Transition duration of 1.5 seconds
      >
        <div className='left-pane-cont'>
          <div className="circle-container">
            <motion.div
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Circle className="circle0"
                color="linear-gradient(135deg, #a5b4fc, #6366f1)"
                size={['150px', '150px', '180px', '180px']}
                zIndex={2}
              />
            </motion.div>
            <motion.div
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <Circle className="circle1"
                color="linear-gradient(135deg, #6366f1, #8b5cf6)"
                size={['120px', '120px', '150px', '150px']}
                zIndex={2}
              />
            </motion.div>
            <motion.div
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Circle className="circle2"
                color="linear-gradient(135deg, #8b5cf6, #c084fc)"
                size={['90px', '90px', '120px', '120px']}
                zIndex={2}
              />
            </motion.div>
          </div>
          <div className='writing-container'>
            <motion.h1
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className='berkay'
            >
              I'm Berkay
            </motion.h1>
            <motion.span
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className='aydin'
            >
              Aydın
            </motion.span>
            <motion.p
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              I like making <span>FUN</span>,
              interactive things with code, I also <span> TALK</span> & <span> WRITE </span> about 
              those things.
            </motion.p>
            <div className='icons'>
              <motion.div
                variants={childVariants}
                initial="hidden"
                animate="visible"
                custom={6}
                className='icon-1'
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="m720-160-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160ZM160-280q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h520q33 0 56.5 23.5T760-760v204q-10-2-20-3t-20-1q-10 0-20 .5t-20 2.5v-147L416-520 160-703v343h323q-2 10-2.5 20t-.5 20q0 10 1 20t3 20H160Zm58-480 198 142 204-142H218Zm-58 400v-400 400Z"/>
                </svg>
                <span className='hire-text'>hire <span className='ME'>ME</span></span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
              </motion.div>
              <motion.div
                variants={childVariants}
                initial="hidden"
                animate="visible"
                custom={7}
                className='icon-2'
              >
                <span> SEE</span> <span>Portfolio</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sağ Parça */}
      <motion.div
        className="right-pane"
        initial={{ opacity: 0, x: 200 }} // Start at 200px right and opacity 0
        animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
        transition={{ duration: 1.5 }} // Transition duration of 1.5 seconds
      >
        <img src={photo} alt="DBerkayFoto" className="photo" />
      </motion.div>
    </div>
  );
}

export default Starto;
