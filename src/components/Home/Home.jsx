import React, { useState } from "react";
import "./module.home.css";
import { useRef } from "react";
import background from "../../assets/Background.png";
import drone3 from "../../assets/drone-3.png";
import mountain from "../../assets/Mountain.png";
import "../KeyFeatures/module.KeyFeatures.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, useInView, easeIn } from "framer-motion";
import text1 from "../../assets/text1.webp";
import text2 from "../../assets/text1.webp";
import text3 from "../../assets/text3.webp";
import text4 from "../../assets/text4.webp";

import drone2 from "../../assets/drone2.png";
import drone1 from "../../assets/drone-1.png";
import bannerBackground from "../../assets/banner-background.jpg";
import droneProduct from "../../assets/drone-product-banner.png";
import bgDrone from "../../assets/bg-drone.jpeg";
import Testimonials from "../testimonials/testimonials";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import DootComponent1 from "../dootComponent/DootComponent1";
import DootComponent2 from "../dootComponent/DootComponent2";
import DootComponent3 from "../dootComponent/DootComponent3";
import DootComponent4 from "../dootComponent/DootComponent4";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [counter, setCounter] = useState(0);
  const array = [{}];
  const isMobile = window.innerWidth <= 600;
  console.log(isMobile);
  const increase = () => {
    if (isMobile) {
      if (counter < 5) {
        setCounter(counter + 1);
      }
    } else {
      if (counter < 3) {
        setCounter(counter + 1);
      }
    }

    console.log(counter);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log(counter);
  };
  return (
    <div>
      <ParallaxBanner
        style={{ height: "100vh" }}
        layers={[
          { image: bannerBackground, speed: 20 },
          {
            speed: -15,
            children: (
              <div
                className="absolute inset-0 flex items-center justify-center urbanist"
                style={{ marginBottom: "100px" }}
              >
                <h1
                  style={{
                    color: "var(--grey, #EBEBEB)",
                    textShadow: "0px 4px 34px rgba(130, 165, 107, 0.59)",
                    fontWeight: "700",
                    marginBottom: "200px",
                  }}
                  className="main-title"
                >
                  FLY HIGH <br /> <span className="inner-title">THROUGH</span>{" "}
                  THE SKY
                </h1>
              </div>
            ),
          },
          {
            image: mountain,
            speed: -10,
          },
          {
            speed: -10,
            translateY: [0, 70],
            children: (
              <motion.div
                className="absolute inset-0 flex items-center justify-center urbanist"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "130px",
                }}
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, easeIn }}
                // opacity={[2, 0]}
              >
                <img src={drone1} alt="" style={{}} />
              </motion.div>
            ),
          },
          {
            opacity: [0, 1, "easeOutCubic"],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
            children: <div className="gradient inset" />,
          },
        ]}
        className="aspect-[2/1.1] full"
      />
      <ParallaxBanner
        style={{ height: "100vh" }}
        layers={[
          {
            image: background,

            speed: 20,
          },
          {
            opacity: [0, 1, "easeOutCubic"],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
            children: <div className="gradient2 inset" />,
          },
          {
            speed: -15,
          },
          {
            image: mountain,
            speed: -10,
            opacity: [-1, 3],

            children: (
              <>
                <Parallax
                  translateX={[-70, 20]}
                  className="absolute inset-0 flex items-center urbanist"
                  style={{ margin: "auto" }}
                  // opacity={[2, 0]}
                >
                  <h1
                    className="main-title"
                    style={{ marginBottom: "40%", marginLeft: "30%" }}
                  >
                    <span className="inner-title">DOOT</span> MK-1
                  </h1>
                </Parallax>
                <Parallax
                  translateY={[70, -60]}
                  className="absolute inset-0 flex items-center urbanist"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  // opacity={[2, 0]}
                >
                  <img src={drone2} alt="" />
                </Parallax>
              </>
            ),
          },
          {
            children: (
              <Parallax
                translateX={[60, -40]}
                className="absolute inset-0 flex items-end  urbanist"
                opacity={[5, -2]}
              >
                <h1 className="main-title2">
                  "Innovating the Future of Defence: Unleashing the Power of
                  Drones"
                </h1>
              </Parallax>
            ),
          },
        ]}
        className="aspect-[2/1.1]  full"
      />
      <ParallaxBanner
        style={{ height: "100vh" }}
        layers={[
          // {
          //   opacity: [0, 1, "easeOutCubic"],
          //   shouldAlwaysCompleteAnimation: true,
          //   expanded: false,
          //   children: <div className="absolute inset-0 bg-black  inset" />,
          // },
          {
            // speed: -20,
            image: bannerBackground,
            opacity: [0, 1.5],
            scale: [1.4, 1],
            translateY: [-20, 0],
            children: (
              <div
                className="absolute inset-0 flex  items-center justify-center"
                style={{
                  height: "60%",
                  textAlign: "center",
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                }}
              >
                <h1
                  className="main-title"
                  style={{ lineHeight: "80%" }}
                  id="doot-title"
                >
                  Empower your security <br /> with our{" "}
                  <span
                    className="inner-title"
                    style={{ marginBottom: "40px" }}
                  >
                    Doot Mk-1
                  </span>
                </h1>
              </div>
            ),
          },
          {
            speed: -20,
            translateY: [20, -20],

            scale: [1, 0.8],
            children: (
              <div className="absolute inset-0 flex  items-center justify-center">
                <img src={droneProduct} alt="" style={{ height: "40%" }} />
              </div>
            ),
          },
          {
            children: (
              <Parallax
                className="absolute bottom-0 flex   justify-center"
                speed={-20}
                opacity={[3, -2]}
              >
                <h1 className="doot-desc">
                  The Doot MK-1 represents the pinnacle of Indian ingenuity and
                  drone engineering. This state-of-the-art drone is designed to
                  elevate your aerial experiences to new heights.
                </h1>
              </Parallax>
            ),
          },
        ]}
        className="aspect-[2/1] bg-black"
      />
      {/* <div ref={ref} style={{ position: "relative" }}>
        <span>
          <IoIosArrowBack
            style={{
              zIndex: "200",
              position: "absolute",
              top: "50%",
              left: "20px",
              fontSize: "40px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={decrease}
          />
        </span>

        <span>
          <IoIosArrowForward
            style={{
              top: "50%",
              right: "20px",
              zIndex: "200",
              position: "absolute",
              fontSize: "40px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={increase}
          />
        </span>

        {counter < 2 ? (
          <ParallaxBanner
            style={{ height: "100vh" }}
            layers={[
              {
                image: bgDrone,

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div ref={ref} className="heading-5">
                    <h1
                      style={{
                        transform: isInView ? "none" : "translateY(-400px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                      }}
                      id="keyFeatures"
                    >
                      <span className="inner-title"> Key Features</span>
                      <br />
                      <span className="main-title">Doot Mk-1</span>
                    </h1>
                  </div>
                ),
              },

              {
                speed: -10,
                opacity: [2, 0],
                children: (
                  <>
                    <div
                      ref={ref}
                      className="absolute inset-0 flex items-center justify-center urbanist"
                    >
                      <img
                        src={drone1}
                        alt=""
                        style={{
                          marginTop: "100px",

                          opacity: isInView ? 1 : 0,

                          transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                        }}
                      />
                    </div>

                    {counter == 0 && (
                      <>
                        {" "}
                        <div
                          className="top-right-feature absolute inset-0 flex  items-end justify-center urbanist "
                          style={{
                            flexDirection: "column",
                            marginBottom: "200px",
                            transform: isInView ? "none" : "translateX(1000px)",
                            opacity: isInView ? 1 : 0,

                            transition:
                              "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                          }}
                          ref={ref}
                        >
                          <p className="top-right-feature-detail">
                            Maximum Speed :- 50 KM/H{" "}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="299"
                            height="78"
                            viewBox="0 0 299 78"
                            fill="none"
                          >
                            <path
                              d="M5.66669 75C5.66669 73.5272 4.47278 72.3333 3 72.3333C1.52725 72.3333 0.333344 73.5272 0.333344 75C0.333344 76.4728 1.52725 77.6667 3 77.6667C4.47278 77.6667 5.66669 76.4728 5.66669 75ZM97.1818 1V0.5H97.0089L96.8729 0.606842L97.1818 1ZM3.30893 75.3932L97.4907 1.39316L96.8729 0.606842L2.6911 74.6068L3.30893 75.3932ZM97.1818 1.5H299V0.5H97.1818V1.5Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div
                          ref={ref}
                          className="bottom-left-feature"
                          style={{
                            transform: isInView
                              ? "none"
                              : "translateX(-1000px)",
                            opacity: isInView ? 1 : 0,

                            transition:
                              "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="299"
                            height="78"
                            viewBox="0 0 299 78"
                            fill="none"
                          >
                            <path
                              d="M293.333 3C293.333 4.47276 294.527 5.66667 296 5.66667C297.473 5.66667 298.667 4.47276 298.667 3C298.667 1.52724 297.473 0.333333 296 0.333333C294.527 0.333333 293.333 1.52724 293.333 3ZM201.818 77V77.5H201.991L202.127 77.3932L201.818 77ZM295.691 2.60684L201.509 76.6068L202.127 77.3932L296.309 3.39316L295.691 2.60684ZM201.818 76.5H0V77.5H201.818V76.5Z"
                              fill="white"
                            />
                          </svg>
                          <p className="bottom-left-feature-detail">
                            {" "}
                            30 Minutes flight time{" "}
                          </p>
                        </div>
                      </>
                    )}
                    {counter === 1 && (
                      <div
                        ref={ref}
                        className="top-left-feature absolute inset-0 flex  items-center justify-center urbanist"
                        style={{
                          transform: isInView ? "none" : "translateX(-1000px)",
                          opacity: isInView ? 1 : 0,

                          transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                        }}
                      >
                        <svg
                          width="299"
                          height="78"
                          viewBox="0 0 299 78"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M293.333 75C293.333 73.5272 294.527 72.3333 296 72.3333C297.473 72.3333 298.667 73.5272 298.667 75C298.667 76.4728 297.473 77.6667 296 77.6667C294.527 77.6667 293.333 76.4728 293.333 75ZM201.818 1V0.5H201.991L202.127 0.606842L201.818 1ZM295.691 75.3932L201.509 1.39316L202.127 0.606842L296.309 74.6068L295.691 75.3932ZM201.818 1.5H0V0.5H201.818V1.5Z"
                            fill="white"
                          />
                        </svg>
                        <p className="top-left-feature-detail">
                          High Resolution Camera
                        </p>
                      </div>
                    )}
                    {counter === 1 && (
                      <div
                        className="bottom-right-feature absolute inset-0 flex  items-end justify-center urbanist "
                        style={{
                          flexDirection: "column",
                          marginBottom: "200px",
                          transform: isInView ? "none" : "translateX(1000px)",
                          opacity: isInView ? 1 : 0,

                          transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                        }}
                        ref={ref}
                      >
                        <p className="top-right-feature-detail">New Camera</p>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="299"
                          height="78"
                          viewBox="0 0 299 78"
                          fill="none"
                        >
                          <path
                            d="M5.66669 75C5.66669 73.5272 4.47278 72.3333 3 72.3333C1.52725 72.3333 0.333344 73.5272 0.333344 75C0.333344 76.4728 1.52725 77.6667 3 77.6667C4.47278 77.6667 5.66669 76.4728 5.66669 75ZM97.1818 1V0.5H97.0089L96.8729 0.606842L97.1818 1ZM3.30893 75.3932L97.4907 1.39316L96.8729 0.606842L2.6911 74.6068L3.30893 75.3932ZM97.1818 1.5H299V0.5H97.1818V1.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    )}
                  </>
                ),
              },
            ]}
            className="aspect-[2/1.2] "
          />
        ) : (
          <ParallaxBanner
            style={{ height: "100vh" }}
            layers={[
              {
                image: bgDrone,

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div ref={ref} className="heading-5">
                    <h1
                      style={{
                        transform: isInView ? "none" : "translateY(-400px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                      }}
                      id="keyFeatures"
                    >
                      {isMobile ? (
                        <>
                          <span
                            className="inner-title"
                            style={{ lineHeight: "20px" }}
                          >
                            What makes
                          </span>
                          <br />
                          <span
                            className="main-title"
                            style={{ fontSize: "30px" }}
                          >
                            Doot Mk-1
                          </span>
                          <br />
                          <span className="inner-title">Different?</span>
                        </>
                      ) : (
                        <>
                          <span className="inner-title">What makes</span>
                          <br />
                          <span className="main-title">Doot Mk-1</span>

                          <span className="inner-title">Different?</span>
                        </>
                      )}
                    </h1>
                  </div>
                ),
              },

              {
                speed: -10,
                opacity: [2, 0],
                children: (
                  <>
                    {isMobile ? (
                      <>
                        {counter == 2 && (
                          <div className="top-left-feature-drone">
                            <DootComponent1 />
                          </div>
                        )}
                        {counter == 3 && (
                          <div className="top-left-feature-drone">
                            <DootComponent2 />
                          </div>
                        )}
                        <div
                          ref={ref}
                          className="absolute inset-0 flex items-center justify-center urbanist"
                        >
                          <img
                            src={drone3}
                            className="drone-3"
                            alt=""
                            style={{
                              marginTop: "100px",
                            }}
                          />
                        </div>
                        {counter == 4 && (
                          <div className="top-right-feature-drone">
                            <DootComponent3 />
                          </div>
                        )}
                        {counter == 5 && (
                          <div className="top-right-feature-drone">
                            <DootComponent4 />
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {counter == 2 && (
                          <div className="top-left-feature-drone">
                            <DootComponent1 />
                          </div>
                        )}
                        {counter == 3 && (
                          <div className="top-left-feature-drone">
                            <DootComponent3 />
                          </div>
                        )}
                        <div
                          ref={ref}
                          className="absolute inset-0 flex items-center justify-center urbanist"
                        >
                          <img
                            src={drone3}
                            className="drone-3"
                            alt=""
                            style={{
                              marginTop: "100px",
                            }}
                          />
                        </div>
                        {counter == 2 && (
                          <div className="top-right-feature-drone">
                            <DootComponent2 />
                          </div>
                        )}
                        {counter == 3 && (
                          <div className="top-right-feature-drone">
                            <DootComponent4 />
                          </div>
                        )}
                      </>
                    )}
                  </>
                ),
              },
            ]}
            className="aspect-[2/1.2] "
          />
        )}
      </div> */}
      <div
        className="main-container"
        style={{ backgroundImage: `url(${bgDrone})` }}
      >
        {/* --------- section 1-------------- */}
        <div ref={ref} className="container-key-features">
          {/* Content for section 1 */}
          <span>
            <IoIosArrowBack
              style={{
                zIndex: "200",
                position: "absolute",
                top: "50%",
                left: "20px",
                fontSize: "40px",
                color: "white",
                cursor: "pointer",
              }}
              onClick={decrease}
            />
          </span>

          <span>
            <IoIosArrowForward
              style={{
                top: "50%",
                right: "20px",
                zIndex: "200",
                position: "absolute",
                fontSize: "40px",
                color: "white",
                cursor: "pointer",
              }}
              onClick={increase}
            />
          </span>
          <ParallaxBanner
            style={{ height: "100vh" }}
            layers={[
              {
                // image: bgDrone,

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div ref={ref} className="heading-5">
                    <h1
                      style={{
                        transform: isInView ? "none" : "translateY(-400px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                      }}
                      id="keyFeatures"
                    >
                      <span className="inner-title"> Key Features</span>
                      <br />
                      <span className="main-title">Doot Mk-1</span>
                    </h1>
                  </div>
                ),
              },

              {
                speed: -10,
                opacity: [2, 0],
                children: (
                  <>
                    <div
                      ref={ref}
                      className="absolute inset-0 flex items-center justify-center urbanist"
                    >
                      <img
                        src={drone1}
                        alt=""
                        style={{
                          marginTop: "100px",

                          opacity: isInView ? 1 : 0,

                          transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                        }}
                      />
                    </div>

                    {counter == 0 && (
                      <>
                        {" "}
                        <div
                          className="top-right-feature absolute inset-0 flex  items-end justify-center urbanist "
                          style={{
                            flexDirection: "column",
                            marginBottom: "200px",
                            transform: isInView ? "none" : "translateX(1000px)",
                            opacity: isInView ? 1 : 0,

                            transition:
                              "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                          }}
                          ref={ref}
                        >
                          <p className="top-right-feature-detail">
                            Maximum Speed :- 50 KM/H{" "}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="299"
                            height="78"
                            viewBox="0 0 299 78"
                            fill="none"
                          >
                            <path
                              d="M5.66669 75C5.66669 73.5272 4.47278 72.3333 3 72.3333C1.52725 72.3333 0.333344 73.5272 0.333344 75C0.333344 76.4728 1.52725 77.6667 3 77.6667C4.47278 77.6667 5.66669 76.4728 5.66669 75ZM97.1818 1V0.5H97.0089L96.8729 0.606842L97.1818 1ZM3.30893 75.3932L97.4907 1.39316L96.8729 0.606842L2.6911 74.6068L3.30893 75.3932ZM97.1818 1.5H299V0.5H97.1818V1.5Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div
                          ref={ref}
                          className="bottom-left-feature"
                          style={{
                            transform: isInView
                              ? "none"
                              : "translateX(-1000px)",
                            opacity: isInView ? 1 : 0,

                            transition:
                              "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="299"
                            height="78"
                            viewBox="0 0 299 78"
                            fill="none"
                          >
                            <path
                              d="M293.333 3C293.333 4.47276 294.527 5.66667 296 5.66667C297.473 5.66667 298.667 4.47276 298.667 3C298.667 1.52724 297.473 0.333333 296 0.333333C294.527 0.333333 293.333 1.52724 293.333 3ZM201.818 77V77.5H201.991L202.127 77.3932L201.818 77ZM295.691 2.60684L201.509 76.6068L202.127 77.3932L296.309 3.39316L295.691 2.60684ZM201.818 76.5H0V77.5H201.818V76.5Z"
                              fill="white"
                            />
                          </svg>
                          <p className="bottom-left-feature-detail">
                            {" "}
                            30 Minutes flight time{" "}
                          </p>
                        </div>
                      </>
                    )}
                    {counter === 1 && (
                      <div
                        ref={ref}
                        className="top-left-feature absolute inset-0 flex  items-center justify-center urbanist"
                        style={{
                          transform: isInView ? "none" : "translateX(-1000px)",
                          opacity: isInView ? 1 : 0,

                          transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                        }}
                      >
                        <svg
                          width="299"
                          height="78"
                          viewBox="0 0 299 78"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M293.333 75C293.333 73.5272 294.527 72.3333 296 72.3333C297.473 72.3333 298.667 73.5272 298.667 75C298.667 76.4728 297.473 77.6667 296 77.6667C294.527 77.6667 293.333 76.4728 293.333 75ZM201.818 1V0.5H201.991L202.127 0.606842L201.818 1ZM295.691 75.3932L201.509 1.39316L202.127 0.606842L296.309 74.6068L295.691 75.3932ZM201.818 1.5H0V0.5H201.818V1.5Z"
                            fill="white"
                          />
                        </svg>
                        <p className="top-left-feature-detail">
                          High Resolution Camera
                        </p>
                      </div>
                    )}
                    {counter === 1 && (
                      <div
                        className="bottom-right-feature absolute inset-0 flex  items-end justify-center urbanist "
                        style={{
                          flexDirection: "column",
                          marginBottom: "200px",
                          transform: isInView ? "none" : "translateX(1000px)",
                          opacity: isInView ? 1 : 0,

                          transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                        }}
                        ref={ref}
                      >
                        <p className="top-right-feature-detail">New Camera</p>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="299"
                          height="78"
                          viewBox="0 0 299 78"
                          fill="none"
                        >
                          <path
                            d="M5.66669 75C5.66669 73.5272 4.47278 72.3333 3 72.3333C1.52725 72.3333 0.333344 73.5272 0.333344 75C0.333344 76.4728 1.52725 77.6667 3 77.6667C4.47278 77.6667 5.66669 76.4728 5.66669 75ZM97.1818 1V0.5H97.0089L96.8729 0.606842L97.1818 1ZM3.30893 75.3932L97.4907 1.39316L96.8729 0.606842L2.6911 74.6068L3.30893 75.3932ZM97.1818 1.5H299V0.5H97.1818V1.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    )}
                  </>
                ),
              },
            ]}
            className="aspect-[2/1.2] "
          />
        </div>

        {/* ------------ section 2----------- */}
        <div ref={ref} className="container-diff">
          {/* Content for section 2 */}
          <ParallaxBanner
            style={{ height: "100vh" }}
            layers={[
              {
                // image: bgDrone,

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div ref={ref} className="heading-5">
                    <h1
                      style={{
                        transform: isInView ? "none" : "translateY(-400px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                      }}
                      id="keyFeatures"
                    >
                      {isMobile ? (
                        <>
                          <span
                            className="inner-title"
                            style={{ lineHeight: "20px" }}
                          >
                            What makes
                          </span>
                          <br />
                          <span
                            className="main-title"
                            style={{ fontSize: "30px" }}
                          >
                            Doot Mk-1
                          </span>
                          <br />
                          <span className="inner-title">Different?</span>
                        </>
                      ) : (
                        <>
                          <span className="inner-title">What makes</span>
                          <br />
                          <span className="main-title">Doot Mk-1</span>

                          <span className="inner-title">Different?</span>
                        </>
                      )}
                    </h1>
                  </div>
                ),
              },

              {
                speed: -10,
                opacity: [2, 0],
                children: (
                  <>
                    {isMobile ? (
                      <>
                        {counter == 2 && (
                          <div className="top-left-feature-drone">
                            <DootComponent1 />
                          </div>
                        )}
                        {counter == 3 && (
                          <div className="top-left-feature-drone">
                            <DootComponent2 />
                          </div>
                        )}
                        <div
                          ref={ref}
                          className="absolute inset-0 flex items-center justify-center urbanist"
                        >
                          <img
                            src={drone3}
                            className="drone-3"
                            alt=""
                            style={{
                              marginTop: "100px",
                            }}
                          />
                        </div>
                        {counter == 4 && (
                          <div className="top-right-feature-drone">
                            <DootComponent3 />
                          </div>
                        )}
                        {counter == 5 && (
                          <div className="top-right-feature-drone">
                            <DootComponent4 />
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {counter == 2 && (
                          <div className="top-left-feature-drone">
                            <DootComponent1 />
                          </div>
                        )}
                        {counter == 3 && (
                          <div className="top-left-feature-drone">
                            <DootComponent3 />
                          </div>
                        )}
                        <div
                          ref={ref}
                          className="absolute inset-0 flex items-center justify-center urbanist"
                        >
                          <img
                            src={drone3}
                            className="drone-3"
                            alt=""
                            style={{
                              marginTop: "100px",
                            }}
                          />
                        </div>
                        {counter == 2 && (
                          <div className="top-right-feature-drone">
                            <DootComponent2 />
                          </div>
                        )}
                        {counter == 3 && (
                          <div className="top-right-feature-drone">
                            <DootComponent4 />
                          </div>
                        )}
                      </>
                    )}
                  </>
                ),
              },
            ]}
            className="aspect-[2/1.2] "
          />
        </div>
      </div>

      {/* ----------testimonials------------ */}
      <motion.div>
        <Testimonials />
      </motion.div>
    </div>
  );
};

export default Home;
