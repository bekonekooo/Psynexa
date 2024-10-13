import React from 'react';
import '../App.css'; // Make sure to import your CSS file



const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-content"> {/* Add a wrapper for the two main boxes */}
          <div className="footer-box left-box">
            <h1>Footer Header</h1>
            <p>
              This is a paragraph in the left box of the footer. It contains at least 
              forty words to meet your requirement. You can use this section to provide 
              additional information about your website, services, or any important 
              updates that visitors should know. Make sure to keep it concise and 
              informative while also engaging to encourage further interaction.
            </p>
          </div>
          <div className="footer-box right-box">
           
            <ul className="group-list">
              <li>
                <h3>Pages</h3>
                <ul className="nested-list">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </li>
              <li>
                <h3>Legal</h3>
                <ul className="nested-list">
                  <li>PrivacyPolicy</li>
                  <li>Term&Conditions</li>
                  
                </ul>
              </li>
            </ul>
            <div className="email-subscription">
              <h3>Subscribe to our Newsletter</h3>
              <input type="email" placeholder="Enter your email" className="email-input" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    );
};

export default Footer;