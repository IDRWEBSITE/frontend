import React from "react";
import Navbar from "../components/Navbar-2/NavBar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
