import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import Footer from '../components/Footer/Footer'
const Gallery = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <ImageGallery />
      <Footer />
    </div>
  )
}

export default Gallery
