import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
const ContactUs = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
