import React from "react";
import "./module.footer.css"; // Import your CSS file for styling
import logo from "../../assets/IDR Black Logo Footer.png"; // Import your logos
import github from "../../assets/github-social.svg";
import figma from "../../assets/figma-social.svg";
import xsocial from "../../assets/x-social.svg";
import instagram from "../../assets/insta-social.svg";

const Footer = () => {
  return (
    <>
       <footer className="footer">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="445"
        viewBox="0 0 1440 445"
        fill="none"
        className="footer-svg object-fill z-[-10]a"
      >
        <path
          d="M0 7.22881L40.0067 3.30165C99.1941 -2.50833 158.943 2.28758 216.446 17.464L454.813 80.3746C527.982 99.6859 604.581 102.137 678.836 87.5418L1057.62 13.0915C1149.37 -4.941 1244.33 3.11283 1331.73 36.3385L1440 77.5V445H0V7.22881Z"
          fill="#171717"
        />
      </svg> */}

      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <div className="footer-contact">
            <button>Contact Us</button>
          </div>
        </div>

        <div className="footer-menu">
          <div className="footer-links">
            <div className="footer-links-column">
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Gallery</li>
                <li>Team</li>
              </ul>
            </div>
            <div className="footer-links-column">
              <ul>
                <li className="footer-links-social">
                  <img src={github} alt="" />
                </li>
                <li>
                  <img src={figma} alt="" />
                </li>
                <li>
                  <img src={instagram} alt="" />
                </li>
                <li>
                  <img src={xsocial} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>&copy;2021 All Rights Reserved</span>
        </div>
        <div className="footer-bottom-menu">
          <div className="privacy">Privacy Policy</div>
          <div className="terms">Terms of Use</div>
          <div className="sales">Sales and Refunds</div>
          <div className="lega">Legal</div>
          <div className="site">Site Map</div>
        </div>
        <div className="footer-contact">
          <span>+1 800 854-36-80</span>
        </div>
      </div>
    </footer>
    </>
   
  );
};

export default Footer;
