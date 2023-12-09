import React from "react";
import Plx from "react-plx";
import bgDrone from "../../assets/bg-drone.jpeg";

export default function BrownBg() {
  return (
    <div style={{ position: "relative" }}>
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
          top: "200px",
        }}
      >
        <img style={{ height: "100vh" }} src={bgDrone} alt="foreground" />
      </Plx>
      {/* <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
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
        <img style={{ width: "100%" }} src="hero.jpeg" alt="background" />
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
          left: 0,
          top: "26vw",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "30vw",
          }}
          src="/goonies.png"
          alt="Goonies"
        />
      </Plx> */}
    </div>
  );
}
