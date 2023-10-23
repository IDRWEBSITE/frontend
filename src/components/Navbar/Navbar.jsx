 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/IDR Black Logo 2.png";
import "./module.navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [active , setActive] = useState('Explore');
  const [toggle , setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to="/" className="">
          <img src={logo} alt="" className="logo-img" />
        </Link>
      </div>
      <div className="menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </button>
        <div className={`links ${menuOpen ? "open" : ""}`}>
          <Link to="/">Explore</Link>
          <Link to="/products">Products</Link>
          <Link to="/about-us">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from 'react'
// import Button from './Button';
// import {BiMenuAltLeft} from 'react-icons/bi'
// const Navbar = () => {
//   let Links =[
//     {name:"HOME",link:"/"},
//     {name:"SERVICE",link:"/"},
//     {name:"ABOUT",link:"/"},
//     {name:"BLOG'S",link:"/"},
//     {name:"CONTACT",link:"/"},
//   ];
//   let [open,setOpen]=useState(false);
// return (
//   <div className='shadow-md w-full fixed top-0 left-0'>
//     <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//     <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
//     text-gray-800'>
//       <span className='text-3xl text-indigo-600 mr-1 pt-2'>
//       <BiMenuAltLeft />
//       </span>
//       Designer
//     </div>
    
//     <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//     <ion-icon name={open ? 'close':'menu'}></ion-icon>
//     </div>

//     <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//       {
//         Links.map((link)=>(
//           <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//             <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//           </li>
//         ))
//       }
//       <Button>
//         Get Started
//       </Button>
//     </ul>
//     </div>
//   </div>
// )

// }

// export default Navbar;
