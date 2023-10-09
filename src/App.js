import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs,AboutUs,ExplorePage,Gallery,ProductsPage,HomePage } from './routes';

function App() {
  return (
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
  );
}

export default App;
