
import React, { useRef, useState } from 'react';
import '../css/FloatingForm.css'; // Import your custom CSS
import emailjs from '@emailjs/browser';

const FloatingForm = () => {
  const [isMinimized, setIsMinimized] = useState(false);
 
  const minimizeForm = () => {
    setIsMinimized(true);
  };

  const maximizeForm = () => {
    setIsMinimized(false);
  };
  const form =useRef()
  

  // const onSubmit=(e)=>{
    const sendEmail = (e) => {
      e.preventDefault();
  

      emailjs
      .sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
              })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
  }

  return (
    <div className="floating-form">
      {!isMinimized && (
        <div className="form-content">
          <button className="close-btn" onClick={minimizeForm}>&#10006;</button>
          <h2>Express Your Interest</h2>
{/*           
          <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
     <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" />
   </form> */}
   <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name*" name="user_name" required />
             <input type="email" placeholder="Email*" name="user_email" required />
             <input type="tel" placeholder="Mobile*" name="user_mobile" required />
            <textarea type="text" placeholder="Message" name="message"  />
      {/* //       <input type="submit" value="Send" /> */}
             <button type="submit" >Submit</button>
         </form>

        </div>
      )}
      {isMinimized && (
        <div className="minimized-icon" onClick={maximizeForm}>
        <i class="fa-regular fa-envelope icon"></i>
        </div>
      )}
    </div>
  );
};

// // export default FloatingForm;
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

//  const FloatingForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     console.log(process.env.REACT_APP_YOUR_SERVICE_ID,76)

//     try{emailjs
//       .sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, {
//         publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );}catch(e){
//         console.log(e,88)
//       }
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

export default FloatingForm;