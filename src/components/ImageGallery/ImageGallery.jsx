import React from 'react';
import './module.gallery.css';
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';
import Img4 from '../../assets/img4.png';
import Img5 from '../../assets/img5.png';
import Img6 from '../../assets/img6.png';
import Img7 from '../../assets/img7.png';
import Img8 from '../../assets/img8.png';
import Img9 from '../../assets/img9.png';
import Img10 from '../../assets/image 7.jpg';
import BG2 from '../../assets/BG2.png'

const ImageGallery = () => {

  let data = [
    {
        id: 1,
        imgSrc: Img1,
    },
    {
        id: 2,
        imgSrc: Img2,
    },
    {
        id: 3,
        imgSrc: Img3,
    },
    {
        id: 4,
        imgSrc: Img4,
    },
    {
        id: 5,
        imgSrc: Img5,
    },
    {
        id: 6,
        imgSrc: Img6,
    },
    {
        id: 7,
        imgSrc: Img7,
    },
    {
        id: 8,
        imgSrc: Img8,
    },
    {
        id: 9,
        imgSrc: Img9,
    },
    {
        id: 10,
        imgSrc: Img10,
    },

  ]

  return (
    <div className='gallery-wrapper'>
      <h1 className='heading5'>Gallery</h1>
      <p className='subtext'> Our memorable moments</p>
      <div className="logo-banner">
        <div className="banner-img">
          <img src={BG2} alt="banner-icon" />
        </div>
        <div className="banner-img">
          <img src={BG2} alt="banner-icon" />
        </div>
        <div className="banner-img">
          <img src={BG2} alt="banner-icon" />
        </div>
        <div className="banner-img">
          <img src={BG2} alt="banner-icon" />
        </div>
        <div className="banner-img">
          <img src={BG2} alt="banner-icon" />
        </div>
        <div className="banner-img">
          <img src={BG2} alt="banner-icon" />
        </div>
        <div className="banner-img">
          <img src={BG2} alt="banner-icon" />
        </div>
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} alt='image1' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
// import React from 'react'

// const ImageGallery = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ImageGallery
