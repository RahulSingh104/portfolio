// import React from 'react';
// import './navbar.css';
// import logo from '../../assets/logo.png';
// import contactImg from '../../assets/contact.png';
// import {Link} from 'react-scroll';

// const Navbar = () => {
//   return (
//       <nav className="navbar">
//         <img src={logo} alt= "logo"
//         className='logo'/>
//         <div className="desktopMenu">
//           <Link   activeClass='active' to ='intro' spy={true} smooth ={true} offset ={-100} duration = {500}
// className="desktopMenuListItem">Home</Link>
//           <Link className="desktopMenuListItem">About</Link>
//           <Link className="desktopMenuListItem">Portfolio</Link>
//           <Link className="desktopMenuListItem">experience</Link>
//         </div>
//         <button className="desktopMenuBtn">
//             <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me 
//         </button>
//       </nav>
//   )
// }

// export default Navbar

import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu,setShowMenu] = useState (false);
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <img src={logo} alt="Company Logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' to="intro" spy={true} smooth duration={500} className="desktopMenuListItem" aria-label="Navigate to Home">Home</Link>
        <Link  activeClass='active' to="skills" spy ={true} smooth duration={500} className="desktopMenuListItem" aria-label="Navigate to About">About</Link>
        <Link activeClass='active' to="works"  spy ={true} smooth duration={500} className="desktopMenuListItem" aria-label="Navigate to Portfolio">Portfolio</Link>
        <Link activeClass='active' to="experience"  spy ={true} smooth duration={500} className="desktopMenuListItem" aria-label="Navigate to Clients">experience</Link>
      </div>
      <button className="desktopMenuBtn" 
      onClick={() => {
        document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
      }}
      aria-label="Contact Me">
        <img src={contactImg} alt="Contact Icon" className="desktopMenuImg" /> Contact Me
      </button>

      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to="intro" spy={true} smooth duration={500} className="listItem" onClick={()=>setShowMenu(false)} aria-label="Navigate to Home">Home</Link>
        <Link  activeClass='active' to="skills" spy ={true} smooth duration={500} className="listItem" onClick={()=>setShowMenu(false)} aria-label="Navigate to About">About</Link>
        <Link activeClass='active' to="works"  spy ={true} smooth duration={500} className="listItem" onClick={()=>setShowMenu(false)} aria-label="Navigate to Portfolio">Portfolio</Link>
        <Link activeClass='active' to="experience"  spy ={true} smooth duration={500} className="listItem" onClick={()=>setShowMenu(false)} aria-label="Navigate to Clients">experience</Link>
        <Link activeClass='active' to="experience"  spy ={true} smooth duration={500} className="listItem" onClick={()=>setShowMenu(false)} aria-label="Navigate to Clients">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

