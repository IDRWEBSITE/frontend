import React from "react";
import "./module.home.css";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import Plx from "react-plx";
import background from "../../assets/Background.png";
import mountain from "../../assets/Mountain.png";
import drone2 from "../../assets/drone2.png";
import drone1 from "../../assets/drone-1.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  AOS.init({
    duration: 2000,
  });

  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img style={{ width: "100%" }} src={background} alt="foreground" />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0,
                endValue: 400,
                property: "translateY",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 300,
          top: 100,
          width: "100%",
          fontSize: "90px",
          width: "70%",
          color: "white",
          textAlign: "left",
          fontWeight: "700",
          textShadow: "2px 3px 20px #f9f9f9;",
        }}
      >
        <h1>
          FLY HIGH <br /> <span className="inner-title">THROUGH</span> THE SKY
        </h1>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          top: 200,
          left: 200,
          width: "900px",
        }}
      >
        <img src={drone1} />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 2,
                property: "scale",
              },
              {
                startValue: 300,
                endValue: -250,
                property: "translateY",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img style={{ width: "100%" }} src={mountain} alt="background" />
        {/* title */}
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: -1000,
                endValue: -400,
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 300,
          width: "100%",
        }}
      >
        <h1 style={{ color: "white", fontSize: "90px", fontWeight: "700" }}>
          DOOT MK-1
        </h1>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 300,
          top: 600,
          width: "100%",
          fontSize: "50px",
          width: "70%",
          color: "white",
          textAlign: "right",
        }}
      >
        <h1>
          Innovating the Future of Defence: Unleashing the Power of Drones"
        </h1>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 400,
                endValue: 0,
                property: "translateY",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 300,
          width: "100%",
        }}
      >
        <img
          style={{
            width: "40vw",
          }}
          src={drone2}
          alt="Goonies"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
