import React, { useState } from "react";
import "./module.products.css";
import instock from "../../assets/InStock.png";
import chip from "../../assets/Chip.svg";
import megapixel from "../../assets/megapixels 1.png";
import drone from '../../assets/drone-product-banner.png'
// import CloseButton from 'react-bootstrap/CloseButton';
import { AiOutlineClose } from 'react-icons/ai';
import Img from '../../assets/drone-1.png'

const ProductsComponent = () => {
  const [activeButton, setActiveButton] = useState("stealth");
  const [popupActive, setPopupActive] = useState(false);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const openPopup = () => {
    setPopupActive(true);
  };

  const closePopup = () => {
    setPopupActive(false);
  };

  return (
    <div className="wrapper-3">
      <div className="heading-3">
        <h1>Products</h1>
        <p>our Remarkable Products</p>
      </div>

      <div className="product">
        <div className="product-left">
          <div className="product-image">
            <img src="" alt="" />
          </div>
        </div>
        <div className="product-right">
          <div className="product-details">
            <div className="product-title">
              <div className="heading-product">
                <h2>Doot MK-1</h2>
              </div>
              <div className="product-rating">
                <p>4.2(1653)</p>{" "}
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
            <div className="options">
              options
              <div className="modes">
                <button
                  name="descBtn"
                  id="stealth"
                  className={`descBtn-1 ${
                    activeButton === "stealth" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("stealth")}
                  checked
                >
                  Stealth
                </button>

                <button
                  name="descBtn"
                  id="original"
                  className={`descBtn ${
                    activeButton === "original" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("original")}
                >
                  Original
                </button>
              </div>
              <div className="product-info">
                <table>
                  <tr>
                    <td>
                      <img src={instock} alt="" />
                    </td>
                    <td>currently in stock</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={chip} alt="" />
                    </td>
                    <td>Expected 6 Chip</td>
                  </tr>
                  <tr>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_51_679)">
                          <path
                            d="M1.66191 15.9234C2.69736 18.6425 4.77556 20.8496 7.40603 22.0561C7.42024 22.0644 7.43439 22.071 7.45031 22.0761C8.83909 22.7057 10.3784 23.0593 11.9998 23.0593C13.3503 23.0593 14.6444 22.8151 15.8418 22.37C15.8719 22.365 15.8999 22.3538 15.9264 22.3366C18.633 21.3049 20.8321 19.2403 22.0413 16.6263C22.0647 16.5977 22.0795 16.5638 22.0867 16.5261C22.7096 15.1435 23.0592 13.6123 23.0592 12.0001C23.0592 5.90194 18.098 0.940704 11.9998 0.940704C10.6355 0.940704 9.32895 1.19067 8.12126 1.64444C8.11905 1.64527 8.11695 1.64604 8.11479 1.64698C5.37918 2.67696 3.15793 4.7614 1.94537 7.40249C1.93785 7.41565 1.93155 7.4288 1.92679 7.44356C1.2952 8.83411 0.94043 10.376 0.94043 12.0001C0.94043 13.3547 1.18641 14.6527 1.63416 15.8533C1.63924 15.8781 1.64842 15.9011 1.66191 15.9234ZM7.29133 21.5004C4.94216 20.3314 3.08662 18.3171 2.12259 15.8576L7.29133 10.6835V21.5004ZM11.9998 22.6065C10.4867 22.6065 9.04781 22.2857 7.74416 21.7123V14.4017L15.3841 22.0496C14.3204 22.4088 13.1831 22.6065 11.9998 22.6065ZM15.8534 21.8787L10.6913 16.7113H21.4989C20.329 19.0603 18.3138 20.9156 15.8534 21.8787ZM22.6064 12.0001C22.6064 13.5143 22.2852 14.9541 21.711 16.2584H14.4065L22.0474 8.60963C22.408 9.67504 22.6064 10.8145 22.6064 12.0001ZM16.7081 2.49952C19.0567 3.66819 20.9119 5.68171 21.8762 8.14038L16.7081 13.3138V2.49952ZM13.8016 16.2233C13.7913 16.2337 13.7862 16.2467 13.7783 16.2584H10.2829C10.2699 16.2584 10.2587 16.2637 10.2463 16.2658L7.77932 13.7962C7.76892 13.7858 7.75588 13.7808 7.74416 13.7728V10.2861C7.74416 10.2696 7.73813 10.2551 7.73476 10.2396L10.1978 7.77406C10.2082 7.76367 10.2132 7.75062 10.2211 7.73891H13.7163C13.7294 7.73891 13.7407 7.7336 13.7532 7.7315L16.2201 10.2009C16.2305 10.2113 16.2436 10.2164 16.2553 10.2243V13.711C16.2553 13.7276 16.2613 13.7422 16.2647 13.7577L13.8016 16.2233ZM11.9998 1.39353C13.5129 1.39353 14.9517 1.7142 16.2553 2.28759V9.59544L8.61743 1.94973C9.68052 1.59098 10.8172 1.39353 11.9998 1.39353ZM8.14801 2.12054L13.3082 7.28608H2.50212C3.6725 4.93768 5.68774 3.08313 8.14801 2.12054ZM2.28991 7.73891H9.59296L1.95145 15.3882C1.59143 14.3235 1.39326 13.1848 1.39326 12.0001C1.39326 10.4849 1.71492 9.044 2.28991 7.73891Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_51_679">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </td>
                    <td>Works with 24-50mm lens</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={megapixel} className="bg-gray-300" alt="" />
                    </td>
                    <td>24.3 million Effective Pixels</td>
                  </tr>
                  <tr>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M18.375 17.4464H3.375C2.9625 17.4464 2.625 17.1089 2.625 16.6964V8.44641C2.625 8.03391 2.9625 7.69641 3.375 7.69641H18.375C18.7875 7.69641 19.125 8.03391 19.125 8.44641V16.6964C19.125 17.1089 18.7875 17.4464 18.375 17.4464Z"
                          stroke="#2C3E50"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.125 11.0714H21.375V14.0714H19.125"
                          stroke="#2C3E50"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </td>
                    <td>EN-EL15c rechargeable Li-ion battery</td>
                  </tr>
                </table>
                {/* ---------- POP UP BTN ------------- */}
                <a href="#" className="text-decoration underline mb-8 cursor-pointer" onClick={openPopup}>View All Tech Specs</a> 
              </div>
              <div className={`popup-view ${popupActive ? 'active' : ''}`}>
                <div className="popup-card">
                  <a href="" className="close-btn" onClick={closePopup}><AiOutlineClose /></a>
                  {/* ----- img carousal -----  */}
                  <div className="product-img" id="image1"> 
                    <img src={Img} alt="" />
                  </div>
                 
                  <div className="info">
                    <h2>Doot MK-1 <br/> <span></span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos eveniet cupiditate corruption</p>
                    <div className="extra-features">
                      <h2>feature-1</h2>
                      <p>feature-1 desc</p>
                      <h2>feature-2</h2>
                      <p>feature-2 desc</p>
                      <h2>feature-3</h2>
                      <p>feature-3 desc</p>
                    </div>
                  </div>


                </div>
              </div>
              <hr />  
              <div className="query">
                {/* <img src="" alt="" /> Got any Questions?  Contact Us  link*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-banner">
        <div className="banner-left">
          <div className="banner-heading">
            <h2>
              Got a question? We are here to <br />
              help
            </h2>
            <p>
              If you don’t find an answer in our FAQ page, please contact us{" "}
              <br />
              below, our customer support is available Monday to Friday: 9am-
              <br />
              5pm.
            </p>
            <div>
              <button className="contact-btn">Contact us</button>
              <span className="span-contact">You'll get a response within 24 hours</span>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <img src={drone} alt=""  className="drone-banner"/>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
