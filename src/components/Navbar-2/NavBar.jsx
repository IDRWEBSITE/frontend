import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/IDR Black Logo 2.png";
import "./module.navBar.css"; // Import your CSS file for styling

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navBar ${menuOpen ? "open" : ""}`}>
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

export default NavBar;
// import React, { useState } from "react";
// // import { close, logo, menu } from "../assets";

// export const navLinks = [
//   {
//     id: "home",
//     title: "Home",
//   },
//   {
//     id: "features",
//     title: "Features",
//   },
//   {
//     id: "product",
//     title: "Product",
//   },
//   {
//     id: "clients",
//     title: "Clients",
//   },
// ];

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//       {/* Logo */}
//       <h1 className="text-3xl text-white">Logo</h1>
      
//       {/* Desktop Navigation */}
//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${
//               active === nav.title ? "text-white" : "text-dimWhite"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//             onClick={() => setActive(nav.title)}
//           >
//             <a href={`#${nav.id}`}>{nav.title}</a>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation */}
//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           // src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         {/* Sidebar */}
//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.title ? "text-white" : "text-dimWhite"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// // 