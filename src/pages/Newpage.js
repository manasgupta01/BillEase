import React, { useEffect, useState } from 'react';
 // Import the CSS file for the component


export default function Newpage() {
    const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className={`about-us-container ${showContent ? 'fade-in' : ''}`}>
      <h1>About Us</h1>
      <p>Welcome to our website! We are a team of dedicated professionals...</p>
      
      <div className="button-container">
        <a href="https://manasgupta.000webhostapp.com" className="button">Learn More</a>
      </div>
      <form action="https://formspree.io/f/mpznlvdw" method="POST" className="contact-form">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" name="name" className="form-input" />
        <input type="email" placeholder="Email" name="email" className="form-input" />
        <textarea placeholder="Message" rows="4" name="message" className="form-input"></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};