import React from 'react'
import './module.home.css'
import Navbar from '../Navbar/Navbar'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
const Home = () => {
  
  return (
    <Parallax pages={1}>
      <div className='wrapper'>
      <ParallaxLayer>
          <Navbar />
          <div className="heading">
            <div className="top-heading">
              <h1>FLY HIGH</h1>
            </div>
            <div className="bottom-heading">
              <h1><span className='hollow-heading'>THROUGH</span> THE SKY</h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer>
            <div className="drone-home">

            </div>
        </ParallaxLayer>
        <ParallaxLayer>
        <div className="mountain-layer">
          </div></ParallaxLayer>
          
      </div>
    </Parallax>
  )
}

export default Home
