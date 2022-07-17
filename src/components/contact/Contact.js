import React from 'react';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { SiMessenger, SiZalo } from "react-icons/si";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ye5hisp', 'template_mqgrljy', form.current, 'wSv18X9r2aOuIZedx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
              <article className='contact__option'> 
                  <MdOutlineEmail className='contact__option-icon'/>
                  <h4>Email</h4>
                  <h5>hung10m@gmail.com</h5>
                  <a href="mailto:hung10m@gmail.com" target="_blank">Send a message</a>
              </article>
              <article className='contact__option'> 
                  <SiMessenger className='contact__option-icon' />
                  <h4>Message</h4>
                  <h5>Do Hung</h5>
                  <a href="https://m.me/hung.t.do.3" target="_blank">Send a message</a>
              </article>
              <article className='contact__option'> 
                  <SiZalo className='contact__option-icon' />
                  <h4>Zalo</h4>
                  <h5>+84 977 98 7374</h5>
                  <a href="https://zalo.me/84977987374" target="_blank">Send a message</a>
              </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text"  name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required  />
            <textarea name='message' rows="7" placeholder='Your Message' ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact