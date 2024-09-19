import React from 'react';
import '../css/Tile.css';

const Tile = ({ handleEnquire }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/123456789', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+123456789');
  };

  return (
    <div className="floating-tile">
      <button className="tile-button whatsapp" onClick={handleWhatsApp}>
        <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp
      </button>
      <button className="tile-button call" onClick={handleCall}>
        <i className="fa fa-phone" aria-hidden="true"></i> Call
      </button>
      <button className="tile-button enquire" onClick={handleEnquire}>
        <i className="fa fa-envelope" aria-hidden="true"></i> Enquire
      </button>
    </div>
  );
};

export default Tile;
