import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs,AboutUs,ExplorePage,Gallery,ProductsPage,HomePage } from './routes';
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
    <ParallaxProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
