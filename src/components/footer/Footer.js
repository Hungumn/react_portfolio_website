import React from 'react'
import './footer.css';
import { BsFacebook,BsInstagram,BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Hungumn </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.facebook.com/hung.t.do.3"><BsFacebook /></a>
        <a href="https://www.instagram.com/hung.t.do.3/"> <BsInstagram/> </a>
        <a href="https://github.com/Hungumn"> <BsGithub/> </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;Hungumn Portfolio Website. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer