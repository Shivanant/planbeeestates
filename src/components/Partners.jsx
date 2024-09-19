import React from 'react';
import '../css/Partners.css'; // Import the CSS file for styling

const Partners = () => {
  // List of partner logos - image names should match those in the public/partners folder
  const partnerLogos = [
    'partner1.png',
    'partner2.png',
    'partner3.png',
    'partner4.png',
    'partner5.png',
    // Add more partner logos here
  ];

  return (
    <div className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-logos-wrapper">
        <div className="partners-logos">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="partner-logo">
              <img src={`${process.env.PUBLIC_URL}/partners/${logo}`} alt={`Partner ${index + 1}`} />
            </div>
          ))}

          {/* Repeat the logos to create an infinite loop */}
          {partnerLogos.map((logo, index) => (
            <div key={index + partnerLogos.length} className="partner-logo">
              <img src={`${process.env.PUBLIC_URL}/partners/${logo}`} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
