import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
