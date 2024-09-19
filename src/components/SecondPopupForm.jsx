import React, { useRef } from 'react';
import '../css/SecondPopupForm.css'; // Assuming the styles are in SecondPopupForm.css
import emailjs from '@emailjs/browser';

const SecondPopupForm = ({ isVisible, closeForm }) => {
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
          closeForm(); // Close the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      {isVisible && (
        <div className="second-popup-overlay">
          <div className="second-popup-form">
            <button className="close-btn-float" onClick={closeForm}>
              &#10006;
            </button>
            <h2>Express Your Interest</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Name*" name="user_name" required />
              <input type="email" placeholder="Email*" name="user_email" required />
              <input type="tel" placeholder="Mobile*" name="user_mobile" required />
              <textarea type="text" placeholder="Message" name="message" />
              <button className="btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SecondPopupForm;
