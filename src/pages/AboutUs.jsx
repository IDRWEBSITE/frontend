import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import AboutComponent from '../components/AboutComponent/AboutComponent'
const AboutUs = () => {
  return (
    <div className="bg-black w-[100vw] h-[100vh]">
    <Navbar />
    <AboutComponent />
     <Footer />
    </div>
  )
}

export default AboutUs
