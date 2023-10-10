import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProductComponent from '../components/Products/productsComponent';
const ProductsPage = () => {
  return (
    <div className='bg-black w-full'>
      <Navbar />
      <ProductComponent />
      <Footer />
    </div>
  )
}

export default ProductsPage
