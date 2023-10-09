import React from "react";

const productsComponent = () => {
  return (
    <div className="wrapper">
      <div className="heading">
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
                <span>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </span>
              </div>
            </div>
            <div className="options">
              options
              <div className="modes">
                <input
                  type="radio"
                  name="stealth"
                  id="stealth"
                  className=""
                  checked
                />
                <label htmlFor="stealth"></label>

                <input
                  type="radio"
                  name="original"
                  id="original"
                  className=""
                />
                <label htmlFor="original"></label>
              </div>
              <div className="product-info">
                <p>
                  <img src="" alt="" /> currently in stock
                </p>
                <p>
                  <img src="" alt="" /> Expected 6 Chip
                </p>
                <p>
                  <img src="" alt="" /> Works with 24-50mm lens
                  <br />
                  24.3 million Effective Pixels
                </p>
                <p>
                  <img src="" alt="" /> EN-EL15c rechargeable Li-ion battery
                </p>
                <a href="">view All Tech Specs</a>
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
            <h2>Got a question? We are here to <br/>help</h2>
            <p>If you don’t find an answer in our FAQ page, please contact us <br />
            below, our customer support is available Monday to Friday: 9am-<br/>
             5pm.</p>
             <div>
                <button className="">
                    Contact us
                </button>
                <span>You'll get a response within 24 hours</span>
             </div>
        </div>
      </div>
      <div className="banner-right">
        <img src="" alt="" />
      </div>
        
      </div>
    </div>
  );
};

export default productsComponent;
