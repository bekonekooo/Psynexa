import React from 'react';
import { useSidebarToggle } from '../hooks/useSidebarToggle';
import "../App.css"

const Navbar = () => {
   
    const [isSidebarVisible, toggleSidebar] = useSidebarToggle();

    return (
        <nav>
            <ul className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
        <li>
                <a onClick={toggleSidebar} href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
            </li>
        <li>
                <a href="#">Pagesoooooo</a>
            </li>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </ul>
        <ul>
        <li className='hideOnMobile'>
                <a href="#">Logo</a>
            </li>
        <li  className='hideOnMobile'>
                <a href="#">Pages</a>
            </li>
            <li className='hideOnMobile'>
                <a href="#">Home</a>
            </li>
            <li  className='hideOnMobile'>
                <a href="#">About Us</a>
            </li>
            <li  className='hideOnMobile'>
                <a href="#">Contact Us</a>
            </li>
            <li className='hideBig'  onClick={toggleSidebar}>
                <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
            </li>
        </ul>
        </nav>
    );
  }
  
  export default Navbar;
