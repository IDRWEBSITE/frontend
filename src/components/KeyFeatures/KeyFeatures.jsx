import "./module.KeyFeatures.css";
import { useRef } from "react";
import { motion,useScroll,useTransform, useAnimation, useInView, delay, easeIn } from "framer-motion";
// import { useInView } from "react-intersection-observer";



const KeyFeatures = () => {
    
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref
    })


    const variants = {
        initial:{
            x:0,
            y:-100,
            opacity: 0,
        },
        animate:{
            x:0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren: 0.1,
            }
        }
    }
    const isInView = useInView(ref)
  return (
    <div className="parallax">
      <motion.div className="mountains-bg" ></motion.div> {/*initial={{scale:1}} animate={{scale:1.5}} transition={{delay:1.5 ,easeIn}}*/}
      <motion.div className="heading-5" initial={{y: -300, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1.5 ,easeIn}} >
        <h1>
          <span className="inner-title"> Key Features</span>
          <br />
          Doot Mk-1
        </h1>
      </motion.div>
      <motion.div className="drone-feature" initial={{y:1000, opacity: 0}} animate={{y:0, opacity:1}} transition={{delay:1.5, easeIn }}></motion.div>
      <motion.div className="top-right-feature" initial={{x:1000}} animate={{x:0}} transition={{delay:1.5, easeIn }} >
        <p className="top-right-feature-detail"> Maximum Speed :- 50 KM/H </p>
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
      </motion.div>
      <motion.div className="bottom-left-feature" initial={{x:-1000, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1.5, easeIn }}>
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
        <p className="bottom-left-feature-detail"> 30 Minutes flight time </p>
      </motion.div>
      <div className="top-left-feature" initial={{x:-1000, opacity:0}} animate={{x:0, opacity:1 }} transition={{delay:2.5, easeIn, duration:3 }}>
        <p className="top-left-feature-detail"> High-Resolution Camera </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="299"
          height="78"
          viewBox="0 0 299 78"
          fill="none"
        >
          <path
            d="M293.333 75C293.333 73.5272 294.527 72.3333 296 72.3333C297.473 72.3333 298.667 73.5272 298.667 75C298.667 76.4728 297.473 77.6667 296 77.6667C294.527 77.6667 293.333 76.4728 293.333 75ZM201.818 1V0.5H201.991L202.127 0.606842L201.818 1ZM295.691 75.3932L201.509 1.39316L202.127 0.606842L296.309 74.6068L295.691 75.3932ZM201.818 1.5H0V0.5H201.818V1.5Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="bottom-right-feature" initial={{x:1000, opacity: 0}} animate={{x:0, opacity: 1}} transition={{delay:2.5, easeIn ,duration:3}} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="299"
          height="78"
          viewBox="0 0 299 78"
          fill="none"
        >
          <path
            d="M5.66669 2C5.66669 3.4728 4.47278 4.6667 3 4.6667C1.52725 4.6667 0.333344 3.4728 0.333344 2C0.333344 0.5272 1.52725 -0.6667 3 -0.6667C4.47278 -0.6667 5.66669 0.5272 5.66669 2ZM97.1818 76V76.5H97.0089L96.8729 76.3932L97.1818 76ZM3.30893 2.6068L97.4907 76.6068L96.8729 77.3932L2.6911 3.3932L3.30893 2.6068ZM97.1818 76.5H299V77.5H97.1818V76.5Z"
            fill="white"
          />
        </svg>
        <p className="bottom-right-feature-detail"> High-Resolution Camera </p>
      </div>
    </div>
  );
};

export default KeyFeatures;
