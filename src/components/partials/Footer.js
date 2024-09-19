import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <p>Connect with us on social networks:</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          
          <a
            href="https://planbeeestate.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://www.instagram.com/planbee.estate/?igsh=MWthbGpiZnVocHIyYQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="footer-content container">
        <div className="footer-column">
          <h6>PlanBeeEstate</h6>
          <p>
            Welcome to Plan Bee Estate Pvt Ltd - your trusted partner in finding
            the perfect home in Gurgaon. We specialize in offering a premium
            selection of 2BHK and 3BHK flats, luxury apartments, and penthouses
            in Gurgaon's top real estate developments. Our exclusive listings
            include properties from renowned projects such as Smartworld 69,
            Signature Global, Trehan, and M3M Golf Hills. Whether you're seeking
            a cozy family home or a spacious luxury retreat, our curated real
            estate portfolio caters to every lifestyle. With Plan Bee Estate,
            you'll experience upscale living in the heart of Gurgaon—a city
            known for its growth, infrastructure, and vibrant community.
          </p>
        </div>

        <div className="footer-column">
          <h6>PROJECTS</h6>
          <ul className="contact-info">
            <li>
              <a href="#">M3M</a>
            </li>
            <li>
              <a href="#">DLF</a>
            </li>
            <li>
              <a href="#">Trumph Tower</a>
            </li>
            <li>
              <a href="#">DDA</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h6>USEFUL LINKS</h6>
          <ul className="contact-info">
            <li>
              <a href="./privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="./terms-condition">Terms and Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h6>CONTACT</h6>
          <ul className="contact-info">
            <li>
              <i className="fas fa-home"></i>TOWER-1, 6th floor, office no. 635,
              EMERALD PLAZA, Gurgaon, Sector-65, IND
            </li>
            <li>
              <i className="fas fa-envelope"></i>planbeeestate@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i> +91 98910 29137
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024 Copyright: PlanBeeEstates.com | Agent RERA No: XXXXXXXX
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
