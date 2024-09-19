import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-us-section" id='ContactUs'>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name*" name="user_name" required />
          <input type="email" placeholder="Email*" name="user_email" required />
          <input type="tel" placeholder="Mobile*" name="user_mobile" required />
          <textarea type="text" placeholder="Message" name="message" />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.258070173128!2d77.06659249065892!3d28.424198164528485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc381b69df1%3A0x720b75062c34df92!2sEmerald%20Plaza%2C%20Sector%2065%2C%20Gurugram%2C%20Haryana%20122102!5e0!3m2!1sen!2sin!4v1637598288831!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
