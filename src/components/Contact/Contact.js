import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <form className="contactForm">
        <h2>Contact Us</h2>
        <label>
          Name
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Subject
          <input type="text" placeholder="Enter the subject" />
        </label>
        <label>
          Message
          <textarea placeholder="Enter your message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
