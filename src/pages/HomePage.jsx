import React from 'react'
import NavBar from '../components/Navbar-2/NavBar'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import BG from '../components/Doot/bg'
import KeyFeatures from '../components/KeyFeatures/KeyFeatures'
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <KeyFeatures/>
      <BG/>

    </div>
  );
};

export default HomePage;
