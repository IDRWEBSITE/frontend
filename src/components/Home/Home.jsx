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
          {
            start: 800,

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
          {
            start: 600,
            end: 900,

            properties: [
              {
                startValue: -400,
                endValue: -2000,
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
          {
            start: 500,
            end: 900,

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
          {
            start: 500,
            end: 800,

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
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 0.4,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: 1600,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <Plx
          parallaxData={[
            {
              start: 0,
              duration: 300,

              properties: [
                {
                  startValue: -200,
                  endValue: 0,
                  property: "translateY",
                },
              ],
            },
          ]}
          style={{
            position: "absolute",
            left: 200,
            // top: 400,
            width: "100%",
            fontSize: "70px",
            width: "70%",
            color: "white",
            textAlign: "left",
            fontWeight: "700",
            textShadow: "2px 3px 20px #f9f9f9;",
          }}
        >
          <h1>
            <span className="inner-title">Empower your security with our </span>
            Doot Mk-1
          </h1>
        </Plx>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0,
                endValue: 0,
                property: "translateY",
              },
            ],
          },
          {
            start: 500,
            end: 800,

            properties: [
              {
                startValue: 1,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          left: 400,
          top: 1600,
          width: "100%",
        }}
      >
        <div>
          <img
            style={{
              width: "40vw",

              marginTop: "90px",
            }}
            src="https://media.discordapp.net/attachments/1123630739213258834/1161280192975732786/image.png?ex=6537b975&is=65254475&hm=3be69a8d0791a28fd5236971d5381b1ef717efead5d355e6a5c624e87da4a75c&=&width=1378&height=902"
            alt="Goonies"
          />
        </div>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 500,
            end: 800,

            properties: [
              {
                startValue: 1,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          left: 200,
          top: 2100,
          width: "100%",
          color: "white",
        }}
      >
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "30px",
              width: "70%",
              textAlign: "center",
            }}
          >
            The Doot MK-1 represents the pinnacle of Indian ingenuity and drone
            engineering. This state-of-the-art drone is designed to elevate your
            aerial experiences to new heights.
          </h1>
        </div>
      </Plx>
    </div>
  );
};

export default Home;
