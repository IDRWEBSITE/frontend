import React from "react";
import Navbar from "../Navbar/Navbar";
const AboutComponent = () => {
  return (
    <div className="wrapper">
     <Navbar />
      <div className="hero-section">
        <h1>About Us</h1>
      </div>
      <div className="service-section">
        <div className="left-section">
          <p>We provide drone-tech services</p>
          <h2>
            {" "}
            Services We're <br /> Offering
          </h2>
          <img src="" alt="" />
        </div>
        <div className="right-section">
          <img src="" alt="" />
          <p>
            We provide drone-tech services We provide drone-tech services We
            provide
            <br /> drone-tech services We provide drone-tech services We provide
            drone-tech services
            <br /> We provide drone-tech services We provide drone-tech services
            We provide drone-tech services
          </p>
          <p>
            We provide drone-tech services We provide drone-tech services We
            provide drone-tech
            <br />
            services We provide drone-tech services We provide drone-tech
          </p>
          <div className="discover-btn">
            <button>Discover more</button>
          </div>
        </div>
      </div>

      <div className="team-section">
        <p>Our Team</p>
        <h2>Meet Our Team</h2>
        <div className="team-gallery">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="article-section">
        <p>Our Articles</p>
        <h2>Over Latest News</h2>
        <div className="articles-gallery">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="news-letter">
        <h2>SIGN UP FOR OUR NEWSLETTERS<br/>
        GET NOTIFIED OF THE BEST OF OUR UPDATES</h2>
        <div className="form-newsletter">
            <form action="">
                <div><input type="text" name="" id="" /></div>
                <div><input type="email" name="" id="" /></div>
                <div><button>SUBSCRIBE</button></div>
                <div><input type="checkbox" name="" id="" />By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted <br/>
                 through this form.</div>
                
            </form>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
