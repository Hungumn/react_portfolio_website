import React from 'react'
import './portfolio.css';
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data =[
  {
    id:1,
    image:IMG1,
    title:'PASCAL IMITATION JEWELRY',
    content:'Commercial website selling jewelry products. Website structure includes admin page, product display page, product comparison page, etc.',
    github:'https://github.com/Hungumn/Aptech-India-Project',
    demo:'',
  },
  {
    id:2,
    image:IMG2,
    title:'WEATHER API WITH NODEJS',
    content:'Create APIs that allow users to view information on temperature, wind speed, cloud coverage, etc. of any city through the website weatherstack.com',
    github:'https://github.com/Hungumn/NodeJs-Weather-API',
    demo:'',
  },
  {
    id:3,
    image:IMG3,
    title:'REACTJS APP TODO',
    content:'Create single app with ReactJs, CRUD To do List',
    github:'https://github.com/Hungumn/react_appTodo_gh',
    demo:'https://hungumn.github.io/react_appTodo_gh/',
  },
  {
    id:4,
    image:IMG4,
    title:'REACTJS GAME BIG OR SMALL',
    content:'Create small game with React and Redux',
    github:'https://github.com/Hungumn/react_diceGame_gh',
    demo:'https://hungumn.github.io/react_diceGame_gh/',
  },
  {
    id:5,
    image:IMG5,
    title:'REACTJS  PORTFOLIO WEBSITE',
    content:'Create a Portfolio Website',
    github:'https://github.com/Hungumn/react_portfolio_website',
    demo:'https://hungumn.github.io/react_portfolio_website/',
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {data.map((item,index) => {
        return (
          <article className='portfolio__item' key={index}>
            <div className='portfolio__item-image'>
              <img src={item.image} alt={item.image} />
            </div>
            <h3>{item.title}</h3>
            <span>{item.content}</span>
            <div className='portfolio__item-cta'>
              <a href={item.github} className="btn">Github</a>
              <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        )
       })}
      </div>
    </section>
  )
}

export default Portfolio