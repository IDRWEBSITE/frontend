import React from 'react';
import './module.footer.css'; // Import your CSS file for styling
import logo from '../../assets/IDR Black Logo 2.png'; // Import your logos

const Footer = () => {
  return (
    <footer className="footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="1438"
        // height="445"
        // viewBox="0 0 1438 445"
        // fill="none"
        className="footer-bg"
      >
        <path
          d="M-2 7.22881L38.0067 3.30165C97.1941 -2.50833 156.943 2.28758 214.446 17.464L452.813 80.3746C525.982 99.6859 602.581 102.137 676.836 87.5418L1055.62 13.0915C1147.37 -4.941 1242.33 3.11283 1329.73 36.3385L1438 77.5V445H-2V7.22881Z"
          fill="#171717"
        />
      </svg>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-contact">
          <button>Contact Us</button>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Gallery</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="footer-links-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sales and Refund</li>
            <li>Legal</li>
            <li>Site Map</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
