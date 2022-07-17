import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>1+ Year working</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Project</h5>
                <small>10+ Completed</small>
              </article>
          </div>
          <p>
          Versatile and proactive in teamwork with an adaptive mindset. 
          Eager to learn and explore, likes to help translate concepts and ideas into reality.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About