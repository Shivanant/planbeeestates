import React from 'react';
import '../css/LogoTicker.css'; // Create a separate CSS file for the ticker

const partners = [
  { name: 'Partner 1', logo: '/Partners/AIPL.png' },
  { name: 'Partner 2', logo: '/Partners/Emaar-Properties-Logo.png' },
  { name: 'Partner 3', logo: '/Partners/M3M.jpg' },
  { name: 'Partner 4', logo: '/Partners/signature-global-logo.png' },
  // { name: 'Partner 5', logo: '/Partners/rise.png' },
  { name: 'Partner 6', logo: '/Partners/elan-logo.png' },
];

const LogoTicker = () => {
    // We duplicate the partners array to ensure a continuous scroll
    const scrollingPartners = [...partners, ...partners];
  
    return (
      <div className="logo-ticker">
      <h1>Our Partners</h1>
        <div className="ticker-wrap">
          <div className="ticker-move">
            {scrollingPartners.map((partner, index) => (
              <div className="ticker-item" key={index}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default LogoTicker;