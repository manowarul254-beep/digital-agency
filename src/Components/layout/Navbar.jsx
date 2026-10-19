import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/solid.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
// const Navbar = () => {
//   return (
//     <div className="bg-[#f3f6ff] dark:bg-gray-900 dark:text-white">
//       <Container className="flex h-[72px] items-center justify-between">
//         <div className="flex items-center gap-12">
//           <div className="flex items-center gap-2">
//             <img src={logo} alt="Logo" className=" dark:invert" />
//           </div>
//           <ul className="flex items-center gap-8 text-gray-700 text-gray-900 dark:text-white">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/services">Services</Link>
//             </li>
//             <li>
//               <Link to="/portfolio">Portfolio</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="flex items-center gap-4">
//           <ThemeToggle />
//           <Link to="/contact">
//             <Button>Contact us</Button>
//           </Link>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react'
// import Container from '../ui/Container'
// import Button from '../ui/Button'
// import ThemeToggle from '../ui/ThemeToggle'
// import logo from '../../assets/solid.png'
// import { Link } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative bg-[#f3f6ff] dark:bg-gray-900 dark:text-white">
      <Container className="flex h-[72px] items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className=' dark:invert' />
          </div>
          <ul className="hidden md:flex items-center gap-8 text-gray-700 text-gray-900 dark:text-white">
             <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button>Contact us</Button>
          </div>
          <button
            className="md:hidden text-2xl text-gray-900 dark:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden absolute left-0 right-0 top-[72px] z-50 bg-[#f3f6ff] dark:bg-gray-900 shadow-lg">
          <Container>
            <ul className="flex flex-col gap-4 py-4 text-gray-900 dark:text-white">
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
              <li><Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
              <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
              <li><Button>Contact us</Button></li>
            </ul>
          </Container>
        </div>
      )}
    </div>
  )
}

export default Navbar
