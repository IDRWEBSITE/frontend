import React from "react";
import "./bg.css";
const BG = () => {
  return (
    <div className="parallax">
      <div className="doot-bg">
        <div className="heading-6">
          <h1>
            <span className="inner-title"> WHAT MAKES</span>
          </h1>
          <p className="para-title">Doot Mk-1</p>
          <h1>
            {" "}
            <span className="inner-title"> DIFFERENT</span>
          </h1>
        </div>
      </div>
      <div className="drone-3"></div>
      <div className="top-left-para">
        <h2 className="para-title-2">DESIGN</h2>
        <p className="para-desc">
          Indigenously Designed and developed nano UAV. The modular design
          ensures a lightweight and compact build, enabling operation in diverse
          weather and terrain conditions
        </p>
      </div>
      <div className="top-right-para">
        <h2 className="para-title-2">AVIONICS</h2>
        <p className="para-desc">
          Incorporated with compact, nano-sized, high-precision sensors and
          electronics to achieve optimal performance. The electronic circuit is
          fully shielded &protected, ensuring a seamless & interference-free
          communication.
        </p>
      </div>
      <div className="bottom-left-para">
      <h2 className="para-title-2 inline ">DEP</h2><span className="h2-span items">(Distributed Electric Propulsion)</span>
        <p className="para-desc">
          Distributed Electric Propulsion with two point failure &maximum
          safety. SIC based high voltage propulsion system for maximum
          efficiency
        </p>
      </div>
      <div className="bottom-right-para">
        <h2 className="para-title-2">BATTERY</h2>
        <p className="para-desc">
          Specially designed batteries to operate at maximum efficiency in
          negative ambient temperature from -10° C to 50° C
        </p>
      </div>
    </div>
  );
};

export default BG;
