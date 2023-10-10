import React from "react";
import "./module.home.css";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import Plx from "react-plx";
import background from "../../assets/Background.png";
import mountain from "../../assets/Mountain.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

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
        </div>

        <div style={{}}>
          <img src={mountain} alt="background" style={{}} />
        </div>
      </div>
    </>
  );
};

export default Home;
