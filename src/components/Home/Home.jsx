import React from "react";
import "./module.home.css";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import Plx from "react-plx";
import background from "../../assets/Background.png";
import mountain from "../../assets/Mountain.png";
import drone2 from "../../assets/drone2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  AOS.init({
    duration: 2000,
  });

  return (
    <>
      <div className="layer1">
        <div style={{ position: "relative" }}>
          <Plx
            className="MyAwesomeParallax"
            parallaxData={[
              {
                start: 0,
                duration: 300,
                properties: [
                  {
                    startValue: 1.4,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 100,
                    property: "translateY",
                  },
                ],
              },
            ]}
          >
            <img
              src={background}
              alt="background"
              style={{ height: "100vh", width: "100vw" }}
            />
          </Plx>
        </div>

        <div style={{ position: "absolute", top: "20px" }}>
          <Plx
            className="MyAwesomeParallax"
            parallaxData={[
              {
                start: 0,

                duration: 500,
                properties: [
                  {
                    startValue: 1,
                    endValue: 2.1,
                    property: "scale",
                  },
                  {
                    startValue: 100,
                    endValue: -60,
                    property: "translateY",
                  },
                ],
              },
              {
                start: 700,

                duration: 500,
                properties: [
                  {
                    startValue: 0,
                    endValue: 10,
                    property: "blur",
                  },
                ],
              },
            ]}
          >
            <img src={mountain} alt="background" />
          </Plx>
          <Plx
            className="MyAwesomeParallax"
            parallaxData={[
              {
                start: 0,

                duration: 800,
                properties: [
                  {
                    startValue: -800,
                    endValue: 500,
                    property: "translateX",
                  },
                ],
              },
              {
                start: 500,

                duration: 300,

                properties: [
                  {
                    startValue: 0,
                    endValue: -800,
                    property: "translateX",
                  },
                ],
              },
            ]}
          >
            <div style={{ position: "absolute", bottom: "10px" }}>
              <h1
                style={{
                  color: "white",
                  fontSize: "8rem",
                  margin: "0 20px",
                }}
              >
                DOOT MK-1
              </h1>
            </div>
          </Plx>
          <Plx
            className="MyAwesomeParallax"
            parallaxData={[
              {
                start: 0,

                duration: 500,
                properties: [
                  {
                    startValue: 1,
                    endValue: 1.05,
                    property: "scale",
                  },
                  {
                    startValue: 100,
                    endValue: -200,
                    property: "translateY",
                  },
                ],
              },
              {
                start: 600,

                duration: 900,
                easing: [0.25, 0.1, 0.53, 3],
                properties: [
                  {
                    startValue: 1,
                    endValue: -10,
                    property: "opacity",
                  },
                ],
              },
            ]}
          >
            <div style={{ position: "relative" }}>
              <img
                src={drone2}
                alt=""
                srcset=""
                style={{ position: "fixed" }}
              />
            </div>
          </Plx>
        </div>

        <div style={{}}>
          <img
            src={mountain}
            alt="background"
            style={{}}
            className={"fade-right"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
