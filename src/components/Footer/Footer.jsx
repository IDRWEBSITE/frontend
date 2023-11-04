import React from "react";
import "./module.footer.css"; // Import your CSS file for styling
import logo from "../../assets/IDR Black Logo Footer.png"; // Import your logos
import github from "../../assets/github-social.svg";
import figma from "../../assets/figma-social.svg";
import xsocial from "../../assets/x-social.svg";
import instagram from "../../assets/insta-social.svg";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
const Footer = () => {
  return (
    <>
      <footer className="footer fixed bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%" // Set the width to 100% to make it responsive
          viewBox="0 0 1440 445"
          fill="none"
          // height="100%"
          className="footer-svg object-fill z-[-10]a"
        >
          <path
            d="M0 7.22881L40.0067 3.30165C99.1941 -2.50833 158.943 2.28758 216.446 17.464L454.813 80.3746C527.982 99.6859 604.581 102.137 678.836 87.5418L1057.62 13.0915C1149.37 -4.941 1244.33 3.11283 1331.73 36.3385L1440 77.5V445H0V7.22881Z"
            fill="white"
          />
        </svg>
        <div className="footer-container">
          <div className="left">
            <img src={logo} alt="Logo" className="footer-logo" />
            <div className="footer-contact">
              <button>Contact Us</button>
            </div>
            <span className="footer-bottom-menu">
              &copy;2021 All Rights Reserved
            </span>
          </div>
          <div className="center">
            <div className="footer-list">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Feature</li>
                <li>Gallery</li>
                <li>Team</li>
              </ul>
            </div>
            <div className="footer-bottom-menu">
              <div className="privacy">Privacy Policy</div>
              <div className="terms">Terms of Use</div>
              <div className="sales">Sales and Refunds</div>
              <div className="lega">Legal</div>
              <div className="site">Site Map</div>
            </div>
          </div>
          <div className="right">
            <div className="footer-list">
              <ul>
                <li>
                  <BsGithub />
                </li>
                <li>
                  <SlSocialLinkedin />
                </li>
                <li>
                  <BsInstagram />
                </li>
                <li>
                  <LuTwitter />
                </li>
              </ul>
              <div className="footer-bottom-menu">
                <span>+1 800 854-36-80</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
